"use client";

import { useState, useTransition } from "react";
import { createTaskAction, type StudentOption } from "@/app/actions/tasks";

// ─── Curriculum options for module selector ────────────────────────────────

type LessonOpt = { id: string; label: string };
type ModuleOpt = { id: string; label: string; lessons: LessonOpt[] };
type MatiereOpt = { matiere: string; modules: ModuleOpt[] };

const CURRICULUM: MatiereOpt[] = [
  {
    matiere: "Maths",
    modules: [
      { id: "A1", label: "A1 — Nombres naturels", lessons: [
        { id: "A1.1", label: "A1.1 — Compter en français" },
        { id: "A1.2", label: "A1.2 — Valeur positionnelle" },
        { id: "A1.3", label: "A1.3 — Comparer les nombres" },
        { id: "A1.4", label: "A1.4 — Droite numérique" },
        { id: "A1.5", label: "A1.5 — Suites numériques" },
      ]},
      { id: "A2", label: "A2 — Addition et soustraction", lessons: [
        { id: "A2.1", label: "A2.1 — Addition" },
        { id: "A2.2", label: "A2.2 — Soustraction" },
        { id: "A2.3", label: "A2.3 — Estimation et arrondi" },
        { id: "A2.4", label: "A2.4 — Problèmes" },
      ]},
      { id: "A3", label: "A3 — Multiplication et division", lessons: [
        { id: "A3.1", label: "A3.1 — Multiplication" },
        { id: "A3.2", label: "A3.2 — Multiplication en colonnes" },
        { id: "A3.3", label: "A3.3 — Division" },
        { id: "A3.4", label: "A3.4 — Division en colonnes" },
        { id: "A3.5", label: "A3.5 — Tables" },
        { id: "A3.6", label: "A3.6 — Problèmes" },
      ]},
      { id: "A4", label: "A4 — Fractions", lessons: [
        { id: "A4.1", label: "A4.1 — Introduction aux fractions" },
        { id: "A4.2", label: "A4.2 — Fractions équivalentes" },
        { id: "A4.3", label: "A4.3 — Comparer les fractions" },
        { id: "A4.4", label: "A4.4 — Additionner les fractions" },
        { id: "A4.5", label: "A4.5 — Soustraire les fractions" },
        { id: "A4.6", label: "A4.6 — Multiplier les fractions" },
        { id: "A4.7", label: "A4.7 — Diviser les fractions" },
      ]},
      { id: "A5", label: "A5 — Décimaux", lessons: [
        { id: "A5.1", label: "A5.1 — Nombres décimaux" },
        { id: "A5.2", label: "A5.2 — Additionner les décimaux" },
        { id: "A5.3", label: "A5.3 — Soustraire les décimaux" },
        { id: "A5.4", label: "A5.4 — Multiplier les décimaux" },
        { id: "A5.5", label: "A5.5 — Diviser les décimaux" },
        { id: "A5.6", label: "A5.6 — Problèmes" },
      ]},
      { id: "A6", label: "A6 — Pourcentages et proportions", lessons: [
        { id: "A6.1", label: "A6.1 — Notion de pourcentage" },
        { id: "A6.2", label: "A6.2 — Pourcentage d'un nombre" },
        { id: "A6.3", label: "A6.3 — Augmentation et réduction" },
      ]},
      { id: "A7", label: "A7 — Nombres relatifs", lessons: [
        { id: "A7.1", label: "A7.1 — Les nombres relatifs" },
        { id: "A7.2", label: "A7.2 — Comparer" },
        { id: "A7.3", label: "A7.3 — Addition et soustraction" },
        { id: "A7.4", label: "A7.4 — Multiplication et division" },
      ]},
      { id: "A8", label: "A8 — Puissances et racines", lessons: [
        { id: "A8.1", label: "A8.1 — Notion et représentation" },
        { id: "A8.2", label: "A8.2 — Calcul de puissances" },
        { id: "A8.3", label: "A8.3 — Puissances de 10" },
        { id: "A8.4", label: "A8.4 — Racine carrée" },
        { id: "A8.5", label: "A8.5 — Priorité des opérations" },
      ]},
      { id: "G1", label: "G1 — Figures planes", lessons: [
        { id: "G1.1", label: "G1.1 — Reconnaître les figures" },
        { id: "G1.2", label: "G1.2 — Propriétés des figures" },
      ]},
      { id: "G2", label: "G2 — Conversions d'unités", lessons: [
        { id: "G2.1", label: "G2.1 — Longueur, aire et volume" },
        { id: "G2.2", label: "G2.2 — Capacité, masse et temps" },
      ]},
      { id: "G3", label: "G3 — Périmètres", lessons: [
        { id: "G3.1", label: "G3.1 — Carré" },
        { id: "G3.2", label: "G3.2 — Rectangle" },
        { id: "G3.3", label: "G3.3 — Triangle" },
        { id: "G3.4", label: "G3.4 — Polygones réguliers" },
        { id: "G3.5", label: "G3.5 — Cercle et π" },
      ]},
      { id: "G4", label: "G4 — Aires des figures planes", lessons: [
        { id: "G4.1", label: "G4.1 — Carré" },
        { id: "G4.2", label: "G4.2 — Rectangle" },
        { id: "G4.3", label: "G4.3 — Triangle" },
        { id: "G4.4", label: "G4.4 — Parallélogramme" },
        { id: "G4.5", label: "G4.5 — Trapèze" },
        { id: "G4.6", label: "G4.6 — Disque" },
        { id: "G4.7", label: "G4.7 — Losange" },
        { id: "G4.8", label: "G4.8 — Figures composées" },
      ]},
      { id: "G5", label: "G5 — Solides et volumes", lessons: [
        { id: "G5.1", label: "G5.1 — Reconnaître les solides" },
        { id: "G5.2", label: "G5.2 — Volume du cube" },
        { id: "G5.3", label: "G5.3 — Pavé droit" },
        { id: "G5.4", label: "G5.4 — Prisme et pyramide" },
        { id: "G5.5", label: "G5.5 — Volume du cylindre" },
        { id: "G5.6", label: "G5.6 — Cône et sphère" },
      ]},
    ],
  },
  {
    matiere: "Lecture",
    modules: [
      { id: "lecture-voyelles", label: "Voyelles", lessons: [
        { id: "A", label: "A" }, { id: "E", label: "E" }, { id: "I", label: "I" },
        { id: "O", label: "O" }, { id: "U", label: "U" }, { id: "Y", label: "Y" },
      ]},
      { id: "lecture-consonnes", label: "Consonnes", lessons: [
        { id: "B", label: "B" }, { id: "C", label: "C" }, { id: "D", label: "D" },
        { id: "F", label: "F" }, { id: "G", label: "G" }, { id: "H", label: "H" },
        { id: "J", label: "J" }, { id: "K", label: "K" }, { id: "L", label: "L" },
        { id: "M", label: "M" }, { id: "N", label: "N" }, { id: "P", label: "P" },
        { id: "Q", label: "Q" }, { id: "R", label: "R" }, { id: "S", label: "S" },
        { id: "T", label: "T" }, { id: "V", label: "V" }, { id: "W", label: "W" },
        { id: "X", label: "X" }, { id: "Z", label: "Z" },
      ]},
    ],
  },
  {
    matiere: "Français",
    modules: [
      { id: "V1", label: "V1 — L'identité", lessons: [
        { id: "V1.1", label: "V1.1 — Les nationalités" },
        { id: "V1.2", label: "V1.2 — Les professions" },
        { id: "V1.3", label: "V1.3 — La famille" },
        { id: "V1.4", label: "V1.4 — L'état civil" },
        { id: "V1.5", label: "V1.5 — La description physique" },
        { id: "V1.6", label: "V1.6 — La description morale" },
      ]},
      { id: "V2", label: "V2 — Le temps et les saisons", lessons: [
        { id: "V2.1", label: "V2.1 — Jours, mois et dates" },
        { id: "V2.2", label: "V2.2 — L'heure" },
        { id: "V2.3", label: "V2.3 — Les saisons" },
        { id: "V2.4", label: "V2.4 — La météo" },
      ]},
      { id: "V3", label: "V3 — Le sport et les loisirs", lessons: [
        { id: "V3.1", label: "V3.1 — Le sport" },
      ]},
      { id: "V4", label: "V4 — Le logement", lessons: [
        { id: "V4.1", label: "V4.1 — Les types de logement" },
        { id: "V4.2", label: "V4.2 — Les pièces de la maison" },
        { id: "V4.3", label: "V4.3 — Les pannes" },
        { id: "V4.4", label: "V4.4 — Les meubles" },
        { id: "V4.5", label: "V4.5 — Les appareils électroménagers" },
      ]},
      { id: "V5", label: "V5 — L'école", lessons: [
        { id: "V5.1", label: "V5.1 — Les matières scolaires" },
        { id: "V5.2", label: "V5.2 — Le matériel scolaire" },
        { id: "V5.3", label: "V5.3 — La structure de l'école" },
      ]},
      { id: "V6", label: "V6 — Les vêtements et la mode", lessons: [
        { id: "V6.1", label: "V6.1 — Les vêtements" },
        { id: "V6.2", label: "V6.2 — Les accessoires" },
        { id: "V6.3", label: "V6.3 — Les couleurs" },
        { id: "V6.4", label: "V6.4 — Les matières" },
      ]},
      { id: "V7", label: "V7 — L'alimentation", lessons: [
        { id: "V7.1", label: "V7.1 — Les fruits" },
        { id: "V7.2", label: "V7.2 — Les légumes" },
        { id: "V7.3", label: "V7.3 — Le restaurant" },
        { id: "V7.4", label: "V7.4 — La boulangerie" },
        { id: "V7.5", label: "V7.5 — La cuisine" },
        { id: "V7.6", label: "V7.6 — Les recettes" },
        { id: "V7.7", label: "V7.7 — Les quantités" },
      ]},
      { id: "V8", label: "V8 — Le corps et la santé", lessons: [
        { id: "V8.1", label: "V8.1 — Le corps" },
        { id: "V8.2", label: "V8.2 — Les maladies" },
        { id: "V8.3", label: "V8.3 — Les médecins" },
        { id: "V8.4", label: "V8.4 — La pharmacie" },
      ]},
      { id: "V9", label: "V9 — La ville et les transports", lessons: [
        { id: "V9.1", label: "V9.1 — La ville" },
        { id: "V9.2", label: "V9.2 — Le transport" },
        { id: "V9.3", label: "V9.3 — La direction" },
        { id: "V9.4", label: "V9.4 — L'espace culturel" },
        { id: "V9.5", label: "V9.5 — Le train" },
        { id: "V9.6", label: "V9.6 — L'aéroport" },
        { id: "V9.7", label: "V9.7 — L'hôtel" },
        { id: "V9.8", label: "V9.8 — Le paysage" },
      ]},
      { id: "R1", label: "R1 — Bases de la grammaire", lessons: [
        { id: "R1.1", label: "R1.1 — Les pronoms personnels sujets" },
        { id: "R1.2", label: "R1.2 — Les verbes être et avoir" },
        { id: "R1.3", label: "R1.3 — Les articles définis et indéfinis" },
        { id: "R1.4", label: "R1.4 — Le genre des noms et des adjectifs" },
        { id: "R1.5", label: "R1.5 — Les verbes en -er au présent" },
        { id: "R1.6", label: "R1.6 — Les phrases" },
        { id: "R1.7", label: "R1.7 — La négation" },
        { id: "R1.9", label: "R1.9 — C'est ou il est ?" },
      ]},
      { id: "R2", label: "Les verbes essentiels", lessons: [
        { id: "R2.1", label: "R2.1 — Les verbes de mouvement" },
        { id: "R2.2", label: "R2.2 — Les verbes pronominaux" },
        { id: "R2.3", label: "R2.3 — Les verbes modaux" },
        { id: "R2.4", label: "R2.4 — Verbes irréguliers" },
        { id: "R2.5", label: "R2.5 — Les verbes en -ir" },
      ]},
      { id: "RI", label: "L'interrogation", lessons: [
        { id: "R1.8",  label: "R1.8 — L'interrogation de base" },
        { id: "RX.12", label: "RX.12 — L'interrogation (questions fermées)" },
        { id: "RX.13", label: "RX.13 — Répondre aux questions fermées" },
        { id: "RI.4",  label: "RI.4 — Les mots interrogatifs" },
      ]},
      { id: "R3", label: "Les adjectifs", lessons: [
        { id: "R3.7", label: "R3.7 — Les adjectifs qualificatifs" },
        { id: "R3.4", label: "R3.4 — Les adjectifs démonstratifs" },
        { id: "R3.5", label: "R3.5 — Les adjectifs possessifs" },
        { id: "R3.1", label: "R3.1 — Les adjectifs partitifs" },
        { id: "R3.3", label: "R3.3 — Les prépositions de lieu" },
      ]},
      { id: "R4", label: "Le futur et le temps", lessons: [
        { id: "R4.1", label: "R4.1 — Le futur proche" },
        { id: "R4.2", label: "R4.2 — Les expressions de temps" },
        { id: "R4.3", label: "R4.3 — Les adverbes de fréquence" },
      ]},
      { id: "R5", label: "Le passé", lessons: [
        { id: "R5.1", label: "R5.1 — Passé récent et présent continu" },
        { id: "R5.2", label: "R5.2 — Passé composé avec avoir" },
        { id: "R5.3", label: "R5.3 — Passé composé avec être" },
        { id: "R5.4", label: "R5.4 — Négation au passé composé" },
        { id: "R5.5", label: "R5.5 — Les verbes à double auxiliaire" },
        { id: "R5.6", label: "R5.6 — Les verbes pronominaux au passé composé" },
        { id: "R5.7", label: "R5.7 — Les marqueurs chronologiques" },
      ]},
      { id: "R6", label: "Les autres temps", lessons: [
        { id: "R6.1", label: "R6.1 — Le conditionnel de politesse" },
        { id: "R6.2", label: "R6.2 — Le conditionnel" },
        { id: "R6.3", label: "R6.3 — L'impératif" },
        { id: "R6.4", label: "R6.4 — Le gérondif" },
        { id: "R6.5", label: "R6.5 — Le subjonctif" },
      ]},
      { id: "R7", label: "Le futur simple", lessons: [
        { id: "R7.1", label: "R7.1 — Les verbes réguliers" },
        { id: "R7.2", label: "R7.2 — Les verbes irréguliers" },
        { id: "R7.3", label: "R7.3 — Futur simple ou futur proche ?" },
        { id: "R7.4", label: "R7.4 — Les marqueurs chronologiques" },
        { id: "R7.5", label: "R7.5 — L'hypothèse sur le futur" },
      ]},
      { id: "R8", label: "La comparaison", lessons: [
        { id: "R8.1", label: "R8.1 — Le comparatif" },
        { id: "R8.2", label: "R8.2 — Bon ou bien, meilleur ou mieux ?" },
        { id: "R8.3", label: "R8.3 — Le superlatif" },
        { id: "R8.4", label: "R8.4 — La négation (2/2)" },
      ]},

      { id: "RX", label: "À organiser", lessons: [
        { id: "RX.7", label: "RX.7 — Le comparatif et le superlatif" },
        { id: "RX.8", label: "RX.8 — Savoir ou connaître ?" },
        { id: "RX.9", label: "RX.9 — Les verbes en -er (révision)" },


        { id: "RX.17", label: "RX.17 — Les adjectifs (généralités)" },
        { id: "RX.18", label: "RX.18 — Les adjectifs (cas particuliers)" },
        { id: "RX.19", label: "RX.19 — Les pronoms relatifs qui et que" },
        { id: "RX.20", label: "RX.20 — La négation (ne…plus, ne…que)" },
        { id: "RX.22", label: "RX.22 — Les pronoms COD et COI" },
        { id: "RX.23", label: "RX.23 — Les pronoms Y et EN" },
      ]},
    ],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export function TasksPanel({ students }: { students: StudentOption[] }) {
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [matiere, setMatiere] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [studentSearch, setStudentSearch] = useState("");
  const [viewMode, setViewMode] = useState<"classes" | "eleves">("classes");
  const [expandedClasses, setExpandedClasses] = useState<Set<string>>(new Set());
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Derived curriculum options
  const matiereOpt = CURRICULUM.find((m) => m.matiere === matiere);
  const moduleOpt = matiereOpt?.modules.find((m) => m.id === moduleId);
  const moduleRef = moduleOpt ? `${matiere} — ${moduleOpt.label}` : null;
  const lessonRef = moduleOpt?.lessons.find((l) => l.id === lessonId)?.label ?? null;

  // Filtered + grouped students
  const q = studentSearch.toLowerCase();
  const filtered = q
    ? students.filter((s) =>
        [s.prenom, s.nom, s.classe].filter(Boolean).join(" ").toLowerCase().includes(q)
      )
    : students;

  const byClasse = filtered.reduce<Record<string, StudentOption[]>>((acc, s) => {
    const key = s.classe ?? "—";
    if (/ancien/i.test(key)) return acc;
    (acc[key] ??= []).push(s);
    return acc;
  }, {});
  const classes = Object.keys(byClasse).sort();

  function toggleExpandClasse(classe: string) {
    setExpandedClasses((prev) => {
      const next = new Set(prev);
      if (next.has(classe)) next.delete(classe); else next.add(classe);
      return next;
    });
  }

  function toggleStudent(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  function toggleClasse(classe: string) {
    const ids = (byClasse[classe] ?? []).map((s) => s.id);
    const allSelected = ids.every((id) => selectedIds.has(id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) ids.forEach((id) => next.delete(id));
      else ids.forEach((id) => next.add(id));
      return next;
    });
  }

  function toggleAll() {
    if (selectedIds.size === students.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(students.map((s) => s.id)));
  }

  function handleMatiereChange(v: string) {
    setMatiere(v);
    setModuleId("");
    setLessonId("");
  }

  function handleModuleChange(v: string) {
    setModuleId(v);
    setLessonId("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);
    startTransition(async () => {
      const res = await createTaskAction(
        title, description, dueDate || null,
        Array.from(selectedIds),
        moduleRef, lessonRef,
      );
      if (!res.ok) { setFormError(res.reason ?? "Erreur inconnue."); return; }
      setTitle(""); setDescription(""); setDueDate("");
      setMatiere(""); setModuleId(""); setLessonId("");
      setSelectedIds(new Set());
      setFormSuccess(true);
      setTimeout(() => setFormSuccess(false), 3000);
    });
  }

  const inputCls = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:border-[var(--color-theme)] focus:ring-2 focus:ring-[var(--color-theme)]/15 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";
  const selectCls = `${inputCls} cursor-pointer`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">

      {/* Title */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Titre *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex : Réviser les tables de multiplication"
          required
          className={inputCls}
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Description (optionnel)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          placeholder="Précisions supplémentaires…"
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Module selector */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Leçon à affecter *</label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <select value={matiere} onChange={(e) => handleMatiereChange(e.target.value)} className={selectCls}>
            <option value="">— Matière —</option>
            {CURRICULUM.map((m) => <option key={m.matiere} value={m.matiere}>{m.matiere}</option>)}
          </select>
          <select value={moduleId} onChange={(e) => handleModuleChange(e.target.value)} disabled={!matiere} className={selectCls}>
            <option value="">— Module —</option>
            {(matiereOpt?.modules ?? []).map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
          <select value={lessonId} onChange={(e) => setLessonId(e.target.value)} disabled={!moduleId} className={selectCls}>
            <option value="">— Leçon —</option>
            {(moduleOpt?.lessons ?? []).map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
          </select>
        </div>
        {moduleRef && (
          <p className="text-xs text-[var(--color-theme)] dark:text-[var(--color-theme-muted)]">
            ↳ {moduleRef}{lessonRef ? ` — ${lessonRef}` : ""}
          </p>
        )}
      </div>

      {/* Due date */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Date limite (optionnel)</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={inputCls} />
      </div>

      {/* Student selector */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Élèves *{" "}
            <span className="font-normal text-zinc-400">({selectedIds.size} sélectionné{selectedIds.size !== 1 ? "s" : ""})</span>
          </label>
          {students.length > 0 && (
            <button type="button" onClick={toggleAll} className="text-xs text-[var(--color-theme)] hover:underline">
              {selectedIds.size === students.length ? "Tout désélectionner" : "Tout sélectionner"}
            </button>
          )}
        </div>
        <div className="mb-2 flex gap-1.5">
          <button type="button" onClick={() => setViewMode("classes")}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${viewMode === "classes" ? "bg-[var(--color-theme)] text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"}`}>
            Par classes
          </button>
          <button type="button" onClick={() => setViewMode("eleves")}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${viewMode === "eleves" ? "bg-[var(--color-theme)] text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"}`}>
            Par élèves
          </button>
        </div>

        {students.length === 0 ? (
          <p className="text-xs italic text-zinc-400">Aucun élève enregistré.</p>
        ) : (
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-700">
            {/* Search */}
            <div className="flex items-center gap-2 border-b border-zinc-100 px-3 py-2 dark:border-zinc-800">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400" aria-hidden>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder="Rechercher un élève…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
              {studentSearch && (
                <button type="button" onClick={() => setStudentSearch("")} className="text-zinc-400 hover:text-zinc-600">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Student list */}
            <div className="max-h-56 overflow-y-auto">
              {viewMode === "eleves" ? (
                filtered.length === 0 ? (
                  <p className="px-4 py-3 text-xs italic text-zinc-400">Aucun résultat.</p>
                ) : [...filtered].sort((a, b) => {
                  const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
                  const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
                  return na.localeCompare(nb);
                }).map((s) => {
                  const checked = selectedIds.has(s.id);
                  const name = [s.prenom, s.nom].filter(Boolean).join(" ") || s.id.slice(0, 8);
                  return (
                    <label key={s.id} className="flex cursor-pointer items-center gap-2.5 border-b border-zinc-100 px-4 py-2 text-sm text-zinc-700 hover:bg-[var(--color-theme-light)] last:border-0 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-[var(--color-theme)]/10">
                      <Checkbox checked={checked} />
                      <input type="checkbox" checked={checked} onChange={() => toggleStudent(s.id)} className="sr-only" />
                      <span className="flex-1">{name}</span>
                      {s.classe && <span className="text-xs text-zinc-400">{s.classe}</span>}
                    </label>
                  );
                })
              ) : classes.length === 0 ? (
                <p className="px-4 py-3 text-xs italic text-zinc-400">Aucun résultat.</p>
              ) : classes.map((classe) => {
                const classeStudents = byClasse[classe] ?? [];
                const allInClasse = classeStudents.every((s) => selectedIds.has(s.id));
                const isExpanded = expandedClasses.has(classe);
                return (
                  <div key={classe}>
                    <div className="flex w-full items-center border-b border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                      <button
                        type="button"
                        onClick={() => toggleClasse(classe)}
                        className="flex items-center gap-2 py-1.5 pl-3 pr-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        title="Sélectionner / désélectionner la classe"
                      >
                        <Checkbox checked={allInClasse} />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleExpandClasse(classe)}
                        className="flex flex-1 items-center gap-1.5 py-1.5 pr-3 text-left text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      >
                        {classe}
                        <span className="ml-auto text-[10px] text-zinc-400">({classeStudents.length})</span>
                        <svg
                          className={`h-3 w-3 shrink-0 text-zinc-400 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                    {isExpanded && classeStudents.map((s) => {
                      const checked = selectedIds.has(s.id);
                      const name = [s.prenom, s.nom].filter(Boolean).join(" ") || s.id.slice(0, 8);
                      return (
                        <label
                          key={s.id}
                          className="flex cursor-pointer items-center gap-2.5 border-b border-zinc-100 px-4 py-2 text-sm text-zinc-700 hover:bg-[var(--color-theme-light)] last:border-0 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-[var(--color-theme)]/10"
                        >
                          <Checkbox checked={checked} />
                          <input type="checkbox" checked={checked} onChange={() => toggleStudent(s.id)} className="sr-only" />
                          {name}
                        </label>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {formError && <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>}
      {formSuccess && <p className="text-sm text-[var(--color-theme)] dark:text-[var(--color-theme-muted)]">Tâche créée et assignée !</p>}

      <button
        type="submit"
        disabled={isPending || !title.trim() || !lessonId || selectedIds.size === 0}
        className="w-full rounded-xl bg-[var(--color-theme)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? "Envoi…" : "Assigner la tâche"}
      </button>
    </form>
  );
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border text-[10px] leading-none ${checked ? "border-[var(--color-theme)] bg-[var(--color-theme)] text-white" : "border-zinc-300 dark:border-zinc-600"}`}>
      {checked ? "✓" : ""}
    </span>
  );
}
