# Project Instructions & Rules

## Strict Image Asset Rule

1. **Exact Original Files Only**: For every user-provided or uploaded image, use the **EXACT ORIGINAL IMAGE FILE** as a static website asset.
2. **Zero AI Alteration**:
   - DO NOT regenerate the image
   - DO NOT recreate the image
   - DO NOT AI-enhance the image
   - DO NOT stylize the image
   - DO NOT redraw the image
   - DO NOT change the person's face or identity
   - DO NOT create an AI version of the photograph
   - DO NOT replace the photograph with an AI-generated image
3. **Static Asset Linking**: Reference the actual uploaded image file from the project's assets/public folder (`public/assets/` or `/assets/`) using its exact file path. Never call an image-generation API or use generated placeholders for these photographs.
4. **Missing File Protocol**: If an original image file is not present on disk in `public/assets/` (for instance, when attached in chat rather than uploaded through the project file explorer), **DO NOT** generate a replacement. Inform the user clearly which specific image file is missing and explain how to add it to `public/assets/`.
