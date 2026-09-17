# Unliftable Thor Hammer — Image prompts & page copy

Fictional ceremonial hammer as a gallery display piece. Visual language: museum daylight, stone and timber, empty interiors. **No people, no readable logos or text** in generated images. Captions stay generic — they do not name a variant SKU or an axis value.

Variant SKUs, axis values, and prices live only in page JSON-LD (`ProductGroup` + 18 `hasVariant` items). The visible page does not list them.

**JSON-LD axes (docs only — do not copy into the HTML body):**

- Head: Display, Worthy, Unliftable
- Handle: Short ash, Full-length oak, Strap-loop
- Finish: Storm iron, Asgard bronze

SKU shape: `TA-HAMMER-{HEAD}-{HANDLE}-{FINISH}` with `HEAD` = `DISPLAY` / `WORTHY` / `UNLIFTABLE`, `HANDLE` = `SHORT` / `FULL` / `STRAP`, `FINISH` = `IRON` / `BRONZE`. Eighteen unique SKUs; prices start at 2400.00 NZD.

---

## Page copy

**Title:** Unliftable Thor Hammer  
**SKU:** TA-HAMMER  
**Price:** From NZ$2,400.00  
**Category:** Mythic hardware  
**Availability:** Limited  
**Photo credit:** All photos: Jordan Blake  

**Overview:**

> A ceremonial display piece for atriums and testing galleries. The listing is a parent SKU only.
>
> This is a placeholder product for testing. All content is fictional.

**Related products (2):** Model Rocket, Puzzle Cube Sculpture

---

## Format map (canonical gallery filenames)

| # | Filename | Format | Aspect | Source |
|---|----------|--------|--------|--------|
| 01 | `unliftable-thor-hammer-01.webp` | WEBP | 16:9 | AI still → `magick` WEBP |
| 02 | `unliftable-thor-hammer-02.webp` | WEBP | 4:3 | AI still → `magick` WEBP |
| 03 | `unliftable-thor-hammer-03.webp` | WEBP | 1:1 | AI still → `magick` WEBP |
| 04 | `unliftable-thor-hammer-04.webp` | WEBP | 3:4 | AI still → `magick` WEBP |

Intermediate AI PNGs may live in `/tmp`; HTML gallery must reference only the four filenames above.

---

## Gallery photos

### unliftable-thor-hammer-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** Wide product photograph of a large ceremonial war hammer with a blocky metal head and a smooth timber handle resting on a pale stone plinth in an empty modern gallery, soft museum daylight from a side skylight, no runes letters or logos, no people, professional product and interior photography.

### unliftable-thor-hammer-02.webp

- **Aspect ratio:** 4:3 (landscape)
- **Format:** WEBP
- **Prompt:** Three-quarter product photograph of a ceremonial hammer lying on a low timber bench against a cream plaster wall, dark metal head, worn wooden shaft, empty room, soft gallery light, no engravings that form words, no people, no readable text or logos, clean commercial product photography.

### unliftable-thor-hammer-03.webp

- **Aspect ratio:** 1:1 (square)
- **Format:** WEBP
- **Prompt:** Square close-up product photograph of a ceremonial hammer head in dark forged metal with a short timber neck, shallow depth of field, studio-like soft light, no lettering or symbols that read as words, no people, no readable text or logos, macro product photography.

### unliftable-thor-hammer-04.webp

- **Aspect ratio:** 3:4 (portrait)
- **Format:** WEBP
- **Prompt:** Portrait orientation product photograph of a ceremonial hammer standing upright on a stone plinth in an empty atrium corner, tall pale walls, soft afternoon light, metal head and timber handle, no people, no readable text or logos, architectural product photography.
