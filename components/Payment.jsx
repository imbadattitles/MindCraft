"use client";

import { useState } from "react";
import s from "../app/cart/cart.module.sass";
import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./Login";
import ReactInputMask from "react-input-mask";
import { SelectCountry } from "./SelectCountry";
import { forMask, forSelect } from "./country";
import { MySelect } from "./MySelect";

const Payment = ({ setVisibleBlock }) => {
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
  const [country, setCountry] = useState(0);
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
  const [paymentMethod, setPaymentMethod] = useState(null);
  return (
    <>
      {loginVisible === 1 && <Login close={setLoginVisible} />}
      <div className={s.titleRow}>
        <p className={`f40 font-green ${s.title}`}>ОФОРМЛЕНИЕ ЗАКАЗА</p>
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
          {/* <div className={"input60block"}>
            <p className="input60title">ФИО</p>
            <input
              value={name}
              onChange={(e) => setName(e.targetValue)}
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
          </div> */}
          {/* <div className={"input60block"}>
            <p className="input60title">ПОЧТА</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.targetValue)}
              type="email"
              className={`input60 f19`}
            />
          </div> */}
          {/* <div className={"input60block"}>
            <p className="input60title">ЖЕЛАЕМЫЙ НИКНЕЙМ</p>
            <input
              value={newNickname}
              onChange={(e) => setNewNickName(e.targetValue)}
              type="text"
              className={`input60 f19`}
            />
          </div> */}
          <div className={"input60block"}>
            <p className="input60title">СПОСОБ ОПЛАТЫ</p>
            <MySelect
              onChange={(method) => setPaymentMethod(method)}
              defaultValue="Выберите способ оплаты"
              options={[{ value: "Тинькофф", name: "Тинькофф" }]}
            />
          </div>
          <button
            type="submit"
            className={`btn209 f12_Unbounded font-black bg-green`}
          >
            ОПЛАТИТЬ
          </button>
        </form>
      </div>
    </>
  );
};
export { Payment };
