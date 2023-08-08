"use client";
import ReactInputMask from "react-input-mask";
import s from "../styles/userPage.module.sass";
import { useState } from "react";

const ChangeInfo = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [born, setBorn] = useState("");
  const [newNickname, setNewNickName] = useState("");
  return (
    <>
      <p className={`f28 ${s.formTitle}`}>Редактировать информацию:</p>
      <form className={s.form}>
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
          <p className="input60title">ДАТА РОЖДЕНИЯ</p>
          <input
            value={born}
            onChange={(e) => setBorn(e.targetValue)}
            type="date"
            className={`input60 f19`}
          />
        </div>
        <div className={"input60block"}>
          <p className="input60title">НИКНЕЙМ НА СЕРВЕРЕ</p>
          <input
            value={newNickname}
            onChange={(e) => setNewNickName(e.targetValue)}
            type="text"
            className={`input60 f19`}
          />
        </div>
        <div className={"input60block"}>
          <p className="input60title">E-MAIL</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.targetValue)}
            type="email"
            className={`input60 f19`}
          />
        </div>
        <div className={"input60block"}>
          <p className="input60title">ТЕЛЕФОН</p>

          <ReactInputMask
            mask="+7 (999)-999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => <input className={`input60 f19`} type="tel" value={phone} />}
          </ReactInputMask>
        </div>
        <button type="submit" className={`btn209 f12 bg-green ${s.saveBtn}`}>
          Сохранить
        </button>
      </form>
    </>
  );
};

export { ChangeInfo };
