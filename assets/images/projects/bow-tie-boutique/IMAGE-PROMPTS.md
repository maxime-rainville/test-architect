# Cravat Atelier — Image prompts for Gemini

Fictional high-end bow tie boutique (retail interior architecture). Visual language: dark mahogany, brass, velvet, warm boutique lighting, heritage lane storefront. No people, no readable text or logos in generated images.

Save each file into this folder using the exact filename below. Export as **WebP** (see Export notes).

---

## Gallery photos

### bow-tie-boutique-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Prompt:** Architectural photograph of a luxury bow tie boutique storefront on a narrow heritage retail lane, dusk, warm light glowing through linen-lined windows, dark painted facade with brass door hardware, no signage text, no people, cinematic composition, professional architectural photography.

### bow-tie-boutique-02.webp

- **Aspect ratio:** 4:3 (landscape)
- **Prompt:** Interior architectural photograph of a high-end bow tie boutique display wall, velvet-lined vitrines and brass-framed niches, silk bow ties arranged like gallery objects, dark mahogany cabinetry, warm spot lighting, shallow depth of field, no people, no text, luxury retail design.

### bow-tie-boutique-03.webp

- **Aspect ratio:** 1:1 (square)
- **Prompt:** Square format interior photograph, single silk bow tie on dark velvet cushion with brass pin, extreme shallow depth of field, warm boutique lighting, macro product detail, high-end retail, no people, no text.

### bow-tie-boutique-04.webp

- **Aspect ratio:** 3:4 (portrait)
- **Prompt:** Portrait orientation interior photograph of a private fitting alcove in a luxury bow tie shop, tall mirror, velvet curtain, brass coat hook, soft warm lighting, intimate scale, no people visible, architectural interior photography, no text.

### bow-tie-boutique-05.webp

- **Aspect ratio:** 16:9 (landscape)
- **Prompt:** Wide interior architectural photograph of a bow tie boutique at evening, ambient warm lighting, display cases and vitrines receding into soft shadow, jewel-box atmosphere, mahogany and brass, no people, no text, professional interior photography.

---

## Plans

Architectural line-drawing style: clean black lines on white, dimension ticks optional, no watermark, no text labels required (or minimal generic labels only).

### bow-tie-boutique-plan-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Prompt:** Architectural ground floor plan drawing, small luxury retail boutique, entry, display zone, fitting alcove, storage, clean orthographic plan view, black lines on white background, professional architectural plan style, no photograph.

### bow-tie-boutique-plan-02.webp

- **Aspect ratio:** 4:3 (landscape)
- **Prompt:** Architectural elevation drawing of a retail display wall with vitrine niches and shelving, orthographic front elevation, black lines on white, boutique interior architecture, technical drawing style, no photograph.

---

## Sketches

Hand-drawn concept sketch style: pencil or ink with light wash, loose but readable.

### bow-tie-boutique-sketch-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Prompt:** Hand-drawn architectural concept sketch, street perspective of a small luxury bow tie boutique on a heritage lane, pencil and light watercolour wash, loose lines, design development sketch, no photograph.

### bow-tie-boutique-sketch-02.webp

- **Aspect ratio:** 4:3 (landscape)
- **Prompt:** Hand-drawn interior concept sketch of a bow tie vitrine wall with brass frames and velvet backing, pencil on cream paper, design ideation, retail display concept, no photograph.

---

## Renders

Photorealistic CGI architectural visualization.

### bow-tie-boutique-render-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Prompt:** Photorealistic CGI architectural render, interior of luxury bow tie boutique main room, vitrines, warm lighting, mahogany and brass materials, empty of people, high-end retail visualization, no text.

### bow-tie-boutique-render-02.webp

- **Aspect ratio:** 16:9 (landscape)
- **Prompt:** Photorealistic CGI architectural render, exterior of bow tie boutique at dusk on heritage street, warm window glow, refined facade, brass details, no people, no readable signage, architectural visualization.

---

## Export notes

1. Generate images with Gemini (or your preferred tool) using the prompts above.
2. Save into `assets/images/projects/bow-tie-boutique/` with the **exact filenames** listed.
3. Recommended export sizes (adjust if your tool prefers other dimensions):
   - Gallery 16:9: ~1920×1080
   - Gallery 4:3: ~1600×1200
   - Gallery 1:1: ~1200×1200
   - Gallery portrait 3:4: ~1200×1600
   - Plans / sketches / renders: match aspect ratio above at similar resolution
4. Convert to WebP if needed:

   ```bash
   npx @yukioru/cwebp-cli -r assets/images/projects/bow-tie-boutique
   ```

5. Until files are added, the project page will show broken image placeholders (expected).

---

## Source file mapping

Gemini PNGs were generated in MD order (oldest file first). Each was converted to `{basename}.jpg` and `{basename}.webp` with ImageMagick (`-quality 85`).

| # | Gemini PNG | Basename | Dimensions |
|---|------------|----------|------------|
| 1 | `Gemini_Generated_Image_dvgvw5dvgvw5dvgv.png` | `bow-tie-boutique-01` | 2752×1536 |
| 2 | `Gemini_Generated_Image_mmkqcsmmkqcsmmkq.png` | `bow-tie-boutique-02` | 2400×1792 |
| 3 | `Gemini_Generated_Image_2oratn2oratn2ora.png` | `bow-tie-boutique-03` | 2048×2048 |
| 4 | `Gemini_Generated_Image_hsxdvlhsxdvlhsxd.png` | `bow-tie-boutique-04` | 1792×2400 |
| 5 | `Gemini_Generated_Image_ggbyk8ggbyk8ggby.png` | `bow-tie-boutique-05` | 2752×1536 |
| 6 | `Gemini_Generated_Image_zhxcgdzhxcgdzhxc.png` | `bow-tie-boutique-plan-01` | 2752×1536 |
| 7 | `Gemini_Generated_Image_t8e82qt8e82qt8e8.png` | `bow-tie-boutique-plan-02` | 2400×1792 |
| 8 | `Gemini_Generated_Image_o8modco8modco8mo.png` | `bow-tie-boutique-sketch-01` | 2752×1536 |
| 9 | `Gemini_Generated_Image_8djfe48djfe48djf.png` | `bow-tie-boutique-sketch-02` | 2400×1792 |
| 10 | `Gemini_Generated_Image_q7e5rnq7e5rnq7e5.png` | `bow-tie-boutique-render-01` | 2752×1536 |
| 11 | `Gemini_Generated_Image_o7g9gto7g9gto7g9.png` | `bow-tie-boutique-render-02` | 2752×1536 |
