# Calli

Web app instalable para cuidado inteligente, con vistas de presencia, estado y voz, y alertas.

## Desarrollo local

```powershell
npm.cmd run dev
```

Abre `http://127.0.0.1:4173`.

## Verificación

```powershell
npm.cmd run check
```

## Deploy en Vercel

Este proyecto no requiere build. Vercel puede servirlo como sitio estático desde la raíz del repo.

- Framework preset: `Other`
- Build command: vacío
- Output directory: `.`

La PWA usa `manifest.webmanifest`, `sw.js` e iconos en `icons/`.
