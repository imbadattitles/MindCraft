"use client";

import { useDispatch } from "react-redux";
import s from "../styles/course.module.sass";
import {
  pushItems,
  setAmount,
  setTotalPrice,
} from "@/app/redux/user/cart-slice";
import { useState } from "react";

const CourseItems = ({ theme }) => {
  const items = [
    { name: "ОСНОВЫ ИНФОРМАТИКИ", cost: { month: 1950, year: 10000 } },
    { name: "ПРОДВИНУТАЯ ИНФОРМАТИКА", cost: { month: 1950, year: 10000 } },
    { name: "ПОДГОТОВКА К ЕГЭ", cost: { month: 1950, year: 10000 } },
  ];
  const dispatch = useDispatch();
  const addCourse = (item, price) => {
    console.log(price);
    dispatch(
      pushItems({
        ...item,
        count: 1,
        type: price,
        cost: typeof item.cost === "object" ? item.cost[price] : item.cost,
      })
    );
    dispatch(setAmount());
    setIncart([...incart, item.name]);
    dispatch(setTotalPrice());
  };
  const [incart, setIncart] = useState([]);
  const [firstBlockPrice, setFirstBlockPrice] = useState("month");
  const [secondBlockPrice, setSecondBlockPrice] = useState("month");
  const [thirdBlockPrice, setThirdBlockPrice] = useState("month");
  const [fourthBlockPrice, setFourthBlockPrice] = useState("month");
  const [fifthBlockPrice, setFifthBlockPrice] = useState("month");
  return (
    <div className={`coursesBg-${theme} ${s.coursesBlock}`}>
      <div className={`${s.courseBlock} bg-white`}>
        <span className={`shape-${theme}`} />
        <div className={s.courseTop}>
          <div className={s.picContainer}>
            <img src="/courses/coursePic1.png" className={s.courseImg} />
          </div>
          <span className={s.courseBlack} />
          <span className={`coursePic-${theme}`} />
          <h3 className={`f40 font-${theme}`}>{items[0].name}</h3>
        </div>
        <div className={s.courseBottom}>
          <div className={s.courseInfo}>
            <div className={s.courseInfoAge}>
              <span className={s.courseInfoAgeIcon} />
              <p>6-8, 9-10, 11-12 лет</p>
            </div>
            {typeof items[0].cost == "object" ? (
              <>
                <div className={`${s.changeCostBtn} borderBtn-black`}>
                  <div
                    onClick={() => setFirstBlockPrice("month")}
                    className={`${
                      firstBlockPrice == "month"
                        ? `${s.changeCostBtnItem} bg-black font-white`
                        : `${s.changeCostBtnItem} font-black`
                    }`}
                  >
                    Месяц
                  </div>
                  <div
                    onClick={() => setFirstBlockPrice("year")}
                    className={`${
                      firstBlockPrice == "year"
                        ? `${s.changeCostBtnItem} bg-black font-white`
                        : `${s.changeCostBtnItem} font-black`
                    }`}
                  >
                    полугодие
                  </div>
                </div>
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>{items[0].cost[firstBlockPrice]}</p>
                </div>
              </>
            ) : (
              <div className={s.courseInfoCost}>
                <span className={s.courseInfoCostIcon} />
                <p>{items[0].cost}</p>
              </div>
            )}
          </div>
          <div className={s.courseTextBlock}>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО ВХОДИТ В КУРС:</h3>
              <ul className={s.courseTextList}>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>
                    Личные проекты от преподавателей fdgdfdfgdgf dgdfgdf
                    dgfdfdfgdgf dfgdfgdfgdf dfgdfsd sdfdssdf{" "}
                  </h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
              </ul>
            </div>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО БУДЕМ ИЗУЧАТЬ</h3>
              <ul className={s.courseTextList}>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.courseInfoBtns}>
            {incart.includes(items[0].name) ? (
              <button
                style={{ opacity: ".3" }}
                className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
              >
                В КОРЗИНЕ
              </button>
            ) : (
              <button
                onClick={() => addCourse(items[0], firstBlockPrice)}
                className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
              >
                ЗАПИСАТЬСЯ
              </button>
            )}
            <button className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}>
              ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
            </button>
          </div>
        </div>
      </div>
      <div className={`${s.courseBlock} bg-${theme}`}>
        <span className={`shape-${theme}`} />
        <div className={s.courseTop}>
          <div className={s.picContainer}>
            <img src="/courses/coursePic1.png" className={s.courseImg} />
          </div>
          <span className={s.courseBlack} />
          <span className={`coursePic-${theme}`} />
          <h3 className={`f40 font-${theme}`}>ОСНОВЫ ИНФОРМАТИКИ</h3>
        </div>
        <div className={s.courseBottom}>
          <div className={s.courseInfo}>
            <div className={s.courseInfoAge}>
              <span className={s.courseInfoAgeIcon} />
              <p>6-8, 9-10, 11-12 лет</p>
            </div>
            {typeof items[1].cost == "object" ? (
              <>
                <div className={`${s.changeCostBtn} borderBtn-black`}>
                  <div
                    onClick={() => setSecondBlockPrice("month")}
                    className={`${
                      secondBlockPrice == "month"
                        ? `${s.changeCostBtnItem} bg-black font-white`
                        : `${s.changeCostBtnItem} font-black`
                    }`}
                  >
                    Месяц
                  </div>
                  <div
                    onClick={() => setSecondBlockPrice("year")}
                    className={`${
                      secondBlockPrice == "year"
                        ? `${s.changeCostBtnItem} bg-black font-white`
                        : `${s.changeCostBtnItem} font-black`
                    }`}
                  >
                    полугодие
                  </div>
                </div>
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>{items[1].cost[secondBlockPrice]}</p>
                </div>
              </>
            ) : (
              <div className={s.courseInfoCost}>
                <span className={s.courseInfoCostIcon} />
                <p>{items[1].cost}</p>
              </div>
            )}
          </div>
          <div className={s.courseTextBlock}>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО ВХОДИТ В КУРС:</h3>
              <ul className={s.courseTextList}>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>
                    Личные проекты от преподавателей fdgdfdfgdgf dgdfgdf
                    dgfdfdfgdgf dfgdfgdfgdf dfgdfsd sdfdssdf{" "}
                  </h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
              </ul>
            </div>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО БУДЕМ ИЗУЧАТЬ</h3>
              <ul className={s.courseTextList}>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.courseInfoBtns}>
            {incart.includes(items[1].name) ? (
              <button
                style={{ opacity: ".3" }}
                className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
              >
                В КОРЗИНЕ
              </button>
            ) : (
              <button
                onClick={() => addCourse(items[1], secondBlockPrice)}
                className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
              >
                ЗАПИСАТЬСЯ
              </button>
            )}
            <button className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}>
              ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
            </button>
          </div>
        </div>
      </div>
      <div className={`${s.courseBlock} bg-black`}>
        <span className={`shape-${theme}`} />
        <div className={s.courseTop}>
          <div className={s.picContainer}>
            <img src="/courses/coursePic1.png" className={s.courseImg} />
          </div>
          <span className={`${s.courseBlack} borderBottom-${theme}`} />
          <span className={`coursePic-${theme}`} />
          <h3 className={`f40 font-${theme}`}>ОСНОВЫ ИНФОРМАТИКИ</h3>
        </div>
        <div className={s.courseBottom}>
          <div className={s.courseInfo}>
            <div className={s.courseInfoAge}>
              <span className={s.courseInfoAgeIcon} />
              <p>6-8, 9-10, 11-12 лет</p>
            </div>
            {typeof items[2].cost == "object" ? (
              <>
                <div className={`${s.changeCostBtn} borderBtn-${theme}`}>
                  <div
                    onClick={() => setThirdBlockPrice("month")}
                    className={`${
                      thirdBlockPrice == "month"
                        ? `${s.changeCostBtnItem} bg-${theme} font-black`
                        : `${s.changeCostBtnItem} font-white`
                    }`}
                  >
                    Месяц
                  </div>
                  <div
                    onClick={() => setThirdBlockPrice("year")}
                    className={`${
                      thirdBlockPrice == "year"
                        ? `${s.changeCostBtnItem} bg-${theme} font-black`
                        : `${s.changeCostBtnItem} font-white`
                    }`}
                  >
                    полугодие
                  </div>
                </div>
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>{items[2].cost[thirdBlockPrice]}</p>
                </div>
              </>
            ) : (
              <div className={s.courseInfoCost}>
                <span className={s.courseInfoCostIcon} />
                <p>{items[2].cost}</p>
              </div>
            )}
          </div>
          <div className={s.courseTextBlock}>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-${theme}`}>ЧТО ВХОДИТ В КУРС:</h3>
              <ul className={s.courseTextList}>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>
                    Личные проекты от преподавателей fdgdfdfgdgf dgdfgdf
                    dgfdfdfgdgf dfgdfgdfgdf dfgdfsd sdfdssdf{" "}
                  </h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Личные проекты от преподавателей</h6>
                </li>
              </ul>
            </div>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-${theme}`}>ЧТО БУДЕМ ИЗУЧАТЬ</h3>
              <ul className={s.courseTextList}>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
                <li className={`f17 font-black ${s.courseTextItem2}`}>
                  <span className={s.courseTextIcon} />
                  <h6>Алгоритмические задачи</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.courseInfoBtns}>
            {incart.includes(items[2].name) ? (
              <button
                style={{ opacity: ".3" }}
                className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
              >
                В КОРЗИНЕ
              </button>
            ) : (
              <button
                onClick={() => addCourse(items[2], secondBlockPrice)}
                className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
              >
                ЗАПИСАТЬСЯ
              </button>
            )}
            <button className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}>
              ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseItems };
