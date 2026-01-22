# Portfolio Website 🎨

A modern, responsive portfolio website built with Next.js and React. Features smooth animations, dark mode support, and a clean design.

## ✨ Features

- 📱 Fully Responsive Design
- 🌙 Dark Mode Support with persistent theme
- ✨ Smooth Animations using Motion library
- 🎯 Single Page Application with smooth scrolling
- 🎨 Modern UI with Tailwind CSS
- ⚡ Optimized with Next.js 16 and React Compiler

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 3.4.19
- **Animations**: Motion 12.25.0
- **Fonts**: Google Fonts (Outfit & Ovo)

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── component/
│   │   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   │   ├── Header.jsx       # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Services.jsx     # Services section
│   │   ├── Work.jsx         # Portfolio/Work section
│   │   ├── Contact.jsx      # Contact section
│   │   └── Footer.jsx       # Footer section
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Main page
├── assets/                  # Static assets
└── public/                  # Public files
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📤 Deployment

This project is configured as a **static site** and can be deployed to:

### Netlify

```bash
# Build command
npm run build

# Publish directory
out
```

### Vercel

Deploy directly with Vercel by connecting your Git repository.

## 🎨 Customization

- **Colors**: Modify theme colors in `tailwind.config.js`
- **Content**: Update components in `app/component/` directory
- **Fonts**: Change fonts in `app/layout.js`
- **Assets**: Add images to `assets/public/` or `public/` directory

## 📝 License

This project is open source and available under the MIT License.


demo : 'mohamedmakram.netlify.app'