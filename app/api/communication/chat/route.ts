import { NextRequest, NextResponse } from "next/server";

type ClientMessage = {
  role: "assistant" | "user";
  text: string;
};

const FALLBACK_REPLIES = [
  "Très bien. Pouvez-vous ajouter une information ?",
  "D'accord. Répondez avec une phrase complète, s'il vous plaît.",
  "C'est compréhensible. Pouvez-vous préciser un peu plus ?",
  "Merci. Continuez avec une autre phrase simple.",
];

function localReply(message: string) {
  const clean = message.trim();
  const reply = clean.endsWith("?")
    ? "Bonne question. Essayez de répondre aussi avec vos mots."
    : FALLBACK_REPLIES[Math.min(clean.length % FALLBACK_REPLIES.length, FALLBACK_REPLIES.length - 1)]!;
  return {
    reply,
    correction: clean.length < 8 ? "Essayez de faire une phrase plus complète." : "",
    suggestion: clean.length < 8 ? "Je m'appelle Sara et j'habite à Lausanne." : "",
  };
}

function extractOutputText(data: unknown): string {
  if (!data || typeof data !== "object") return "";
  const maybe = data as { output_text?: unknown; output?: unknown };
  if (typeof maybe.output_text === "string") return maybe.output_text;
  if (!Array.isArray(maybe.output)) return "";
  return maybe.output
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const content = (item as { content?: unknown }).content;
      if (!Array.isArray(content)) return [];
      return content.map((part) => {
        if (!part || typeof part !== "object") return "";
        const text = (part as { text?: unknown }).text;
        return typeof text === "string" ? text : "";
      });
    })
    .join("\n")
    .trim();
}

function parseJsonReply(raw: string, fallbackMessage: string) {
  try {
    const parsed = JSON.parse(raw) as { reply?: string; correction?: string; suggestion?: string };
    return {
      reply: parsed.reply || localReply(fallbackMessage).reply,
      correction: parsed.correction || "",
      suggestion: parsed.suggestion || "",
    };
  } catch {
    return { reply: raw || localReply(fallbackMessage).reply, correction: "", suggestion: "" };
  }
}

export async function POST(req: NextRequest) {
  try {
    const { message, scenario, history } = (await req.json()) as {
      message?: string;
      scenario?: string;
      history?: ClientMessage[];
    };

    const userMessage = message?.trim() ?? "";
    if (!userMessage) return NextResponse.json(localReply(""));

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return NextResponse.json(localReply(userMessage));

    const conversation = (history ?? [])
      .slice(-8)
      .map((m) => `${m.role === "user" ? "Élève" : "Assistant"}: ${m.text}`)
      .join("\n");

    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_COMMUNICATION_MODEL || "gpt-4.1-mini",
        instructions:
          "Tu es un partenaire de conversation pour un adulte qui apprend le français. Réponds uniquement en français de France, niveau A1-A2, avec une phrase courte. Corrige brièvement si nécessaire. Retourne uniquement un JSON valide avec les clés reply, correction, suggestion.",
        input: [
          scenario ? `Scénario: ${scenario}` : "Scénario: conversation simple du quotidien.",
          conversation ? `Historique:\n${conversation}` : "",
          `Dernière phrase de l'élève: ${userMessage}`,
        ]
          .filter(Boolean)
          .join("\n\n"),
        text: {
          format: {
            type: "json_object",
          },
        },
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!res.ok) return NextResponse.json(localReply(userMessage));
    const data = await res.json();
    const raw = extractOutputText(data);
    return NextResponse.json(parseJsonReply(raw, userMessage));
  } catch {
    return NextResponse.json(localReply(""));
  }
}
