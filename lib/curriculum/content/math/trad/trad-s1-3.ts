import type { SubmoduleTrad } from "./trad-types";

export const TRAD_S1_3: SubmoduleTrad = {
  submoduleId: "S1-3",
  title: {
    fr: "Médiane",
    en: "Median",
    ar: "الوسيط",
    fa: "میانه",
    ti: "መቃዲ",
    uk: "Медіана",
  },
  paragraphs: {
    fr: [
          "La médiane est la valeur qui partage une série ordonnée en deux moitiés égales : autant de valeurs en dessous qu'au-dessus.",
          "Méthode : 1) Trie les données par ordre croissant. 2) Si n est impair, la médiane est la valeur du rang (n+1)/2. 3) Si n est pair, la médiane est la moyenne des valeurs des rangs n/2 et n/2+1.",
          "Exemple (n=5) : 3, 7, 9, 12, 15 → rang 3 → médiane = 9. Exemple (n=6) : 3, 7, 9, 12, 15, 20 → moyenne de 9 et 12 → médiane = 10,5.",
          "Avantage de la médiane : elle est robuste aux valeurs extrêmes. Si une valeur aberrante est présente, la médiane reste représentative alors que la moyenne est déformée.",
          "Comparaison : si la moyenne > médiane, la distribution est asymétrique vers la droite (données élevées). Si moyenne < médiane, elle est asymétrique vers la gauche.",
        ],
    en: [
          "The median is the value that splits an ordered data set into two equal halves: as many values below as above.",
          "Method: 1) Sort data in ascending order. 2) If n is odd, the median is the value at position (n+1)/2. 3) If n is even, the median is the average of the values at positions n/2 and n/2+1.",
          "Example (n=5): 3, 7, 9, 12, 15 → position 3 → median = 9. Example (n=6): 3, 7, 9, 12, 15, 20 → average of 9 and 12 → median = 10.5.",
          "Advantage: the median is robust to extreme values. An outlier barely affects it, whereas the mean is distorted.",
          "Comparison: if mean > median, the distribution is right-skewed (high values). If mean < median, it is left-skewed.",
        ],
    ar: [
          "الوسيط هو القيمة التي تقسم البيانات المرتبة إلى نصفين متساويين.",
          "الطريقة: 1) رتِّب البيانات تصاعديًا. 2) إذا كان n فرديًا فالوسيط = القيمة عند الرتبة (n+1)/2. 3) إذا كان n زوجيًا فالوسيط = متوسط القيمتين عند الرتبتين n/2 و n/2+1.",
          "مثال (n=5): 3، 7، 9، 12، 15 → الوسيط = 9. مثال (n=6): 3، 7، 9، 12، 15، 20 → الوسيط = 10,5.",
          "ميزة الوسيط: مقاومته للقيم الشاذة. لا يتأثر كثيرًا بها عكس المتوسط.",
          "مقارنة: إذا كان المتوسط > الوسيط فالتوزيع موجب الالتواء، وإذا كان أصغر فهو سالب الالتواء.",
        ],
    fa: [
          "میانه مقداری است که مجموعه داده‌های مرتب‌شده را به دو نیمه مساوی تقسیم می‌کند.",
          "روش: ۱) داده‌ها را به ترتیب صعودی مرتب کن. ۲) اگر n فرد باشد، میانه مقدار در موقعیت (n+1)/2 است. ۳) اگر n زوج باشد، میانه میانگین مقادیر در موقعیت n/2 و n/2+1 است.",
          "مثال (n=۵): ۳، ۷، ۹، ۱۲، ۱۵ → میانه = ۹. مثال (n=۶): ۳، ۷، ۹، ۱۲، ۱۵، ۲۰ → میانه = ۱۰٫۵.",
          "مزیت میانه: در برابر مقادیر افراطی مقاوم است. یک مقدار پرت تأثیر کمی روی آن دارد.",
          "مقایسه: اگر میانگین > میانه باشد، توزیع به راست کج است. اگر میانگین < میانه باشد، به چپ کج است.",
        ],
    ti: [
          "መቃዲ ናይ ስርዑ ዳታ ናብ ክልተ ማዕረ ክፋላት ዝኸፍሎ ክብሪ እዩ።",
          "መገዲ: 1) ዳታ ብኣስደምሞ ስርዓዮ። 2) n ዕሸል ምስ ዝኾን፣ መቃዲ = ኣብ ቦታ (n+1)/2 ዘሎ ክብሪ። 3) n ሸፈተ ምስ ዝኾን፣ መቃዲ = ማእከላይ ናይ n/2 ን n/2+1 ክብርታት.",
          "ኣብነት (n=5): 3, 7, 9, 12, 15 → መቃዲ = 9. ኣብነት (n=6): 3, 7, 9, 12, 15, 20 → መቃዲ = 10,5.",
          "ጥቅሚ መቃዲ: ናብ ጽንፈ ዝኾኑ ክብርታት ሓጺን እዩ። ዝወጸ ክብሪ ብጉዳይ ኣይቅይሮን።",
          "ምምስሳል: ማእከላይ > መቃዲ ምስ ዝኾን ምዝርዛር ናብ የማን ዝዘረ እዩ።",
        ],
    uk: [
          "Медіана — це значення, яке ділить впорядкований набір даних на дві рівні половини.",
          "Метод: 1) Відсортуй дані за зростанням. 2) Якщо n непарне, медіана — значення на позиції (n+1)/2. 3) Якщо n парне, медіана — середнє значень на позиціях n/2 та n/2+1.",
          "Приклад (n=5): 3, 7, 9, 12, 15 → медіана = 9. Приклад (n=6): 3, 7, 9, 12, 15, 20 → медіана = 10,5.",
          "Перевага: медіана стійка до екстремальних значень. Викидне значення майже не впливає на неї.",
          "Порівняння: якщо середнє > медіана, розподіл правобічно скошений.",
        ],
  },
};
