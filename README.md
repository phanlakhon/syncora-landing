# FlowSync Landing Page

A modern, high-converting SaaS landing page built with Next.js and Tailwind CSS.

## 🚀 Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modern Design**: Clean, minimal aesthetic with soft gradients and rounded cards
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO-Friendly**: Semantic HTML with proper heading structure
- **Accessible**: WCAG compliant with proper ARIA labels
- **Interactive Components**: Smooth animations and hover effects

## 📋 Sections Included

1. **Hero Section**: Compelling headline, subheadline, and dual CTA buttons
2. **Features Section**: 3 feature cards with icons and descriptions
3. **How It Works**: 3-step process visualization
4. **Testimonials**: Social proof with customer reviews
5. **Pricing**: 3-tier pricing table with highlighted popular plan
6. **FAQ**: Accordion-style frequently asked questions
7. **Footer**: Multi-column footer with navigation links

## 🛠️ Tech Stack

- **React** (via Next.js)
- **Tailwind CSS** for styling
- **Lucide React** for icons
- Vanilla JavaScript for interactivity

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Create a new Next.js project**:
```bash
npx create-next-app@latest syncora-landing
cd syncora-landing
```

2. **Install dependencies**:
```bash
npm install lucide-react
```

3. **Configure Tailwind CSS**:

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

4. **Replace the page content**:

Replace the content in `app/page.js` (or `pages/index.js`) with:
```javascript
import FlowSyncLanding from './components/FlowSyncLanding'

export default function Home() {
  return <FlowSyncLanding />
}
```

5. **Copy the component**:

Create `components/FlowSyncLanding.jsx` and paste the landing page component code.

6. **Run the development server**:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your landing page!

## 🎨 Customization Guide

### Colors

The landing page uses a blue-to-indigo gradient theme. To customize:

```jsx
// Primary gradient (buttons, accents)
from-blue-600 to-indigo-600

// Background gradient
from-slate-50 via-blue-50 to-indigo-50

// Change to your brand colors:
from-purple-600 to-pink-600  // Purple theme
from-green-600 to-teal-600   // Green theme
from-orange-600 to-red-600   // Warm theme
```

### Typography

The design uses Tailwind's default font stack. To use custom fonts:

```javascript
// In tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
    },
  },
}
```

### Content

Update the following variables in the component:

- `features` - Feature cards content
- `steps` - How it works process
- `testimonials` - Customer reviews
- `pricingPlans` - Pricing tiers
- `faqs` - FAQ questions and answers

### Icons

Replace Lucide React icons with your preferred icon library:

```jsx
import { YourIcon } from 'your-icon-library'
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 📊 Performance Optimization

- **Images**: Use Next.js Image component for automatic optimization
- **Fonts**: Preload custom fonts to reduce CLS
- **Code Splitting**: Lazy load components below the fold
- **Bundle Size**: Use dynamic imports for heavy components

## 🔧 Advanced Features

### Add Animations

Install Framer Motion for advanced animations:
```bash
npm install framer-motion
```

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Add Analytics

```jsx
// Add to _app.js or layout.js
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
```

### Add Form Handling

```bash
npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form'

const { register, handleSubmit } = useForm()
const onSubmit = (data) => console.log(data)
```

## 📝 Component Structure

```
FlowSyncLanding/
├── Navigation (Fixed header)
├── Hero Section
├── Features Grid
├── How It Works
├── Testimonials
├── Pricing Cards
├── FAQ Accordion
├── Final CTA
└── Footer
```

## 🎯 Conversion Optimization Tips

1. **Above the Fold**: Keep primary CTA visible without scrolling
2. **Social Proof**: Add customer logos or metrics
3. **Trust Signals**: Display security badges, certifications
4. **Urgency**: Add countdown timers or limited offers
5. **A/B Testing**: Test different headlines and CTAs

## 📄 License

MIT License - feel free to use this for your projects!

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 📞 Support

For questions or issues, please open a GitHub issue or contact support.

---

Built with ❤️ using Next.js and Tailwind CSS
