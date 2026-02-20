import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hôtel Les Vosges De Soa - Yaoundé",
  description: "L’élégance et le confort au cœur de Yaoundé. Redécouvrez le luxe dans un cadre apaisant et raffiné.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
