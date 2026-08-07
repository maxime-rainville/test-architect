# Superhero Theme Playground — Image prompts & page copy

Elaborate outdoor playground themed as a comic-book superhero city. Visual language: bold primary colours (red, blue, yellow), geometric “skyscraper” climbing towers, soft-fall surfaces, shaded plazas, theatrical public-realm architecture. **No people, no readable logos or text** in generated images.

This fixture uses an **image carousel** gallery (not a static grid) and is listed on the projects index but **intentionally omitted from `sitemap.xml`**.

---

## Page copy

**Title:** Superhero Theme Playground  
**Location:** Fictional Metro Park District  
**Year:** 2025  
**Photo credit:** All photos: Alex Quinn  

**Overview:**

> An elaborate outdoor playground designed as a comic-book superhero cityscape—climbing towers as skyscrapers, zip-line gantries as flight paths, and a central plaza of bold geometric forms in primary colours. Soft-fall surfaces, shaded seating, and accessible routes keep the park family-friendly while the architecture stays theatrical and larger-than-life.
>
> This is a placeholder project for testing. Gallery images are shown in a carousel. All content is fictional.

**Awards:**

- Playground Design Award (Fake), 2025
- Public Realm Commendation (Fake), 2025

**Related pictures (4):** Urban Loft, Coastal Retreat, Sustainable Pavilion, Rocket Launch HQ

---

## Format map (canonical gallery filenames)

| # | Filename | Format | Aspect | Source |
|---|----------|--------|--------|--------|
| 01 | `superhero-theme-playground-01.webp` | WEBP | 16:9 | AI still → `magick` WEBP |
| 02 | `superhero-theme-playground-02.webp` | WEBP | 16:9 | AI still → `magick` WEBP |
| 03 | `superhero-theme-playground-03.webp` | WEBP | 4:3 | AI still → `magick` WEBP |
| 04 | `superhero-theme-playground-04.webp` | WEBP | 16:9 | AI still → `magick` WEBP |
| 05 | `superhero-theme-playground-05.webp` | WEBP | 4:3 | AI still → `magick` WEBP |
| 06 | `superhero-theme-playground-06.webp` | WEBP | 16:9 | AI still → `magick` WEBP |

Intermediate AI PNGs (working names) may live beside the shipped gallery files for reconvert; the HTML carousel must reference only the six filenames above.

---

## Gallery photos

### superhero-theme-playground-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** Wide exterior architectural photograph of an elaborate outdoor superhero-themed playground in a fictional city park, bold red blue and yellow geometric climbing structures shaped like stylized skyscrapers, soft-fall rubber ground in muted grey, empty of people, bright daylight, no readable logos text or comic lettering, cinematic public architecture photography.

### superhero-theme-playground-02.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** Wide architectural photograph of a tall climbing tower in a superhero theme playground designed like a comic-book skyscraper silhouette in primary colours, safety nets and rope bridges, soft-fall surface below, empty of people, soft afternoon light, no readable logos or text, professional playground architecture photography.

### superhero-theme-playground-03.webp

- **Aspect ratio:** 4:3 (landscape)
- **Format:** WEBP
- **Prompt:** Interior-plaza architectural photograph of a superhero theme playground central plaza with bold geometric sculptural forms in red blue and yellow, shaded timber seating, soft-fall paving patterns, empty of people, clear sky, no readable signage logos or text, public realm design photography.

### superhero-theme-playground-04.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** Wide architectural photograph of a zip-line gantry and elevated flight-path structure in a superhero theme playground, steel cables and bright primary-colour towers, soft-fall landing zone, empty of people, dramatic sky, no readable logos or text, cinematic outdoor architecture photography.

### superhero-theme-playground-05.webp

- **Aspect ratio:** 4:3 (landscape)
- **Format:** WEBP
- **Prompt:** Architectural detail photograph of soft-fall rubber surface and accessible ramp edge in a colourful superhero theme playground, primary colour curb accents, shaded canopy overhead, empty of people, soft daylight, no readable logos or text, material study public design photography.

### superhero-theme-playground-06.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** Wide exterior architectural photograph of a colourful outdoor playground with geometric primary-colour climbing towers at soft golden-hour evening light, empty plaza, soft-fall rubber ground, warm low sun, no people, no readable logos or text, cinematic public architecture photography.

---

## Export notes

1. Generate stills with Cursor `GenerateImage` using the prompts above (aspect ratios as listed).
2. Save working PNGs into `assets/images/projects/superhero-theme-playground/`.
3. Convert with ImageMagick 7 (`magick`) to the **exact gallery filenames** in the format map.
4. Recommended export sizes (adjust if the tool prefers other dimensions):
   - Gallery 16:9: ~1920×1080
   - Gallery 4:3: ~1600×1200
5. Ship the six gallery WebP files; intermediate PNGs optional for reconvert.

---

## Source file mapping

| # | Shipped file | Working / source | Convert |
|---|--------------|------------------|---------|
| 01 | `superhero-theme-playground-01.webp` | AI PNG | `magick … webp` |
| 02 | `superhero-theme-playground-02.webp` | AI PNG | `magick … webp` |
| 03 | `superhero-theme-playground-03.webp` | AI PNG | `magick … webp` |
| 04 | `superhero-theme-playground-04.webp` | AI PNG | `magick … webp` |
| 05 | `superhero-theme-playground-05.webp` | AI PNG | `magick … webp` |
| 06 | `superhero-theme-playground-06.webp` | AI PNG | `magick … webp` |
