"use client";
const { useState } = require("react");
import Link from "next/link";
import s from "./userPage.module.sass";
import "./input.sass";
import { ChangeInfo } from "@/components/ChangeInfo";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { anLogin } from "../redux/user/user-slice";
import { ChangePassword } from "./ChangePassword";
import { url } from "../page";

export default function UserPage() {
  const [timetable, setTimetable] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState([]);
  const [activeMenu, setActiveMenu] = useState(1);
  const [changeInfo, setChangeInfo] = useState(0);

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
  const exit = () => {
    dispatch(anLogin());
    router.push("/");
  };
  const userInfo = useSelector((state) => state.user.user);
  const auth = useSelector((state) => state.user.auth);
  const getTimetable = async () => {
    const res = await fetch(
      `https://gateway.service.bus.mchamp.ru/api/v1/cmsBridge/user/getUserTimetable/${userInfo.id}`,
      {
        headers: {
          Authorization: `Bearer ${res.token}`,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    console.log(res);
    if (res.errors) {
      exit();
    } else {
      setTimetable(res.result);
    }
  };
  const getTransactions = async () => {
    const { result } = await fetch(
      `https://api.mchamp.ru/v1/user/transactions/${userInfo.id}`
    ).then((res) => res.json());
    setTransactions(result);
  };
  useEffect(() => {
    if (!auth && typeof window !== "undefined") {
      router.push("/");
    } else {
      getTimetable();
      getTransactions();
    }
  }, [auth]);
  if (!auth) return null;
  else
    return (
      <section className={s.section}>
        <div className="container">
          <div className={s.menuAndBtn}>
            <div className={s.menu}>
              <div
                onClick={() => setActiveMenu(1)}
                className={`${s.menuItem} ${activeMenu == 1 && s.active}`}
              >
                <span className={s.menuItemIcon} />
                <p>Мой профиль</p>
                <span className={s.inline}>....................</span>
              </div>
              <div
                onClick={() => setActiveMenu(2)}
                className={`${s.menuItem} ${activeMenu == 2 && s.active}`}
              >
                <span className={s.menuItemIcon} />
                <p>Мои уроки</p>
                <span className={s.inline}>................</span>
              </div>
              <div
                onClick={() => setActiveMenu(3)}
                className={`${s.menuItem} ${activeMenu == 3 && s.active}`}
              >
                <span className={s.menuItemIcon} />
                <p>Монеты</p>
                <span className={s.inline}>............</span>
              </div>
              <div
                onClick={() => setActiveMenu(4)}
                className={`${s.menuItem} ${activeMenu == 4 && s.active}`}
              >
                <span className={s.menuItemIcon} />
                <p>Подписки</p>
                <span className={s.inline}>...............</span>
              </div>
            </div>
            {activeMenu == 2 && (
              <Link href={"/"}>
                <button className={`f12 bg-green ${s.individualBtn}`}>
                  КУПИТЬ ИНДИВИДУАЛЬНОЕ ЗАНЯТИЕ
                </button>
              </Link>
            )}
            {activeMenu == 3 && (
              <Link href={"/"}>
                <button className={`f12 bg-green ${s.individualBtn}`}>
                  КУПИТЬ МОНЕТЫ
                </button>
              </Link>
            )}
            {activeMenu == 2 && <span className={`${s.menu_cube} anim2`} />}
            {activeMenu == 3 && <span className={`${s.menu_cube} anim2`} />}
          </div>
          {activeMenu == 1 && (
            <div className={s.myProfile}>
              <div className={s.info}>
                <p className={`f28 ${s.infoTitle}`}>Личная информация</p>
                <img
                  className={s.photo}
                  src={userInfo?.avatar || "/user/petya.png"}
                />
                <div className={s.infoRow}>
                  <p className={s.leftInfo}>ФИО</p>
                  <p className={s.RightInfo}>{userInfo?.name}</p>
                </div>
                <div className={s.infoRow}>
                  <p className={s.leftInfo}>ВОЗРАСТ</p>
                  <p className={s.RightInfo}>{userInfo.age}</p>
                </div>
                <div className={s.infoRow}>
                  <p className={s.leftInfo}>НИКНЕЙМ НА СЕРВЕРЕ</p>
                  <p className={s.RightInfo}>{userInfo.nickname}</p>
                </div>
                <div className={s.infoRow}>
                  <p className={s.leftInfo}>E-MAIL</p>
                  <p className={s.RightInfo}>{userInfo.email}</p>
                </div>
                <div className={s.infoRow}>
                  <p className={s.leftInfo}>ТЕЛЕФОН</p>
                  <p className={s.RightInfo}>{userInfo.phone}</p>
                </div>
                <button
                  onClick={() => setChangeInfo(!changeInfo)}
                  className={`bg-green font-black btn232`}
                >
                  {!changeInfo ? "РЕДАКТИРОВАТЬ" : "ОТМЕНИТЬ РЕДАКТИРОВАНИЕ"}
                </button>
                <button
                  style={{ marginTop: "15px" }}
                  onClick={() => exit()}
                  className="bg-green font-black btn232"
                >
                  ВЫЙТИ
                </button>
                <span className={s.leftPic} />
              </div>
              <div className={s.RightColumn}>
                <span className={`${s.card_cube} anim1`} />
                <span className={s.card_pic} />
                {!changeInfo ? (
                  <>
                    <p className={`f28 ${s.formTitle}`}>Сменить пароль:</p>
                    <ChangePassword id={userInfo.id} />
                  </>
                ) : (
                  <ChangeInfo />
                )}
                <div className={s.links}>
                  <p className={`f28 ${s.linksTitle}`}>Привязать аккаунт</p>
                  <div className={s.linksRow}>
                    {userInfo.socials?.discord ? (
                      <div className={s.linkItemActive}>
                        <Link
                          href={userInfo.socials.discord}
                          className={s.linkItemActiveDisck}
                        />
                        <div className={s.linkItemActiveText}>
                          <p className="f17">{userInfo.socials.discord}</p>
                          <Link
                            className={`f17 ${s.linkItemActiveText_cancel}`}
                            href="/"
                          >
                            Отвязать
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link className={s.linkItemUnActiveDisck} href=""></Link>
                    )}
                    {userInfo.socials?.telegram ? (
                      <div className={s.linkItemActive}>
                        <Link
                          href={userInfo.socials.telegram}
                          className={s.linkItemActiveTelegram}
                        />
                        <div className={s.linkItemActiveText}>
                          <p className="f17">{userInfo.socials.telegram}</p>
                          <Link
                            className={`f17 ${s.linkItemActiveText_cancel}`}
                            href="/"
                          >
                            Отвязать
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        className={s.linkItemUnActiveTelegram}
                        href="/"
                      ></Link>
                    )}
                    {userInfo.socials?.vk ? (
                      <div className={s.linkItemActive}>
                        <Link
                          href={userInfo.socials.vk}
                          className={s.linkItemActiveVk}
                        />
                        <div className={s.linkItemActiveText}>
                          <p className="f17">{userInfo.socials.vk}</p>
                          <Link
                            className={`f17 ${s.linkItemActiveText_cancel}`}
                            href="/"
                          >
                            Отвязать
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link className={s.linkItemUnActiveVk} href=""></Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeMenu == 2 && (
            <div>
              <div className="tableScroll">
                <table className={`table`}>
                  <thead className="tableHeader">
                    <tr>
                      <th className={`tableHeaderTitle`}>Предмет</th>
                      <th className={`tableHeaderTitle`}>Дата</th>
                      <th className={`tableHeaderTitle`}>Время</th>
                      <th className={`tableHeaderTitle`}>Статус</th>
                      <th className={`tableHeaderTitle`}>Тип урока</th>
                    </tr>
                  </thead>
                  {timetable.upcoming.map((item) => (
                    <tr key={item.time} className={`tableRow`}>
                      <th className={`tableRowText`}>{item.subject}</th>
                      <th className={`tableRowText`}>{item.date}</th>
                      <th className={`tableRowText`}>{item.time}</th>
                      <th className={`tableRowText`}>{item.status}</th>
                      <th className={`tableRowText`}>{item.type}</th>
                    </tr>
                  ))}
                  {timetable.past.map((item) => (
                    <tr key={item.time} className={`tableRow`}>
                      <th className={`tableRowText`}>{item.subject}</th>
                      <th className={`tableRowText`}>{item.date}</th>
                      <th className={`tableRowText`}>{item.time}</th>
                      <th className={`tableRowText`}>{item.status}</th>
                      <th className={`tableRowText`}>{item.type}</th>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )}
          {activeMenu == 3 && (
            <div>
              <div className={s.storyChange}>
                <p className={`f28 ${s.storyTitle}`}>История транзакций</p>
              </div>
              <div className="tableScroll">
                <table className={`table`}>
                  <thead className="tableHeader">
                    <tr>
                      <th className={`tableHeaderTitle`}>Монеты</th>
                      <th className={`tableHeaderTitle`}>Время транзакции</th>
                      <th className={`tableHeaderTitle`}>Количество монет</th>
                      <th className={`tableHeaderTitle`}>Тип транзакции</th>
                    </tr>
                  </thead>
                  {transactions !== null &&
                    transactions.map((item) => (
                      <tr key={item.id} className={`tableRow`}>
                        <th className={`tableRowText`}>{item.currency}</th>
                        <th className={`tableRowText`}>{item.processed}</th>
                        <th className={`tableRowText`}>{item.amount}</th>
                        <th className={`tableRowText`}>
                          {item.transaction_type}
                        </th>
                      </tr>
                    ))}
                </table>
              </div>
            </div>
          )}
          {activeMenu == 4 && <div></div>}
        </div>
      </section>
    );
}
