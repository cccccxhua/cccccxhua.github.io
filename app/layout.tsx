import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cccccxhua.github.io"),
  title: {
    default: "Xianhua Cai | Academic Homepage",
    template: "%s | Xianhua Cai",
  },
  description:
    "Academic homepage of Xianhua Cai, focusing on industrial AI, predictive maintenance, and data-driven optimization for engineering systems.",
  authors: [{ name: "Xianhua Cai" }],
  openGraph: {
    title: "Xianhua Cai | Academic Homepage",
    description:
      "Industrial AI, predictive maintenance, and data-driven optimization for engineering systems.",
    type: "website",
    url: "https://cccccxhua.github.io",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

