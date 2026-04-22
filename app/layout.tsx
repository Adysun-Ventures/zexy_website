import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zexy.live — Turn Followers Into Income",
  description:
    "Zexy is a creator monetization platform. Earn through subscriptions, live streams, paid messaging, and 1:1 calls. Start for free.",
  keywords: [
    "creator monetization",
    "creator economy",
    "fan subscription",
    "live streaming income",
    "paid messaging",
    "creator platform",
  ],
  openGraph: {
    title: "Zexy.live — Turn Followers Into Income",
    description:
      "Earn from subscriptions, live streams, paid messages, and 1:1 calls. The monetization engine for creators.",
    type: "website",
    url: "https://zexy.live",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zexy.live — Turn Followers Into Income",
    description:
      "Earn from subscriptions, live streams, paid messages, and 1:1 calls.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
