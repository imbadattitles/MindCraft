import s from "../styles/footer.module.sass";

const Footer = () => {
  return (
    <footer className={s.main}>
      <span className={s.footerBg2} />
      <span className={s.footerCube1} />
      <span className={s.footerCube2} />
      <div className="container">
        <div className={s.columns}>
          <div className={s.firstColumn}>
            <img
              src={"/footerLogo.svg"}
              alt="MindCraft Академия"
              className={s.logo}
            />
            <h4 className={`f20 ${s.firstColumnText}`}>
              Обучение детей 9–16 лет программированию и другим наукам
            </h4>
            <p className={`f20 ${s.copyright}`}>Copyright © 2023</p>
          </div>
          <div className={s.secondColumn}>
            <div className={s.links}>
              <a href="/" className={`${s.linkIcon} ${s.linkIcon1}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon2}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon3}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon4}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon5}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon6}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon7}`} />
              <a href="/" className={`${s.linkIcon} ${s.linkIcon8}`} />
            </div>
            <nav className={s.nav}>
              <ul className={s.ul}>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">О нас</a>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Скачать</a>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Вакансии</a>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Преподаватели</a>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Партнерам</a>
                </li>
              </ul>
              <ul className={s.ul}>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Правила поведения</a>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Правовая информация</a>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Обратная связь</a>
                </li>
                <li className={`f20 ${s.navLink}`}>
                  <a href="/">Наш сервер</a>
                </li>
              </ul>
              <ul className={s.ul}>
                <li className={`f20 ${s.info}`}>
                  <h4>ИП Константинопольский К.К.</h4>
                </li>
                <li className={`f20 ${s.info}`}>
                  <h4>ОГРН 336571600575212</h4>
                </li>
                <li className={`f20 ${s.info}`}>
                  <h4>ИНН 4422553355</h4>
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
