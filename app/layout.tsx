import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SimpleStudio — AI Music Video Production",
  description: "A private production studio for building AI music videos from song to final cut.",
  openGraph: {
    title: "SimpleStudio",
    description: "From song to final frame.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SimpleStudio production pipeline" }],
  },
  twitter: { card: "summary_large_image", title: "SimpleStudio", description: "From song to final frame.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
