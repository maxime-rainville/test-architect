# Ice Hockey Rink — Image prompts & page copy

Fictional modern community ice rink for amateur league play and public skating. Visual language: cool ice blues, warm timber lobby, light steel structure, park-edge setting. **No people, no readable logos or text** in generated images.

This fixture exercises **mixed native image formats** in one gallery (JPEG, animated GIF, PNG, WEBP, AVIF, TIFF, BMP, JPEG 2000, SVG). Each gallery slot uses a distinct file extension via direct `<img src>`.

---

## Page copy

**Title:** Ice Hockey Rink  
**Location:** Fictional Lakeside, NZ  
**Year:** 2024  
**Photo credit:** All photos: Morgan Hale  

**Overview:**

> A compact community ice rink designed for amateur league play and public skating. The bowl sits under a light steel roof with clerestory daylighting; spectator seating wraps three sides with transparent boards and a warm timber lobby facing the park. Plant rooms and changing pavilions are tucked along the long elevation so the ice stays the visual focus.
>
> This is a placeholder project for testing. All content is fictional.

**Awards:**

- Community Recreation Architecture Award (Fake), 2025

**Related pictures (4):** Coastal Retreat, Urban Loft, Sustainable Pavilion, Mountain Cabin

---

## Format map (canonical gallery filenames)

| # | Filename | Format | Aspect | Source |
|---|----------|--------|--------|--------|
| 01 | `ice-hockey-rink-01.jpg` | JPEG | 16:9 | AI still → `magick` JPEG |
| 02 | `ice-hockey-rink-02.gif` | GIF (animated, 2 frames) | 4:3 | Two AI lobby stills → `magick` GIF |
| 03 | `ice-hockey-rink-03.png` | PNG | 16:9 | AI still → `magick` PNG |
| 04 | `ice-hockey-rink-04.webp` | WEBP | 4:3 | AI still → `magick` WEBP |
| 05 | `ice-hockey-rink-05.avif` | AVIF | 1:1 | AI still → `magick` AVIF |
| 06 | `ice-hockey-rink-06.tif` | TIFF | 3:4 | AI still → `magick` TIFF |
| 07 | `ice-hockey-rink-07.bmp` | BMP | 1:1 | AI still → `magick` BMP |
| 08 | `ice-hockey-rink-08.jp2` | JPEG 2000 | 16:9 | AI still → `magick` JP2 |
| 09 | `ice-hockey-rink-09.svg` | SVG | diagram | Hand-authored rink plan (not AI photo) |

Intermediate AI PNGs (working names) may live beside the shipped gallery files for reconvert; the HTML gallery must reference only the nine filenames above.

---

## Gallery photos

### ice-hockey-rink-01.jpg

- **Aspect ratio:** 16:9 (landscape)
- **Format:** JPEG
- **Prompt:** Wide architectural photograph of a modern community ice rink pavilion at dusk, light steel roof canopy, timber-clad lobby facing a park, cool blue twilight sky, empty forecourt, no people, no readable signage or logos, cinematic architectural photography.

### ice-hockey-rink-02.gif (animated — two frames)

Build a subtle 2-frame animated GIF from two near-identical lobby stills (soft light shift only). Working frame files before convert: `ice-hockey-rink-02-frame-a.png`, `ice-hockey-rink-02-frame-b.png`.

#### Frame A — ice-hockey-rink-02-frame-a.png

- **Aspect ratio:** 4:3 (landscape)
- **Prompt:** Interior architectural photograph of an empty warm timber ice-rink lobby looking toward tempered glass rink boards, recessed ceiling lights at soft warm intensity, polished concrete floor, cool ice glow beyond glass, no people, no logos or readable text, professional interior photography.

#### Frame B — ice-hockey-rink-02-frame-b.png

- **Aspect ratio:** 4:3 (landscape)
- **Prompt:** Same empty warm timber ice-rink lobby looking toward tempered glass rink boards as the previous frame, slightly cooler and dimmer recessed lighting, same camera angle and composition, polished concrete floor, cool ice glow beyond glass, no people, no logos or readable text, professional interior photography.

**GIF assembly (loop2):** `magick -delay 80 -loop 0 ice-hockey-rink-02-frame-a.png ice-hockey-rink-02-frame-b.png ice-hockey-rink-02.gif`

### ice-hockey-rink-03.png

- **Aspect ratio:** 16:9 (landscape)
- **Format:** PNG
- **Prompt:** Wide interior architectural photograph of an empty ice hockey rink bowl, white ice sheet with faint blue rink lines only (no readable logos or advertisements), transparent boards, light steel roof trusses, clerestory daylight, empty spectator stands on three sides, cool palette, no people, architectural sports-venue photography.

### ice-hockey-rink-04.webp

- **Aspect ratio:** 4:3 (landscape)
- **Format:** WEBP
- **Prompt:** Interior architectural photograph of empty player benches and tempered glass boards beside an ice rink, open team boxes with timber seats, cool interior light, white ice edge in foreground, no people, no logos or readable text on boards, professional interior photography.

### ice-hockey-rink-05.avif

- **Aspect ratio:** 1:1 (square)
- **Format:** AVIF
- **Prompt:** Square format photograph of an upper mezzanine warming track overlooking an empty ice rink below, timber handrail, soft daylight through clerestory, light steel structure, cool ice bowl in background, no people, no signage text, architectural interior photography.

### ice-hockey-rink-06.tif

- **Aspect ratio:** 3:4 (portrait)
- **Format:** TIFF
- **Prompt:** Portrait orientation exterior photograph of a changing pavilion long elevation at a community ice rink, timber cladding and pale concrete base, overcast daylight, park trees soft in background, empty of people, no readable signage or logos, architectural photography.

### ice-hockey-rink-07.bmp

- **Aspect ratio:** 1:1 (square)
- **Format:** BMP
- **Prompt:** Square format close-up architectural detail of ice-rink roof clerestory glazing, light steel mullions and translucent panels against ice-blue sky, shallow depth of field, no people, no readable markings, material study photography.

### ice-hockey-rink-08.jp2

- **Aspect ratio:** 16:9 (landscape)
- **Format:** JPEG 2000
- **Prompt:** Wide night exterior architectural photograph of a community ice rink pavilion, cool white scrub lights on a light steel canopy, empty forecourt, timber lobby glow through glass, deep blue night sky, no people, no readable logos or text, cinematic architectural photography.

### ice-hockey-rink-09.svg

- **Aspect ratio:** diagram (viewBox landscape)
- **Format:** SVG (hand-authored; not AI-generated photo)
- **Notes:** Simple top-down rink plan diagram in clean geometric SVG. Include: ice rectangle, boards outline, player benches along long sides, lobby block on one short end, spectator bands on three sides. Labels only with generic letters **A–D** (e.g. A = ice, B = lobby, C = benches, D = plant). No branding, no logos, no readable real-world text, no photographs. Prefer solid fills and strokes in cool blues / warm timber accents matching the visual language.

---

## Export notes

1. Generate stills with Cursor `GenerateImage` using the prompts above (aspect ratios as listed).
2. Save working PNGs into `assets/images/projects/ice-hockey-rink/`.
3. Convert with ImageMagick 7 (`magick`) to the **exact gallery filenames** in the format map.
4. Recommended export sizes (adjust if the tool prefers other dimensions):
   - Gallery 16:9: ~1920×1080
   - Gallery 4:3: ~1600×1200
   - Gallery 1:1: ~1200×1200
   - Gallery portrait 3:4: ~1200×1600
5. Build `ice-hockey-rink-02.gif` from the two lobby frames; hand-author `ice-hockey-rink-09.svg`.
6. Ship the nine gallery files; intermediate PNGs optional for reconvert.

---

## Source file mapping

| # | Shipped file | Working / source | Convert |
|---|--------------|------------------|---------|
| 01 | `ice-hockey-rink-01.jpg` | AI PNG | `magick … jpg` |
| 02 | `ice-hockey-rink-02.gif` | frame-a + frame-b PNGs | animated GIF |
| 03 | `ice-hockey-rink-03.png` | AI PNG | copy/optimize PNG |
| 04 | `ice-hockey-rink-04.webp` | AI PNG | `magick … webp` |
| 05 | `ice-hockey-rink-05.avif` | AI PNG | `magick … avif` |
| 06 | `ice-hockey-rink-06.tif` | AI PNG | `magick … tif` |
| 07 | `ice-hockey-rink-07.bmp` | AI PNG | `magick … bmp` |
| 08 | `ice-hockey-rink-08.jp2` | AI PNG | `magick … jp2` |
| 09 | `ice-hockey-rink-09.svg` | hand XML | — |
