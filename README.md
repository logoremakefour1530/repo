# YouTube Video Extension for GitHub

A lightweight Manifest V3 browser extension that adds a YouTube player to your GitHub workflow. Click **Video** on any `github.com` page or open the extension popup, then paste a YouTube link.

## Features

- Official YouTube embed player for regular videos, Shorts, and `youtu.be` links.
- Floating Video button on GitHub pages.
- Remembers the last YouTube video played locally in the browser.
- Uses YouTube's privacy-enhanced `youtube-nocookie.com` embed domain.
- No YouTube API key, account login, or external server required.

## Install locally

1. Open `chrome://extensions` (or the equivalent extensions page in a Chromium browser).
2. Enable **Developer mode**.
3. Choose **Load unpacked** and select this repository directory.
4. Pin **YouTube Player**, open GitHub, and click **Video**.

Playback and availability are controlled by YouTube and individual video owners. This project is an independent extension and is not affiliated with YouTube or GitHub.

## Project structure

- `manifest.json` — Manifest V3 extension metadata and permissions.
- `popup.*` — compact YouTube player UI.
- `content.*` — GitHub page button.
- `background.js` — message bridge for opening the popup.
- `options.html` — privacy and usage information.

## Privacy

The extension only stores the last pasted YouTube URL in `chrome.storage.local`. It does not collect GitHub data or send information to a project server.
