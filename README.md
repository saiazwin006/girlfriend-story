# Romantic Digital Proposal Answer Website ❤️

A beautiful, interactive, mobile-first romantic website built to answer a proposal in a memorable, cinematic, and emotional way.

## 📱 Mobile-First Design
- **Targeted for Mobile Chrome**: Optimized for Android Chrome and iOS Safari viewports (`320px` to `412px+`), with safe area insets and `100svh` dynamic height support.
- **Responsive**: Scales seamlessly to tablets and desktop monitors.
- **Touch Sizing**: All interactive touch targets are $\ge 44\text{px}$ without hover dependency.

---

## 📂 Project Structure

```
girlfriend-site/
│
├── index.html         # Main HTML markup (6 screens, envelope, modal, audio player)
├── style.css          # Glassmorphic dark theme, responsive layout, animations
├── script.js          # Centralized configuration & interactive logic
├── README.md          # Setup & customization guide
│
└── assets/            # Media assets directory
    ├── photo1.jpg     # Optional memory photo 1 (fallback rendered if missing)
    ├── photo2.jpg     # Optional memory photo 2
    ├── photo3.jpg     # Optional memory photo 3
    ├── photo4.jpg     # Optional memory photo 4
    └── our-song.mp3   # Background song (fails gracefully if missing)
```

---

## ⚙️ How to Personalize & Customize

All personal text, memories, dates, photos, and messages are stored in **ONE single configuration object** at the very top of `script.js`.

Open `script.js` and edit the `config` object:

```javascript
const config = {
  herName: "Her Name",
  myName: "My Name",
  dateWeMet: "One Month Ago",
  
  // Timeline Memories (Screen 2)
  memories: [
    { day: "Day 01", title: "Two strangers.", description: "Your real memory here..." },
    { day: "Day 07", title: "Starting to know each other.", description: "Your real memory here..." },
    { day: "Day 15", title: "Laughing at stupid things together.", description: "Your real memory here..." },
    { day: "Day 23", title: "Okay... you're becoming important.", description: "Your real memory here..." },
    { day: "Day 30", title: "And then you asked me THAT question. 👀", description: "Your real memory here..." }
  ],

  // Interactive Question Cards (Screen 3)
  reasonsToLove: [
    { question: "What do I like about you?", answer: "Your personal answer..." },
    { question: "What makes you special?", answer: "Your personal answer..." },
    { question: "What happened in just one month?", answer: "Your personal answer..." }
  ],

  // Handwritten Letter Text (Screen 4)
  letterText: `Your personal letter text here...`,

  // Final Reveal Message (Screen 6)
  finalMessage: {
    line1: "Not because we've known each other for years.",
    line2: "Not because I know what tomorrow looks like.",
    line3: "But because I want to find out what happens next...",
    highlight: "with you. ❤️",
    subtext: "Shall we start our story? 😺"
  },

  // Photos & Music paths
  photos: [...],
  musicPath: "assets/our-song.mp3"
};
```

---

## 🎵 Adding Your Song & Photos

1. Place your MP3 file in `assets/our-song.mp3`.
2. Place your photos in `assets/photo1.jpg`, `assets/photo2.jpg`, etc.
3. *Note:* If images or audio files are missing, the website handles it automatically with elegant glassmorphic placeholder cards and quiet audio handling without breaking or throwing errors!

---

## 🚀 How to Run & Deploy

### Local Development
Double-click `index.html` to open it directly in Google Chrome or any web browser, or use VS Code Live Server.

### Free Hosting Options
- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages in Repository Settings -> Pages.
- **Vercel**: Run `vercel` in terminal or import repository at [vercel.com](https://vercel.com).
- **Netlify**: Drag and drop the `girlfriend-site` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 🔒 Privacy & Security
- 100% static client-side web application.
- No backend required.
- Zero analytics, tracking, or data collection.
