import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text?.trim() || text.trim().length < 4) {
      return NextResponse.json({ matches: [] });
    }

    const body = new URLSearchParams({
      text: text.trim(),
      language: "fr",
      enabledOnly: "false",
    });

    const res = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      signal: AbortSignal.timeout(6000),
    });

    if (!res.ok) return NextResponse.json({ matches: [] });
    const data = await res.json();
    return NextResponse.json({ matches: data.matches ?? [] });
  } catch {
    return NextResponse.json({ matches: [] });
  }
}
