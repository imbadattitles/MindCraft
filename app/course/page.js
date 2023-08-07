import { FAQcourse } from "@/components/FAQcourse";
import s from "../../styles/course.module.sass";
import Link from "next/link";
import { SignUpCurseInCurse } from "@/components/SignUpCurseInCurse";
import { SelectRadio } from "@/components/SelectRadio";
import { AnotherCourse } from "@/components/AnotherCourse";
export default function course() {
  const repeat = [1, 2, 3];
  const theme = "blue";
  const main = {
    title: "ИНФОРМАТИКА / ПРОГРАММИРОВАНИЕ",
    text: "Используем платформу Minecraft для обучения языкам, математике, программированию, развитию лидерских и коммуникативных навыков",
  };
  return (
    <div>
      <section className={s.main}>
        <span className={s.mainBg} />
        <div className="container">
          <h1 className={`f64 ${s.h1pos}`}>{main.title}</h1>
          <h4 className={`f20 titleTextPos`}>{main.text}</h4>
          <button
            className={`btn232 f12_Unbounded font-black bg-${theme} shadow-${theme}`}
          >
            ЗАПИСАТЬСЯ
          </button>
        </div>
      </section>
      <section style={{ position: "relative" }}>
        <span className={`coursesPhoneBg-${theme} coursesBenefitsPhone`} />
        <div className={`container ${s.benefits}`}>
          <div className={s.benefit}>
            <div className={s.benefitPic}>
              <span className={s.benefitPic1} />
              <span className={`benefitBlur${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>
              Свободный доступ на закрытый сервер на 2 или 4 недели
            </h4>
          </div>
          <div className={s.benefit}>
            <div className={s.benefitPic}>
              <span className={s.benefitPic2} />
              <span className={`benefitBlur-${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>
              Занятия с преподавателем в группе до 15-ти учеников
            </h4>
          </div>
          <div className={s.benefit}>
            <div className={s.benefitPic}>
              <span className={s.benefitPic3} />
              <span className={`benefitBlur${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>
              Творческие домашние задания
            </h4>
          </div>
          <div className={s.benefit}>
            <div className={s.benefitPic}>
              <span className={s.benefitPic4} />
              <span className={`benefitBlur${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>
              Возможность приобрести дополнительные индивидуальные занятия
            </h4>
          </div>
        </div>
      </section>
      <section className={s.coursesSection}>
        <div className={`container ${s.titleRow}`}>
          <h3 className={`f40 font-${theme}`}>ПРОГРАММЫ</h3>
          <SelectRadio />
        </div>
        <div className={`coursesBg-${theme} ${s.coursesBlock}`}>
          <div className={`${s.courseBlock} bg-white`}>
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
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>1950 ₽</p>
                </div>
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
                <button
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  ЗАПИСАТЬСЯ
                </button>
                <button
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
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
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>1950 ₽</p>
                </div>
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
                <button
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  ЗАПИСАТЬСЯ
                </button>
                <button
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
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
                <div className={s.courseInfoCost}>
                  <span className={s.courseInfoCostIcon} />
                  <p>1950 ₽</p>
                </div>
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
                <button
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  ЗАПИСАТЬСЯ
                </button>
                <button
                  className={`f12 bg-${theme} font-black ${s.courseInfoBtn}`}
                >
                  ХОЧУ ИНДИВИДУАЛЬНЫЙ УРОК
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.howLearn}>
        <div className="container">
          <h3 className={`f40 font-${theme} ${s.howLearnTitle}`}>
            КАК ПРОХОДЯТ УРОКИ
          </h3>
          <div className={s.howLearnVideo}></div>
          <div className={s.howLearnCube1} />
        </div>
      </section>
      <section className="ourMentors">
        <div className="container">
          <h4 className="f40 ourMentors_title">
            НАШИ <br />
            <span className={`font-${theme}`}>ПРЕПОДАВАТЕЛИ</span>
          </h4>
          <div className="ourMentors_row">
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src="/mentor1.png" className="mentor_photo" />
                  <div className="mentor1_cube1" />
                </div>
                <div className="mentor1_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src="/mentor1.png" className="mentor_photo" />
                  <div className="mentor2_cube1" />
                </div>
                <div className="mentor2_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src="/mentor1.png" className="mentor_photo" />
                </div>
                <div className="mentor3_cube1" />
                <div className="mentor3_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className="mentor">
              <div className="mentor_pic">
                <div className={`mentor__circle circle-${theme}`}>
                  <img src="/mentor1.png" className="mentor_photo" />
                </div>
                <div className="mentor4_cube1" />
                <div className="mentor4_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQcourse />
      <section className={s.mainFormSec}>
        <div className="container">
          <SignUpCurseInCurse />
        </div>
      </section>
      <AnotherCourse />
    </div>
  );
}
