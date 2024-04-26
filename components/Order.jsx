"use client";

import { useState } from "react";
import s from "../app/cart/cart.module.sass";
// const argon2 = require("argon2-browser");
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./Login";
import ReactInputMask from "react-input-mask";
import { SelectCountry } from "./SelectCountry";
import { forMask, forSelect } from "./country";

import { hash } from "@/components/hash";
import { setAuth, setUser } from "@/app/redux/user/user-slice";
import {
  validateMail,
  validatePassword,
} from "@/app/reset-password/[token]/Reset";
import { useRouter } from "next/navigation";

const Order = ({ setVisibleBlock }) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const items = useSelector((state) => state.cart.items);
  const coins = useSelector((state) => state.cart.coins);
  const dispatch = useDispatch();
  const amountInCart = useSelector((state) => state.cart.amount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [born, setBorn] = useState("");
  const [newNickname, setNewNickName] = useState("");
  // const [time, setTime] = useState("");
  const [checked, setChecked] = useState(false);
  function checkChange() {
    setChecked(!checked); // инвертируем стейт
  }
  const [country, setCountry] = useState(0);
  const [password, setPassword] = useState({
    value: "",
    type: "password",
  });
  const [repeatPassword, setRepeatPassword] = useState({
    value: "",
    type: "password",
  });
  const changeType = (input, changeInput) => {
    console.log(input);
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
  const [loginVisible, setLoginVisible] = useState(0);
  const auth = useSelector((state) => state.user.auth);

  const reg = async (e) => {
    e.preventDefault();
    if (password.value && password.value === repeatPassword.value) {
      if (!validatePassword(password.value)) {
        return alert(
          "Пароль от 8 до 32 символов, минимум одна цифра и специальный символ"
        );
      }
      if (email.length < 4) {
        return alert("Введите email");
      }
      if (newNickname.length < 3) {
        return alert("Введите ник");
      }
      if (name.length < 3) {
        return alert("Введите ФИО");
      }
      if (phone.length < 17) {
        return alert("Введите телефон");
      }
      const pas = password.value;
      const repPas = repeatPassword.value;
      const hashing = await hash(pas);
      const repHash = await hash(repPas);
      const body = JSON.stringify({
        fullName: name,
        phone: phone,
        email: email,
        nickname: newNickname,
        password: hashing.encoded,
        repeatPassword: repHash.encoded,
      });
      const regRes = await fetch(
        "https://gateway.service.bus.mchamp.ru/api/v1/customer/createCustomer",
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: body,
        }
      ).then((res) => res.json());
      if (regRes.errors) {
        return alert("Ошибка при регистрации");
      }
      if (regRes.status === "Пользователь успешно создан!") {
        const bodyForLogin = JSON.stringify({
          username: newNickname,
          password: hashing.encoded,
        });
        const res = await fetch(
          "https://gateway.service.bus.mchamp.ru/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json;charset=utf-8",
            },
            body: bodyForLogin,
          }
        ).then((res) => res.json());
        console.log(res);
        if (res.errors) {
          setLoginError(true);
        }
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
          localStorage.setItem(
            "user",
            JSON.stringify({ ...result, id: res.user_id, token: res.token })
          );
          localStorage.setItem("auth", JSON.stringify(true));
          dispatch(setAuth(true));
          dispatch(setUser({ ...result, id: res.user_id, token: res.token }));
          router.push("/payment");
        }
      } else {
        return alert("Ошибка при регистрации");
      }
    }
  };
  return (
    <>
      {loginVisible === 1 && <Login close={setLoginVisible} />}
      <div className={s.titleRow}>
        <p className={`f40 font-green ${s.title}`}>ОФОРМЛЕНИЕ ЗАКАЗА</p>
        {!auth && (
          <div className={s.login}>
            <p className={s.loginText}>Уже покупали?</p>
            <button
              onClick={() => {
                setLoginVisible(1);
              }}
              className={`f12 font-black bg-green ${s.loginBtn}`}
            >
              ВОЙТИ
            </button>
          </div>
        )}
      </div>

      <div className={s.orderRow}>
        <div className={s.orderInfo}>
          {items.map((item) => (
            <div key={item.name} className={s.orderInfoRow}>
              <div className={s.orderInfoPic}>
                <img src={item.img} className={s.orderInfoImg} />
              </div>
              <p className={s.orderInfoName}>{item.name}</p>
              <div className={s.orderInfoCost}>
                <span className={s.orderInfoValute} />
                <p className={s.orderInfoCost}>{item.cost} ₽</p>
              </div>
              <span className={s.orderInfoCount}>{item.count} шт.</span>
            </div>
          ))}
          {coins.map((item) => (
            <div key={item.name} className={s.orderInfoRow}>
              <div className={s.orderInfoPic}>
                <img src={item.img} className={s.orderInfoImg} />
              </div>
              <p className={s.orderInfoName}>{item.name}</p>
              <div className={s.orderInfoCost}>
                <span className={s.orderInfoValute} />
                <p className={s.orderInfoCost}>{item.cost} ₽</p>
              </div>
              <span className={s.orderInfoCount}>{item.count} шт.</span>
            </div>
          ))}
          <p className={s.orderInfoResult}>
            Итого: <span style={{ fontWeight: "500" }}>{totalPrice} ₽</span>
          </p>
          <Link href={"/cart"} className={s.back}>
            <span className={s.backArrow} />
            <p className={s.backText}>Вернуться в корзину</p>
          </Link>
        </div>
        <form className={s.orderForm}>
          <span className={s.leftBg} />
          <span className={s.rightBg} />
          <span className={s.topBg} />
          <span className={s.bottomBg} />
          <div className={"input60block"}>
            <p className="input60title">ФИО</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className={`input60 f19`}
            />
          </div>
          <div className={"input60block dfsdfds"}>
            <p className="input60title">ТЕЛЕФОН</p>
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
                  className={`input60 f19 phoneInput`}
                  type="tel"
                  value={phone}
                />
              )}
            </ReactInputMask>
          </div>
          <div className={"input60block"}>
            <p className="input60title">ПОЧТА</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={`input60 f19`}
            />
          </div>
          {/* <div className={"input60block"}>
            <p className="input60title">ДАТА РОЖДЕНИЯ</p>
            <input
              value={born}
              onChange={(e) => setBorn(e.targetValue)}
              type="date"
              className={`input60 f19`}
            />
          </div> */}
          <div className={"input60block"}>
            <p className="input60title">ЖЕЛАЕМЫЙ НИКНЕЙМ</p>
            <input
              value={newNickname}
              onChange={(e) => setNewNickName(e.target.value)}
              type="text"
              className={`input60 f19`}
            />
          </div>
          {/* <div className={"input60block"}>
            <p className={s.typeInput}>ВРЕМЯ</p>
            <p className="input60title">ЧАСОВОЙ ПОЯС</p>
            <input
              value={time}
              onChange={(e) => setTime(e.targetValue)}
              type="text"
              className={`input60 f19`}
            />
          </div> */}
          <div className={"input60block"}>
            <p className={s.typeInput}>ПАРОЛЬ</p>
            <p className="input60title">ВВЕДИТЕ ПАРОЛЬ</p>
            <input
              // placeholder="от 8 до 32 символов, минимум одна цифра и специальный символ"
              value={password.value}
              onChange={(e) =>
                setPassword({
                  value: e.target.value,
                  type: password.type,
                })
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
          <div className={"input60block"}>
            <p className="input60title">ПОВТОРИТЕ ПАРОЛЬ</p>
            <input
              value={repeatPassword.value}
              onChange={(e) =>
                setRepeatPassword({
                  value: e.target.value,
                  type: repeatPassword.type,
                })
              }
              type={repeatPassword.type}
              className={`input60 f19`}
            />
            <span
              onClick={() => changeType(repeatPassword, setRepeatPassword)}
              className={`inputPasswordIcon`}
              style={repeatPassword.type == "text" ? { opacity: "40%" } : {}}
            />
          </div>
          <label class={`label`}>
            <input
              checked={checked}
              onChange={() => setChecked(!checked)}
              type="checkbox"
              class={`form__checkbox`}
            />
            <div class={`fake checkBox_green`}></div>
            <p class={`checkbox_text-small`}>
              Соглашаюсь с{" "}
              <Link style={{ textDecoration: "underline" }} href="/">
                положением о защите персональных данных
              </Link>
            </p>
          </label>
          {checked ? (
            <button
              onClick={(e) => reg(e)}
              className={`btn209 f12_Unbounded font-black bg-green`}
            >
              ПЕРЕЙТИ К ОПЛАТЕ
            </button>
          ) : (
            <button
              style={{ opacity: ".3" }}
              className={`btn209 f12_Unbounded font-black bg-green`}
            >
              ПЕРЕЙТИ К ОПЛАТЕ
            </button>
          )}

          {error && <p className={s.error}>{error}</p>}
        </form>
      </div>
    </>
  );
};
export { Order };
