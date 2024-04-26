import { FAQcourse } from "@/components/FAQcourse";
import s from "./course.module.sass";
import { SignUpCurseInCurse } from "@/components/SignUpCurseInCurse";
import { AnotherCourse } from "@/components/AnotherCourse";
import { CourseItems } from "@/components/CourseItem";
import { url } from "@/app/page";
import Teachers from "@/components/Teachers";
import { res } from "@/components/subject";
const getPrograms = async () => {
  const response = {
    main: {
      title: "ИНФОРМАТИКА / ПРОГРАММИРОВАНИЕ",
      text: "Используем платформу Minecraft для обучения языкам, математике, программированию, развитию лидерских и коммуникативных навыков",
    },
    theme: "red",
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
const getCourses = async (id) => {
  const { result } = await fetch(`https://api.mchamp.ru/v1/web/subject/${id}`, {
    next: {
      revalidate: 120,
    },
  }).then((res) => res.json());
  const obj = {
    ...result.subject,
    question: result.question ? result.question : [],
    tutor_card: result.tutor_card,
    likethis: Object.keys(result.subject.likethis),
  };
  return obj;
};
const getCoursesV2 = async (id) => {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/web/get-subject-courses/${id}`,
    {
      next: {
        revalidate: 120,
      },
    }
  ).then((res) => res.json());
  return result.courses;
};
const getChapters = async (id) => {
  const res = await fetch(
    `https://api.mchamp.ru/v1/web/get-courses-chapters/${id}`,
    {
      next: {
        revalidate: 120,
      },
    }
  ).then((res) => res.json());
  return res.result.courses;
};
const getSubject = async (id) => {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/object/Subject/${id}`,
    {
      next: {
        revalidate: 120,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => err);
  return result;
};
export async function generateMetadata({ params: { id } }) {
  const post = await getSubject(id);
  return {
    title: post.name,
  };
}

function parseString(inputString) {
  const delimiter = "q";
  let [id, theme] = inputString.split(delimiter);
  theme = theme.length < 2 ? "blue" : theme;

  return {
    id,
    theme,
  };
}

export default async function course({ params: { id } }) {
  const response = await getPrograms();
  const items = response.items;
  const main = response.main;
  const page = await getCourses(id);
  const { theme } = parseString(id);
  // const courses = page.courses;
  const subject = await getSubject(id);
  const questions = page.question;
  const likethis = await Promise.all(
    page.likethis.map(async (item) => {
      return await getSubject(item);
    })
  );
  const coursesv2 = await getCoursesV2(id);
  const chapters = await Promise.all(
    coursesv2.map(async (item) => {
      return await getChapters(item.id);
    })
  );
  const coursesPlusChapters = coursesv2.map((item, index) => {
    return { ...item, chapters: chapters[index] };
  });
  return (
    <div>
      <section className={s.main}>
        <span
          style={{ backgroundImage: `url(${url + subject.image})` }}
          className={s.mainBg}
        />
        <div className="container">
          <h1 className={`f64 ${s.h1pos}`}>{subject.name}</h1>
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
              <span
                style={{ backgroundImage: `url(${page.utp?.icon_1})` }}
                className={s.benefitPic1}
              />
              <span className={`benefitBlur${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>{page.utp.text_1}</h4>
          </div>
          <div className={s.benefit}>
            <div className={s.benefitPic}>
              <span
                style={{ backgroundImage: `url(${page.utp?.icon_2})` }}
                className={s.benefitPic2}
              />
              <span className={`benefitBlur-${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>{page.utp?.text_2}</h4>
          </div>
          <div className={s.benefit}>
            <div className={s.benefitPic}>
              <span
                style={{ backgroundImage: `url(${page.utp?.icon_3})` }}
                className={s.benefitPic3}
              />
              <span className={`benefitBlur${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>{page.utp?.text_3}</h4>
          </div>
          <div className={s.benefit}>
            <div className={s.benefitPic}>
              <span
                style={{ backgroundImage: `url(${page.utp?.icon_4})` }}
                className={s.benefitPic4}
              />
              <span className={`benefitBlur${theme}`} />
            </div>
            <h4 className={`f19 ${s.benefitText}`}>{page.utp?.text_4}</h4>
          </div>
        </div>
      </section>
      <section className={s.coursesSection}>
        <CourseItems theme={theme} notFiltered={coursesPlusChapters} />
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
      <Teachers teachers={page.tutor_card} theme={theme} />
      {questions.length > 0 && (
        <FAQcourse questions={questions} theme={"blue"} />
      )}
      <section className={s.mainFormSec}>
        <div className="container">
          <SignUpCurseInCurse theme={"blue"} />
        </div>
      </section>
      <AnotherCourse items={likethis} />
    </div>
  );
}
