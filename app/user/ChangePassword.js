import { useState } from "react";
import s from "./userPage.module.sass";
import { hash } from "@/components/hash";

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

const validatePassword = (password) => {
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

const ChangePassword = ({ id }) => {
  const [oldPassword, setOldPassword] = useState({
    value: "",
    type: "password",
  });
  const [newPassword, setNewPassword] = useState({
    value: "",
    type: "password",
  });
  const [repeatNewPassword, setRepeatNewPassword] = useState({
    value: "",
    type: "password",
  });
  const [loginError, setLoginErrow] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (
      oldPassword.value &&
      newPassword.value &&
      newPassword.value === repeatNewPassword.value
    ) {
      if (!validatePassword(newPassword.value)) {
        return setLoginErrow(
          "От 8 до 32 символов, минимум одна цифра и специальный символ"
        );
      }
      const hashOld = await hash(oldPassword.value);
      const hashNew = await hash(newPassword.value);
      const hashRepeat = await hash(repeatNewPassword.value);
      const formData = new FormData();
      formData.append("current_password", hashOld.encoded);
      formData.append("new_password", hashNew.encoded);
      formData.append("repeat_new_password", hashRepeat.encoded);
      const body = {
        current_password: hashOld.encoded,
        new_password: hashNew.encoded,
        repeat_new_password: hashRepeat.encoded,
      };
      console.log(body);
      console.log(JSON.stringify(body));
      const res = await fetch(
        `https://api.mchamp.ru/v1/user/change-current-password/16`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      ).then((res) => res.json());
      console.log(res);
      if (res?.result?.success) {
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

  return (
    <form className={s.form}>
      <div className={"input60block"}>
        <p className="input60title">СТАРЫЙ ПАРОЛЬ</p>
        <input
          value={oldPassword.value}
          onChange={(e) => handlePasswordChange(e, oldPassword, setOldPassword)}
          type={oldPassword.type}
          className={`input60 f19`}
        />
        <span
          onClick={() => changeType(oldPassword, setOldPassword)}
          className={`inputPasswordIcon`}
          style={oldPassword.type == "text" ? { opacity: "40%" } : {}}
        />
      </div>
      <div className={"input60block"}>
        <p className="input60title">НОВЫЙ ПАРОЛЬ</p>
        <input
          value={newPassword.value}
          onChange={(e) => handlePasswordChange(e, newPassword, setNewPassword)}
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
          value={repeatNewPassword.value}
          onChange={(e) =>
            handlePasswordChange(e, repeatNewPassword, setRepeatNewPassword)
          }
          type={repeatNewPassword.type}
          className={`input60 f19`}
        />
        <span
          onClick={() => changeType(repeatNewPassword, setRepeatNewPassword)}
          className={`inputPasswordIcon`}
          style={repeatNewPassword.type == "text" ? { opacity: "40%" } : {}}
        />
      </div>
      <button
        type="submit"
        onClick={(e) => submit(e)}
        className={`btn209 f12 bg-green ${s.saveBtn}`}
      >
        Сохранить
      </button>
      {loginError && <p>{loginError}</p>}
    </form>
  );
};
export { ChangePassword };
