# Spotify Music Extension for GitHub

A lightweight Manifest V3 browser extension that adds a Spotify player to your GitHub workflow. Click **Music** on any `github.com` page or open the extension popup, then paste a Spotify link.

## Features

- Official Spotify embed player for tracks, albums, playlists, episodes, and shows.
- Floating Music button on GitHub pages.
- Remembers the last Spotify item played locally in the browser.
- No Spotify password, API token, or external server required.

## Install locally

1. Open `chrome://extensions` (or the equivalent extensions page in a Chromium browser).
2. Enable **Developer mode**.
3. Choose **Load unpacked** and select this repository directory.
4. Pin **Spotify Music**, open GitHub, and click **Music**.

Spotify's embed player may require an active Spotify account and is subject to Spotify's availability and playback rules. This project is an independent extension and is not affiliated with Spotify.

## Project structure

- `manifest.json` — Manifest V3 extension metadata and permissions.
- `popup.*` — compact player UI.
- `content.*` — GitHub page button.
- `background.js` — message bridge for opening the player.
- `options.html` — privacy and usage information.

## Privacy

The extension only stores the last pasted Spotify URL in `chrome.storage.local`. It does not collect GitHub data or send information to a project server.
