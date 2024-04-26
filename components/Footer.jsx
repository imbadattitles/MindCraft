import Link from "next/link";
import s from "../styles/footer.module.sass";
import { Suspense } from "react";
import { Metrika } from "./Metrika";
import Script from "next/script";
// import AmoCrmBtn from "./AmoCrmBtn";

async function getLinks() {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/objects/MenuItem`,
    {
      next: {
        revalidate: 120,
      },
    }
  ).then((res) => res.json());
  return {
    discord: result[14]?.link,
    telegram: result[15]?.link,
    rutube: result[16]?.link,
    youtube: result[17]?.link,
    vk: result[18]?.link,
    inst: result[19]?.link,
    ticktok: result[22]?.link,
  };
}
async function getInfo() {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/objects/Settings`,
    {
      next: {
        revalidate: 120,
      },
    }
  ).then((res) => res.json());
  return {
    name: result[0]?.data,
    ogrn: result[1]?.data,
    inn: result[2]?.data,
  };
}

const Footer = async ({ menu }) => {
  const links = await getLinks();
  const info = await getInfo();
  const leftCol = [];
  const rightCol = [];
  menu.map((item) => {
    if (item.column === 0) leftCol.push(item);
    if (item.column === 1) rightCol.push(item);
  });
  return (
    <footer className={s.main}>
      {/* <AmoCrmBtn /> */}
      <Suspense>
        <Metrika />
      </Suspense>
      {/* <Suspense> */}
      {/* <AmoCrmBtn /> */}
      {/* </Suspense> */}
      {/* <script>{`(function (a, m, o, c, r) {
      console.log("amoamo");
      a[m] = {
        id: "406684",
        hash: "67c4ee1051b3ea5334631702f4cf59490c7757be6513e11e84793fd4ba3e3a01",
        locale: "ru",
        inline: true,
        setMeta: function (p) {
          this.params = (this.params || []).concat([p]); // Исправление: добавляем проверку на существование this.params
        },
      };
      a[o] =
        a[o] ||
        function () {
          // Исправление: добавляем проверку на существование a[o]
          (a[o].q = a[o].q || []).push(arguments); // Исправление: добавляем проверку на существование a[o].q
        };
      a[o + "Config"] = a[o + "Config"] || {}; // Исправление: добавляем проверку на существование a[o + "Config"]
      a[o + "Config"].hidden = !0;
      var d = a.document,
        s = d.createElement("script");
      s.async = true;
      s.id = m + "_script";
      s.src = "https://gso.amocrm.ru/js/button.js";
      d.head && d.head.appendChild(s);
    })(window, 0, "amoSocialButton", 0, 0, "amo_social_button")`}</script> */}
      <Script id="amocrm">{`(function(a,m,o,c,r,m){a[m]={id:"406684",hash:"67c4ee1051b3ea5334631702f4cf59490c7757be6513e11e84793fd4ba3e3a01",locale:"ru",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};a[o+'Config']=a[o+'Config']||{};a[o+'Config'].hidden=!0;var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js';d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'))`}</Script>
      <span className={s.footerBg2} />
      <span className={s.footerCube1} />
      <span className={s.footerCube2} />
      <div className="container">
        <div className={s.columns}>
          <div className={s.firstColumn}>
            <img
              src={"/footerLogo.svg"}
              alt="MindCube Академия"
              className={s.logo}
            />
            <h4 className={`f20 ${s.firstColumnText}`}>
              Обучение детей 9–16 лет программированию и другим наукам
            </h4>
            <p className={`f20 ${s.copyright}`}>Copyright © 2023-2024</p>
          </div>
          <div className={s.secondColumn}>
            <div className={s.links}>
              <a
                href={links.discord}
                className={`${s.linkIcon} ${s.linkIcon1}`}
              />
              <a
                href={links.telegram}
                className={`${s.linkIcon} ${s.linkIcon2}`}
              />
              <a
                href={links.rutube}
                className={`${s.linkIcon} ${s.linkIcon3}`}
              />
              <a
                href={links.youtube}
                className={`${s.linkIcon} ${s.linkIcon4}`}
              />
              <a href={links.vk} className={`${s.linkIcon} ${s.linkIcon5}`} />
              <a
                href={links.ticktok}
                className={`${s.linkIcon} ${s.linkIcon6}`}
              />
              <a href={links.inst} className={`${s.linkIcon} ${s.linkIcon7}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon8}`} />
            </div>
            <nav className={s.nav}>
              <ul className={s.ul}>
                {leftCol.map((item) => (
                  <li key={item.id} className={`f20 ${s.navLink}`}>
                    <Link href={"/" + item.link}>{item.text}</Link>
                  </li>
                ))}

                {/* <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/2">Скачать</Link>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/4">Вакансии</Link>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/1">Преподавателям</Link>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/6">Партнерам</Link>
                </li> */}
              </ul>
              <ul className={s.ul}>
                {rightCol.map((item) => (
                  <li key={item.id} className={`f20 ${s.navLink}`}>
                    <Link href={"/" + item.link}>{item.text}</Link>
                  </li>
                ))}
                {/* <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/5">Правила поведения</Link>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/7">Правовая информация</Link>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/14">Обратная связь</Link>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <Link href="/postStatic/8">Наш сервер</Link>
                </li> */}
              </ul>
              <ul className={s.ul}>
                <li className={`f20 ${s.info}`}>
                  <h4>{info.name}</h4>
                </li>
                <li className={`f20 ${s.info}`}>
                  <h4>ОГРН {info.ogrn}</h4>
                </li>
                <li className={`f20 ${s.info}`}>
                  <h4>ИНН {info.inn}</h4>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
