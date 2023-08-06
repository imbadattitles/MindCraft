"use client";
import Image from "next/image";
import logo from "../public/logo.svg";
import s from "../styles/header.module.sass";
import { HeaderMobile } from "./HeaderMobile";
import { useState } from "react";
import { Login } from "./Login";

const { default: Link } = require("next/link");

const Header = () => {
  const [visible, setVisible] = useState(0);
  return (
    <>
      <header className={`container ${s.header}`}>
        <Link href="/">
          <Image src={logo} width={102} height={66} alt="Mind Craft Академия" />
        </Link>
        <ul className="f12_5">
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
            <Link href="/about">Скачать</Link>
          </li>
        </ul>
        <div className={s.headerBtns}>
          <button className="btn-cart">
            <span className="font-black bg-green">12</span>
            <div className="btn-icon"></div>
          </button>
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
