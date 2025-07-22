# Private RTL Chrome Extension

This repository contains the **Private RTL** extension. It allows you to switch websites into right‑to‑left (RTL) layout and provides special support for `chatgpt.com`.

## Features

- **Enable RTL on any site** — toggle the page direction to RTL.
- **ChatGPT optimization** — when enabled only for `chatgpt.com`, input and responses are aligned correctly.

Both options can be turned on or off at any time from the extension's popup window.

## Installation

1. Open Chrome and browse to `chrome://extensions`.
2. Enable **Developer mode** in the top-right corner.
3. Click **Load unpacked** and choose the `extension` folder in this repository.
4. The extension icon will appear next to the address bar. Click it to show the popup and toggle the desired options.

## Repository Structure

- `extension/manifest.json` — extension manifest.
- `extension/popup.html` — popup UI with two toggles.
- `extension/popup.js` — script handling popup state and storage.
- `extension/rtl.js` — content script that applies/removes RTL styles.

