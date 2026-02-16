# 🎯 QUICK START GUIDE

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```

The app will open at http://localhost:5173

## Step 3: Customize Your Portfolio

### Update Personal Information
Edit `src/data/portfolio.json`:
- Change name, role, tagline
- Update email, phone, location
- Add your social media links

### Add Your Projects
In `src/data/portfolio.json`, update the projects array:
- Add project images to `public/projects/`
- Update tech stack, descriptions, and links

### Add Your Profile Image
- Place your photo as `public/profile.jpg`
- Or update the path in portfolio.json

### Add Your Resume
- Place your resume as `public/resume.pdf`
- Or update the path in portfolio.json

## Step 4: Build for Production
```bash
npm run build
```

## Step 5: Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: GitHub Integration
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy automatically

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` - modify the primary color values

### Change Font
Edit `index.html` - update Google Fonts link

### Add More Sections
Create new components in `src/sections/` and import in `App.jsx`

## 📱 Test Responsiveness
- Mobile: Chrome DevTools (F12)
- Test on actual devices
- Use responsive design mode

## ⚡ Performance Tips
- Optimize images (use WebP format)
- Keep bundle size small
- Use lazy loading for images
- Minimize animations on mobile

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules
npm install
npm run build
```

### Dark mode not working
Clear browser cache and localStorage

---

Need help? Check the README.md for detailed documentation.
