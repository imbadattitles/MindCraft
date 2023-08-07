"use client";
import Image from "next/image";
import logo from "../public/logo.svg";
import s from "../styles/header.module.sass";
import { HeaderMobile } from "./HeaderMobile";
import { useState } from "react";
import { Login } from "./Login";
import { useSelector } from "react-redux";

const { default: Link } = require("next/link");

const Header = () => {
  const [visible, setVisible] = useState(0);
  const amountInCart = useSelector((state) => state.cart.amount);
  return (
    <>
      <header className={`container ${s.header}`}>
        <Link href="/">
          <Image src={logo} width={102} height={66} alt="Mind Craft Академия" />
        </Link>
        <ul className="f12_5">
          <li>
            <Link href="#ourProgram">Программы</Link>
          </li>
          <li>
            <Link href="#preparing">Платформа</Link>
          </li>
          <li>
            <Link href="#ourMentors">Преподаватели</Link>
          </li>
          <li>
            <Link href="/about">О minecraft</Link>
          </li>
          <li>
            <Link href="/posts">Новости</Link>
          </li>
          <li>
            <Link href="/about">Скачать</Link>
          </li>
        </ul>
        <div className={s.headerBtns}>
          <Link href="/cart">
            <button className="btn-cart">
              {amountInCart > 0 && (
                <span className="font-black bg-green">{amountInCart}</span>
              )}
              <div className="btn-icon"></div>
            </button>
          </Link>
          <button
            onClick={() => setVisible(1)}
            className="btn-header f12_Unbounded"
          >
            Войти
          </button>
        </div>
      </header>
      {visible == 1 && <Login close={setVisible} />}
    </>
  );
};

export { Header };
