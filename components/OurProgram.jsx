"use client";
import s from "../styles/mainPage.module.sass";
// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const OurProgram = ({ items }) => {
  return (
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
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              1330: {
                slidesPerView: 3,
              },
            }}
            className="sample-slider"
            modules={[Navigation, A11y]}
            spaceBetween={35}
            navigation={{}}
          >
            {items.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_green}`}>
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
                    <Link href="/course">
                      <button className={` f11 btn180  font-black bg-green`}>
                        ЗАПИСАТЬСЯ
                      </button>
                    </Link>
                    <Link href="/course">
                      <button className={`arrowBtn-big bg-green`}>
                        <span className="arrowBig" />
                      </button>
                    </Link>
                  </div>
                  <span className={`${s.program_shape} ${s.program_shape1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.ourProgramBlock}>
          <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
            Школьные предметы
          </h4>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              1330: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, A11y]}
            spaceBetween={35}
            navigation
          >
            {items.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_blue}`}>
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
                    <Link href="/course">
                      <button className={`btn180 f11 font-black bg-blue`}>
                        ЗАПИСАТЬСЯ
                      </button>
                    </Link>
                    <Link href="/course">
                      <button className={`arrowBtn-big bg-blue`}>
                        <span className="arrowBig" />
                      </button>
                    </Link>
                  </div>
                  <span className={`${s.program_shape} ${s.program_shape2}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.ourProgramBlock}>
          <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
            Школьные предметы
          </h4>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              1330: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, A11y]}
            spaceBetween={35}
            navigation
          >
            {items.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_red}`}>
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
                    <Link href="/course">
                      <button className={`btn180 f11 font-black bg-red`}>
                        ЗАПИСАТЬСЯ
                      </button>
                    </Link>
                    <Link href="/course">
                      <button className={`arrowBtn-big bg-red`}>
                        <span className="arrowBig" />
                      </button>
                    </Link>
                  </div>
                  <span className={`${s.program_shape} ${s.program_shape3}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.ourProgramBlock}>
          <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
            Школьные предметы
          </h4>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              1330: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, A11y]}
            spaceBetween={35}
            navigation
          >
            {items.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_purple}`}>
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
                    <Link href="/course">
                      <button className={`btn180 f11 font-black bg-purple`}>
                        ЗАПИСАТЬСЯ
                      </button>
                    </Link>
                    <Link href="/course">
                      <button className={`arrowBtn-big bg-purple`}>
                        <span className="arrowBig" />
                      </button>
                    </Link>
                  </div>
                  <span className={`${s.program_shape} ${s.program_shape4}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export { OurProgram };
