"use client";
import Image from "next/image";
import logo from "../public/logoMobile.svg";
import s from "../styles/header.module.sass";
import { useState } from "react";

const { default: Link } = require("next/link");

const HeaderMobile = () => {
  const [visible, setVisible] = useState(false);
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
              <Link href="/about">Новости</Link>
            </li>
            <li>
              <Link href="/about">Скачать</Link>
            </li>
          </ul>
          <div className={s.headerBtns}>
            <button className="btn-cart">
              <span
                style={{ border: "2px solid #8de936" }}
                className="font-green bg-black"
              >
                12
              </span>
              <div className="btn-icon"></div>
            </button>
            <button className="btn-header f12_Unbounded">Войти</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { HeaderMobile };
