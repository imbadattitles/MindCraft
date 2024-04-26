"use client";
import { useState } from "react";
import s from "../styles/header.module.sass";
import LoginRestore from "./LoginRestore";
const argon2 = require("argon2-browser");
import { useEffect } from "react";
import { setAuth, setUser } from "@/app/redux/user/user-slice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const hash = async (password) => {
  const res = await argon2.hash({
    pass: password,
    salt: "m1i2n3d4",
    time: 2, // the number of iterations
    mem: 16, // used memory, in KiB
    hashLen: 16, // desired hash length
    parallelism: 1, // desired parallelism (it won't be computed in parallel, however)
    type: argon2.ArgonType.Argon2i, // Argon2d, Argon2i, Argon2id
  });
  return res;
};

const Login = ({ close }) => {
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
  const router = useRouter();
  const [checkedRemember, setCheckedRemember] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState({ value: "", type: "password" });
  const [remember, setRemeber] = useState(null);
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();
  const login = async (e) => {
    e.preventDefault();
    const pas = password.value;
    const hashing = await hash(pas);
    const body = JSON.stringify({
      username: name,
      password: hashing.encoded,
    });
    console.log(body);
    const res = await fetch(
      "https://gateway.service.bus.mchamp.ru/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body,
      }
    ).then((res) => res.json());
    if (res.errors) {
      setLoginError(true);
    }
    console.log(res);
    if (res.user_id) {
      const { result } = await fetch(
        `https://gateway.service.bus.mchamp.ru/api/v1/cmsBridge/user/getUserInfo/${res.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${res.token}`,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      ).then((res) => res.json());
      console.log(result);
      if (checkedRemember) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...result, id: res.user_id, token: res.token })
        );
        localStorage.setItem("auth", JSON.stringify(true));
      }
      dispatch(setAuth(true));
      dispatch(setUser({ ...result, id: res.user_id, token: res.token }));
      close(0);
      router.push("/user");
    }
    setPassword("");
    setName("");
  };
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
            {
              <div className={"input60block"}>
                <p className="input60title">ПАРОЛЬ</p>
                <input
                  value={password.value}
                  onChange={(e) =>
                    setPassword({ value: e.target.value, type: password.type })
                  }
                  type={password.type}
                  className={`input60 f19`}
                />
                <span
                  onClick={() => changeType(password, setPassword)}
                  className={`inputPasswordIcon`}
                  style={password.type == "text" ? { opacity: "40%" } : {}}
                />
              </div>
            }
            <div className={s.loginRow}>
              <label className={`label`}>
                <input
                  checked={checkedRemember}
                  onChange={() => setCheckedRemember(!checkedRemember)}
                  type="checkbox"
                  className={`form__checkbox`}
                />
                <div className={`fake checkBox_green`}></div>
                <p
                  className={`checkbox_text`}
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
            <button
              type="submit"
              onClick={(e) => login(e)}
              className={`bg-green font-black btn180`}
            >
              ВОЙТИ
            </button>
            {loginError && <p>Пароль или логин ввёден неправильно</p>}
          </form>
        ) : (
          <LoginRestore />
        )}
        <span onClick={() => close(0)} className={s.loginClose} />
        <span className={s.loginPic} />
        <span className={s.loginCube} />
      </div>
    </div>
  );
};

export { Login };
