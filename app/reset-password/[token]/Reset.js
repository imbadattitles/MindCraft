"use client";
import React from "react";
import s from "@/styles/header.module.sass";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { hash } from "@/components/hash";

export const validatePassword = (password) => {
  const regex = /^[a-zA-Z0-9_!?\*\.\-\+]+$/;

  if (password.length < 8 || password.length > 32) {
    return false; // неверное количество символов
  }

  if (!/\d/.test(password)) {
    return false; // отсутствие цифры
  }

  if (!/[!?\*\.\-\+]/.test(password)) {
    return false; // отсутствие специального символа
  }

  return regex.test(password);
};

export const validateMail = (mail) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(mail);
};

const Reset = ({ token }) => {
  const [newPassword, setNewPassword] = useState({
    type: "password",
    value: "",
  });
  const [repeatPassword, setRepeatPassword] = useState({
    type: "password",
    value: "",
  });
  const [loginError, setLoginErrow] = useState(null);
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    if (newPassword.value && newPassword.value === repeatPassword.value) {
      if (!validatePassword(newPassword.value)) {
        return setLoginErrow(
          "От 8 до 32 символов, минимум одна цифра и специальный символ"
        );
      }
      const hashing = await hash(newPassword.value);
      const formData = new FormData();
      formData.append("token", token);
      formData.append("new_password", hashing.encoded);
      const res = await fetch("https://api.mchamp.ru/v1/user/change-password", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      if (res?.result?.success) {
        router.push("/");
        alert("Смена пароля произошла успешно");
      } else setLoginErrow("При смене пароля произошла ошибка на сервере");
    } else {
      setLoginErrow("Пароль не был введён или пароли не совпадают");
    }
  };

  const handlePasswordChange = (e, input, setInput) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9!?*\.\-\+]+$/;
    if (regex.test(value)) {
      setLoginErrow(null);
      setInput({ type: input.type, value: value });
    } else {
      setLoginErrow("Только латинские буквы, цифры и знаки");
    }
  };

  const changeType = (input, changeInput) => {
    if (input.type === "password") {
      changeInput({
        value: input.value,
        type: "text",
      });
    } else {
      changeInput({
        value: input.value,
        type: "password",
      });
    }
  };

  return (
    <div className={s.loginModalBlock}>
      <form>
        <h3 className={`f28 ${s.loginModalTitle}`}>Восстановление пароля</h3>
        <div className={"input60block"}>
          <p className="input60title">НОВЫЙ ПАРОЛЬ</p>
          <input
            value={newPassword.value}
            onChange={(e) =>
              handlePasswordChange(e, newPassword, setNewPassword)
            }
            type={newPassword.type}
            className={`input60 f19`}
          />
          <span
            onClick={() => changeType(newPassword, setNewPassword)}
            className={`inputPasswordIcon`}
            style={newPassword.type == "text" ? { opacity: "40%" } : {}}
          />
        </div>
        <div className={"input60block"}>
          <p className="input60title">ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ</p>
          <input
            value={repeatPassword.value}
            onChange={(e) =>
              handlePasswordChange(e, repeatPassword, setRepeatPassword)
            }
            type={repeatPassword.type}
            className={`input60 f19`}
          />
          <span
            onClick={() => changeType(repeatPassword, setRepeatPassword)}
            className={`inputPasswordIcon`}
            style={newPassword.type == "text" ? { opacity: "40%" } : {}}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => submit(e)}
          className={`bg-green font-black btn180`}
        >
          Восстановить
        </button>
        {loginError && <p>{loginError}</p>}
      </form>
      <span className={s.loginPic} />
      <span className={s.loginCube} />
    </div>
  );
};

export default Reset;
