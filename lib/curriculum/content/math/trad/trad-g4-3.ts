import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G4_3: SubmoduleTrad = {
  submoduleId: "G4-3",
  title: {
    fr: "Construction de triangles",
    en: "Constructing triangles",
    ar: "إنشاء المثلثات",
    fa: "ساخت مثلث‌ها",
    ti: "ናይ ሰለስ-ጎቦ ምህናጽ",
    uk: "Побудова трикутників",
  },
  paragraphs: {
    fr: [
          "On peut construire un triangle de différentes façons selon les éléments connus : CCC (trois côtés), CAC (deux côtés et angle compris), ACA (deux angles et côté).",
          "Méthode CCC (SSS) : tracer un côté BC, puis tracer un arc de rayon AB centré en B et un arc de rayon AC centré en C. Leur intersection est A.",
          "Vérification de l'existence : un triangle existe si et seulement si la somme de deux côtés quelconques est supérieure au troisième (inégalité triangulaire).",
          "Triangle rectangle : l'angle droit peut être construit avec l'équerre.",
        ],
    en: [
          "A triangle can be constructed from: SSS (three sides), SAS (two sides and included angle), ASA (two angles and included side).",
          "SSS method: draw BC, draw arc of radius AB from B and arc of radius AC from C — intersection is A.",
          "Existence check: triangle inequality must hold.",
          "Right triangle: right angle is constructed with a set square.",
        ],
    ar: [
          "يمكن إنشاء مثلث بطرق مختلفة: ضع ضلع ثم ارسم قوسين بالبركار.",
          "طريقة الأضلاع الثلاثة: ارسم BC ثم قوساً بنصف قطر AB من B وآخر بنصف قطر AC من C.",
          "الوجود: يوجد المثلث إذا كان مجموع ضلعين أكبر من الثالث.",
          "المثلث القائم: الزاوية القائمة بالمثلث.",
        ],
    fa: [
          "مثلث را می‌توان به روش‌های مختلف ساخت: سه ضلع، دو ضلع و زاویه، دو زاویه و ضلع.",
          "روش سه ضلع: BC را رسم کن، سپس از B با شعاع AB و از C با شعاع AC قوس بکش — تقاطع‌شان A است.",
          "وجود: نامساوی مثلث باید برقرار باشد.",
          "مثلث قائم‌الزاویه: زاویه قائمه با گونیا.",
        ],
    ti: [
          "ሰለስ-ጎቦ ብዝተፈለየ ኣፈጻጽማ ምህናጽ ዝከኣሉ ዩ: ሰለስቲ ጎቦ, ክልተ ጎቦ ን ናይ ውሽጠ ኩርናዕ.",
          "ናይ ሰለስቲ ጎቦ ኣፈጻጽማ: BC ምስሳሉ ካብ B ን C ቀስቲ ምምሃዝ.",
          "ምፍለጥ: ናይ ሰለስ-ጎቦ ዘይምዕርርያ ክኸውን ኣለዎ.",
          "ቀጥታ ኩርናዕ ሰለስ-ጎቦ: ጥርናፊ ምጥቃም.",
        ],
    uk: [
          "Трикутник будується різними способами: SSS (3 сторони), SAS (2 сторони і кут), ASA.",
          "Метод SSS: провести BC, циркулем від B радіусом AB і від C радіусом AC — перетин A.",
          "Існування: нерівність трикутника повинна виконуватись.",
          "Прямокутний трикутник: прямий кут будується косинцем.",
        ],
  },
};
