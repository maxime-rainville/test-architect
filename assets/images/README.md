# Image assets

Add your generated images here. Create subfolders and use the filenames referenced in the HTML:

- `hero/` — hero-home.webp, hero-about.webp
- `team/` — team-1.webp, team-2.webp, team-3.webp, **team.webp** (fake team picture, used on the About page as “Our team”)
- `projects/residential-house-a/` — residential-house-a-01.webp through 06
- `projects/coastal-retreat/` — coastal-retreat-01.webp through 04
- `projects/urban-loft/` — urban-loft-01.webp through 03
- `projects/mountain-cabin/` — mountain-cabin-01.webp through 03
- `projects/heritage-restoration/` — heritage-restoration-01.webp through 03
- `projects/sustainable-pavilion/` — sustainable-pavilion-01.webp through 03
- `projects/bow-tie-boutique/` — bow-tie-boutique-01 through 05, plan-01/02, sketch-01/02, render-01/02 (each as `.jpg` and `.webp`; source Gemini PNGs kept; see `IMAGE-PROMPTS.md` for mapping)

See `projects/bow-tie-boutique/IMAGE-PROMPTS.md` for full image prompts and Gemini PNG → basename mapping.

To reconvert source images to WebP: `npx @yukioru/cwebp-cli -r assets/images`
