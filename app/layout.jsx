import './globals.css';

const siteConfig = {
  name: "Syncora",
  url: "https://syncora.com", // Replace with your actual domain
  title: "Syncora — The AI Operating Layer for Teams",
  description: "Syncora centralizes operational intelligence and orchestrates AI-powered workflows for modern teams.",
}

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: "/og-image.png", // Must be created and placed in /public
      width: 1200,
      height: 630,
      alt: siteConfig.description,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"], // Must be created and placed in /public
    creator: "@YourTwitterHandle", // Replace with your Twitter handle
  },
  // Favicon reference is handled by Next.js automatically
  // by placing favicon.ico in the /app directory.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
