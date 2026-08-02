"""Master scenario database E9-E14."""
# This file is auto-generated with unique CE scenarios

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

ALL = {}
