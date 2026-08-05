# Ballet Girl Room Remodel — Image prompts & page copy

Fictional girls' bedroom remodel with a ballet focus. Visual language: soft pink and cream palette, soft daylight, ballet barre and wall mirrors, tutu on a chair and pointe shoes as props only. **No people, no readable logos or text** in generated images.

This fixture exercises a dedicated **project subheading** under the title (`Girls room focus on ballet`) so scrapers can pick up a real subheading when the source page has one.

---

## Page copy

**Title:** Ballet Girl Room Remodel  
**Subheading (exact):** Girls room focus on ballet  
**Location:** Fictional Remuera, Auckland  
**Year:** 2025  
**Photo credit:** All photos: Jane Doe  

**Overview:**

> A light-filled girls' bedroom remodel organised around ballet practice at home. Soft pink and cream walls, a continuous barre and mirror wall, and a calm reading nook keep the room playful without clutter. Built-in wardrobe and vanity storage tuck costumes and shoes out of sight so the floor stays clear for stretching.
>
> This is a placeholder project for testing. All content is fictional.

**Awards:**

- Residential Interior Remodel Award (Fake), 2025
- Kids' Room Design Commendation (Fake), 2025

**Related pictures (3):** Residential House A, Urban Loft, Coastal Retreat

---

## Format map (canonical gallery filenames)

| # | Filename | Format | Aspect | Source |
|---|----------|--------|--------|--------|
| 01 | `ballet-girl-room-remodel-01.webp` | WEBP | 16:9 | AI still → `magick` WEBP |
| 02 | `ballet-girl-room-remodel-02.webp` | WEBP | 4:3 | AI still → `magick` WEBP |
| 03 | `ballet-girl-room-remodel-03.webp` | WEBP | 16:9 | AI still → `magick` WEBP |
| 04 | `ballet-girl-room-remodel-04.webp` | WEBP | 4:3 | AI still → `magick` WEBP |
| 05 | `ballet-girl-room-remodel-05.webp` | WEBP | 3:4 | AI still → `magick` WEBP |
| 06 | `ballet-girl-room-remodel-06.webp` | WEBP | 1:1 | AI still → `magick` WEBP |

Intermediate AI PNGs (working names) may live beside the shipped gallery files for reconvert; the HTML gallery must reference only the six filenames above.

---

## Gallery photos

### ballet-girl-room-remodel-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** Wide exterior architectural photograph of a suburban Auckland villa bedroom wing on a quiet Remuera street, soft morning daylight, cream weatherboard facade, tall bedroom window with sheer curtains faintly visible, neat garden edge, empty of people, no readable signage or logos, cinematic residential architectural photography.

### ballet-girl-room-remodel-02.webp

- **Aspect ratio:** 4:3 (landscape)
- **Format:** WEBP
- **Prompt:** Interior architectural photograph of an empty girls' bedroom remodel in soft pink and cream palette, made bed with pale linen, sheer curtains filtering daylight, light timber floor, calm and tidy, no people, no readable posters text or logos, professional residential interior photography.

### ballet-girl-room-remodel-03.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** Wide interior architectural photograph of an empty girls' bedroom with a continuous wooden ballet barre mounted on a full-height mirror wall, soft pink and cream walls, soft daylight, clear floor for practice, pointe shoes resting neatly on the floor near the barre as props only, no people, no readable text or logos, professional interior photography.

### ballet-girl-room-remodel-04.webp

- **Aspect ratio:** 4:3 (landscape)
- **Format:** WEBP
- **Prompt:** Interior architectural photograph of built-in cream wardrobe and a small vanity desk in a girls' ballet-themed bedroom remodel, soft pink accents, round mirror above vanity, a pale tutu draped over a chair as a prop only, soft daylight, empty of people, no readable logos or text, professional residential interior photography.

### ballet-girl-room-remodel-05.webp

- **Aspect ratio:** 3:4 (portrait)
- **Format:** WEBP
- **Prompt:** Portrait orientation interior photograph of a soft reading nook in a girls' bedroom remodel, window seat with pale cushions, cream and blush pink palette, sheer curtains, a few closed books with blank covers, soft daylight, empty of people, no readable text or logos, architectural interior photography.

### ballet-girl-room-remodel-06.webp

- **Aspect ratio:** 1:1 (square)
- **Format:** WEBP
- **Prompt:** Square format close-up architectural detail of pale timber ballet barre hardware against a mirror wall with soft pink wall edge visible, shallow depth of field, soft daylight reflection, no people, no readable markings or logos, material study photography.

---

## Export notes

1. Generate stills with Cursor `GenerateImage` using the prompts above (aspect ratios as listed).
2. Save working PNGs into `assets/images/projects/ballet-girl-room-remodel/`.
3. Convert with ImageMagick 7 (`magick`) to the **exact gallery filenames** in the format map.
4. Recommended export sizes (adjust if the tool prefers other dimensions):
   - Gallery 16:9: ~1920×1080
   - Gallery 4:3: ~1600×1200
   - Gallery 1:1: ~1200×1200
   - Gallery portrait 3:4: ~1200×1600
5. Ship the six gallery WebP files; intermediate PNGs optional for reconvert.

---

## Source file mapping

| # | Shipped file | Working / source | Convert |
|---|--------------|------------------|---------|
| 01 | `ballet-girl-room-remodel-01.webp` | AI PNG | `magick … webp` |
| 02 | `ballet-girl-room-remodel-02.webp` | AI PNG | `magick … webp` |
| 03 | `ballet-girl-room-remodel-03.webp` | AI PNG | `magick … webp` |
| 04 | `ballet-girl-room-remodel-04.webp` | AI PNG | `magick … webp` |
| 05 | `ballet-girl-room-remodel-05.webp` | AI PNG | `magick … webp` |
| 06 | `ballet-girl-room-remodel-06.webp` | AI PNG | `magick … webp` |
