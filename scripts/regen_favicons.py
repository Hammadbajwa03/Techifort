"""Regenerate favicons from the transparent blue mark (no black background)."""

from pathlib import Path

from PIL import Image

ROOT = Path(r"c:\Users\Admin\OneDrive\Documents\Techifort\public")
SRC = ROOT / "images" / "techifort-mark-icon-512.png"


def crop_content(img: Image.Image, pad: int = 8) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.width, r + pad)
    b = min(img.height, b + pad)
    return img.crop((l, t, r, b))


def fit_square(img: Image.Image, size: int) -> Image.Image:
    """Contain blue mark in a transparent square canvas."""
    img = img.convert("RGBA")
    # Scale to fit with a little margin so the mark doesn't touch edges
    margin = max(1, size // 10)
    target = size - margin * 2
    ratio = min(target / img.width, target / img.height)
    nw = max(1, int(round(img.width * ratio)))
    nh = max(1, int(round(img.height * ratio)))
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(resized, ((size - nw) // 2, (size - nh) // 2), resized)
    return canvas


def main() -> None:
    mark = crop_content(Image.open(SRC).convert("RGBA"), pad=12)
    print("source cropped", mark.size)

    outputs = {
        "favicon-32.png": 32,
        "favicon-48.png": 48,
        "apple-touch-icon.png": 180,
        "apple-touch-icon-180.png": 180,
        "images/techifort-mark-512.png": 512,
    }

    for rel, size in outputs.items():
        out = fit_square(mark, size)
        dest = ROOT / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        out.save(dest, "PNG")
        corner = out.getpixel((0, 0))
        print(f"{rel}: {out.size} corner={corner}")

    print("Done")


if __name__ == "__main__":
    main()
