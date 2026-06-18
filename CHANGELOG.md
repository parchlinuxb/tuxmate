# Changelog

## [Unreleased]

### Rebrand: ParchMate
- Rebranded TuxMate to ParchMate — Arch (Parch) and Flatpak are now the only supported targets
- Removed Ubuntu/Debian, Fedora, openSUSE, Snap support and their build scripts
- Added Parch Linux logo and updated all references

### i18n & RTL Support
- Full Persian (FA) and English (EN) internationalization system
- Runtime locale switching with `useI18n()` hook and `I18nProvider`
- RTL layout support — sidebar flips, code preview stays LTR
- Vazirmatn Persian font loaded for RTL typography
- All UI text is translatable (except app names): sidebar, drawer, shortcuts bar, help modal, badges, AUR settings, category headers, pro tips, keyboard shortcuts
- Language change triggers a page reload to ensure all components pick up fresh translations

### Color Redesign
- Dark theme: warm violet-navy (`#191724`), honey amber accent (`#f6c177`), soft lavender text
- Light theme: warm cream/beige (`#faf4ed`), rose gold accent (`#d7827e`), deep slate text
- Removed harsh teal/mint, eliminated unreadable white-on-bright-green buttons
- Preview button uses dark text (`#000`) when `distroColor` is bright (e.g. `#00FF80`)

### Sidebar Rewrite
- Completely rewritten with i18n and RTL awareness
- Flatpak fallback card, unfree packages warning, keyboard shortcut display
- AUR helper toggle, locale switcher in sidebar footer
- Drawer state lifted to `page.tsx` — sidebar "Preview" and "Click for full preview" now work on desktop

### Theme Toggle RTL Fix
- Theme toggle now uses direction-aware transforms (`flex-row-reverse` + inverted `translate-x` values in RTL)
- Knob animation no longer breaks outside the toggle container in RTL mode

### Security & Dependencies
- Switched from npm to **bun** for faster installs (bun.lock replaces package-lock.json)
- Updated Next.js 16.0.10 → 16.2.9 (fixes 13 security advisories)
- Updated React 19.2.1 → 19.2.7
- Updated vitest 4.0.16 → 4.1.9 (fixes critical vulnerability)
- Updated framer-motion, gsap, tailwind-merge, tailwindcss, eslint-config-next, and other deps
- Dockerfile now uses `oven/bun:1.3` for build stage

### Data Updates
- All app data updated for Parch/Arch/Flatpak only
- Nix unfree packages list and verification data (Flathub/Snap) added
- Removed references to NixOS (now just "Nix")

## [Previous]

### UI/UX Overhaul
- Redesigned command drawer with terminal-style layout (slide-up on mobile, centered modal on desktop)
- Keyboard navigation with vim-style hjkl, search with `/`, copy/download with y/d
- ShortcutsBar showing all active keybindings
- AUR floating card and drawer settings for helper selection
- Improved scrollbar visibility, hydration-safe ThemeToggle

### Features
- 180+ apps across 15 categories
- Smart script generation with progress bars, error handling, and summary output
- Nix profile commands and flake.nix generation (experimental)
- Flatpak fallback for Arch-only apps
- Cloudflare Web Analytics + custom analytics events
- Docker support with nginx serving static export
- Cloudflare Pages deployment via wrangler

### Infrastructure
- GitHub Actions CI for Docker builds
- Static export (Cloudflare Pages) and Docker deployment supported
- Vitest test suite with 28 passing tests
- ESLint flat config
- Tailwind CSS v4 with PostCSS
