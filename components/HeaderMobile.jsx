"use client";
import Image from "next/image";
import logo from "../public/logoMobile.svg";
import s from "../styles/header.module.sass";
import { useState } from "react";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { anLogin } from "@/app/redux/user/user-slice";

const { default: Link } = require("next/link");

const HeaderMobile = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(0);
  const amountInCart = useSelector((state) => state.cart.amount);
  const clickCart = () => {
    router.push("/cart");
    setVisible(false);
  };

  const auth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();
  return (
    <div className={`container ${s.headerMobile}`}>
      <Link href="/">
        <Image
          className={s.logoMobile}
          src={logo}
          width={66}
          height={43}
          alt="Mind Craft Академия"
        />
      </Link>
      <button onClick={() => setVisible(true)} className={s.burger} />
      {visible && (
        <div className={s.mobileMenu}>
          <Link href="/">
            <Image
              className={s.logoMobile}
              src={logo}
              width={66}
              height={43}
              alt="Mind Craft Академия"
            />
          </Link>
          <button onClick={() => setVisible(false)} className={s.burgerClose} />
          <ul>
            <li>
              <Link href="/">Программы</Link>
            </li>
            <li>
              <Link href="/blog">Платформа</Link>
            </li>
            <li className="h1">
              <Link href="/about">Преподаватели</Link>
            </li>
            <li>
              <Link href="/about">О minecraft</Link>
            </li>
            <li>
              <Link href="/posts">Новости</Link>
            </li>
            <li>
              <Link href="/postStatic/2">Скачать</Link>
            </li>
          </ul>
          <div className={s.headerBtns}>
            <button onClick={() => clickCart()} className="btn-cart">
              {amountInCart > 0 && (
                <span
                  style={{ border: "2px solid black" }}
                  className="font-black bg-green"
                >
                  {amountInCart}
                </span>
              )}
              <div className="btn-icon"></div>
            </button>

            {!auth ? (
              <button
                onClick={() => setVisibleLogin(1)}
                className="btn-header f12_Unbounded"
              >
                Войти
              </button>
            ) : (
              <button
                onClick={() => router.push("/user")}
                className="btn-header f12_Unbounded"
              >
                Профиль
              </button>
            )}
          </div>
          {visibleLogin == 1 && <Login close={setVisibleLogin} />}
        </div>
      )}
    </div>
  );
};

export { HeaderMobile };
