const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT = process.cwd();
const TARGETS = fs.readdirSync(path.join(ROOT, "lib/curriculum/content/francais"))
  .filter((file) => /^vocab-v[1-9]-.*\.ts$/.test(file))
  .map((file) => `lib/curriculum/content/francais/${file}`)
  .sort();

const VOWEL_RE = /^[aeiouhàâäéèêëîïôöùûüÿœæ]/i;
const MORAL = new Set(["gentil", "méchant", "poli", "impoli", "calme", "nerveux", "patient", "impatient", "sérieux", "drôle", "timide", "curieux", "paresseux", "travailleur"]);
const PHYSICAL = new Set(["grand", "petit", "gros", "mince", "fort", "faible", "jeune", "vieux", "beau", "joli", "blond", "brun", "roux", "chauve", "barbu", "moustachu"]);
const FAMILY = new Set(["père", "mère", "frère", "sœur", "fils", "fille", "grand-père", "grand-mère", "oncle", "tante", "cousin", "cousine", "mari", "femme", "parents", "enfant"]);
const STATUS = new Set(["célibataire", "marié", "divorcé", "veuf", "pacsé", "séparé", "fiancé"]);
const QUANTITIES = new Set(["kilo", "gramme", "litre", "bouteille", "paquet", "tranche", "morceau", "cuillère", "verre", "tasse", "bol", "assiette"]);

function propName(name) {
  if (!name) return "";
  if (ts.isIdentifier(name) || ts.isStringLiteral(name)) return name.text;
  return "";
}

function textOfInitializer(init) {
  return init && ts.isStringLiteralLike(init) ? init.text : undefined;
}

function getProp(obj, name) {
  return obj.properties.find((p) => ts.isPropertyAssignment(p) && propName(p.name) === name);
}

function getStringProp(obj, name) {
  const p = getProp(obj, name);
  return p ? textOfInitializer(p.initializer) : undefined;
}

function getArrayStrings(obj, level) {
  const ex = getProp(obj, "exampleSentences");
  if (!ex || !ts.isObjectLiteralExpression(ex.initializer)) return [];
  const levelProp = getProp(ex.initializer, level);
  if (!levelProp || !ts.isArrayLiteralExpression(levelProp.initializer)) return [];
  return levelProp.initializer.elements
    .filter(ts.isStringLiteralLike)
    .map((e) => e.text);
}

function unique(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const clean = String(item).trim();
    if (!clean || seen.has(clean)) continue;
    seen.add(clean);
    out.push(clean);
  }
  return out;
}

function indefinite(article, gender, word) {
  const a = (article || "").toLowerCase();
  if (a === "les" || a === "des") return "des";
  if (gender === "f" || a === "la" || a === "une") return "une";
  if (gender === "m" || a === "le" || a === "un") return "un";
  return VOWEL_RE.test(word) ? "un" : "un";
}

function definite(article, gender, word) {
  const a = (article || "").toLowerCase();
  if (a === "les" || a === "des") return "les";
  if (a === "l'") return "l'";
  if (a === "la" || a === "une" || gender === "f") return VOWEL_RE.test(word) ? "l'" : "la";
  if (a === "le" || a === "un" || gender === "m") return VOWEL_RE.test(word) ? "l'" : "le";
  return "";
}

function withArticle(article, word) {
  if (!article) return word;
  return article.endsWith("'") ? `${article}${word}` : `${article} ${word}`;
}

function deWithArticle(article, gender, word) {
  const a = definite(article, gender, word);
  if (a === "le") return `du ${word}`;
  if (a === "la") return `de la ${word}`;
  if (a === "l'") return `de l'${word}`;
  if (a === "les") return `des ${word}`;
  return `de ${word}`;
}

function aWithArticle(article, gender, word) {
  const a = definite(article, gender, word);
  if (a === "le") return `au ${word}`;
  if (a === "la") return `à la ${word}`;
  if (a === "l'") return `à l'${word}`;
  if (a === "les") return `aux ${word}`;
  return `à ${word}`;
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function isPluralArticle(article) {
  const a = (article || "").toLowerCase();
  return a === "les" || a === "des";
}

function importantFor(article, gender) {
  if (isPluralArticle(article)) return gender === "f" ? "importantes" : "importants";
  return gender === "f" ? "importante" : "important";
}

function utileFor(article) {
  return isPluralArticle(article) ? "utiles" : "utile";
}

function beFor(article) {
  return isPluralArticle(article) ? "sont" : "est";
}

function helpVerbFor(article) {
  return isPluralArticle(article) ? "aident" : "aide";
}

function pronFor(article, gender) {
  if (isPluralArticle(article)) return gender === "f" ? "elles" : "ils";
  return gender === "f" ? "elle" : "il";
}

function category(file, word) {
  if (file.includes("nationalites")) return "nationality";
  if (file.includes("professions")) return "profession";
  if (file.includes("famille") || FAMILY.has(word)) return "family";
  if (file.includes("etat-civil") || STATUS.has(word)) return "status";
  if (file.includes("couleurs")) return "adjective";
  if (file.includes("description-morale") || MORAL.has(word)) return "adjective";
  if (file.includes("description-physique") || PHYSICAL.has(word)) return "adjective";
  if (file.includes("vocab-v2-meteo")) return "weather";
  if (file.includes("vocab-v2-saisons")) return "season";
  if (file.includes("vocab-v2-heure")) return "timeword";
  if (file.includes("vocab-v2-jours-mois-dates")) return "date";
  if (file.includes("vocab-v3")) return "activity";
  if (file.includes("vocab-v8-corps")) return "body";
  if (file.includes("vocab-v8")) return "health";
  if (file.includes("vocab-v9")) return "travel";
  if (file.includes("matieres.ts")) return "school";
  if (file.includes("vetements") || file.includes("accessoires")) return "object";
  if (file.includes("vocab-v7")) return QUANTITIES.has(word) ? "quantity" : "food";
  return "object";
}

function makeGenerators(file, word, article, gender, feminine) {
  const cat = category(file, word);
  const def = definite(article, gender, word);
  const ind = indefinite(article, gender, word);
  const noun = withArticle(def, word);
  const one = withArticle(ind, word);
  const fem = feminine || word;
  const adjFem = feminine || word;

  if (cat === "adjective") {
    return {
      a1: [
        `Il est ${word}.`, `Elle est ${adjFem}.`, `Mon ami est ${word}.`, `Mon amie est ${adjFem}.`,
        `Ce garçon est ${word}.`, `Cette fille est ${adjFem}.`, `Le voisin est ${word}.`, `La voisine est ${adjFem}.`,
        `Paul est ${word}.`, `Marie est ${adjFem}.`, `Il semble ${word}.`, `Elle semble ${adjFem}.`,
        `Il reste ${word}.`, `Elle reste ${adjFem}.`, `Cet élève est ${word}.`, `Cette élève est ${adjFem}.`,
        `Mon frère est ${word}.`, `Ma sœur est ${adjFem}.`, `Le monsieur est ${word}.`, `La dame est ${adjFem}.`,
        `Il paraît ${word}.`, `Elle paraît ${adjFem}.`, `Lucas est ${word}.`, `Lina est ${adjFem}.`, `Mon cousin est ${word}.`,
      ],
      a2: [
        `Hier, il a été ${word} avec ses amis.`, `Hier, elle a été ${adjFem} avec ses amis.`,
        `Demain, il va rester ${word} en classe.`, `Demain, elle va rester ${adjFem} en classe.`,
        `Quand il était petit, il était déjà ${word}.`, `Quand elle était petite, elle était déjà ${adjFem}.`,
        `Ce matin, il s'est montré ${word}.`, `Ce matin, elle s'est montrée ${adjFem}.`,
        `Je pense qu'il va devenir ${word}.`, `Je pense qu'elle va devenir ${adjFem}.`,
        `Avant, mon voisin était plus ${word}.`, `Avant, ma voisine était plus ${adjFem}.`,
        `Pendant le cours, il est resté ${word}.`, `Pendant le cours, elle est restée ${adjFem}.`,
        `L'an dernier, il était vraiment ${word}.`, `L'an dernier, elle était vraiment ${adjFem}.`,
        `Il a été ${word} toute la journée.`, `Elle a été ${adjFem} toute la journée.`,
        `Mon frère paraît plus ${word} aujourd'hui.`, `Ma sœur paraît plus ${adjFem} aujourd'hui.`,
        `Il va essayer d'être ${word} demain.`, `Elle va essayer d'être ${adjFem} demain.`,
        `Ce garçon est devenu ${word} avec le temps.`, `Cette fille est devenue ${adjFem} avec le temps.`,
        `Il était ${word} quand je l'ai rencontré.`,
      ],
      b1: [
        `Bien qu'il soit fatigué, il reste ${word} avec les autres.`,
        `Bien qu'elle soit fatiguée, elle reste ${adjFem} avec les autres.`,
        `Si tu le connaissais mieux, tu verrais qu'il est ${word}.`,
        `Si tu la connaissais mieux, tu verrais qu'elle est ${adjFem}.`,
        `Comme il est ${word}, les autres lui font confiance.`,
        `Comme elle est ${adjFem}, les autres lui font confiance.`,
        `Même quand la journée est difficile, il demeure ${word}.`,
        `Même quand la journée est difficile, elle demeure ${adjFem}.`,
        `On dit qu'il est ${word}, mais il peut changer selon la situation.`,
        `On dit qu'elle est ${adjFem}, mais elle peut changer selon la situation.`,
        `Lorsqu'il arrive dans un groupe, il paraît tout de suite ${word}.`,
        `Lorsqu'elle arrive dans un groupe, elle paraît tout de suite ${adjFem}.`,
        `Le garçon, qui était très ${word}, a aidé tout le monde.`,
        `La fille, qui était très ${adjFem}, a aidé tout le monde.`,
        `Tant qu'il restera ${word}, les autres apprécieront sa présence.`,
      ],
    };
  }

  if (cat === "status") {
    return {
      a1: [
        `Il est ${word}.`, `Elle est ${adjFem}.`, `Mon ami est ${word}.`, `Mon amie est ${adjFem}.`,
        `Ce monsieur est ${word}.`, `Cette dame est ${adjFem}.`, `Le voisin est ${word}.`, `La voisine est ${adjFem}.`,
        `Paul est ${word}.`, `Marie est ${adjFem}.`, `Il reste ${word}.`, `Elle reste ${adjFem}.`,
        `Le formulaire indique ${word}.`, `La fiche indique ${adjFem}.`, `Mon frère est ${word}.`, `Ma sœur est ${adjFem}.`,
        `Cet homme est ${word}.`, `Cette femme est ${adjFem}.`, `Lucas est ${word}.`, `Lina est ${adjFem}.`,
        `Il dit qu'il est ${word}.`, `Elle dit qu'elle est ${adjFem}.`, `Je connais un homme ${word}.`, `Je connais une femme ${adjFem}.`, `Son état civil est ${word}.`,
      ],
      a2: [
        `Depuis l'année dernière, il est ${word}.`, `Depuis l'année dernière, elle est ${adjFem}.`,
        `Dans le dossier, il est indiqué qu'il est ${word}.`, `Dans le dossier, il est indiqué qu'elle est ${adjFem}.`,
        `Quand il a rempli le formulaire, il a écrit qu'il était ${word}.`, `Quand elle a rempli le formulaire, elle a écrit qu'elle était ${adjFem}.`,
        `Ce matin, il a expliqué qu'il était ${word}.`, `Ce matin, elle a expliqué qu'elle était ${adjFem}.`,
        `Mon voisin est ${word} depuis plusieurs mois.`, `Ma voisine est ${adjFem} depuis plusieurs mois.`,
        `Il va déclarer qu'il est ${word}.`, `Elle va déclarer qu'elle est ${adjFem}.`,
        `Pendant l'entretien, il a dit qu'il était ${word}.`, `Pendant l'entretien, elle a dit qu'elle était ${adjFem}.`,
        `Sur la fiche, son état civil est ${word}.`, `Sur la fiche, son état civil est ${adjFem}.`,
        `Il a changé de situation et il est maintenant ${word}.`, `Elle a changé de situation et elle est maintenant ${adjFem}.`,
        `Le professeur a expliqué le mot ${word}.`, `La classe a utilisé ${word} dans une phrase.`,
        `Nous avons associé ${word} à une situation de la vie quotidienne.`, `J'ai écrit une phrase avec ${word}.`,
        `Elle a noté ${word} dans son carnet de vocabulaire.`,
      ],
      b1: [
        `Bien qu'il soit ${word}, sa situation peut évoluer avec le temps.`,
        `Bien qu'elle soit ${adjFem}, sa situation peut évoluer avec le temps.`,
        `Comme il est ${word}, il doit choisir la bonne case sur le formulaire.`,
        `Comme elle est ${adjFem}, elle doit choisir la bonne case sur le formulaire.`,
        `Si son état civil change, il devra modifier ses informations.`,
        `Si son état civil change, elle devra modifier ses informations.`,
        `La personne, qui est ${word}, a expliqué sa situation calmement.`,
        `La personne, qui est ${adjFem}, a expliqué sa situation calmement.`,
        `Même si le mot ${word} semble simple, il décrit une situation précise.`,
        `Lorsque tu connaîtras le mot ${word}, tu comprendras mieux le formulaire.`,
        `Pendant que la classe travaillait, le professeur a expliqué la différence entre plusieurs états civils.`,
        `Puisque ${word} correspond à une situation officielle, il faut l'utiliser avec précision.`,
        `Le terme dont je parle est ${word}, que l'on rencontre souvent dans les documents administratifs.`,
        `Tant que tu pratiqueras ce vocabulaire, tu comprendras mieux les questions personnelles.`,
        `Si l'exercice contient ${word}, je penserai au contexte de l'état civil.`,
      ],
    };
  }

  if (cat === "nationality") {
    return {
      a1: [
        `Il est ${word}.`, `Elle est ${fem}.`, `Mon ami est ${word}.`, `Mon amie est ${fem}.`,
        `Ce monsieur est ${word}.`, `Cette dame est ${fem}.`, `Le voisin est ${word}.`, `La voisine est ${fem}.`,
        `Paul est ${word}.`, `Sara est ${fem}.`, `Il parle avec un homme ${word}.`, `Elle parle avec une femme ${fem}.`,
        `Un élève ${word} arrive.`, `Une élève ${fem} arrive.`, `Mon collègue est ${word}.`, `Ma collègue est ${fem}.`,
        `Le joueur est ${word}.`, `La joueuse est ${fem}.`, `Le client est ${word}.`, `La cliente est ${fem}.`,
        `Ce garçon est ${word}.`, `Cette fille est ${fem}.`, `Il connaît un ami ${word}.`, `Elle connaît une amie ${fem}.`, `Le professeur est ${word}.`,
      ],
      a2: [
        `Hier, j'ai rencontré un étudiant ${word}.`, `Hier, j'ai rencontré une étudiante ${fem}.`,
        `Demain, un voisin ${word} va venir chez nous.`, `Demain, une voisine ${fem} va venir chez nous.`,
        `Quand il était jeune, il avait un ami ${word}.`, `Quand elle était jeune, elle avait une amie ${fem}.`,
        `Le nouveau collègue est ${word} et parle français.`, `La nouvelle collègue est ${fem} et parle français.`,
        `Ce matin, un client ${word} a demandé de l'aide.`, `Ce matin, une cliente ${fem} a demandé de l'aide.`,
        `Nous avons parlé avec un touriste ${word}.`, `Nous avons parlé avec une touriste ${fem}.`,
        `Il va travailler avec un groupe ${word}.`, `Elle va travailler avec une équipe ${fem}.`,
        `Avant, mon voisin ${word} habitait près de l'école.`, `Avant, ma voisine ${fem} habitait près de l'école.`,
        `Un joueur ${word} a marqué un but hier.`, `Une joueuse ${fem} a marqué un but hier.`,
        `Le professeur ${word} a expliqué la leçon.`, `La professeure ${fem} a expliqué la leçon.`,
        `Je connais un médecin ${word} depuis longtemps.`, `Je connais une médecin ${fem} depuis longtemps.`,
        `Un ami ${word} va nous accompagner samedi.`,
      ],
      b1: [
        `Bien qu'il soit ${word}, il parle très bien français.`,
        `Bien qu'elle soit ${fem}, elle parle très bien français.`,
        `Le voisin ${word}, que nous avons rencontré hier, connaît bien la ville.`,
        `La voisine ${fem}, que nous avons rencontrée hier, connaît bien la ville.`,
        `Si cet étudiant ${word} reste ici, il progressera rapidement.`,
        `Si cette étudiante ${fem} reste ici, elle progressera rapidement.`,
        `Comme le client ${word} ne comprenait pas, nous avons parlé plus lentement.`,
        `Comme la cliente ${fem} ne comprenait pas, nous avons parlé plus lentement.`,
        `Même s'il est ${word}, il se sent déjà chez lui dans cette classe.`,
        `Même si elle est ${fem}, elle se sent déjà chez elle dans cette classe.`,
        `Le professeur ${word} dont je parle enseigne depuis plusieurs années.`,
        `La professeure ${fem} dont je parle enseigne depuis plusieurs années.`,
        `Pendant que l'élève ${word} écrivait, son voisin l'aidait.`,
        `Pendant que l'élève ${fem} écrivait, sa voisine l'aidait.`,
        `Tant que l'ami ${word} vivra ici, nous pratiquerons le français ensemble.`,
      ],
    };
  }

  if (cat === "food") {
    const be = beFor(article);
    const good = gender === "f" ? "bonne" : "bon";
    const fresh = gender === "f" ? "fraîche" : "frais";
    const ready = gender === "f" ? "prête" : "prêt";
    const asked = gender === "f" ? "demandée" : "demandé";
    const expensive = gender === "f" ? "chère" : "cher";
    const pron = gender === "f" ? "elle" : "il";
    return {
      a1: [
        `Je mange ${one}.`, `J'aime ${noun}.`, `${cap(noun)} est ${good}.`, `${cap(noun)} est ${fresh}.`,
        `Je coupe ${one}.`, `Je goûte ${noun}.`, `Tu veux ${one}.`, `Il achète ${one}.`,
        `Elle prend ${one}.`, `Nous avons ${one}.`, `Vous servez ${noun}.`, `Ils mangent ${noun}.`,
        `Elles aiment ${noun}.`, `${cap(noun)} ${be} dans le panier.`, `${cap(noun)} ${be} sur la table.`,
        `Je prépare ${one}.`, `Je cherche ${one}.`, `Il lave ${one}.`, `Elle choisit ${one}.`,
        `Le repas contient ${noun}.`, `La recette utilise ${noun}.`, `Ce plat contient ${noun}.`,
        `Je mets ${noun} dans l'assiette.`, `Nous partageons ${one}.`, `Tu prends ${one}.`,
      ],
      a2: [
        `Hier, j'ai acheté ${one} au marché.`, `Demain, je vais préparer ${noun} pour le repas.`,
        `Quand j'étais petit, je mangeais souvent ${noun}.`, `Ce matin, elle a lavé ${noun} avant de cuisiner.`,
        `Nous avons ajouté ${noun} dans la recette.`, `Ils vont servir ${noun} avec le plat principal.`,
        `J'ai choisi ${one} parce qu'${pron} était ${fresh}.`, `Elle a coupé ${noun} en petits morceaux.`,
        `Avant le dîner, nous avons goûté ${noun}.`, `Le vendeur a conseillé ${noun} à ma mère.`,
        `Je vais acheter ${one} après le travail.`, `Nous avons gardé ${noun} au réfrigérateur.`,
        `Hier soir, mon frère a mangé ${noun}.`, `Pendant les vacances, nous préparions souvent ${noun}.`,
        `Elle a oublié ${one} dans le sac.`, `Il va utiliser ${noun} pour faire une sauce.`,
        `Nous avons commandé ${noun} au restaurant.`, `Ce week-end, je vais cuisiner ${noun}.`,
        `Le cuisinier a ajouté ${noun} dans l'assiette.`, `J'ai goûté ${noun} pour la première fois.`,
        `Ma sœur a choisi ${noun} pour le dessert.`, `Ils ont partagé ${one} à midi.`,
        `Nous allons servir ${noun} avec du pain.`, `Elle a acheté ${one} pour la recette.`, `Le client a demandé ${noun} au serveur.`,
      ],
      b1: [
        `Bien que ${noun} soit simple, ce produit donne beaucoup de goût au plat.`,
        `Comme ${noun} était très ${fresh}, le cuisinier l'a servi immédiatement.`,
        `Si tu ajoutes ${noun}, la recette aura une saveur plus intéressante.`,
        `Même si je n'en mange pas souvent, j'apprécie ${noun} dans ce plat.`,
        `Le client, qui voulait un repas léger, a choisi ${noun}.`,
        `La recette que nous préparons utilise ${noun} pour équilibrer les saveurs.`,
        `Pendant que le chef coupait ${noun}, les autres préparaient la table.`,
        `Puisque ${noun} était déjà prêt, le service a commencé rapidement.`,
        `Lorsque tu auras lavé ${noun}, tu pourras commencer la recette.`,
        `Je pense que ${noun} convient bien à ce menu parce qu'${pron} reste facile à préparer.`,
        `Même quand le repas est simple, ${noun} peut améliorer la présentation.`,
        `Le produit dont je parle est ${noun}, que beaucoup de clients apprécient.`,
        `Tant que ${noun} restera ${fresh}, nous pourrons l'utiliser demain.`,
        `Bien qu'${pron} coûte parfois ${expensive}, ${noun} est très ${asked} en cuisine.`,
        `Si le restaurant propose ${noun}, je choisirai ce plat sans hésiter.`,
      ],
    };
  }

  if (cat === "weather") {
    const deN = deWithArticle(article, gender, word);
    const massWeather = new Set(["soleil", "pluie", "neige", "vent", "brouillard", "gel", "verglas", "orage", "grêle", "canicule", "froid", "chaleur"]);
    const there = massWeather.has(word) ? deN : one;
    return {
      a1: [
        `Il y a ${there}.`, `Je vois ${noun}.`, `${cap(noun)} est dehors.`, `${cap(noun)} arrive.`,
        `Le temps change avec ${noun}.`, `Aujourd'hui, il y a ${there}.`, `Je regarde ${noun}.`,
        `${cap(noun)} est fort.`, `${cap(noun)} est faible.`, `${cap(noun)} est visible.`,
        `Nous parlons ${deN}.`, `Tu vois ${noun}.`, `Il annonce ${noun}.`, `Elle aime ${noun}.`,
        `${cap(noun)} est sur l'image.`, `La météo montre ${noun}.`, `Je note ${noun}.`,
        `Le ciel annonce ${noun}.`, `Il fait un temps avec ${noun}.`, `La journée commence avec ${noun}.`,
        `Nous avons ${noun} ce matin.`, `${cap(noun)} reste toute la journée.`, `Je dessine ${noun}.`,
        `La carte montre ${noun}.`, `Tu connais ${noun}.`,
      ],
      a2: [
        `Hier, il y avait ${there} toute la journée.`, `Demain, il va y avoir ${there}.`,
        `Ce matin, la météo a annoncé ${noun}.`, `Quand je suis sorti, j'ai vu ${noun}.`,
        `Nous avons parlé ${deN} pendant le cours.`, `Ils vont regarder ${noun} sur la carte.`,
        `J'ai choisi ${noun} pour décrire le temps.`, `Elle a noté ${noun} dans son cahier.`,
        `Avant de partir, nous avons vérifié ${noun}.`, `Le présentateur a expliqué ${noun} à la télévision.`,
        `Je vais regarder ${noun} avant la sortie.`, `Nous avons dessiné ${noun} dans l'exercice.`,
        `Hier soir, mon frère a entendu parler ${deN}.`, `Pendant l'hiver, il y avait souvent ${there}.`,
        `Elle a oublié le mot ${word} pendant l'exercice.`, `Il va utiliser ${noun} dans sa phrase.`,
        `Nous avons trouvé ${noun} dans le bulletin météo.`, `Ce week-end, je vais observer ${noun}.`,
        `L'élève a ajouté ${noun} dans sa réponse.`, `J'ai compris le mot ${word} pour la première fois.`,
        `Ma sœur a choisi ${noun} pour son exemple.`, `Ils ont répété ${word} à voix haute.`,
        `Nous allons revoir ${noun} avec le professeur.`, `Elle a noté ${word} pour ne pas l'oublier.`, `La classe a demandé un exemple avec ${noun}.`,
      ],
      b1: [
        `Bien que ${noun} semble banal, il peut changer toute l'organisation de la journée.`,
        `Comme il y avait ${deN}, nous avons décidé de reporter la sortie.`,
        `Si la météo annonce ${noun}, je prendrai des vêtements adaptés.`,
        `Même si je connais le mot ${word}, je dois encore l'utiliser correctement.`,
        `Le bulletin, qui annonçait ${noun}, a surpris plusieurs élèves.`,
        `La phrase que nous écrivons utilise ${noun} pour décrire le temps.`,
        `Pendant que le professeur expliquait ${noun}, les élèves regardaient l'image.`,
        `Puisque ${noun} était difficile à représenter, nous avons cherché un autre exemple.`,
        `Lorsque tu auras compris ${word}, tu pourras décrire la météo plus précisément.`,
        `Je pense que ${noun} aide à comprendre la situation parce que le temps influence nos activités.`,
        `Même quand la phrase est courte, ${noun} donne une information importante.`,
        `Le phénomène dont je parle est ${noun}, que la météo annonce souvent.`,
        `Tant que ${noun} restera présent, nous éviterons les activités dehors.`,
        `Bien que ${noun} demande peu de mots, il décrit clairement le temps.`,
        `Si l'exercice contient ${noun}, je penserai à parler de la météo.`,
      ],
    };
  }

  if (cat === "season" || cat === "date" || cat === "timeword") {
    const period = cat === "season" ? "période" : cat === "date" ? "date" : "heure";
    const deN = deWithArticle(article, gender, word);
    const important = importantFor(article, gender);
    const utile = utileFor(article);
    const be = beFor(article);
    const helpVerb = helpVerbFor(article);
    return {
      a1: [
        `Je connais ${noun}.`, `Je note ${noun}.`, `${cap(noun)} ${be} ${important}.`, `${cap(noun)} ${be} ${utile}.`,
        `Je regarde ${noun}.`, `Je lis ${noun}.`, `Tu écris ${noun}.`, `Il apprend ${noun}.`,
        `Elle répète ${word}.`, `Nous parlons ${deN}.`, `Vous utilisez ${noun}.`, `Ils choisissent ${noun}.`,
        `Elles écrivent ${word}.`, `${cap(noun)} ${be} dans le calendrier.`, `${cap(noun)} ${be} au tableau.`,
        `Je cherche ${noun}.`, `Je comprends ${word}.`, `Il montre ${noun}.`, `Elle demande ${noun}.`,
        `Le professeur explique ${noun}.`, `La classe étudie ${noun}.`, `Cette ${period} est simple.`,
        `Je répète ${word}.`, `Nous écrivons ${word}.`, `Tu apprends ${word}.`,
      ],
      a2: [
        `Hier, j'ai étudié ${noun} en classe.`, `Demain, je vais revoir ${noun}.`,
        `Quand j'étais débutant, je confondais souvent ${word}.`, `Ce matin, le professeur a expliqué ${noun}.`,
        `Nous avons utilisé ${noun} dans un exercice.`, `Ils vont apprendre ${word} cette semaine.`,
        `J'ai choisi ${noun} parce que c'était utile.`, `Elle a écrit ${word} dans son cahier.`,
        `Avant le test, nous avons répété ${word}.`, `Le groupe a parlé ${deN} pendant le cours.`,
        `Je vais pratiquer ${word} après le repas.`, `Nous avons corrigé une phrase avec ${word}.`,
        `Hier soir, mon frère a révisé ${noun}.`, `Pendant les vacances, je revoyais souvent ${word}.`,
        `Elle a oublié ${word} pendant l'exercice.`, `Il va utiliser ${noun} dans sa phrase.`,
        `Nous avons trouvé ${word} dans le texte.`, `Ce week-end, je vais mémoriser ${word}.`,
        `L'élève a ajouté ${word} dans sa réponse.`, `J'ai compris ${word} pour la première fois.`,
        `Ma sœur a choisi ${noun} pour son exemple.`, `Ils ont répété ${word} à voix haute.`,
        `Nous allons revoir ${noun} avec le professeur.`, `Elle a noté ${word} pour ne pas l'oublier.`, `La classe a demandé ${noun} au tableau.`,
      ],
      b1: [
        `Bien que ${word} semble simple, il faut l'utiliser dans le bon contexte.`,
        `Comme ${noun} revient souvent, le professeur l'a expliqué plusieurs fois.`,
        `Si tu maîtrises ${word}, tu comprendras mieux les textes du calendrier.`,
        `Même si je connais ${word}, je dois encore le placer correctement dans une phrase.`,
        `L'élève, qui voulait progresser, a choisi ${noun} comme exemple.`,
        `La leçon que nous travaillons utilise ${word} dans plusieurs phrases.`,
        `Pendant que le professeur expliquait ${noun}, les élèves prenaient des notes.`,
        `Puisque ${word} était difficile, nous avons fait un exercice supplémentaire.`,
        `Lorsque tu auras révisé ${word}, tu pourras passer à la suite.`,
        `Je pense que ${noun} ${helpVerb} les élèves parce que cela donne un repère clair.`,
        `Même quand l'exercice est court, ${word} peut être important.`,
        `Le mot dont je parle est ${word}, que la classe doit retenir.`,
        `Tant que tu pratiqueras ${word}, tu feras des progrès.`,
        `Bien que ${word} demande de l'attention, il devient plus facile avec l'habitude.`,
        `Si l'exercice contient ${word}, je lirai la consigne avec soin.`,
      ],
    };
  }

  if (cat === "activity") {
    const deN = deWithArticle(article, gender, word);
    const aN = aWithArticle(article, gender, word);
    const pron = pronFor(article, gender);
    return {
      a1: [
        `Je fais ${deN}.`, `J'aime ${noun}.`, `${cap(noun)} est un sport.`, `${cap(noun)} est une activité.`,
        `Je pratique ${noun}.`, `Je regarde ${noun}.`, `Tu fais ${deN}.`, `Il joue ${aN}.`,
        `Elle pratique ${noun}.`, `Nous faisons ${deN}.`, `Vous aimez ${noun}.`, `Ils jouent ${aN}.`,
        `Elles regardent ${noun}.`, `${cap(noun)} est dans le gymnase.`, `${cap(noun)} est sur l'image.`,
        `Je choisis ${noun}.`, `Je commence ${noun}.`, `Il apprend ${noun}.`, `Elle aime ${noun}.`,
        `Le professeur explique ${noun}.`, `La classe pratique ${noun}.`, `Ce sport est simple.`,
        `Je parle ${deN}.`, `Nous essayons ${noun}.`, `Tu connais ${noun}.`,
      ],
      a2: [
        `Hier, j'ai fait ${deN} avec mes amis.`, `Demain, je vais pratiquer ${noun}.`,
        `Quand j'étais petit, je jouais souvent ${aN}.`, `Ce matin, le professeur a présenté ${noun}.`,
        `Nous avons essayé ${noun} pendant le cours.`, `Ils vont jouer ${aN} cette semaine.`,
        `J'ai choisi ${noun} parce que cette activité me plaît.`, `Elle a regardé ${noun} à la télévision.`,
        `Avant l'entraînement, nous avons parlé ${deN}.`, `Le groupe a découvert ${noun} au centre sportif.`,
        `Je vais pratiquer ${noun} après l'école.`, `Nous avons appris les règles ${deN}.`,
        `Hier soir, mon frère a regardé ${noun}.`, `Pendant les vacances, je faisais souvent ${deN}.`,
        `Elle a oublié le mot ${word} pendant l'exercice.`, `Il va utiliser ${noun} dans sa phrase.`,
        `Nous avons trouvé ${noun} dans le texte.`, `Ce week-end, je vais essayer ${noun}.`,
        `L'élève a ajouté ${noun} dans sa réponse.`, `J'ai compris le mot ${word} pour la première fois.`,
        `Ma sœur a choisi ${noun} pour son exemple.`, `Ils ont répété ${word} à voix haute.`,
        `Nous allons revoir ${noun} avec le professeur.`, `Elle a noté ${word} pour ne pas l'oublier.`, `La classe a demandé un exemple avec ${noun}.`,
      ],
      b1: [
        `Bien que ${noun} demande de l'énergie, beaucoup d'élèves aiment cette activité.`,
        `Comme je pratique ${noun} régulièrement, je progresse peu à peu.`,
        `Si tu fais ${deN}, tu dois respecter les règles de sécurité.`,
        `Même si je connais ${noun}, je dois encore améliorer ma technique.`,
        `L'élève, qui voulait bouger davantage, a choisi ${noun}.`,
        `L'activité que nous découvrons aujourd'hui s'appelle ${word}.`,
        `Pendant que le professeur expliquait ${noun}, les élèves préparaient le matériel.`,
        `Puisque ${noun} était difficile, nous avons recommencé l'exercice.`,
        `Lorsque tu auras compris les règles ${deN}, tu joueras plus facilement.`,
        `Je pense que ${noun} aide les élèves parce qu'${pron} développe la coopération.`,
        `Même quand l'entraînement est court, ${noun} demande de l'attention.`,
        `Le sport dont je parle est ${noun}, que plusieurs élèves pratiquent déjà.`,
        `Tant que tu pratiqueras ${noun}, tu gagneras en confiance.`,
        `Bien que ${noun} soit parfois exigeant, cette activité reste motivante.`,
        `Si la leçon contient ${noun}, je penserai aux règles du jeu.`,
      ],
    };
  }

  if (cat === "body") {
    const deN = deWithArticle(article, gender, word);
    const aN = aWithArticle(article, gender, word);
    const important = importantFor(article, gender);
    const be = beFor(article);
    const pron = pronFor(article, gender);
    return {
      a1: [
        `Je montre ${noun}.`, `J'ai mal ${aN}.`, `${cap(noun)} ${be} ${important}.`, `Je touche ${noun}.`,
        `Tu bouges ${noun}.`, `Il regarde ${noun}.`, `Elle lave ${noun}.`, `Nous dessinons ${noun}.`,
        `Vous connaissez ${noun}.`, `Ils protègent ${noun}.`, `Elles montrent ${noun}.`, `${cap(noun)} est sur le corps.`,
        `Le médecin regarde ${noun}.`, `Je parle ${deN}.`, `Il a une douleur ${aN}.`, `Elle soigne ${noun}.`,
        `Je sens ${noun}.`, `Tu utilises ${noun}.`, `Nous apprenons le mot ${word}.`, `La classe répète ${word}.`,
        `Le dessin montre ${noun}.`, `Je nomme ${noun}.`, `Il indique ${noun}.`, `Elle montre ${noun}.`, `Ce mot désigne ${noun}.`,
      ],
      a2: [
        `Hier, j'ai eu mal ${aN} après le sport.`, `Demain, le médecin va examiner ${noun}.`,
        `Quand il est tombé, il s'est blessé ${aN}.`, `Ce matin, elle a lavé ${noun} avec soin.`,
        `Nous avons appris le nom ${deN} en classe.`, `Ils vont dessiner ${noun} dans le cahier.`,
        `J'ai choisi ${noun} parce que ce mot était dans la liste.`, `Elle a montré ${noun} au médecin.`,
        `Avant l'entraînement, nous avons parlé ${deN}.`, `Le professeur a expliqué à quoi sert ${noun}.`,
        `Je vais protéger ${noun} pendant l'activité.`, `Nous avons associé ${noun} à une image.`,
        `Hier soir, mon frère a senti une douleur ${aN}.`, `Pendant le cours, nous avons répété ${word}.`,
        `Elle a oublié le mot ${word} pendant l'exercice.`, `Il va utiliser ${word} dans une phrase.`,
        `Nous avons trouvé ${noun} sur le schéma du corps.`, `Ce week-end, je vais réviser ${word}.`,
        `L'élève a décrit ${noun} avec une phrase simple.`, `J'ai compris le mot ${word} pour la première fois.`,
        `Ma sœur a noté ${word} dans son carnet.`, `Ils ont comparé ${noun} avec une autre partie du corps.`,
        `Nous allons revoir ${noun} avec le professeur.`, `Elle a écrit ${word} sans erreur.`, `La classe a demandé un exemple avec ${noun}.`,
      ],
      b1: [
        `Bien que ${noun} semble facile à nommer, il faut choisir le bon article.`,
        `Comme ${noun} peut être sensible, il faut le protéger pendant certaines activités.`,
        `Si tu as mal ${aN}, tu devrais expliquer clairement ce que tu ressens.`,
        `Même si je connais déjà ${word}, je dois encore l'utiliser dans une phrase complète.`,
        `La partie du corps que nous étudions aujourd'hui s'appelle ${word}.`,
        `Pendant que le médecin examinait ${noun}, le patient expliquait sa douleur.`,
        `Puisque ${noun} est important, le professeur l'a montré sur le schéma.`,
        `Lorsque tu auras mémorisé ${word}, tu comprendras mieux les consignes médicales.`,
        `Je pense que ${noun} aide les élèves parce qu'${pron} donne un repère concret.`,
        `Même quand la phrase est courte, ${noun} peut donner une information précise.`,
        `Le mot dont je parle est ${word}, que la classe doit retenir.`,
        `Tant que tu pratiqueras ce vocabulaire, tu décriras le corps plus facilement.`,
        `Bien que ${noun} demande peu d'explications, il faut le prononcer correctement.`,
        `Si l'exercice contient ${word}, je penserai au corps humain.`,
        `Le professeur, qui veut enrichir notre vocabulaire, nous demande d'utiliser ${word}.`,
      ],
    };
  }

  if (cat === "health") {
    const deN = deWithArticle(article, gender, word);
    const important = importantFor(article, gender);
    const be = beFor(article);
    return {
      a1: [
        `Je connais ${noun}.`, `Je parle ${deN}.`, `${cap(noun)} ${be} ${important}.`, `Le médecin explique ${noun}.`,
        `Le patient parle ${deN}.`, `Tu comprends ${word}.`, `Il décrit ${noun}.`, `Elle soigne ce problème.`,
        `Nous étudions ${noun}.`, `Vous notez ${word}.`, `Ils décrivent ${noun}.`, `Elles répètent ${word}.`,
        `${cap(noun)} est dans la leçon.`, `Je lis le mot ${word}.`, `Je cherche ${noun}.`, `Il montre ${noun}.`,
        `Elle demande une explication sur ${noun}.`, `La pharmacie aide le patient.`, `Le soignant parle ${deN}.`, `La classe apprend ${word}.`,
        `Je répète ${word}.`, `Nous écrivons ${word}.`, `Tu apprends ${word}.`, `Le soin concerne ${noun}.`, `Ce mot parle de la santé.`,
      ],
      a2: [
        `Hier, le médecin a parlé ${deN} au patient.`, `Demain, je vais revoir le mot ${word}.`,
        `Quand j'étais malade, j'ai entendu parler ${deN}.`, `Ce matin, le pharmacien a expliqué ${noun}.`,
        `Nous avons utilisé ${word} dans une phrase.`, `Ils vont apprendre ${word} cette semaine.`,
        `J'ai choisi ${noun} parce que ce mot était utile.`, `Elle a noté ${word} dans son carnet.`,
        `Avant le rendez-vous, nous avons préparé une phrase avec ${word}.`, `Le groupe a parlé ${deN} pendant le cours.`,
        `Je vais demander des informations sur ${noun}.`, `Nous avons associé ${noun} à une image.`,
        `Hier soir, mon frère a cherché le sens de ${word}.`, `Pendant l'exercice, je confondais encore ${word}.`,
        `Elle a oublié le mot ${word} pendant la dictée.`, `Il va utiliser ${word} dans sa réponse.`,
        `Nous avons trouvé ${noun} dans le dialogue médical.`, `Ce week-end, je vais mémoriser ${word}.`,
        `L'élève a ajouté ${word} dans sa phrase.`, `J'ai compris ${word} pour la première fois.`,
        `Ma sœur a demandé un exemple avec ${word}.`, `Ils ont répété ${word} à voix haute.`,
        `Nous allons revoir ${noun} avec le professeur.`, `Elle a écrit ${word} sans aide.`, `La classe a demandé une définition de ${word}.`,
      ],
      b1: [
        `Bien que ${noun} semble simple, il faut l'expliquer avec précision dans un contexte médical.`,
        `Comme ${noun} apparaît dans le dialogue, le patient doit comprendre ce mot.`,
        `Si tu connais ${word}, tu pourras mieux décrire un problème de santé.`,
        `Même si je connais déjà ${word}, je dois encore le prononcer correctement.`,
        `Le médecin, qui voulait rassurer le patient, a expliqué ${noun} avec des mots simples.`,
        `La leçon que nous travaillons utilise ${word} dans plusieurs situations de santé.`,
        `Pendant que le pharmacien parlait ${deN}, le client posait des questions.`,
        `Puisque ${word} est utile, nous le révisons avant le jeu de rôle.`,
        `Lorsque tu auras mémorisé ${word}, tu comprendras mieux les consignes du médecin.`,
        `Je pense que ${noun} aide les élèves parce que ce mot revient souvent dans les dialogues.`,
        `Même quand la phrase est courte, ${word} peut donner une information importante.`,
        `Le mot dont je parle est ${word}, que la classe doit retenir.`,
        `Tant que tu pratiqueras ${word}, tu parleras de santé plus facilement.`,
        `Bien que ${noun} demande de l'attention, il devient plus clair avec des exemples.`,
        `Si l'exercice contient ${word}, je penserai au vocabulaire médical.`,
      ],
    };
  }

  if (cat === "travel") {
    const deN = deWithArticle(article, gender, word);
    const important = importantFor(article, gender);
    const be = beFor(article);
    const helpVerb = helpVerbFor(article);
    return {
      a1: [
        `Je vois ${noun}.`, `Je cherche ${noun}.`, `${cap(noun)} ${be} ${important}.`, `Je note ${word}.`,
        `Tu connais ${noun}.`, `Il utilise ${noun}.`, `Elle regarde ${noun}.`, `Nous trouvons ${noun}.`,
        `Vous demandez ${noun}.`, `Ils parlent ${deN}.`, `Elles choisissent ${noun}.`, `${cap(noun)} est sur le plan.`,
        `Le voyageur cherche ${noun}.`, `Je répète ${word}.`, `Il montre ${noun}.`, `Elle prépare son voyage.`,
        `La ville contient ${noun}.`, `La carte indique ${noun}.`, `Ce lieu est facile à trouver.`, `Je répète ${word}.`,
        `Nous écrivons ${word}.`, `Tu apprends ${word}.`, `La classe regarde ${noun}.`, `Je montre ${noun} au professeur.`, `Cette leçon parle ${deN}.`,
      ],
      a2: [
        `Hier, j'ai cherché ${noun} sur le plan.`, `Demain, je vais chercher ${noun}.`,
        `Quand je voyage, j'utilise souvent ${noun}.`, `Ce matin, le guide a montré ${noun}.`,
        `Nous avons demandé où se trouvait ${noun}.`, `Ils vont préparer le trajet avant le départ.`,
        `J'ai choisi ${noun} parce que c'était pratique.`, `Elle a noté ${word} dans son carnet de voyage.`,
        `Avant de partir, nous avons parlé ${deN}.`, `Le groupe a trouvé ${noun} près de la gare.`,
        `Je vais chercher ${noun} après l'arrivée.`, `Nous avons associé ${noun} à une image.`,
        `Hier soir, mon frère a vérifié ${noun} sur internet.`, `Pendant les vacances, nous utilisions souvent ${noun}.`,
        `Elle a oublié le mot ${word} pendant l'exercice.`, `Il va utiliser ${word} dans sa phrase.`,
        `Nous avons trouvé ${noun} dans le dialogue de voyage.`, `Ce week-end, je vais mémoriser ${word}.`,
        `L'élève a ajouté ${word} dans sa réponse.`, `J'ai compris le mot ${word} pour la première fois.`,
        `Ma sœur a choisi ${noun} pour son exemple.`, `Ils ont répété ${word} à voix haute.`,
        `Nous allons revoir ${noun} avec le professeur.`, `Elle a noté ${word} pour ne pas l'oublier.`, `La classe a demandé un exemple avec ${noun}.`,
      ],
      b1: [
        `Bien que ${noun} semble facile à trouver, il vaut mieux vérifier l'adresse avant de partir.`,
        `Comme ${noun} se trouve près du centre, nous pouvons y aller à pied.`,
        `Si tu connais ${word}, tu comprendras mieux les indications pendant le voyage.`,
        `Même si je connais déjà ${word}, je dois encore l'utiliser dans une phrase complète.`,
        `Le voyageur, qui cherchait son chemin, a demandé où se trouvait ${noun}.`,
        `La leçon que nous travaillons utilise ${word} dans plusieurs situations de déplacement.`,
        `Pendant que le guide montrait ${noun}, les élèves prenaient des notes.`,
        `Puisque ${noun} ${helpVerb} à s'orienter, nous l'avons ajouté au plan.`,
        `Lorsque tu auras mémorisé ${word}, tu pourras demander ton chemin plus naturellement.`,
        `Je pense que ${noun} aide les élèves parce que ce mot revient souvent en voyage.`,
        `Même quand la phrase est courte, ${word} peut donner une information précise.`,
        `Le mot dont je parle est ${word}, que la classe doit retenir.`,
        `Tant que tu pratiqueras ${word}, tu comprendras mieux les dialogues de voyage.`,
        `Bien que ${noun} demande peu d'explications, il faut choisir le bon article.`,
        `Si l'exercice contient ${word}, je penserai au vocabulaire du déplacement.`,
      ],
    };
  }

  if (cat === "time" || cat === "school" || cat === "quantity") {
    const context = cat === "activity" ? "activité" : cat === "school" ? "cours" : cat === "quantity" ? "mesure" : "moment";
    const deN = deWithArticle(article, gender, word);
    const important = importantFor(article, gender);
    const utile = utileFor(article);
    const be = beFor(article);
    const helpVerb = helpVerbFor(article);
    return {
      a1: [
        `Je connais ${noun}.`, `J'utilise ${noun}.`, `${cap(noun)} ${be} ${important}.`, `${cap(noun)} ${be} ${utile}.`,
        `Je note ${noun}.`, `Je regarde ${noun}.`, `Tu choisis ${noun}.`, `Il apprend ${noun}.`,
        `Elle répète ${noun}.`, `Nous travaillons avec ${noun}.`, `Vous voyez ${noun}.`, `Ils parlent ${deN}.`,
        `Elles aiment ${noun}.`, `${cap(noun)} ${be} dans la leçon.`, `${cap(noun)} ${be} au tableau.`,
        `Je lis ${noun}.`, `Je cherche ${noun}.`, `Il écrit ${noun}.`, `Elle montre ${noun}.`,
        `Le professeur explique ${noun}.`, `La classe étudie ${noun}.`, `Ce ${context} est simple.`,
        `Je comprends ${noun}.`, `Nous répétons ${noun}.`, `Tu apprends ${noun}.`,
      ],
      a2: [
        `Hier, j'ai étudié ${noun} en classe.`, `Demain, je vais revoir ${noun}.`,
        `Quand j'étais débutant, je confondais souvent ${noun}.`, `Ce matin, le professeur a expliqué ${noun}.`,
        `Nous avons utilisé ${noun} dans un exercice.`, `Ils vont apprendre ${noun} cette semaine.`,
        `J'ai choisi ${noun} parce que c'était utile.`, `Elle a écrit ${noun} dans son cahier.`,
        `Avant le test, nous avons répété ${noun}.`, `Le groupe a parlé ${deN} pendant le cours.`,
        `Je vais pratiquer ${noun} après le repas.`, `Nous avons corrigé ${noun} ensemble.`,
        `Hier soir, mon frère a révisé ${noun}.`, `Pendant les vacances, je revoyais souvent ${noun}.`,
        `Elle a oublié ${noun} pendant l'exercice.`, `Il va utiliser ${noun} dans sa phrase.`,
        `Nous avons trouvé ${noun} dans le texte.`, `Ce week-end, je vais mémoriser ${noun}.`,
        `L'élève a ajouté ${noun} dans sa réponse.`, `J'ai compris ${noun} pour la première fois.`,
        `Ma sœur a choisi ${noun} pour son exemple.`, `Ils ont répété ${noun} à voix haute.`,
        `Nous allons revoir ${noun} avec le professeur.`, `Elle a noté ${noun} pour ne pas l'oublier.`, `La classe a demandé ${noun} au tableau.`,
      ],
      b1: [
        `Bien que ${noun} semble simple, il faut l'utiliser avec précision.`,
        `Comme ${noun} revient souvent, le professeur l'a expliqué plusieurs fois.`,
        `Si tu maîtrises ${noun}, tu comprendras mieux les exercices.`,
        `Même si je connais ${noun}, je dois encore le pratiquer.`,
        `L'élève, qui voulait progresser, a choisi ${noun} comme exemple.`,
        `La leçon que nous travaillons utilise ${noun} dans plusieurs phrases.`,
        `Pendant que le professeur expliquait ${noun}, les élèves prenaient des notes.`,
        `Puisque ${noun} était difficile, nous avons fait un exercice supplémentaire.`,
        `Lorsque tu auras révisé ${noun}, tu pourras passer à la suite.`,
        `Je pense que ${noun} ${helpVerb} les élèves parce que cela donne un repère clair.`,
        `Même quand l'exercice est court, ${noun} peut être important.`,
        `Le mot dont je parle est ${noun}, que la classe doit retenir.`,
        `Tant que tu pratiqueras ${noun}, tu feras des progrès.`,
        `Bien que ${noun} demande de l'attention, il devient plus facile avec l'habitude.`,
        `Si l'exercice contient ${noun}, je lirai la consigne avec soin.`,
      ],
    };
  }

  const person = cat === "profession" || cat === "family" || cat === "status";
  if (!person) {
    const deN = deWithArticle(article, gender, word);
    const important = importantFor(article, gender);
    const utile = utileFor(article);
    const be = beFor(article);
    return {
      a1: [
        `Je vois ${noun}.`, `J'utilise ${noun}.`, `${cap(noun)} ${be} ${utile}.`, `${cap(noun)} ${be} ${important}.`,
        `Je cherche ${noun}.`, `Je prends ${noun}.`, `Tu veux ${one}.`, `Il montre ${noun}.`,
        `Elle range ${noun}.`, `Nous avons ${noun}.`, `Vous regardez ${noun}.`, `Ils parlent ${deN}.`,
        `Elles choisissent ${noun}.`, `${cap(noun)} ${be} dans la pièce.`, `${cap(noun)} ${be} ici.`,
        `Je prépare ${noun}.`, `Je trouve ${noun}.`, `Il utilise ${noun}.`, `Elle choisit ${noun}.`,
        `La maison contient ${noun}.`, `La classe utilise ${noun}.`, `Ce mot désigne ${noun}.`,
        `Je mets ${noun} ici.`, `Nous partageons ${one}.`, `Tu prends ${one}.`,
      ],
      a2: [
        `Hier, j'ai utilisé ${noun} pendant l'exercice.`, `Demain, je vais ranger ${noun}.`,
        `Quand j'étais petit, je voyais souvent ${noun} à la maison.`, `Ce matin, j'ai cherché ${noun}.`,
        `Nous avons placé ${noun} près de la porte.`, `Ils vont utiliser ${noun} cette semaine.`,
        `J'ai choisi ${noun} parce que c'était pratique.`, `Elle a nettoyé ${noun} avant de partir.`,
        `Avant le cours, nous avons préparé ${noun}.`, `Le groupe a observé ${noun} sur l'image.`,
        `Je vais prendre ${noun} après le repas.`, `Nous avons comparé ${noun} avec un autre objet.`,
        `Hier soir, mon frère a déplacé ${noun}.`, `Pendant les vacances, nous utilisions souvent ${noun}.`,
        `Elle a oublié ${noun} dans la salle.`, `Il va dessiner ${noun} dans son cahier.`,
        `Nous avons trouvé ${noun} dans le placard.`, `Ce week-end, je vais réparer ${noun}.`,
        `L'élève a décrit ${noun} avec une phrase simple.`, `J'ai compris le mot ${word} pour la première fois.`,
        `Ma sœur a montré ${noun} au professeur.`, `Ils ont rangé ${noun} après l'activité.`,
        `Nous allons revoir ${noun} avec la classe.`, `Elle a noté ${word} pour ne pas l'oublier.`, `La classe a demandé un exemple avec ${noun}.`,
      ],
      b1: [
        `Bien que ${noun} semble simple, il peut être utile dans plusieurs situations.`,
        `Comme ${noun} était difficile à trouver, nous avons demandé de l'aide.`,
        `Si tu utilises ${noun} correctement, l'activité sera plus facile.`,
        `Même si je connais déjà ${word}, je dois encore l'employer dans une phrase.`,
        `L'objet que nous avons observé s'appelle ${word}.`,
        `La leçon que nous travaillons utilise ${noun} dans plusieurs exemples.`,
        `Pendant que le professeur montrait ${noun}, les élèves prenaient des notes.`,
        `Puisque ${noun} était au centre de l'image, tout le monde l'a remarqué.`,
        `Lorsque tu auras mémorisé ${word}, tu pourras l'utiliser plus naturellement.`,
        `Je pense que ${noun} aide à comprendre la situation parce qu'il donne un repère concret.`,
        `Même quand la phrase est courte, ${noun} peut donner une information précise.`,
        `Le mot dont je parle est ${word}, que la classe doit retenir.`,
        `Tant que tu pratiqueras ${word}, tu l'utiliseras plus facilement.`,
        `Bien que ${noun} demande peu d'explications, il faut choisir le bon article.`,
        `Si l'exercice contient ${noun}, je lirai la consigne avec attention.`,
      ],
    };
  }
  const important = importantFor(article, gender);
  const utile = utileFor(article);
  const be = beFor(article);
  return {
    a1: [
      `Je vois ${noun}.`, `J'utilise ${noun}.`, `${cap(noun)} ${be} ${utile}.`, `${cap(noun)} ${be} ${important}.`,
      `Je cherche ${noun}.`, `Je prends ${noun}.`, `Tu veux ${one}.`, `Il montre ${noun}.`,
      `Elle range ${noun}.`, `Nous avons ${noun}.`, `Vous regardez ${noun}.`, `Ils parlent ${deWithArticle(article, gender, word)}.`,
      `Elles choisissent ${noun}.`, `${cap(noun)} ${be} dans la pièce.`, `${cap(noun)} ${be} sur la table.`,
      `Je prépare ${noun}.`, `Je trouve ${noun}.`, `Il utilise ${noun}.`, `Elle choisit ${noun}.`,
      `La maison contient ${noun}.`, `La classe utilise ${noun}.`, `Ce mot désigne ${noun}.`,
      `Je mets ${noun} ici.`, `Nous partageons ${one}.`, `Tu prends ${one}.`,
    ],
    a2: [
      `Hier, ${noun} a parlé avec le professeur.`, `Demain, ${noun} va venir à la maison.`,
      `Quand j'étais petit, je voyais souvent ${noun}.`, `Ce matin, ${noun} a pris le bus.`,
      `${cap(noun)} a préparé le repas hier soir.`, `${cap(noun)} va aider les enfants demain.`,
      `Avant, ${noun} habitait dans une autre ville.`, `${cap(noun)} a acheté du pain au magasin.`,
      `Pendant les vacances, ${noun} venait souvent nous voir.`, `${cap(noun)} a oublié ses clés ce matin.`,
      `Je vais appeler ${noun} après le cours.`, `${cap(noun)} a travaillé tard hier.`,
      `Nous avons rencontré ${noun} dans la rue.`, `${cap(noun)} va organiser une sortie samedi.`,
      `Quand il faisait froid, ${noun} restait à la maison.`, `${cap(noun)} a expliqué le problème calmement.`,
      `Hier soir, ${noun} a regardé un film.`, `${cap(noun)} va chercher les enfants à l'école.`,
      `Ce week-end, ${noun} a rangé la cuisine.`, `${cap(noun)} a appris une bonne nouvelle.`,
      `Je pense que ${noun} va arriver bientôt.`, `${cap(noun)} a donné un conseil utile.`,
      `Avant le repas, ${noun} a mis la table.`, `${cap(noun)} va partir en voyage demain.`, `${cap(noun)} a fini son travail à l'heure.`,
    ],
    b1: [
      `Bien que ${noun} soit occupé, il trouve toujours le temps d'aider les autres.`,
      `Comme ${noun} connaît bien la situation, il peut donner un conseil utile.`,
      `Si ${noun} avait plus de temps, il participerait davantage aux activités.`,
      `Même quand la journée est difficile, ${noun} reste calme et disponible.`,
      `${cap(noun)}, que nous avons rencontré hier, nous a expliqué la situation.`,
      `Pendant que ${noun} préparait le repas, les enfants rangeaient la table.`,
      `Puisque ${noun} travaille beaucoup, il préfère se reposer le soir.`,
      `Lorsque ${noun} aura terminé son travail, il viendra nous rejoindre.`,
      `Je pense que ${noun} progresse parce qu'il pratique le français chaque jour.`,
      `Tant que ${noun} restera motivé, il continuera à faire des progrès.`,
      `Même si ${noun} ne parle pas parfaitement, il ose poser des questions.`,
      `${cap(noun)} a expliqué qu'il voulait mieux comprendre les consignes.`,
      `Le voisin dont je parle connaît ${noun} depuis plusieurs années.`,
      `Bien que ${noun} ait changé de ville, il garde contact avec ses amis.`,
      `Si nous revoyons ${noun}, nous lui demanderons de nous accompagner.`,
    ],
  };
}

function padLevel(existing, generated, target) {
  const out = unique(existing);
  for (const sentence of generated) {
    if (!out.includes(sentence)) out.push(sentence);
  }
  let i = 1;
  while (out.length < target) {
    const base = generated[(i - 1) % generated.length] || `Phrase ${i}.`;
    const sentence = base.replace(/\.$/, ` ${i}.`);
    if (!out.includes(sentence)) out.push(sentence);
    i++;
  }
  return out;
}

function extraSentencePools(file, word, article, gender) {
  const def = definite(article, gender, word);
  const ind = indefinite(article, gender, word);
  const noun = withArticle(def, word);
  const one = withArticle(ind, word);
  const about = deWithArticle(article, gender, word);
  const cat = category(file, word);
  if (cat === "status") {
    return {
      a1: [
        `Je lis le mot ${word}.`,
        `J'écris ${word}.`,
        `Le mot ${word} est dans la leçon.`,
        `Je répète ${word} à voix haute.`,
        `Tu comprends ${word}.`,
        `Nous apprenons ${word}.`,
        `La classe étudie ${word}.`,
        `Je montre le mot ${word} au professeur.`,
        `Ce mot parle de l'état civil.`,
        `Cette leçon explique ${word}.`,
      ],
      a2: [
        `Après la leçon, j'ai utilisé le mot ${word} dans une phrase.`,
        `Demain, je vais apprendre à mieux employer ${word}.`,
        `Quand je lis le formulaire, je cherche le sens de ${word}.`,
        `Ce matin, nous avons associé ${word} à une situation.`,
        `Pendant l'exercice, j'ai écrit une phrase avec ${word}.`,
        `Le professeur a demandé un exemple avec ${word}.`,
        `J'ai choisi ${word} parce que ce mot était dans la liste.`,
        `Nous allons réviser ${word} avant l'évaluation.`,
        `Mon camarade a expliqué ${word} avec ses mots.`,
        `J'ai ajouté ${word} dans mon carnet de vocabulaire.`,
      ],
      b1: [
        `Bien que le mot ${word} paraisse simple, il faut l'utiliser dans un contexte clair.`,
        `Comme ${word} apparaît souvent dans cette leçon, je l'ai noté dans mon cahier.`,
        `Si je comprends bien ${word}, je pourrai l'employer dans une phrase personnelle.`,
        `Même si je connais déjà ${word}, je dois encore le prononcer correctement.`,
        `Le professeur, qui veut enrichir notre vocabulaire, nous demande d'utiliser ${word}.`,
        `Lorsque j'aurai mémorisé ${word}, je pourrai l'utiliser plus naturellement.`,
        `Pendant que les autres lisaient, j'ai cherché un exemple avec ${word}.`,
        `Puisque ${word} est utile, je le révise régulièrement.`,
      ],
    };
  }
  const imageItem = cat === "activity" ? noun : one;
  return {
    a1: [
      `Aujourd'hui, je vois ${noun}.`,
      `Dans mon cahier, j'écris ${word}.`,
      `Le mot ${word} est nouveau pour moi.`,
      `Je répète ${word} à voix haute.`,
      `Tu connais ${noun}.`,
      `Nous dessinons ${noun}.`,
      `La classe regarde ${noun}.`,
      `Je montre ${noun} au professeur.`,
      `Il y a ${imageItem} dans l'image.`,
      `Cette leçon parle ${about}.`,
    ],
    a2: [
      `Après la leçon, j'ai utilisé le mot ${word} dans une phrase.`,
      `Demain, je vais apprendre à mieux employer ${noun}.`,
      `Quand je lis le texte, je cherche le sens de ${word}.`,
      `Ce matin, nous avons associé ${noun} à une image.`,
      `Pendant l'exercice, j'ai écrit une phrase avec ${word}.`,
      `Le professeur a demandé un exemple avec ${noun}.`,
      `J'ai choisi ${noun} parce que ce mot était dans la liste.`,
      `Nous allons réviser ${noun} avant l'évaluation.`,
      `Mon camarade a expliqué ${noun} avec ses mots.`,
      `J'ai ajouté ${word} dans mon carnet de vocabulaire.`,
    ],
    b1: [
      `Bien que le mot ${word} paraisse simple, il faut l'utiliser dans un contexte clair.`,
      `Comme ${noun} apparaît souvent dans cette leçon, je l'ai noté dans mon cahier.`,
      `Si je comprends bien ${noun}, je pourrai l'employer dans une phrase personnelle.`,
      `Même si je connais déjà ${word}, je dois encore le prononcer correctement.`,
      `Le professeur, qui veut enrichir notre vocabulaire, nous demande d'utiliser ${noun}.`,
      `Lorsque j'aurai mémorisé ${word}, je pourrai l'utiliser plus naturellement.`,
      `Pendant que les autres lisaient, j'ai cherché un exemple avec ${noun}.`,
      `Puisque ${word} est utile, je le révise régulièrement.`,
    ],
  };
}

function formatSentences(sentences, indent) {
  const pad = " ".repeat(indent);
  const itemPad = " ".repeat(indent + 2);
  return `{\n${pad}a1: [\n${sentences.a1.map((s) => `${itemPad}${JSON.stringify(s)},`).join("\n")}\n${pad}],\n${pad}a2: [\n${sentences.a2.map((s) => `${itemPad}${JSON.stringify(s)},`).join("\n")}\n${pad}],\n${pad}b1: [\n${sentences.b1.map((s) => `${itemPad}${JSON.stringify(s)},`).join("\n")}\n${pad}],\n${" ".repeat(indent - 2)}}`;
}

function updateFile(relPath) {
  const abs = path.join(ROOT, relPath);
  const source = fs.readFileSync(abs, "utf8");
  const sf = ts.createSourceFile(relPath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const edits = [];

  function visit(node) {
    if (ts.isPropertyAssignment(node) && propName(node.name) === "words" && ts.isArrayLiteralExpression(node.initializer)) {
      for (const el of node.initializer.elements) {
        if (!ts.isObjectLiteralExpression(el)) continue;
        const word = getStringProp(el, "word");
        if (!word) continue;
        const article = getStringProp(el, "article") || "";
        const gender = getStringProp(el, "gender") || "";
        const feminine = getStringProp(el, "feminine") || "";
        const gen = makeGenerators(relPath, word, article, gender, feminine);
        const extra = extraSentencePools(relPath, word, article, gender);
        const forceReplace = true;
        const next = {
          a1: padLevel(forceReplace ? [] : getArrayStrings(el, "a1"), [...gen.a1, ...extra.a1], 25),
          a2: padLevel(forceReplace ? [] : getArrayStrings(el, "a2"), [...gen.a2, ...extra.a2], 25),
          b1: padLevel(forceReplace ? [] : getArrayStrings(el, "b1"), [...gen.b1, ...extra.b1], 15),
        };
        const existing = getProp(el, "exampleSentences");
        if (existing) {
          edits.push({ start: existing.getStart(sf), end: existing.getEnd(), text: `exampleSentences: ${formatSentences(next, 8)}` });
        } else {
          const insertAt = el.getEnd() - 1;
          const beforeEnd = source.slice(el.getStart(sf), insertAt).trimEnd();
          const needsComma = beforeEnd.length > 0 && !beforeEnd.endsWith(",");
          edits.push({ start: insertAt, end: insertAt, text: `${needsComma ? "," : ""} exampleSentences: ${formatSentences(next, 6)} ` });
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);

  let out = source;
  edits.sort((a, b) => b.start - a.start);
  for (const edit of edits) {
    out = out.slice(0, edit.start) + edit.text + out.slice(edit.end);
  }
  fs.writeFileSync(abs, out, "utf8");
  return edits.length;
}

let total = 0;
for (const target of TARGETS) {
  const count = updateFile(target);
  total += count;
  console.log(`${target}: ${count} mots`);
}
console.log(`Total: ${total} mots`);
