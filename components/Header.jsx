"use client";
import Image from "next/image";
import logo from "../public/logo.svg";
import s from "../styles/header.module.sass";
import { HeaderMobile } from "./HeaderMobile";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { anLogin, localStorageParse } from "@/app/redux/user/user-slice";

const { default: Link } = require("next/link");

const Header = ({ menu }) => {
  const [visible, setVisible] = useState(0);
  const items = useSelector((state) => state.cart.items);
  const auth = useSelector((state) => state.user.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const amountInCart = useSelector((state) => state.cart.amount);
  useEffect(() => {
    dispatch(localStorageParse());
  }, []);
  return (
    <>
      <header className={`container ${s.header}`}>
        <Link href="/">
          <Image src={logo} width={102} height={66} alt="Mind Craft Академия" />
        </Link>
        <ul className="f12_5">
          {menu.map((item) => (
            <li key={item.id}>
              <Link href={"/" + item.link}>
                {item.text} {item.items.length > 0 && <span></span>}
              </Link>
              {item.items.length > 0 && (
                <div className={s.headerLinkList}>
                  {item.items.map((option) => (
                    <Link href={"/" + option.link} key={option.text}>
                      {option.text}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          {/* <li>
            <Link href="/#ourProgram">Программы</Link>
          </li>
          <li>
            <Link href="/#preparing">Платформа</Link>
          </li>
          <li>
            <Link href="/#ourMentors">Преподаватели</Link>
          </li>
          <li>
            <Link href="/about">О minecraft</Link>
          </li>
          <li>
            <Link href="/posts">Новости</Link>
          </li>
          <li>
            <Link href="/postStatic/2">Скачать</Link>
          </li> */}
        </ul>
        <div className={s.headerBtns}>
          {items.length > 0 ? (
            <Link href="/cart">
              <button className="btn-cart">
                {amountInCart > 0 && (
                  <span className="font-black bg-green">{amountInCart}</span>
                )}
                <div className="btn-icon"></div>
              </button>
            </Link>
          ) : (
            <button style={{ opacity: ".5" }} className="btn-cart">
              {amountInCart > 0 && (
                <span className="font-black bg-green">{amountInCart}</span>
              )}
              <div className="btn-icon"></div>
            </button>
          )}

          {!auth ? (
            <button
              onClick={() => setVisible(1)}
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
      </header>
      {visible == 1 && <Login close={setVisible} />}
    </>
  );
};

export { Header };
