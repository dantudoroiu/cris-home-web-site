# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static one-page marketing website for "Cris Home Holiday Inn", built with plain HTML, CSS, and JavaScript — no build tools, no package manager, no framework.

- `index.html` — page structure and all content (hero, about, rooms, amenities, contact/booking form)
- `styles.css` — all visual design and layout, including the mobile breakpoint
- `script.js` — small interactive behavior: mobile nav toggle and the booking form's fake-submit handler

## Running locally

There is no build or dev server. Open `index.html` directly in a browser, or use a live-preview tool (e.g. VS Code's Live Server extension) for auto-reload.

## Architecture notes

- Single page, section-based layout: each `<section>` in `index.html` (`#about`, `#rooms`, `#amenities`, `#contact`) corresponds to a nav anchor link and is styled independently in `styles.css`.
- CSS uses custom properties defined in `:root` in `styles.css` (`--primary`, `--accent`, `--bg`, etc.) — reuse these instead of hardcoding new colors.
- The mobile nav toggle in `script.js` applies inline styles directly to `.nav-links` rather than toggling a CSS class; keep this in mind if extending nav behavior.
- The booking form has no backend — `script.js` intercepts `submit`, prevents the default action, and shows a thank-you message in `#form-message`. There is no real form submission or email delivery.

## Content conventions

- All site copy is written in Romanian.
- Keep the design warm, clean, and professional; prioritize mobile-friendly layout.
- Current contact details and room descriptions in `index.html` are placeholders — replace with real hotel details when available.
