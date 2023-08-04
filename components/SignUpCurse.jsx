"use client";

import { useRef, useState } from "react";
import s from "../styles/mainPage.module.sass";
import { MySelect } from "./MySelect";
import Link from "next/link";
import ReactInputMask from "react-input-mask";

const SignUpCurse = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  let phonenumber = useRef("");
  const [course, setCourse] = useState("");
  return (
    <form className={s.mainForm}>
      <h4 className={`f40 font-dblue ${s.mainForm_title}`}>
        ЗАПИСАТЬСЯ НА КУРС
      </h4>
      <span className={s.borderTop} />
      <span className={s.borderRight} />
      <span className={s.borderBottom} />
      <span className={s.borderLeft} />
      <div className={s.SignUp_row}>
        <div className={s.SignUp_block}>
          <p className={`f19 ${s.SignUpInput_title}`}>Имя</p>
          <input
            className={`f24 ${s.SignUp_input}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className={s.SignUp_block}>
          <p className={`f19 ${s.SignUpInput_title}`}>E-mail</p>
          <input
            className={`f24 ${s.SignUp_input}`}
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
          />
        </div>
        <div className={s.SignUp_block}>
          <p className={`f19 ${s.SignUpInput_title}`}>Телефон</p>
          <ReactInputMask
            mask="+7 (999)-999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => (
              <input
                className={`f24 ${s.SignUp_input}`}
                type="tel"
                value={phone}
              />
            )}
          </ReactInputMask>
        </div>
        <div className={s.SignUp_block}>
          <p className={`f19 ${s.SignUpInput_title}`}>Курс</p>
          <MySelect
            onChange={(selectedSort) => setCourse(selectedSort)}
            defaultValue="Выберите курс"
            options={[
              { value: "ask", name: "курс 1" },
              { value: "desc", name: "курс 2" },
            ]}
          />
        </div>
      </div>
      <label class={`label`}>
        <input type="checkbox" class={`form__checkbox`} />
        <div class={`fake checkBox_dblue`}></div>
        <p class={`checkbox_text`}>
          Соглашаюсь с{" "}
          <Link style={{ textDecoration: "underline" }} href="/">
            положением о защите персональных данных
          </Link>
        </p>
      </label>
      <button className={`btn209 f12_Unbounded font-white bg-dblue`}>
        ЗАПИСАТЬСЯ
      </button>
    </form>
  );
};

export { SignUpCurse };
