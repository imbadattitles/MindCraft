import { SignUpCurse } from "@/components/SignUpCurse";
import s from "../styles/mainPage.module.sass";
import { FAQ } from "@/components/FAQ";
import { OurProgram } from "@/components/OurProgram";
import Link from "next/link";
import { Result } from "antd";
import Teachers from "@/components/Teachers";

async function getPrograms() {
  const response = [1, 2, 3, 4, 5];
  return response;
}

async function getTeachers() {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/objects/TutorCard`,
    {
      next: {
        revalidate: 120,
      },
    }
  ).then((res) => res.json());
  return result;
}
async function getPage() {
  const { result } = await fetch(`https://api.mchamp.ru/v1/web/index`, {
    next: {
      revalidate: 120,
    },
  }).then((res) => res.json());
  courses: result?.subject?.courses?.map((item) => {
    return {
      ...item,
      course_content: item?.course_content
        ? Object.values(item.course_content)
        : [],
      will_study: item?.will_study ? Object.values(item.will_study) : [],
      course_age_groups: item?.course_age_groups
        ? Object.values(item.course_age_groups)
        : [],
      items: item?.items ? Object.values(item.items) : [],
    };
  });
  return result;
}
export const url = "https://storage.mchamp.ru/source/";

export default async function Home() {
  const page = await getPage();
  const cours = await page.subject_group;
  const courses = cours.map((item) => {
    return {
      ...item,
      subjectsList: item.subjectsList.map((predmet) => {
        return {
          ...predmet,
          courses:
            typeof predmet?.courses === "object"
              ? Object.values(predmet.courses)
              : [],
        };
      }),
    };
  });
  const teachers = await page.tutor_card;
  const questions = await page.question;
  return (
    <div>
      <section className={s.main}>
        <div className={s.mainVideoWrapper}>
          <div className={s.videoItem}></div>
          <iframe
            className={s.videoElement}
            src="https://www.youtube.com/embed/6eeXsCFTlrw?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="container">
          <div className={s.offerIcons} />
          <h1 className={`f96 ${s.h1pos}`}>ОБУЧЕНИЕ ЧЕРЕЗ ИГРУ</h1>
          <h4 className={`f20 titleTextPos`}>
            Используем платформу Minecraft для обучения языкам, математике,
            программированию, развитию лидерских и коммуникативных навыков
          </h4>
          <div className={s.btnRow}>
            <span className={s.blurUnderBtn} />
            <Link href={"/#form"}>
              <button className="btn232 f12_Unbounded shadow-green_main font-black bg-greenMain">
                ПОПРОБОВАТЬ
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={s.benefits}>
            <div className={s.benefit}>
              <div className={s.benefit_pic}>
                <div className={s.benefit_blur} />
                <div className={s.benefit_pic1} />
              </div>
              <h5 className={`f19`}>
                Играем с пользой <br /> в безопасной среде
              </h5>
              <h6 className={`f14 benefitText`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </h6>
            </div>
            <div className={s.benefit}>
              <div className={s.benefit_pic}>
                <div className={s.benefit_blur} />
                <div className={s.benefit_pic2} />
              </div>
              <h5 className={`f19`}>
                Занятия проводят <br /> опытные преподаватели
              </h5>
              <h6 className={`f14 benefitText`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </h6>
            </div>
            <div className={s.benefit}>
              <div className={s.benefit_pic}>
                <div className={s.benefit_blur} />
                <div className={s.benefit_pic3} />
              </div>
              <h5 className={`f19`}>
                Уникальные локации <br /> и сценарии уроков
              </h5>
              <h6 className={`f14 benefitText`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </h6>
            </div>
            <div className={s.benefit}>
              <div className={s.benefit_pic}>
                <div className={s.benefit_blur} />
                <div className={s.benefit_pic4} />
              </div>
              <h5 className={`f19`}>
                Курсы подходят <br /> для всех
              </h5>
              <h6 className={`f14 benefitText`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className={s.howLearn}>
        <div className="container">
          <h3 className={`f40 font-green ${s.howLearnTitle}`}>
            КАК ПРОХОДЯТ УРОКИ
          </h3>
          <div className={s.howLearnVideo}></div>
          <div className={s.howLearnCube1} />
          <div className={s.howLearnCube2} />
        </div>
      </section>
      <OurProgram items={courses} />
      <section id="preparing" className={s.preparing}>
        <span className={s.preparingBg} />
        <div className="container">
          <h3 className={`f40 ${s.preparingTitle}`}>
            ГОТОВИМ ДЕТЕЙ <br />
            <span className="font-blue">К УСПЕШНОМУ БУДУЩЕМУ</span>
          </h3>
          <div className={s.preparingBenefits}>
            <div className={s.preparingBenefit}>
              <div className={s.preparingPic1} />
              <h4 className={`f19 ${s.preparingBenefit_title}`}>
                Решаем проблемы с успеваемостью
              </h4>
              <p className={`f14 ${s.preparingBenefit_text}`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className={s.preparingBenefit}>
              <div className={s.preparingPic2} />
              <h4 className={`f19 ${s.preparingBenefit_title}`}>
                Развиваем важные навыки
              </h4>
              <p className={`f14 ${s.preparingBenefit_text}`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className={s.preparingBenefit}>
              <div className={s.preparingPic3} />
              <h4 className={`f19 ${s.preparingBenefit_title}`}>
                Подготавливаем к работе в IT
              </h4>
              <p className={`f14 ${s.preparingBenefit_text}`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className={s.preparingBenefit}>
              <div className={s.preparingPic4} />
              <h4 className={`f19 ${s.preparingBenefit_title}`}>
                В сильном окружении с традиционными ценностями
              </h4>
              <p className={`f14 ${s.preparingBenefit_text}`}>
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={s.ourPlatform}>
        <div className="container">
          <h6 className={`f40 ${s.ourPlatform_Title}`}>
            НАША ПЛАТФОРМА <br />
            <span className="font-blue">ДЛЯ ОБУЧЕНИЯ</span>
          </h6>
          <div className={s.ourPlatformBenefits}>
            <div className={s.ourPlatformBenefit}>
              <img
                className={s.ourPlatformBenefit_pic}
                alt="Безопасная платформа, где можно общаться с другими учениками и преподавателями, курируется модераторами"
                src="/mainPage/ourPlatformBenefit1.png"
              />
              <h6 className={`f20 ${s.ourPlatformBenefit_text}`}>
                Безопасная платформа, где можно общаться с другими учениками, и
                преподавателями, курируется модераторами
              </h6>
            </div>
            <div className={s.ourPlatformBenefit}>
              <img
                className={s.ourPlatformBenefit_pic}
                alt="Обучение на закрытой онлайн-площадке 
              на собственном сервере"
                src="/mainPage/ourPlatformBenefit2.png"
              />
              <h6 className={`f20 ${s.ourPlatformBenefit_text}`}>
                Обучение на закрытой онлайн-площадке на собственном сервере
              </h6>
            </div>
            <div className={s.ourPlatformBenefit}>
              <img
                className={s.ourPlatformBenefit_pic}
                alt="Мы — эксперты в Minecraft: на платформе есть уникальные моды и локации, 
              мы используем Fabric+"
                src="/mainPage/ourPlatformBenefit3.png"
              />
              <h6 className={`f20 ${s.ourPlatformBenefit_text}`}>
                Мы — эксперты в Minecraft: на платформе есть уникальные моды и
                локации, мы используем Fabric+
              </h6>
            </div>
          </div>
        </div>
      </section>
      <Teachers teachers={teachers} />
      <section id="form" className={s.mainFormSec}>
        <span className={s.mainFormBg} />
        <div className="container">
          <SignUpCurse courses={courses} />
        </div>
      </section>
      {questions.length > 0 && <FAQ questions={questions} />}
    </div>
  );
}
