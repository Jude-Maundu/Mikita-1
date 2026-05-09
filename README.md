# 🎂 Birthday Website — Setup Guide

A beautiful gold & white animated birthday website for your best friend.

---

## 📁 Folder Structure

```
birthday-site/
├── index.html          ← Main website file (open this in a browser)
├── css/
│   └── style.css       ← All styles (gold theme, animations)
├── js/
│   └── main.js         ← All features + CONFIG section at top
├── images/
│   ├── cover.jpg       ← Album cover for vinyl center (use a photo of you two)
│   ├── photo1.jpg      ← Gallery photo 1
│   ├── photo2.jpg      ← Gallery photo 2
│   └── ... up to photo9.jpg
├── audio/
│   └── song.mp3        ← Your chosen song (add this yourself)
└── README.md           ← This file
```

---

## ✏️ HOW TO CUSTOMIZE (All in `js/main.js` — top section)

### 1. Change Her Name & Your Name
```js
name:     "Sarah",     // ← Her name
yourName: "Amina",     // ← Your name (shown in footer)
```

### 2. Set Her Birthday (for countdown timer)
```js
birthdayMonth: 8,   // ← Month (1-12)
birthdayDay:   15,  // ← Day
```

### 3. Add Photos
Place your photos in the `images/` folder, then update the `photos` array:
```js
photos: [
  { src: "images/photo1.jpg", caption: "Beach day 2023 🌊" },
  { src: "images/photo2.jpg", caption: "Our road trip 🚗" },
  // Add more...
],
```

### 4. Customize Flowers & Messages
```js
flowers: [
  { emoji: "🌹", name: "Rose", msg: "For the late night calls" },
  // ...
],
```

### 5. Customize Reasons She's Amazing
```js
reasons: [
  { icon: "😂", label: "You make me laugh", text: "Full description here." },
  // ...
],
```

---

## 🎵 Adding Music

1. Create an `audio/` folder inside `birthday-site/`
2. Put your MP3 file in it (e.g., `audio/song.mp3`)
3. Open `index.html` and find this comment:
   ```html
   <!-- Add your MP3 here: <source src="audio/song.mp3" type="audio/mpeg"> -->
   ```
4. Replace it with:
   ```html
   <source src="audio/song.mp3" type="audio/mpeg">
   ```

---

## 🖼️ Adding the Vinyl Cover Photo

Place a square photo of you two named `cover.jpg` in the `images/` folder.
It will appear in the center of the spinning vinyl record.

---

## 🌐 Opening the Website

Simply double-click `index.html` to open it in your browser.

Or right-click → Open With → Chrome / Firefox / Safari.

> **Note:** For music to work, you may need to use a local server.
> An easy way: install VS Code + the "Live Server" extension, then click "Go Live".

---

## ✨ Features Included

| # | Feature |
|---|---------|
| 1 | Hero animation + gold/white theme |
| 2 | Floating gold hearts with hover messages |
| 3 | Spinning vinyl record + music player |
| 4 | Mouse glow effect (gold cursor) |
| 5 | Virtual flowers with hidden messages |
| 6 | Photo gallery + lightbox popup |
| 7 | Confetti burst (on load + all flowers picked) |
| 8 | Birthday modal popup (3s delay) |
| 9 | Countdown timer (live, auto-updates) |
| 10 | "Reasons You're Amazing" scroll-reveal cards |
| 11 | Signature footer with date |
| 12 | Fully responsive (mobile + desktop) |
| 13 | Gold gradient buttons |
| 14 | Smooth scrolling |
| + | **BONUS:** Typewriter hero text |
| + | **BONUS:** Parallax hero scroll effect |
| + | **BONUS:** Scroll progress bar |
| + | **BONUS:** Star cursor trail (✨💫) |

---

Made with 💛 — For the best friend in the world.
