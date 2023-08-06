"use client";

import { SignUpCurse } from "@/components/SignUpCurse";
import s from "../styles/mainPage.module.sass";
import { FAQ } from "@/components/FAQ";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <section className={s.main}>
        <div className={s.mainVideoWrapper}>
          <div className={s.videoItem}></div>
          <iframe
            className={s.videoElement}
            src="https://www.youtube.com/embed/6eeXsCFTlrw?autoplay=1&?loop=1&?&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
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
            <button className="btn232 f12_Unbounded shadow-green_main font-black bg-greenMain">
              ПОПРОБОВАТЬ
            </button>
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
      <section id="ourProgram" className={s.ourProgram}>
        <span className={s.learnBg1} />
        <span className={s.learnBg2} />
        <span className={s.learnBg3} />
        <div className="container">
          <h3 className={`f40 font-green ${s.ourProgramTitle}`}>
            НАШИ ПРОГРАММЫ
          </h3>
          <div className={s.ourProgramBlock}>
            <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
              Школьные предметы
            </h4>
            <div className={s.slider}>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-green`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-green`}>
                    <span className="arrowSml" />
                  </button>
                </div>
                <div className={s.slideItemBg} />
              </div>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-green`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-green`}>
                    <span className="arrowSml" />
                  </button>
                </div>
                <div className={s.slideItemBg} />
              </div>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-green`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-green`}>
                    <span className="arrowSml" />
                  </button>
                </div>
                <div className={s.slideItemBg} />
              </div>
            </div>
          </div>
          <div className={s.ourProgramBlock}>
            <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
              Школьные предметы
            </h4>
            <div className={s.slider}>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-blue`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-blue`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-blue`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-blue`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-blue`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-blue`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
            </div>
          </div>
          <div className={s.ourProgramBlock}>
            <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
              Школьные предметы
            </h4>
            <div className={s.slider}>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-red`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-red`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-red`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-red`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-red`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-red`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
            </div>
          </div>
          <div className={s.ourProgramBlock}>
            <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
              Школьные предметы
            </h4>
            <div className={s.slider}>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-purple`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-purple`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
              <div className={s.slideItem}>
                <div className={s.slidePic}>
                  <div className={s.blurGreen} />
                  <div className={`${s.slideImg}`} />
                </div>
                <h3 className={`f23 ${s.slideItemTitle}`}>МАТЕМАТИКА</h3>
                <div className={s.slideItemList}>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                  <div className={s.slideItemList_item}>
                    <span className={s.slideItemList_icon} />
                    <p className={`f20 ${s.slideItemList_text}`}>
                      Тестовая математика
                    </p>
                  </div>
                </div>
                <div className={s.slideItemBtns}>
                  <button className={`btn180 f11 font-black bg-yellow`}>
                    ЗАПИСАТЬСЯ
                  </button>
                  <button className={`arrowBtn-big bg-yellow`}></button>
                </div>
                <div className={s.slideItemBg} />
              </div>
            </div>
          </div>
        </div>
      </section>
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
                alt="Безопасная платформа, где можно общаться с другими учениками, и преподавателями, курируется модераторами"
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
      <section id="ourMentors" className="ourMentors">
        <div className="container">
          <h4 className="f40 ourMentors_title">
            НАШИ <br />
            <span className="font-blue">ПРЕПОДАВАТЕЛИ</span>
          </h4>
          <div className="ourMentors_row">
            <div className="mentor">
              <div className="mentor_pic">
                <div className="mentor__circle circle-dblue">
                  <img src="/mentor1.png" className="mentor_photo" />
                  <div className="mentor1_cube1" />
                </div>
                <div className="mentor1_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <h6 className="f12_circe font-blue mentor_type">МАТЕМАТИКА</h6>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className="mentor">
              <div className="mentor_pic">
                <div className="mentor__circle circle-dblue">
                  <img src="/mentor1.png" className="mentor_photo" />
                  <div className="mentor2_cube1" />
                </div>
                <div className="mentor2_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <h6 className="f12_circe font-blue mentor_type">МАТЕМАТИКА</h6>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className="mentor">
              <div className="mentor_pic">
                <div className="mentor__circle circle-dblue">
                  <img src="/mentor1.png" className="mentor_photo" />
                </div>
                <div className="mentor3_cube1" />
                <div className="mentor3_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <h6 className="f12_circe font-blue mentor_type">МАТЕМАТИКА</h6>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
            <div className="mentor">
              <div className="mentor_pic">
                <div className="mentor__circle circle-dblue">
                  <img src="/mentor1.png" className="mentor_photo" />
                </div>
                <div className="mentor4_cube1" />
                <div className="mentor4_cube2" />
              </div>
              <h4 className="f19 mentor_name">Лена Разумовская</h4>
              <h6 className="f12_circe font-blue mentor_type">МАТЕМАТИКА</h6>
              <p className="f14 mentor_text">
                Мы помогаем детям научиться использовать игровые платформы
                для творчества и саморазвития
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={s.mainFormSec}>
        <span className={s.mainFormBg} />
        <div className="container">
          <SignUpCurse />
        </div>
      </section>
      <FAQ />
    </div>
  );
}
