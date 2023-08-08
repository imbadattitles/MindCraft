"use client";
const { useState } = require("react");
import Link from "next/link";
import s from "../../styles/userPage.module.sass";
import { ChangeInfo } from "@/components/ChangeInfo";

export default function UserPage() {
  const [user, setUser] = useState({
    name: "Петя",
    age: "15",
    nickname: "petya_smirnov",
    email: "petyasmirnov@gmail.com",
    phone: "+7 (908) 827-22-46",
    photo: "/user/petya.png",
    password: "00000000",
    links: { discord: false, telegram: false, vk: "Petya_Smirnov" },
  });
  const [activeMenu, setActiveMenu] = useState(1);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [changeInfo, setChangeInfo] = useState(0);
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
          {activeMenu == 2 && <span className={s.menu_cube} />}
          {activeMenu == 3 && <span className={s.menu_cube} />}
        </div>
        {activeMenu == 1 && (
          <div className={s.myProfile}>
            <div className={s.info}>
              <p className={`f28 ${s.infoTitle}`}>Личная информация</p>
              <img className={s.photo} src={user?.photo} />
              <div className={s.infoRow}>
                <p className={s.leftInfo}>ИМЯ</p>
                <p className={s.RightInfo}>{user.name}</p>
              </div>
              <div className={s.infoRow}>
                <p className={s.leftInfo}>ВОЗРАСТ</p>
                <p className={s.RightInfo}>{user.age}</p>
              </div>
              <div className={s.infoRow}>
                <p className={s.leftInfo}>НИКНЕЙМ НА СЕРВЕРЕ</p>
                <p className={s.RightInfo}>{user.nickname}</p>
              </div>
              <div className={s.infoRow}>
                <p className={s.leftInfo}>E-MAIL</p>
                <p className={s.RightInfo}>{user.email}</p>
              </div>
              <div className={s.infoRow}>
                <p className={s.leftInfo}>ТЕЛЕФОН</p>
                <p className={s.RightInfo}>{user.phone}</p>
              </div>
              <button
                onClick={() => setChangeInfo(!changeInfo)}
                className={`bg-green font-black btn232`}
              >
                {!changeInfo ? "РЕДАКТИРОВАТЬ" : "ОТМЕНИТЬ РЕДАКТИРОВАНИЕ"}
              </button>
              <span className={s.leftPic} />
            </div>
            <div className={s.RightColumn}>
              <span className={s.card_cube} />
              <span className={s.card_pic} />
              {!changeInfo ? (
                <>
                  <p className={`f28 ${s.formTitle}`}>Сменить пароль:</p>
                  <form className={s.form}>
                    <div className={"input60block"}>
                      <p className="input60title">СТАРЫЙ ПАРОЛЬ</p>
                      <input
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.targetValue)}
                        type="password"
                        className={`input60 f19`}
                      />
                    </div>
                    <div className={"input60block"}>
                      <p className="input60title">НОВЫЙ ПАРОЛЬ</p>
                      <input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.targetValue)}
                        type="password"
                        className={`input60 f19`}
                      />
                    </div>
                    <div className={"input60block"}>
                      <p className="input60title">ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ</p>
                      <input
                        value={repeatNewPassword}
                        onChange={(e) => setRepeatNewPassword(e.targetValue)}
                        type="password"
                        className={`input60 f19`}
                      />
                    </div>
                    <button
                      type="submit"
                      className={`btn209 f12 bg-green ${s.saveBtn}`}
                    >
                      Сохранить
                    </button>
                  </form>
                </>
              ) : (
                <ChangeInfo />
              )}
              <div className={s.links}>
                <p className={`f28 ${s.linksTitle}`}>Привязать аккаунт</p>
                <div className={s.linksRow}>
                  {user.links.discord ? (
                    <div className={s.linkItemActive}>
                      <Link href="/" className={s.linkItemActiveDisck} />
                      <div className={s.linkItemActiveText}>
                        <p className="f17">{user.links.discord}</p>
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
                  {user.links.telegram ? (
                    <div className={s.linkItemActive}>
                      <Link href="/" className={s.linkItemActiveTelegram} />
                      <div className={s.linkItemActiveText}>
                        <p className="f17">{user.links.telegram}</p>
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
                  {user.links.vk ? (
                    <div className={s.linkItemActive}>
                      <Link href="/" className={s.linkItemActiveVk} />
                      <div className={s.linkItemActiveText}>
                        <p className="f17">{user.links.vk}</p>
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
                <tr className={`tableRow`}>
                  <th className={`tableRowText`}>Математика</th>
                  <th className={`tableRowText`}>23.08.2023</th>
                  <th className={`tableRowText`}>10:00</th>
                  <th className={`tableRowText`}>Запланирован</th>
                  <th className={`tableRowText`}>В группе</th>
                </tr>
                <tr className={`tableRow`}>
                  <th className={`tableRowText`}>Математика</th>
                  <th className={`tableRowText`}>23.08.2023</th>
                  <th className={`tableRowText`}>10:00</th>
                  <th className={`tableRowText`}>Запланирован</th>
                  <th className={`tableRowText`}>В группе</th>
                </tr>
              </table>
            </div>
          </div>
        )}
        {activeMenu == 3 && (
          <div>
            <div className="tableScroll">
              <table className={`table`}>
                <thead className="tableHeader">
                  <tr>
                    <th className={`tableHeaderTitle`}>Монеты</th>
                    <th className={`tableHeaderTitle`}>Когда потрачено</th>
                    <th className={`tableHeaderTitle`}>Изменение баланса</th>
                    <th className={`tableHeaderTitle`}>Время</th>
                  </tr>
                </thead>
                <tr className={`tableRow`}>
                  <th className={`tableRowText`}>Математика</th>
                  <th className={`tableRowText`}>23.08.2023</th>
                  <th className={`tableRowText`}>10:00</th>
                  <th className={`tableRowText`}>Запланирован</th>
                </tr>
              </table>
            </div>
            <div className={s.storyChange}>
              <p className={`f28 ${s.storyTitle}`}>История транзакций</p>
            </div>
            <div className="tableScroll">
              <table className={`table`}>
                <thead className="tableHeader">
                  <tr>
                    <th className={`tableHeaderTitle`}>Монеты</th>
                    <th className={`tableHeaderTitle`}>Когда потрачено</th>
                    <th className={`tableHeaderTitle`}>Изменение баланса</th>
                    <th className={`tableHeaderTitle`}>Время</th>
                  </tr>
                </thead>
                <tr className={`tableRow`}>
                  <th className={`tableRowText`}>Математика</th>
                  <th className={`tableRowText`}>23.08.2023</th>
                  <th className={`tableRowText`}>10:00</th>
                  <th className={`tableRowText`}>Запланирован</th>
                </tr>
              </table>
            </div>
          </div>
        )}
        {activeMenu == 4 && <div></div>}
      </div>
    </section>
  );
}
