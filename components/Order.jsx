"use client";

import { useState } from "react";
import s from "../styles/cart.module.sass";
import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Order = ({ setVisibleBlock }) => {
  const items = useSelector((state) => state.cart.items);
  const coins = useSelector((state) => state.cart.coins);
  const dispatch = useDispatch();
  const amountInCart = useSelector((state) => state.cart.amount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [born, setBorn] = useState("");
  const [newNickname, setNewNickName] = useState("");
  const [time, setTime] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  return (
    <>
      <div className={s.titleRow}>
        <p className={`f40 font-green ${s.title}`}>ОФОРМЛЕНИЕ ЗАКАЗА</p>
        <div className={s.login}>
          <p className={s.loginText}>Уже покупали?</p>
          <button className={`f12 font-black bg-green ${s.loginBtn}`}>
            ВОЙТИ
          </button>
        </div>
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
          <div onClick={() => setVisibleBlock(1)} className={s.back}>
            <span className={s.backArrow} />
            <p className={s.backText}>Вернуться в корзину</p>
          </div>
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
              onChange={(e) => setName(e.targetValue)}
              type="text"
              className={`input60 f19`}
            />
          </div>
          <div className={"input60block"}>
            <p className="input60title">ТЕЛЕФОН</p>
            <input
              value={phone}
              onChange={(e) => setPhone(e.targetValue)}
              type="tel"
              className={`input60 f19`}
            />
          </div>
          <div className={"input60block"}>
            <p className="input60title">ПОЧТА</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.targetValue)}
              type="email"
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
            <p className="input60title">ЖЕЛАЕМЫЙ НИКНЕЙМ</p>
            <input
              value={newNickname}
              onChange={(e) => setNewNickName(e.targetValue)}
              type="text"
              className={`input60 f19`}
            />
          </div>
          <div className={"input60block"}>
            <p className={s.typeInput}>ВРЕМЯ</p>
            <p className="input60title">ЧАСОВОЙ ПОЯС</p>
            <input
              value={time}
              onChange={(e) => setTime(e.targetValue)}
              type="text"
              className={`input60 f19`}
            />
          </div>
          <div className={"input60block"}>
            <p className={s.typeInput}>ПАРОЛЬ</p>
            <p className="input60title">ВВЕДИТЕ ПАРОЛЬ</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.targetValue)}
              type="password"
              className={`input60 f19`}
            />
          </div>
          <div className={"input60block"}>
            <p className="input60title">ПОВТОРИТЕ ПАРОЛЬ</p>
            <input
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.targetValue)}
              type="password"
              className={`input60 f19`}
            />
          </div>
          <label class={`label`}>
            <input type="checkbox" class={`form__checkbox`} />
            <div class={`fake checkBox_dblue`}></div>
            <p class={`checkbox_text-small`}>
              Соглашаюсь с{" "}
              <Link style={{ textDecoration: "underline" }} href="/">
                положением о защите персональных данных
              </Link>
            </p>
          </label>
          <input
            type="submit"
            className={`btn209 f12_Unbounded font-black bg-green`}
          ></input>
        </form>
      </div>
    </>
  );
};
export { Order };
