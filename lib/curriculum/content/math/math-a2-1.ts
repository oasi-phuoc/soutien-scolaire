import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A2_1_LESSON: MathSubmoduleLesson = {
  submoduleId: "A2-1",
  submoduleCode: "A2.1",
  theory: {
    title: {
      fr: "Addition",
      en: "Addition",
      ar: "الجمع",
      fa: "جمع",
      ti: "ድምር",
      uk: "Додавання",
      pt: "Adição",
    },
    blocks: [
      { type: "plain", fr: "L'addition permet de réunir plusieurs quantités ensemble." },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Le signe de l'addition est le signe « + » « plus »",
          "Les nombres à additionner sont les termes.",
          "Le résultat de l'addition est la somme.",
        ],
      },
      {
        type: "table",
        headersFr: ["5", "+", "8", "=", "13"],
        accentHeader: true,
        rows: [["terme", "plus", "terme", "égale", "somme"]],
      },
      { type: "heading", fr: "Propriétés de l'addition", black: true },
      { type: "highlight", fr: "Commutativité" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["L'ordre des termes ne change pas la somme."],
      },
      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox="0 0 170 88" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-comm1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="30" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">57</text><text x="85" y="27" text-anchor="middle" font-size="17" font-weight="bold" fill="#374151">+</text><text x="140" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">49</text><line x1="42" y1="35" x2="79" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm1)"/><line x1="128" y1="35" x2="91" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm1)"/><text x="85" y="83" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">106</text></svg>`
          },
          {
            markup: `<svg viewBox="0 0 170 88" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-comm2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="30" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">49</text><text x="85" y="27" text-anchor="middle" font-size="17" font-weight="bold" fill="#374151">+</text><text x="140" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">57</text><line x1="42" y1="35" x2="79" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm2)"/><line x1="128" y1="35" x2="91" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm2)"/><text x="85" y="83" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">106</text></svg>`
          },
        ],
      },
      { type: "highlight", fr: "Associativité" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["On peut additionner plus de deux termes dans l'ordre voulu."],
      },
      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox="0 0 190 128" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-assoc1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="18" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">15</text><text x="50" y="22" text-anchor="middle" font-size="15" font-weight="bold" fill="#374151">+</text><text x="80" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">37</text><text x="112" y="22" text-anchor="middle" font-size="15" font-weight="bold" fill="#374151">+</text><text x="158" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">22</text><line x1="25" y1="28" x2="51" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><line x1="77" y1="28" x2="63" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><text x="56" y="72" text-anchor="middle" font-size="18" font-weight="bold" fill="#111827">52</text><text x="92" y="72" text-anchor="middle" font-size="15" font-weight="bold" fill="#374151">+</text><text x="128" y="72" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">22</text><line x1="64" y1="78" x2="87" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><line x1="120" y1="78" x2="97" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><text x="92" y="122" text-anchor="middle" font-size="18" font-weight="bold" fill="#111827">74</text></svg>`
          },
          {
            markup: `<svg viewBox="0 0 190 128" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-assoc2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="18" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">15</text><text x="50" y="22" text-anchor="middle" font-size="15" font-weight="bold" fill="#374151">+</text><text x="80" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">37</text><text x="112" y="22" text-anchor="middle" font-size="15" font-weight="bold" fill="#374151">+</text><text x="158" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">22</text><line x1="88" y1="28" x2="114" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><line x1="151" y1="28" x2="128" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><text x="22" y="72" text-anchor="middle" font-size="18" font-weight="bold" fill="#60a5fa">15</text><text x="62" y="72" text-anchor="middle" font-size="15" font-weight="bold" fill="#374151">+</text><text x="120" y="72" text-anchor="middle" font-size="18" font-weight="bold" fill="#111827">59</text><line x1="30" y1="78" x2="83" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><line x1="112" y1="78" x2="99" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><text x="92" y="122" text-anchor="middle" font-size="18" font-weight="bold" fill="#111827">74</text></svg>`
          },
        ],
      },
      { type: "heading", fr: "Addition en colonnes", black: true },
      { type: "plain", fr: "Voici les étapes pour additionner des nombres en colonnes." },
      { type: "plain", fr: "Écrivez les nombres en alignant les unités, les dizaines, les centaines." },
      {
        type: "svg",
        noFrame: false,
        markup: `<svg viewBox="0 0 248 148" width="100%" xmlns="http://www.w3.org/2000/svg">...</svg>`,
        captionFr: "579 + 24 : disposition en colonnes",
      },
    ],
    paragraphs: {
      fr: [
        "L'addition permet de réunir plusieurs quantités. Le signe de l'addition est « + » (plus). Les nombres à additionner sont les termes. Le résultat de l'addition est la somme.",
        "Propriété 1 — Commutativité : si l'on change l'ordre des termes d'une addition, la somme ne change pas. Exemple : 57 + 49 = 49 + 57 = 106.",
        "Propriété 2 — Associativité : on peut additionner plus de deux termes dans l'ordre que l'on veut. Exemple : 15 + 37 + 22 = 74.",
        "Addition en colonnes : écrivez les nombres en alignant les unités, les dizaines, les centaines. Commencez par additionner les unités. Si la somme dépasse 9, retenez le chiffre des dizaines (retenue). Continuez avec les dizaines, puis les centaines.",
        "Exemple : 579 + 24 → unités : 9 + 4 = 13 (on pose 3, on retient 1) → dizaines : 1 + 7 + 2 = 10 (on pose 0, on retient 1) → centaines : 1 + 5 = 6 → résultat : 603.",
      ],
      en: [
        "Addition combines several quantities. The addition sign is « + » (plus). The numbers being added are called terms. The result is the sum.",
        "Property 1 — Commutativity: changing the order of the terms does not change the sum. Example: 57 + 49 = 49 + 57 = 106.",
        "Property 2 — Associativity: you can add more than two terms in any order. Example: 15 + 37 + 22 = 74.",
        "Column addition: write the numbers aligned by units, tens, hundreds. Start with the units. If the sum exceeds 9, carry the tens digit. Then do the tens, then the hundreds.",
        "Example: 579 + 24 → units: 9 + 4 = 13 (write 3, carry 1) → tens: 1 + 7 + 2 = 10 (write 0, carry 1) → hundreds: 1 + 5 = 6 → result: 603.",
      ],
      ar: [
        "الجمع يجمع عدة كميات معًا. علامة الجمع « + » (زائد). الأعداد المجموعة تسمى الحدود. الناتج يسمى المجموع.",
        "الخاصية 1 — الإبدال: تغيير ترتيب الحدود لا يغير المجموع. مثال: 57 + 49 = 49 + 57 = 106.",
        "الخاصية 2 — التجميع: يمكن جمع أكثر من حدين بأي ترتيب. مثال: 15 + 37 + 22 = 74.",
        "الجمع في أعمدة: اكتب الأعداد محاذيًا الآحاد والعشرات والمئات. ابدأ بجمع الآحاد. إذا تجاوز المجموع 9، احمل رقم العشرات. ثم العشرات، ثم المئات.",
        "مثال: 579 + 24 → آحاد: 9 + 4 = 13 (اكتب 3 واحمل 1) → عشرات: 1 + 7 + 2 = 10 (اكتب 0 واحمل 1) → مئات: 1 + 5 = 6 → الناتج: 603.",
      ],
      fa: [
        "جمع چند مقدار را با هم ترکیب می‌کند. علامت جمع « + » است. اعداد جمع‌شونده را جملات و نتیجه را مجموع می‌نامند.",
        "ویژگی ۱ — جابجایی: تغییر ترتیب مجموع را تغییر نمی‌دهد. مثال: ۵۷ + ۴۹ = ۴۹ + ۵۷ = ۱۰۶.",
        "ویژگی ۲ — انجمنی: می‌توان بیش از دو جمله را به هر ترتیبی جمع کرد. مثال: ۱۵ + ۳۷ + ۲۲ = ۷۴.",
        "جمع ستونی: اعداد را با تراز کردن یکان، دهگان، صدگان بنویسید. از یکان‌ها شروع کنید. اگر مجموع از ۹ بیشتر شد، نقل دهید. سپس دهگان‌ها و صدگان‌ها.",
        "مثال: ۵۷۹ + ۲۴ → یکان: ۹ + ۴ = ۱۳ (بنویس ۳، نقل ۱) → دهگان: ۱ + ۷ + ۲ = ۱۰ (بنویس ۰، نقل ۱) → صدگان: ۱ + ۵ = ۶ → نتیجه: ۶۰۳.",
      ],
      ti: [
        "ምደማር ብዙ መጠናት ሓቢሩ ይሰርዕ። ምልክት ምደማር « + » (ደሚርካ) እዩ። ዝጽምሙ ቁጽሪታት ድምር ይፍጠር።",
        "ኣቃውማ ፩ — ቅደም-ሰዓበ: ቅደም ምቕያር ድምር ኣይቅይርን። ኣብነት: 57 + 49 = 49 + 57 = 106.",
        "ኣቃውማ ፪ — ምጽምባር: ዝበዝሑ ቁጽርታት ብዝደለዮ ቅደም ክድምር ይከኣል። ኣብነት: 15 + 37 + 22 = 74.",
        "ኣብ ዓምዲ ምደማር: ቁጽርታት ኣሃዱ፡ ዓሰርተ፡ ሚእቲ ብምስልሳልና። ካብ ኣሃዱ ጀምር። ውጽኢቱ ካብ 9 ዝበዝሕ እንተኾነ ሃሊዝ።",
        "ኣብነት: 579 + 24 → ኣሃዱ: 9 + 4 = 13 (3 ጽሓፍ፡ 1 ሃሊዝ) → ዓሰርተ: 1+7+2=10 (0 ጽሓፍ፡ 1 ሃሊዝ) → ሚእቲ: 1+5=6 → ውጽኢት: 603.",
      ],
      uk: [
        "Додавання об'єднує кілька величин. Знак « + » (плюс). Числа — доданки. Результат — сума.",
        "Властивість 1 — Комутативність: зміна порядку не змінює суму. Приклад: 57 + 49 = 49 + 57 = 106.",
        "Властивість 2 — Асоціативність: можна додавати більше двох доданків у будь-якому порядку. Приклад: 15 + 37 + 22 = 74.",
        "Додавання в стовпчик: вирівнюйте одиниці, десятки, сотні. Починайте з одиниць. Якщо сума > 9, перенесіть. Потім десятки та сотні.",
        "Приклад: 579 + 24 → одиниці: 9+4=13 (пишемо 3, переносимо 1) → десятки: 1+7+2=10 (пишемо 0, переносимо 1) → сотні: 1+5=6 → результат: 603.",
      ],
      pt: [
        "A adição permite reunir várias quantidades. O sinal da adição é « + » (mais). Os números a serem somados chamam-se termos. O resultado da adição é a soma.",
        "Propriedade 1 — Comutatividade: a ordem dos termos não altera a soma. Exemplo: 57 + 49 = 49 + 57 = 106.",
        "Propriedade 2 — Associatividade: é possível somar mais de dois termos em qualquer ordem. Exemplo: 15 + 37 + 22 = 74.",
        "Adição em coluna: escreva os números alinhando unidades, dezenas e centenas. Comece pelas unidades. Se a soma for maior que 9, transporte a dezena (vai-um). Depois continue com dezenas e centenas.",
        "Exemplo: 579 + 24 → unidades: 9 + 4 = 13 (escreve 3, vai 1) → dezenas: 1 + 7 + 2 = 10 (escreve 0, vai 1) → centenas: 1 + 5 = 6 → resultado: 603.",
      ],
    },
  },
  exercises: [

  ],
  exercisePool: [

  ],
  poolSize: 5,
};
