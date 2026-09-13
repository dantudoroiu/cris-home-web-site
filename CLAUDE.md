# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static multi-page marketing website for "Cris Home Holiday Inn", built with plain HTML, CSS, and JavaScript — no build tools, no package manager, no framework. Live at `https://chrishome.ro`.

- `index.html` — homepage (hero + teaser sections linking out to the other pages)
- `despre.html` — about page
- `camere.html` — rooms page
- `facilitati.html` — amenities page
- `contact.html` — contact page with the booking form
- `styles.css` — all visual design and layout, including the mobile breakpoint, shared across every page
- `script.js` — small interactive behavior shared across pages: mobile nav toggle and the booking form's fake-submit handler
- `wrangler.jsonc` — Cloudflare deploy config (see Deployment below)

## Running locally

There is no build or dev server. Open any `.html` file directly in a browser, or use a live-preview tool (e.g. VS Code's Live Server extension) for auto-reload.

## Deployment

Hosted on Cloudflare as a Worker serving static assets (Cloudflare has merged Pages into the unified Workers flow). `wrangler.jsonc` sets `assets.directory` to `./`, so every file at the repo root is served as-is — no build step. Cloudflare auto-deploys from the `main` branch on push (connected via "Connect to Git"); day-to-day work happens on `dev`, which gets merged into `main` to ship. Custom domain `chrishome.ro` is attached to the Worker project `cris-home-web-site`.

## Architecture notes

- Each page repeats the same `<nav class="nav container">` header and `<footer class="footer">` — there's no shared templating, so nav/footer edits must be applied to all five HTML files by hand.
- CSS uses custom properties defined in `:root` in `styles.css` (`--primary`, `--accent`, `--bg`, `--text`, `--muted`, `--border`, etc.) — reuse these instead of hardcoding new colors.
- The mobile nav toggle in `script.js` applies inline styles directly to `.nav-links` rather than toggling a CSS class; keep this in mind if extending nav behavior.
- The booking form (on `contact.html`) has no backend — `script.js` intercepts `submit`, prevents the default action, and shows a thank-you message in `#form-message`. There is no real form submission or email delivery.

## Content conventions

- All site copy is written in Romanian.
- Keep the design warm, clean, and professional; prioritize mobile-friendly layout.
- Contact email is real: `contact@chrishome.ro` (Google Workspace). The phone number (`+40 123 456 789`) and address (`Strada Litoralului 123, Orașul de Vacanță`) in `index.html`/`contact.html` are still placeholders — replace with real hotel details when available.
