import { useState } from "react";
import s from "../styles/header.module.sass";
const { default: Link } = require("next/link");

const Login = ({ close }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemeber] = useState(null);
  const [email, setEmail] = useState("");
  return (
    <div className={s.loginModalBg}>
      <div className={s.loginModalBlock}>
        {!remember ? (
          <form>
            <h3 className={`f28 ${s.loginModalTitle}`}>Вход:</h3>
            <div className={"input60block"}>
              <p className="input60title">ИМЯ</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className={`input60 f19`}
              />
            </div>
            <div className={"input60block"}>
              <p className="input60title">ПАРОЛЬ</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className={`input60 f19`}
              />
            </div>
            <div className={s.loginRow}>
              <label class={`label`}>
                <input type="checkbox" class={`form__checkbox`} />
                <div class={`fake checkBox_green`}></div>
                <p
                  class={`checkbox_text`}
                  style={{ textDecorationLine: "none" }}
                >
                  запомнить меня
                </p>
              </label>
              <p
                onClick={() => setRemeber(1)}
                className={s.theOnlyThingIknowForReal}
              >
                Забыли пароль?
              </p>
            </div>
            <button type="submit" className={`bg-green font-black btn180`}>
              ВОЙТИ
            </button>
          </form>
        ) : (
          <form>
            <h3 className={`f28 ${s.loginModalTitle}`}>Забыли пароль?</h3>
            <div className={"input60block"}>
              <p className="input60title">ИМЯ</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className={`input60 f19`}
              />
            </div>
            <div className={"input60block"}>
              <p className="input60title">E-MAIL</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className={`input60 f19`}
              />
            </div>
            <button type="submit" className={`bg-green font-black btn180`}>
              ВОССТАНОВИТЬ
            </button>
          </form>
        )}
        <span onClick={() => close(0)} className={s.loginClose} />
        <span className={s.loginPic} />
        <span className={s.loginCube} />
      </div>
    </div>
  );
};

export { Login };
