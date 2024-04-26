import React, { useState } from "react";
import s from "../styles/header.module.sass";

const LoginRestore = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submit = async () => {
    if (name || email) {
      const formData = new FormData();
      formData.append("username", name || email);
      const res = await fetch("https://api.mchamp.ru/v1/user/reset-password", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      if (res.result.id) {
        alert("Ссылка на смену пароля отправлена на почту");
      } else {
        alert("Произошла ошибка");
      }
    } else {
      alert("Заполните поля");
    }
  };
  return (
    <form>
      <h3 className={`f28 ${s.loginModalTitle}`}>Забыли пароль?</h3>
      {!email && (
        <div className={"input60block"}>
          <p className="input60title">ИМЯ</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className={`input60 f19`}
          />
        </div>
      )}
      {!name && (
        <div className={"input60block"}>
          <p className="input60title">E-MAIL</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className={`input60 f19`}
          />
        </div>
      )}
      <button onClick={() => submit()} className={`bg-green font-black btn180`}>
        ВОССТАНОВИТЬ
      </button>
    </form>
  );
};

export default LoginRestore;
