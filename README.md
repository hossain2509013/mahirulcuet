# Mahirul Cuet

A modern website project for the Mahirul Cuet brand.

## Overview

This repository contains the source for the Mahirul Cuet website, including app assets, styling, and deployment configuration.

## Project type

This project is a frontend web app built with React/TanStack and is intended to be deployed to a web hosting platform.

## Local development

```bash
npm install
npm run dev
```

Then open the local app in your browser.

## Build

```bash
npm run build
```

## Deployment

The repository includes a GitHub Pages workflow, but it should only be used when the site is configured as a static export. If the site depends on server-side functionality, deploy it to a platform that supports that runtime instead.

## Repository notes

- Source code lives in the `src/` directory
- Static assets are in `public/`
- Deployment metadata is in `.github/workflows/`
- App configuration is stored in `package.json`, `vite.config.ts`, and `vercel.json`

## License

This project does not currently declare a license in the repository metadata.
