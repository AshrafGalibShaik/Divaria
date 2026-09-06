import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { SmoothScroll } from "./components/smooth-scroll";
import { site } from "./lib/content";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const sans = Jost({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Pret & Bridal Couture, ${site.city}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Divaria by Dimple. Bridal couture, pret and Indo-Western menswear, made to order in Guntur and shipped worldwide. Consultations with the founder, in person or on video.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
