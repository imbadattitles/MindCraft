"use client";

import { useRef, useState } from "react";
import s from "../styles/mainPage.module.sass";
import { MySelect } from "./MySelect";
import Link from "next/link";
import ReactInputMask from "react-input-mask";
import { forMask, forSelect } from "./country";
import { SelectCountry } from "./SelectCountry";
const SignUpCurse = ({ courses }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [goodResult, setGoodResult] = useState(false);
  const [country, setCountry] = useState(0);
  const action = () => {
    if (name && mail && phone && course) {
      setGoodResult(true);
    } else alert("Заполните поля");
  };
  return (
    <form className={s.mainForm}>
      <h4 className={`f40 font-dblue ${s.mainForm_title}`}>
        ЗАПИСАТЬСЯ НА КУРС
      </h4>
      <span className={s.borderTop} />
      <span className={s.borderRight} />
      <span className={s.borderBottom} />
      <span className={s.borderLeft} />
      {!goodResult ? (
        <>
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
              <SelectCountry
                countries={forSelect}
                setCountry={setCountry}
                country={country}
              />
              <ReactInputMask
                mask={`+${forMask[country].phone} (999)-999-9999`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              >
                {() => (
                  <input
                    className={`f24 ${s.SignUp_input} phoneInput`}
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
                options={courses.map((item) => {
                  return { value: item.name, name: item.name };
                })}
              />
            </div>
          </div>
          <label className={`label`}>
            <input type="checkbox" className={`form__checkbox`} />
            <div className={`fake checkBox_dblue`}></div>
            <p className={`checkbox_text`}>
              Соглашаюсь с{" "}
              <Link style={{ textDecoration: "underline" }} href="/postStatic">
                положением о защите персональных данных
              </Link>
            </p>
          </label>
          <button
            onClick={() => action()}
            className={`btn209 f12_Unbounded font-white bg-dblue`}
          >
            ЗАПИСАТЬСЯ
          </button>
        </>
      ) : (
        <div className={`${s.goodResult} f40`}>
          <span className={s.goodResultPic} />
          МЫ СВЯЖЕМСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ!
        </div>
      )}
    </form>
  );
};

export { SignUpCurse };
