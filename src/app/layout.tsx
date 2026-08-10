import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dazzed = localFont({
  variable: "--font-base44-display",
  display: "swap",
  src: [
    { path: "./fonts/dazzed-regular.woff2", weight: "400" },
    { path: "./fonts/dazzed-medium.woff2", weight: "500" },
    { path: "./fonts/dazzed-semibold.woff2", weight: "600" },
  ],
});

const geist = localFont({
  variable: "--font-base44-body",
  display: "swap",
  src: "./fonts/geist-latin-wght-normal.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://base44.com"),
  title: "Vibe Coding Platform for Building Apps and Websites | Base44",
  description:
    "Base44 is a no-code AI development platform that turns builders’ ideas into fully functional apps and websites — no coding required.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/sites/base44-com-cf167063/root-8a5edab2/seo/favicon-branded-v2.png",
  },
  openGraph: {
    title: "Vibe Coding Platform for Building Apps and Websites | Base44",
    description:
      "Base44 is a no-code AI development platform that turns builders’ ideas into fully functional apps and websites — no coding required.",
    type: "website",
    images: [
      {
        url: "/sites/base44-com-cf167063/root-8a5edab2/seo/social-share-og-en.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dazzed.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
