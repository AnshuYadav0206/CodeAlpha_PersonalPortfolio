# 🌟 Aditya Patel - Personal Developer Portfolio

A modern, responsive, and interactive personal portfolio website built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed for the **CodeAlpha Web Development Internship (Task 3)** to showcase technical skills, featured projects, professional resume, and contact details with engaging micro-interactions and smooth animations.

---

## 🚀 Live Demo & Preview

- **Live URL**: Deployable on **GitHub Pages** or **Netlify** (see instructions below)
- **Design Aesthetic**: Glassmorphism, modern gradients, dark & light theme toggle, ambient glowing blobs, floating interactive cards, and responsive fluid layout.

---

## ✨ Features & Highlights

1. **🎨 Dual Theme (Dark / Light Mode)**
   - Smooth instant theme transition.
   - Detects user system preference (`prefers-color-scheme`) and persists choice in `localStorage`.

2. **⚡ Dynamic Hero Section**
   - Live typewriter effect cycling through developer titles.
   - Interactive avatar card with floating tech badges and ambient glowing backdrop.
   - Quick action CTA buttons ("View My Work", "Get In Touch", "Resume").
   - Social media connection pills (GitHub, LinkedIn, Twitter/X, Email).

3. **👤 About Me & Interactive Stats**
   - Detailed bio, journey, and technical engineering philosophy.
   - Animated count-up statistics counter triggered on scroll (Projects, Technologies, Commits, Coffee).

4. **🛠️ Technical Toolkit (Skills)**
   - Categorized skills: **Frontend**, **Backend**, **Databases & Cloud**, **Tools & DevOps**.
   - Interactive category filter tabs.
   - Animated skill mastery bars with branded tech color accents.

5. **💻 Featured Projects**
   - Responsive project cards with modern mockup illustrations.
   - Category filtering (All, Full Stack, Frontend, AI & Tools).
   - Card hover lift and image zoom animations.
   - Direct links for **Live Demo**, **GitHub Source Code**, and **Quick Modal Preview**.

6. **📅 Experience & Education Timeline**
   - Elegant vertical milestone timeline.
   - Details internship at CodeAlpha, freelance milestones, university degree, and certifications.

7. **📬 Contact Section & Interactive Form**
   - One-click **"Copy Email Address"** to clipboard with toast notifications.
   - Client-side form validation (required fields, valid email regex format).
   - Loading spinner state and animated success confirmation alert.

8. **📄 Resume Showcase & Modal Viewer**
   - Accessible modal displaying a formatted CV summary.
   - One-click resume download functionality (`assets/resume/Aditya_Patel_Resume.txt`).

9. **📱 100% Mobile Responsive**
   - Fluid typography and grid layout.
   - Responsive mobile navigation drawer with animated hamburger toggle.
   - Smooth scrolling with back-to-top floating button and active section indicators.

---

## 📁 Project Structure

```
CodeAlpha_PersonalPortfolio/
├── index.html                   # Semantic HTML5 markup & structure
├── css/
│   └── style.css                # Custom CSS3 styles, variables & animations
├── js/
│   └── script.js                # Vanilla JavaScript interactivity & logic
├── assets/
│   ├── images/
│   │   ├── favicon.svg          # Modern gradient monogram favicon
│   │   ├── avatar.svg           # Tech avatar illustration
│   │   ├── project-1.svg        # DevPulse dashboard mockup
│   │   ├── project-2.svg        # CloudMart e-commerce mockup
│   │   ├── project-3.svg        # PromptGenius AI workspace mockup
│   │   └── project-4.svg        # SyncFlow Kanban board mockup
│   └── resume/
│       └── Aditya_Patel_Resume.txt  # Downloadable resume document
└── README.md                    # Project documentation & deployment guide
```

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, accessibility (`aria-*`), Open Graph meta tags.
- **CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, Glassmorphism (`backdrop-filter`), keyframe animations, media queries.
- **JavaScript (ES6+)**: DOM manipulation, `IntersectionObserver` API, `localStorage` API, `navigator.clipboard` API, event listeners.
- **Fonts & Icons**: [Google Fonts (Plus Jakarta Sans & JetBrains Mono)](https://fonts.google.com/), [FontAwesome 6 Icons](https://fontawesome.com/).

---

## 💻 How to Run Locally

You can preview the portfolio locally using any browser:

### Option 1: Direct File Opening
Double click on `index.html` or open it with your favorite browser:
```bash
open index.html   # On macOS
# or
xdg-open index.html # On Linux
# or
start index.html  # On Windows
```

### Option 2: Using VS Code Live Server
1. Open the folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and click **"Open with Live Server"**.

### Option 3: Using Python HTTP Server
```bash
# In the project directory:
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🚀 Bonus Deployment Guide

### A. Deploy to GitHub Pages (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: complete personal portfolio website"
   ```
2. Create a new repository on GitHub (e.g. `CodeAlpha_PersonalPortfolio` or `<your-username>.github.io`).
3. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/CodeAlpha_PersonalPortfolio.git
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages**.
5. Under **Branch**, choose `main` and root `/`, then click **Save**.
6. Your portfolio will be live at:
   `https://<your-username>.github.io/CodeAlpha_PersonalPortfolio/`

---

### B. Deploy to Netlify
1. Go to [Netlify](https://www.netlify.com/) and sign in.
2. Click **"Add new site"** > **"Deploy manually"**.
3. Drag and drop the `CodeAlpha_PersonalPortfolio` folder into the Netlify dashboard.
4. Your site will be deployed instantly with a live HTTPS URL!

---

## ⚙️ Customization Guide

- **Personal Info**: Update your name, titles, bio, and social handles in `index.html`.
- **Typing Titles**: Modify the roles array in `js/script.js` under line 42 (`const roles = [...]`).
- **Profile Photo**: Replace `assets/images/avatar.svg` with your own photo (`.png`, `.jpg`, or `.svg`).
- **Projects**: Replace mockup SVGs in `assets/images/` and update project descriptions, demo URLs, and GitHub repo links in `index.html`.
- **Resume**: Replace `assets/resume/Aditya_Patel_Resume.txt` or link your own PDF resume.

---

## 📜 License

Created for educational purposes and task submission under the **CodeAlpha Internship Program**. Free to use, adapt, and learn from!
