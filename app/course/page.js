import { FAQcourse } from "@/components/FAQcourse";
import s from "../../styles/course.module.sass";
import { SignUpCurseInCurse } from "@/components/SignUpCurseInCurse";
import { AnotherCourse } from "@/components/AnotherCourse";
import { CourseItems } from "@/components/CourseItem";
const getPrograms = async () => {
  const response = {
    main: {
      title: "ИНФОРМАТИКА / ПРОГРАММИРОВАНИЕ",
      text: "Используем платформу Minecraft для обучения языкам, математике, программированию, развитию лидерских и коммуникативных навыков",
    },
    theme: "green",
    items: [
      {
        name: "ОСНОВЫ ИНФОРМАТИКИ",
        cost: { month: 1950, year: 10000 },
        age: ["8-9", "9-10", "11-12"],
      },
      {
        name: "ПРОДВИНУТАЯ ИНФОРМАТИКА",
        cost: { month: 1950, year: 10000 },
        age: ["11-12", "12-13", "13-14"],
      },
      {
        name: "ПОДГОТОВКА К ЕГЭ",
        cost: { month: 1950, year: 10000 },
        age: ["11-12", "13-14"],
      },
      {
        name: "ПОДГОТОВКА К ЕГЭээ",
        cost: { month: 323, year: 1213 },
        age: ["13-14"],
      },
      { name: "ПОДГОТОВКА К ЕГЭ123", cost: 12345, age: [8] },
    ],
  };
  return response;
};
export async function generateMetadata() {
  const response = await getPrograms();
  return {
    title: response.main.title,
  };
}
export default async function course() {
  const response = await getPrograms();
  const theme = response.theme;
  const items = response.items;
  const main = response.main;
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
        <span
          className={`coursesPhoneBg-${theme} coursesPhoneBg coursesBenefitsPhone`}
        />
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
        <CourseItems theme={theme} notFiltered={items} />
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
      <FAQcourse theme={theme} />
      <section className={s.mainFormSec}>
        <div className="container">
          <SignUpCurseInCurse theme={theme} />
        </div>
      </section>
      <AnotherCourse />
    </div>
  );
}
