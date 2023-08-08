import { Footer } from "@/components/Footer";
import "./fonts.css";
import "./globals.sass";
import { Unbounded } from "next/font/google";
import { Header } from "@/components/Header";
import { HeaderMobile } from "@/components/HeaderMobile";
import { ReduxProvider } from "./redux/provider";

export const metadata = {
  title: "MindCraft",
  description:
    "Используем платформу Minecraft для обучения языкам, математике, программированию, развитию лидерских и коммуникативных навыков",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ReduxProvider>
          <Header />
          <HeaderMobile />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
