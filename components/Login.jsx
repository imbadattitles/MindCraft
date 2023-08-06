import s from "../styles/header.module.sass";
const { default: Link } = require("next/link");

const Login = ({ close }) => {
  return (
    <div className={s.loginModalBg}>
      <div className={s.loginModalBlock}>
        <form>
          <h3 className={`f28 ${s.loginModalTitle}`}>Вход:</h3>
          <div className={"input60block"}>
            <p className="input60title">ИМЯ</p>
            <input
              value={name}
              onChange={(e) => setName(e.targetValue)}
              type="text"
              className={`input60 f19`}
            />
          </div>
          <div className={"input60block"}>
            <p className="input60title">ПАРОЛЬ</p>
            <input
              value={name}
              onChange={(e) => setName(e.targetValue)}
              type="text"
              className={`input60 f19`}
            />
          </div>
          <div className={s.loginRow}>
            <label class={`label`}>
              <input type="checkbox" class={`form__checkbox`} />
              <div class={`fake checkBox_green`}></div>
              <p class={`checkbox_text`} style={{ textDecorationLine: "none" }}>
                запомнить меня
              </p>
            </label>
            <Link href="/" className={s.theOnlyThingIknowForReal}>
              Забыли пароль?
            </Link>
          </div>
          <button type="submit" className={`bg-green font-black btn180`}>
            ВОЙТИ
          </button>
        </form>
        <span onClick={() => close(0)} className={s.loginClose} />
        <span className={s.loginPic} />
        <span className={s.loginCube} />
      </div>
    </div>
  );
};

export { Login };
