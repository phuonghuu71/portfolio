import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeContextProvider from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ui/atoms/ThemeSwitcher";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" id="home">
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <body
            className={`${poppins.className} bg-white dark:bg-gray-900 transition-colors`}
          >
            {children}
            <ThemeSwitcher />
          </body>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </html>
  );
}
