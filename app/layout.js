import { Footer } from "@/components/Footer";
import "./fonts.css";
import "./globals.sass";
import { Unbounded } from "next/font/google";
import { Header } from "@/components/Header";
import { HeaderMobile } from "@/components/HeaderMobile";
import { ReduxProvider } from "./redux/provider";
import Script from "next/script";
import AmoCrmBtn from "@/components/AmoCrmBtn";

export const metadata = {
  title: "MindCube",
  description:
    "Используем платформу Minecraft для обучения языкам, математике, программированию, развитию лидерских и коммуникативных навыков",
};

async function getMenu() {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/objects/MenuItem`,
    {
      next: {
        revalidate: 120,
      },
    }
  ).then((res) => res.json());
  const headerMenu = [];
  const footerMenu = [];
  result.map((item) => {
    if (item.menu === 1) {
      headerMenu.push(item);
    }
    if (item.menu === 2) {
      footerMenu.push(item);
    }
  });
  return { headerMenu, footerMenu };
}

export default async function RootLayout({ children }) {
  const { headerMenu, footerMenu } = await getMenu();
  const headerMenuSort = [];
  const headerMenuCopy = headerMenu.map((item) => ({ ...item }));

  headerMenuCopy.forEach((item) => {
    if (item.parent_id === null) {
      headerMenuSort.push({
        ...item,
        items: [],
      });
    } else {
      const parentItem = headerMenuSort.find(
        (parent) => parent.id === item.parent_id
      );
      if (parentItem) {
        parentItem.items.push({
          ...item,
        });
      }
    }
  });
  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/cropped-logotip-czvet-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/cropped-logotip-czvet-32x32.png"
        />
        <script id="Top.Mail.Ru counter">{`var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3503102", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");`}</script>
        <div>
          <img
            src="https://top-fwz1.mail.ru/counter?id=3503102;js=na"
            style={{ position: "absolute", left: "-9999px" }}
            alt="Top.Mail.Ru"
          />
        </div>
      </head>
      <body>
        <Script src="node_modules/argon2-browser/lib/argon2.js"></Script>
        <ReduxProvider>
          <Header menu={headerMenuSort} />
          <HeaderMobile />
          <main>{children}</main>
          <Footer menu={footerMenu} />
        </ReduxProvider>
      </body>
    </html>
  );
}
