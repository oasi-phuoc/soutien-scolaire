#!/usr/bin/env python3
"""Generate scenarios_data_e9.py with 20 unique msg + 20 unique email per sub-lesson."""
from pathlib import Path

def q(tq, ok, w1, w2, fq, fill, vf, vc=0, fa=None, prof=False, transport=False):
    d = {"textQ": tq, "text": [ok, w1, w2], "textC": 0, "fillQ": fq, "fill": fill, "vfQ": vf, "vfC": vc}
    if fa: d["fillA"] = fa
    if prof: d["_prof"] = True
    if transport: d["_transport"] = True
    return d

def sc(title, paras, qs):
    return {"text": title + "\n\n" + "\n".join(paras), "questions": qs}

def em(sender, subject, lines, qs):
    body = "\n\n".join([f"De : {sender}", f"Objet : {subject}", "Bonjour,", *lines, "Cordialement,", sender.split()[0]])
    return {"text": body, "questions": qs}

def build_e9_1_msg():
    return [
    sc("Frip'Art — Brocante de printemps",
    ["Le samedi 12 avril, la brocante Frip'Art investit la place du Marché de 8 h à 17 h. Plus de soixante exposants proposent vaisselle vintage, livres rares, vinyles et petits meubles restaurés.",
    "L'entrée est gratuite pour les visiteurs. Les exposants paient quinze euros pour un emplacement de trois mètres sur deux.",
    "Un service de restauration locale propose tartines et boissons chaudes de midi à quinze heures, sous le grand chapiteau blanc à l'est de la place.",
    "Pour vendre vos objets, inscrivez-vous avant le 5 avril sur le site fripart.fr ou à la mairie, bureau culturel, du mardi au vendredi."],
    [q("Quel jour a lieu la brocante ?","Le samedi 12 avril","Le dimanche 13 avril","Le vendredi 11 avril","La brocante a lieu le samedi 12 _________.","avril","La brocante est le samedi 12 avril.",0),
     q("Combien coûte l'emplacement ?","Quinze euros","Trente euros","C'est gratuit","Les exposants paient _________ euros.","quinze","L'emplacement coûte quinze euros.",0,["15"]),
     q("Que peut-on manger sur place ?","Des tartines et des boissons chaudes","Un menu gastronomique","Rien","On propose tartines et boissons _________.","chaudes","Il y a un service de restauration.",0),
     q("Où se trouve le chapiteau ?","À l'est de la place","Au nord du parc","Dans la mairie","Le chapiteau est à l'______ de la place.","est","Le chapiteau est à l'est.",0),
     q("Jusqu'à quand s'inscrire pour vendre ?","Avant le 5 avril","Le jour même","Après la brocante","Inscrivez-vous avant le 5 _________.","avril","Il faut s'inscrire avant le 5 avril.",0),
     q("L'entrée est-elle payante ?","Non, elle est gratuite","Oui, cinq euros","Oui, dix euros","L'entrée est _________ pour les visiteurs.","gratuite","L'entrée est gratuite.",0),
     q("Combien d'exposants ?","Plus de soixante","Une dizaine","Deux cents","Plus de _________ exposants.","soixante","Il y a plus de soixante exposants.",0,["60"])]),
    sc("PharmaVie — Semaine du bien-être",
    ["Du 3 au 9 mars, votre pharmacie PharmaVie organise une semaine spéciale autour du sommeil et du stress.",
    "Chaque après-midi de 15 h à 18 h, une infirmière diplômée répond gratuitement à vos questions sur l'hygiène de vie. Aucun rendez-vous n'est nécessaire.",
    "Mercredi 6 mars à 18 h 30, le pharmacien anime une conférence de quarante-cinq minutes sur les plantes apaisantes. Places limitées : réservez au comptoir ou par téléphone.",
    "Toute la semaine, les compléments NuitCalme sont à moins vingt pour cent. Offre non cumulable avec d'autres promotions en cours."],
    [q("Quel thème ?","Le sommeil et le stress","La nutrition sportive","Les allergies","Une semaine autour du sommeil et du _________.","stress","Le thème est le sommeil et le stress.",0),
     q("Qui répond l'après-midi ?","Une infirmière diplômée","Un médecin","Un psychologue","Une _________ diplômée répond à vos questions.","infirmière","Une infirmière répond.",0,None,True),
     q("Faut-il un rendez-vous ?","Non","Oui","Seulement mercredi","Aucun rendez-vous n'est _________.","nécessaire","Pas de rendez-vous nécessaire.",0),
     q("Quand la conférence ?","Mercredi 6 mars à 18 h 30","Lundi 3 mars","Samedi 9 mars","Mercredi 6 mars à 18 h _________.","30","La conférence est mercredi à 18 h 30.",0),
     q("Durée de la conférence ?","Quarante-cinq minutes","Une heure","Vingt minutes","Une conférence de _________ minutes.","quarante-cinq","La conférence dure 45 minutes.",0,["45"]),
     q("Réduction NuitCalme ?","Moins vingt pour cent","Moins cinquante pour cent","Aucune","Les produits sont à moins _________ pour cent.","vingt","Réduction de vingt pour cent.",0),
     q("Comment réserver ?","Au comptoir ou par téléphone","En ligne seulement","Par courrier","Réservez au comptoir ou par _________.","téléphone","Réservation au comptoir ou par téléphone.",0,["telephone"])]),
    ]
    # NOTE: generator continues in full file - this is start

if __name__ == "__main__":
    msgs = build_e9_1_msg()
    print(f"E9.1 msg: {len(msgs)} scenarios")
