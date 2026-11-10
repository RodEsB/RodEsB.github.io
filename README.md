# rodesb.github.io

Portafolio personal de Rodrigo Espíritu Berra. Hecho con [Astro](https://astro.build) y Three.js, publicado en GitHub Pages.

## Trabajar en local

```bash
npm install
npm run dev      # abre http://localhost:4321
npm run build    # genera el sitio en dist/
```

## Dónde cambiar cada cosa

| Qué | Dónde |
| :-- | :-- |
| Textos del sitio (inglés y español), enlaces y skills | `src/i18n/content.ts` |
| Secciones de la página de inicio | `src/components/Home.astro` |
| Figura 3D de partículas | `src/components/Field.astro` |
| Colores, tipografías, menú y pie | `src/layouts/Base.astro` |
| CV descargable | `public/Rodrigo-Espiritu-Berra-Resume.pdf` |
| Imágenes de proyectos | `public/projects/` |

## Publicar un artículo

Crea un archivo `.md` en `src/content/blog/en/` (inglés) o `src/content/blog/es/` (español):

```md
---
title: "Título del artículo"
description: "Resumen de una línea."
date: 2026-12-01
translationKey: mi-articulo   # opcional: úsalo igual en ambos idiomas para enlazarlos
---

Contenido en Markdown.
```

Agrega `draft: true` para guardarlo sin publicarlo.

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila y publica el sitio.
Requisito único: en **Settings → Pages → Source** elige **GitHub Actions**.
