from PIL import Image
from pathlib import Path

assets = Path(r"C:\Users\Admin\.cursor\projects\c-Users-Admin-OneDrive-Documents-Techifort\assets")
out_dir = Path(r"c:\Users\Admin\OneDrive\Documents\Techifort\public\images")

pairs = [
    ("Navbar___footer_mobile-71ca4ccd", "techifort-mark-nav-mobile.png"),
    ("Navbar___footer_tablet-2c49da59", "techifort-mark-nav-tablet.png"),
]


def remove_black_bg(img: Image.Image, threshold: int = 28, soft: int = 18) -> Image.Image:
    """Make near-black pixels transparent; soften edge with soft threshold."""
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            bright = (r + g + b) / 3
            if bright <= threshold:
                pixels[x, y] = (r, g, b, 0)
            elif bright < threshold + soft:
                alpha = int(255 * (bright - threshold) / soft)
                pixels[x, y] = (r, g, b, min(a, alpha))
    return img


for token, dest_name in pairs:
    src = next(assets.glob(f"*{token}*"), None)
    if not src:
        print(f"MISSING {token}")
        continue
    img = Image.open(src)
    print(f"SRC {src.name}: {img.size} mode={img.mode}")
    out = remove_black_bg(img)
    dest = out_dir / dest_name
    out.save(dest, "PNG")
    alphas = [p[3] for p in out.getdata()]
    transparent = sum(1 for a in alphas if a < 10)
    opaque = sum(1 for a in alphas if a > 200)
    print(f"OUT {dest_name}: {out.size} transparent~{transparent} opaque~{opaque}")

print("Done")
