# Prasamita Bangal — React Portfolio

A personal portfolio built with **React** and **React Router**, deployable to GitHub Pages.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Opens at `http://localhost:3000`

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # HashRouter + route definitions
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles & design system
│   ├── components/
│   │   └── Navbar.js       # NavLink navigation bar
│   └── pages/
│       ├── Home.js         # About, Skills, Timeline, Contact
│       └── Projects.js     # Projects grid with filter
├── .gitignore
├── package.json
└── README.md
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Install gh-pages
```bash
npm install gh-pages --save-dev
```

### Step 3 — Update package.json (already done)
The `homepage`, `predeploy`, and `deploy` scripts are already configured in `package.json`.  
Just update `YOUR-USERNAME` in the homepage field:
```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

### Step 4 — Deploy
```bash
npm run deploy
```

### Step 5 — Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Set branch to `gh-pages`
- Your site will be live at `https://YOUR-USERNAME.github.io/portfolio`

---

## ✅ Assignment Requirements Checklist

- [x] React Router with HashRouter (required for GitHub Pages)
- [x] Home Page: About Me, Research Interests, Personal Details, Skills
- [x] Projects Page: All projects linked to GitHub
- [x] NavLink navigation between pages
- [x] CSS styling (dark editorial theme, animations, responsive)
- [x] At least 2 projects (11 projects included)
- [x] Name, Phone, Email, Skills in Personal Details

---

## 🎨 Tech Stack

- React 18
- React Router DOM 6
- CSS3 (custom design system, no external UI library)
- Google Fonts: Syne + DM Mono + Instrument Serif

---

© 2025 Prasamita Bangal
