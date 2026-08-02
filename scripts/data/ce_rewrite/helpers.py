# helpers for CE question building
EMPTY_IMG = ["", "", ""]


def prof_q(text_q, correct, wrong1, wrong2, fill_q, fill, vf_q, vf_c, fill_a=None, img=None):
    text = [correct, wrong1, wrong2]
    return {
        "textQ": text_q,
        "text": text,
        "textC": 0,
        "img": img or [correct.lower(), wrong1.lower(), wrong2.lower()],
        "imgC": 0,
        "fillQ": fill_q,
        "fill": fill,
        "fillA": fill_a,
        "vfQ": vf_q,
        "vfC": vf_c,
    }


def q(text_q, correct, wrong1, wrong2, fill_q, fill, vf_q, vf_c, fill_a=None, img=None):
    return {
        "textQ": text_q,
        "text": [correct, wrong1, wrong2],
        "textC": 0,
        "img": img or EMPTY_IMG,
        "imgC": 0,
        "fillQ": fill_q,
        "fill": fill,
        "fillA": fill_a,
        "vfQ": vf_q,
        "vfC": vf_c,
    }
