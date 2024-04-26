"use client";
import {
  pushItems,
  setAmount,
  setTotalPrice,
} from "@/app/redux/user/cart-slice";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "@/app/course/[id]/course.module.sass";
import "@/app/course/[id]/css.sass";
import { useRouter } from "next/navigation";
import { url } from "@/app/page";

const Course = ({ item, index, theme }) => {
  const [activeChapter, setActiveChapter] = useState(item.chapters[0]);
  const router = useRouter();
  const dispatch = useDispatch();
  const addCourse = () => {
    dispatch(
      pushItems({
        title: item.name,
        id: activeChapter.id,
        name: activeChapter.name,
        alias: activeChapter.alias,
        price: activeChapter.items[blockPrice].price,
        // idItem: activeChapter.items[blockPrice].id,
        nameItem: activeChapter.items[blockPrice].name,
        options: activeChapter.items[blockPrice].options,
        img: item.icon,
      })
    );
    dispatch(setAmount());
    dispatch(setTotalPrice());
    router.push("/cart");
  };
  const [incart, setIncart] = useState([]);
  const [blockPrice, setBlockPrice] = useState(0);
  if (index === 0 || index === 3)
    return (
      <div className={`${s.courseBlock} bg-white`}>
        <span className={`shape shape-${theme}`} />
        <div className={s.courseTop}>
          <div className={s.picContainer}>
            <img src={url + item.icon} className={s.courseImg} />
          </div>

          <h3 className={`f40 font-${theme}`}>{item.name}</h3>
        </div>
        <div className={s.courseBottom}>
          <div className={s.courseInfo}>
            <div className={s.courseInfoAge}>
              <div className={`${s.changeCostBtn}  borderBtn-black`}>
                {item.chapters.map((chapter, index) => {
                  if (index <= 2)
                    return (
                      <div
                        onClick={() => setActiveChapter(chapter)}
                        key={chapter.id}
                        className={`${
                          chapter.id == activeChapter.id
                            ? `${s.changeCostBtnItem} bg-black font-white`
                            : `${s.changeCostBtnItem} font-black`
                        }`}
                      >
                        {chapter.alias}
                      </div>
                    );
                })}
              </div>
              {item.chapters[3] && (
                <div className={`${s.changeCostBtn}  borderBtn-black`}>
                  {item.chapters.map((chapter, index) => {
                    if (index > 2 && index <= 5)
                      return (
                        <div
                          onClick={() => setActiveChapter(chapter)}
                          key={chapter.id}
                          className={`${
                            chapter.id == activeChapter.id
                              ? `${s.changeCostBtnItem} bg-black font-white`
                              : `${s.changeCostBtnItem} font-black`
                          }`}
                        >
                          {chapter.alias}
                        </div>
                      );
                  })}
                </div>
              )}
              {item.chapters[6] && (
                <div className={`${s.changeCostBtn}  borderBtn-black`}>
                  {item.chapters.map((chapter, index) => {
                    if (index > 5 && index <= 8)
                      return (
                        <div
                          onClick={() => setActiveChapter(chapter)}
                          key={chapter.id}
                          className={`${
                            chapter.id == activeChapter.id
                              ? `${s.changeCostBtnItem} bg-black font-white`
                              : `${s.changeCostBtnItem} font-black`
                          }`}
                        >
                          {chapter.alias}
                        </div>
                      );
                  })}
                </div>
              )}
            </div>
            {activeChapter.items[0] && (
              <>
                <div className={`${s.changeCostBtn}  borderBtn-black`}>
                  {activeChapter.items.map((item, index) => (
                    <div
                      key={item.name}
                      onClick={() => setBlockPrice(index)}
                      className={`${
                        blockPrice == index
                          ? `${s.changeCostBtnItem} bg-black font-white`
                          : `${s.changeCostBtnItem} font-black`
                      }`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>{activeChapter.items[blockPrice].price} ₽</p>
                </div>
              </>
            )}
            {activeChapter.items[0] && (
              <div className={`${s.courseInfoBtns} course1200plus`}>
                {incart.includes(activeChapter.items[blockPrice].name) ? (
                  <button
                    style={{ opacity: ".3" }}
                    className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                  >
                    В КОРЗИНЕ
                  </button>
                ) : (
                  <button
                    onClick={() => addCourse()}
                    className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                  >
                    ЗАПИСАТЬСЯ
                  </button>
                )}
                <button
                  className={`f12 bg-${theme}  font-black ${s.courseInfoBtn} nonActiveBtn`}
                >
                  ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
                  <div className="textOnHover">Скоро будет в академии</div>
                </button>
              </div>
            )}
          </div>
          <div className={s.courseTextBlock}>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО ВХОДИТ В КУРС:</h3>
              <ul className={s.courseTextList}>
                {activeChapter.course_content.map((item) => (
                  <li
                    key={item}
                    className={`f17 font-black ${s.courseTextItem}`}
                  >
                    <span
                      className={`courseTextIcon courseTextIcon-${theme}`}
                    />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО БУДЕМ ПРОХОДИТЬ:</h3>
              <ul className={s.courseTextList}>
                {activeChapter.will_study.map((item) => (
                  <li
                    key={item}
                    className={`f17 font-black ${s.courseTextItem2}`}
                  >
                    <span
                      className={`courseTextIconCube courseTextIconCube-${theme}`}
                    />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {activeChapter.items[0] && (
            <div className={`${s.courseInfoBtns} course1200minus`}>
              {incart.includes(activeChapter.items[blockPrice].name) ? (
                <button
                  style={{ opacity: ".3" }}
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  В КОРЗИНЕ
                </button>
              ) : (
                <button
                  onClick={() => addCourse()}
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  ЗАПИСАТЬСЯ
                </button>
              )}
              <button
                className={`f12 bg-${theme}  font-black ${s.courseInfoBtn} nonActiveBtn`}
              >
                ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
                <div className="textOnHover">Скоро будет в академии</div>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  if (index === 1 || index === 4)
    return (
      <div id="firstItem" className={`${s.courseBlock} bg-${theme}`}>
        <span className={`shape shape-${theme}`} />
        <div className={s.courseTop}>
          <div className={s.picContainer}>
            <img src={url + item.icon} className={s.courseImg} />
          </div>

          <h3 className={`f40 font-${theme}`}>{item.name}</h3>
        </div>
        <div className={s.courseBottom}>
          <div className={s.courseInfo}>
            <div className={s.courseInfoAge}>
              <div className={`${s.changeCostBtn}  borderBtn-black`}>
                {item.chapters.map((chapter, index) => {
                  if (index <= 2)
                    return (
                      <div
                        onClick={() => setActiveChapter(chapter)}
                        key={chapter.id}
                        className={`${
                          chapter.id == activeChapter.id
                            ? `${s.changeCostBtnItem} bg-black font-white`
                            : `${s.changeCostBtnItem} font-black`
                        }`}
                      >
                        {chapter.alias}
                      </div>
                    );
                })}
              </div>
              {item.chapters[3] && (
                <div className={`${s.changeCostBtn}  borderBtn-black`}>
                  {item.chapters.map((chapter, index) => {
                    if (index > 2 && index <= 5)
                      return (
                        <div
                          onClick={() => setActiveChapter(chapter)}
                          key={chapter.id}
                          className={`${
                            chapter.id == activeChapter.id
                              ? `${s.changeCostBtnItem} bg-black font-white`
                              : `${s.changeCostBtnItem} font-black`
                          }`}
                        >
                          {chapter.alias}
                        </div>
                      );
                  })}
                </div>
              )}
              {item.chapters[6] && (
                <div className={`${s.changeCostBtn}  borderBtn-black`}>
                  {item.chapters.map((chapter, index) => {
                    if (index > 5 && index <= 8)
                      return (
                        <div
                          onClick={() => setActiveChapter(chapter)}
                          key={chapter.id}
                          className={`${
                            chapter.id == activeChapter.id
                              ? `${s.changeCostBtnItem} bg-black font-white`
                              : `${s.changeCostBtnItem} font-black`
                          }`}
                        >
                          {chapter.alias}
                        </div>
                      );
                  })}
                </div>
              )}
            </div>
            {activeChapter.items[0] && (
              <>
                <div className={`${s.changeCostBtn}  borderBtn-black`}>
                  {activeChapter.items.map((item, index) => (
                    <div
                      key={item.name}
                      onClick={() => setBlockPrice(index)}
                      className={`${
                        blockPrice == index
                          ? `${s.changeCostBtnItem} bg-black font-white`
                          : `${s.changeCostBtnItem} font-black`
                      }`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>{activeChapter.items[blockPrice].price} ₽</p>
                </div>
              </>
            )}
            {activeChapter.items[0] && (
              <div className={`${s.courseInfoBtns} course1200plus`}>
                {incart.includes(activeChapter.items[blockPrice].name) ? (
                  <button
                    style={{ opacity: ".3" }}
                    className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                  >
                    В КОРЗИНЕ
                  </button>
                ) : (
                  <button
                    onClick={() => addCourse()}
                    className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                  >
                    ЗАПИСАТЬСЯ
                  </button>
                )}
                <button
                  className={`f12 bg-${theme}  font-black ${s.courseInfoBtn} nonActiveBtn`}
                >
                  ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
                  <div className="textOnHover">Скоро будет в академии</div>
                </button>
              </div>
            )}
          </div>
          <div className={s.courseTextBlock}>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО ВХОДИТ В КУРС:</h3>
              <ul className={s.courseTextList}>
                {activeChapter.course_content.map((item) => (
                  <li
                    key={item}
                    className={`f17 font-black ${s.courseTextItem}`}
                  >
                    <span className={`courseTextIcon courseTextIcon-black`} />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-black`}>ЧТО БУДЕМ ПРОХОДИТЬ:</h3>
              <ul className={s.courseTextList}>
                {activeChapter.will_study.map((item) => (
                  <li
                    key={item}
                    className={`f17 font-black ${s.courseTextItem2}`}
                  >
                    <span
                      className={`courseTextIconCube courseTextIconCube-black`}
                    />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {activeChapter.items[0] && (
            <div className={`${s.courseInfoBtns} course1200minus`}>
              {incart.includes(activeChapter.items[blockPrice].name) ? (
                <button
                  style={{ opacity: ".3" }}
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  В КОРЗИНЕ
                </button>
              ) : (
                <button
                  onClick={() => addCourse()}
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  ЗАПИСАТЬСЯ
                </button>
              )}
              <button
                className={`f12 bg-${theme}  font-black ${s.courseInfoBtn} nonActiveBtn`}
              >
                ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
                <div className="textOnHover">Скоро будет в академии</div>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  if (index === 2 || index === 5)
    return (
      <div className={`${s.courseBlock} bg-black`}>
        <span className={`shape shape-${theme}`} />
        <div className={`${s.courseTop} borderBottom-${theme}`}>
          <div className={s.picContainer}>
            <img src={url + item.icon} className={s.courseImg} />
          </div>

          <h3 className={`f40 font-${theme}`}>{item.name}</h3>
        </div>
        <div className={s.courseBottom}>
          <div className={s.courseInfo}>
            <div className={s.courseInfoAge}>
              <div className={`${s.changeCostBtn}  borderBtn-${theme}`}>
                {item.chapters.map((chapter, index) => {
                  if (index <= 2)
                    return (
                      <div
                        onClick={() => setActiveChapter(chapter)}
                        key={chapter.id}
                        className={`${
                          chapter.id == activeChapter.id
                            ? `${s.changeCostBtnItem} bg-${theme} font-black`
                            : `${s.changeCostBtnItem} font-white`
                        }`}
                      >
                        {chapter.alias}
                      </div>
                    );
                })}
              </div>
              {item.chapters[3] && (
                <div className={`${s.changeCostBtn}  borderBtn-${theme}`}>
                  {item.chapters.map((chapter, index) => {
                    if (index > 2 && index <= 5)
                      return (
                        <div
                          onClick={() => setActiveChapter(chapter)}
                          key={chapter.id}
                          className={`${
                            chapter.id == activeChapter.id
                              ? `${s.changeCostBtnItem} bg-${theme} font-black`
                              : `${s.changeCostBtnItem} font-white`
                          }`}
                        >
                          {chapter.alias}
                        </div>
                      );
                  })}
                </div>
              )}
              {item.chapters[6] && (
                <div className={`${s.changeCostBtn}  borderBtn-${theme}`}>
                  {item.chapters.map((chapter, index) => {
                    if (index > 5 && index <= 8)
                      return (
                        <div
                          onClick={() => setActiveChapter(chapter)}
                          key={chapter.id}
                          className={`${
                            chapter.id == activeChapter.id
                              ? `${s.changeCostBtnItem} bg-${theme} font-black`
                              : `${s.changeCostBtnItem} font-white`
                          }`}
                        >
                          {chapter.alias}
                        </div>
                      );
                  })}
                </div>
              )}
            </div>
            {activeChapter.items[0] && (
              <>
                <div className={`${s.changeCostBtn}  borderBtn-${theme}`}>
                  {activeChapter.items.map((item, index) => (
                    <div
                      key={item.name}
                      onClick={() => setBlockPrice(index)}
                      className={`${
                        blockPrice == index
                          ? `${s.changeCostBtnItem} bg-${theme} font-black`
                          : `${s.changeCostBtnItem} font-white`
                      }`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>{activeChapter.items[blockPrice].price} ₽</p>
                </div>
              </>
            )}
            {activeChapter.items[0] && (
              <div className={`${s.courseInfoBtns} course1200plus`}>
                {incart.includes(activeChapter.items[blockPrice].name) ? (
                  <button
                    style={{ opacity: ".3" }}
                    className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                  >
                    В КОРЗИНЕ
                  </button>
                ) : (
                  <button
                    onClick={() => addCourse()}
                    className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                  >
                    ЗАПИСАТЬСЯ
                  </button>
                )}
                <button
                  className={`f12 bg-${theme}  font-black ${s.courseInfoBtn} nonActiveBtn`}
                >
                  ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
                  <div className="textOnHover">Скоро будет в академии</div>
                </button>
              </div>
            )}
          </div>

          <div className={s.courseTextBlock}>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-${theme}`}>ЧТО ВХОДИТ В КУРС:</h3>
              <ul className={s.courseTextList}>
                {activeChapter.course_content.map((item) => (
                  <li
                    key={item}
                    className={`f17 font-black ${s.courseTextItem}`}
                  >
                    <span
                      className={`courseTextIcon courseTextIcon-${theme}`}
                    />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.courseTextColumn}>
              <h3 className={`f19 font-${theme}`}>ЧТО БУДЕМ ПРОХОДИТЬ:</h3>
              <ul className={s.courseTextList}>
                {activeChapter.will_study.map((item) => (
                  <li
                    key={item}
                    className={`f17 font-black ${s.courseTextItem2}`}
                  >
                    <span
                      className={`courseTextIconCube courseTextIconCube-${theme}`}
                    />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {activeChapter.items[0] && (
            <div className={`${s.courseInfoBtns} course1200minus`}>
              {incart.includes(activeChapter.items[blockPrice].name) ? (
                <button
                  style={{ opacity: ".3" }}
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  В КОРЗИНЕ
                </button>
              ) : (
                <button
                  onClick={() => addCourse()}
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  ЗАПИСАТЬСЯ
                </button>
              )}
              <button
                className={`f12 bg-${theme} font-black ${s.courseInfoBtn} nonActiveBtn`}
              >
                ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
                <div className="textOnHover">Скоро будет в академии</div>
              </button>
            </div>
          )}
        </div>
      </div>
    );
};

export default Course;
