import { Anton, Inter, IBM_Plex_Mono } from "next/font/google";
import Providers from '@/components/Theme-provider'
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "BOXARENA — Indoor Sports Arena",
  description:
    "BOXARENA is an indoor sports arena for badminton, futsal and table tennis in Kathmandu, Nepal. Book a court by the hour, day or season.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="bg-ink text-chalk font-body antialiased">
          <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
