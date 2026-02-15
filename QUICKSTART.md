# Syncora Landing Page - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Option 1: Quick Setup (Recommended)

```bash
# 1. Create new Next.js project
npx create-next-app@latest syncora-landing --typescript --tailwind --app

# 2. Navigate to project
cd syncora-landing

# 3. Install dependencies
npm install lucide-react

# 4. Copy the main component
# Copy syncora-landing.jsx to app/page.jsx

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page!

### Option 2: Manual Setup

1. **Initialize Project**
```bash
npx create-next-app@latest syncora-landing
```

2. **Install Tailwind CSS**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Install Icons**
```bash
npm install lucide-react
```

4. **Copy Files**
- `syncora-landing.jsx` → `app/page.jsx` or `pages/index.js`
- `tailwind.config.js` → Replace existing
- `styles/globals.css` → `app/globals.css` or `styles/globals.css`

5. **Run Development Server**
```bash
npm run dev
```

## 📁 Project Structure

```
syncora-landing/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles
├── components/
│   ├── Button.jsx         # Reusable button
│   ├── FeatureCard.jsx    # Feature cards
│   └── PricingCard.jsx    # Pricing cards
├── public/
│   └── images/            # Static images
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### 1. Update Brand Colors

In `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... add your colors
      }
    }
  }
}
```

### 2. Update Content

Edit the data objects in `page.jsx`:
```javascript
const features = [
  { title: "Your Feature", description: "..." }
]

const pricingPlans = [
  { name: "Starter", price: "$29", features: [...] }
]
```

### 3. Add Your Logo

Replace the icon in the navigation:
```jsx
<img src="/logo.png" alt="Syncora" className="w-8 h-8" />
```

### 4. Custom Fonts

In `app/layout.js`:
```javascript
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
})
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.yourapp.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Analytics Setup

Install Vercel Analytics:
```bash
npm install @vercel/analytics
```

Add to `app/layout.js`:
```javascript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🚀 Deployment

### Deploy to Vercel (1-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or via CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy the .next folder to Netlify
```

### Deploy to Your Server

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance Optimization

### Image Optimization

Use Next.js Image component:
```jsx
import Image from 'next/image'

<Image 
  src="/hero-image.jpg"
  alt="Syncora Dashboard"
  width={1200}
  height={630}
  priority
/>
```

### Lazy Loading

For components below the fold:
```jsx
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('./Testimonials'))
const Pricing = dynamic(() => import('./Pricing'))
```

### Code Splitting

Next.js automatically splits code. For manual splitting:
```jsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
})
```

## ✅ Pre-Launch Checklist

- [ ] Update meta tags and SEO
- [ ] Add favicon and social preview images
- [ ] Test on mobile, tablet, desktop
- [ ] Check accessibility (keyboard navigation)
- [ ] Test all links and CTAs
- [ ] Set up analytics
- [ ] Configure environment variables
- [ ] Test contact forms
- [ ] Check loading performance (Lighthouse)
- [ ] Review console for errors

## 🐛 Troubleshooting

### Tailwind Styles Not Working

Ensure `globals.css` is imported in `layout.js`:
```javascript
import './globals.css'
```

### Icons Not Showing

Check lucide-react is installed:
```bash
npm install lucide-react
```

### Build Errors

Clear cache and rebuild:
```bash
rm -rf .next
npm run build
```

## 📞 Need Help?

- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Open an issue on GitHub

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholder text with your actual copy
2. **Integrate Backend**: Connect forms to your API
3. **Add Analytics**: Set up Google Analytics or Plausible
4. **SEO Optimization**: Add meta tags, sitemap, robots.txt
5. **A/B Testing**: Experiment with different headlines and CTAs
6. **User Testing**: Get feedback from real users

---

Happy building! 🚀
