# 🚀 Modern Portfolio Website

A premium, modern, and mobile-first developer portfolio built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Modern 2026 design trends (Apple/Vercel/Stripe inspired)
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (Mobile-first)
- ⚡ Lightning fast performance
- 🎭 Smooth animations with Framer Motion
- 📊 Config-driven content system
- ♿ Accessibility compliant
- 🔍 SEO optimized

## 🛠️ Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd MyPortfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📝 Customization

### Update Portfolio Data

Edit `src/data/portfolio.json` to customize:
- Personal information
- Social links
- About section
- Skills
- Projects
- Experience
- Achievements

### Update Colors

Modify `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    500: '#0ea5e9', // Change this
    // ...
  }
}
```

### Add Images

Place your images in the `public` folder:
- Profile image: `/profile.jpg`
- Project images: `/projects/project-name.jpg`
- Resume: `/resume.pdf`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy the `dist` folder** to Netlify

Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📁 Project Structure

```
MyPortfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Section.jsx
│   │   └── SectionTitle.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx
│   ├── hooks/           # Custom hooks
│   │   └── useInView.js
│   ├── data/            # Content data
│   │   └── portfolio.json
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Performance

Target Lighthouse scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ by [Your Name]
