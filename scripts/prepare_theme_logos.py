"""Prepare logo-blue.png and logo-white.png for theme-aware navbar/footer."""

from collections import Counter
from pathlib import Path

from PIL import Image

out = Path(r"c:\Users\Admin\OneDrive\Documents\Techifort\public\images")
assets = Path(
    r"C:\Users\Admin\.cursor\projects\c-Users-Admin-OneDrive-Documents-Techifort\assets"
)


def remove_black_bg(img: Image.Image, threshold: int = 40, soft: int = 25) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            bright = (r + g + b) / 3
            if bright <= threshold:
                px[x, y] = (r, g, b, 0)
            elif bright < threshold + soft:
                alpha = int(255 * (bright - threshold) / soft)
                px[x, y] = (r, g, b, min(a, alpha))
    return img


def crop_content(img: Image.Image, pad: int = 2) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.width, r + pad)
    b = min(img.height, b + pad)
    return img.crop((l, t, r, b))


def to_white(img: Image.Image) -> Image.Image:
    """Convert any visible pixels to white, preserving alpha."""
    img = img.convert("RGBA")
    px = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = px[x, y]
            if a < 10:
                continue
            px[x, y] = (255, 255, 255, a)
    return img


# User-provided white marks (tiny) — keep as reference
tablet = next(assets.glob("*Navbar___footer_tablet-c1924ba3*"))
user_white = crop_content(remove_black_bg(Image.open(tablet)))
user_white.save(out / "logo-white-source.png", "PNG")
print("logo-white-source.png", user_white.size)

# Primary pair: same composition as current navbar lockup (sharp at all sizes)
blue = crop_content(Image.open(out / "techifort-logo-lockup.png").convert("RGBA"), 4)
blue.save(out / "logo-blue.png", "PNG")
print("logo-blue.png", blue.size)

white = to_white(blue.copy())
white.save(out / "logo-white.png", "PNG")
print("logo-white.png", white.size)

# Also prepare horizontal pair from designer horizontal export (optional future use)
h = remove_black_bg(Image.open(out / "techifort-logo-horizontal.png"), 20, 15)
h = crop_content(h, 4)
opaque = [(r, g, b) for r, g, b, a in h.getdata() if a > 200]
print("horizontal opaque top", Counter(opaque).most_common(5), "size", h.size)
h.save(out / "logo-blue-horizontal.png", "PNG")
to_white(h.copy()).save(out / "logo-white-horizontal.png", "PNG")
print("Done")
