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
            {items[0].name}
          </h4>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
              },
              850: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              1260: {
                slidesPerView: 3,
              },
            }}
            className="sample-slider"
            modules={[Navigation, A11y]}
            spaceBetween={35}
            navigation={{}}
          >
            {items[0].subjectsList.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_green}`}>
                  <div className={s.slidePic}>
                    <div className={s.blurGreen} />
                    <div
                      className={`${s.slideImg}`}
                      style={{
                        backgroundImage: `url(
                            ${item.icon})`,
                      }}
                    />
                    <div
                      className={`${s.slideImgBefore} ${s.slideImgBefore1}`}
                    ></div>
                  </div>
                  <h3 className={`f23 ${s.slideItemTitle}`}>{item.name}</h3>
                  {item.soon === 0 ? (
                    <>
                      <div className={s.slideItemList}>
                        {item.courses.map((course) => (
                          <div key={course} className={s.slideItemList_item}>
                            <span
                              style={{
                                backgroundImage: `url(
                            ${item.icon_course})`,
                              }}
                              className={s.slideItemList_icon}
                            />
                            <p className={`f20 ${s.slideItemList_text}`}>
                              {course}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className={s.slideItemBtns}>
                        <Link href={`/course/${item.id}qgreen#firstItem`}>
                          <button
                            className={` f11 btn180  font-black bg-green`}
                          >
                            ЗАПИСАТЬСЯ
                          </button>
                        </Link>
                        <Link href={`/course/${item.id}qgreen`}>
                          <button className={`arrowBtn-big bg-green`}>
                            <span className="arrowBig" />
                          </button>
                        </Link>
                      </div>
                      <span
                        className={`${s.program_shape} ${s.program_shape1}`}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="/mainPage/CKOPO-green.png"
                        alt="soon"
                        style={{ width: "80%" }}
                      />
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.ourProgramBlock}>
          <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
            {items[1].name}
          </h4>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
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
            {items[1].subjectsList.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_blue}`}>
                  <div className={s.slidePic}>
                    <div className={s.blurBlue} />
                    <div
                      className={`${s.slideImg}`}
                      style={{
                        backgroundImage: `url(
                            ${item.icon})`,
                      }}
                    />
                    <div
                      className={`${s.slideImgBefore} ${s.slideImgBefore2}`}
                    ></div>
                  </div>
                  <h3 className={`f23 ${s.slideItemTitle}`}>{item.name}</h3>
                  {item.soon === 0 ? (
                    <>
                      <div className={s.slideItemList}>
                        {item.courses.map((course) => (
                          <div key={course} className={s.slideItemList_item}>
                            <span
                              style={{
                                backgroundImage: `url(
                            ${item.icon_course})`,
                              }}
                              className={s.slideItemList_icon}
                            />
                            <p className={`f20 ${s.slideItemList_text}`}>
                              {course}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className={s.slideItemBtns}>
                        <Link href={`/course/${item.id}qblue#firstItem`}>
                          <button className={`btn180 f11 font-black bg-blue`}>
                            ЗАПИСАТЬСЯ
                          </button>
                        </Link>
                        <Link href={`/course/${item.id}qblue`}>
                          <button className={`arrowBtn-big bg-blue`}>
                            <span className="arrowBig" />
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src="/mainPage/CKOPO-blue.png"
                        alt="soon"
                        style={{ width: "80%" }}
                      />
                    </>
                  )}
                  <span className={`${s.program_shape} ${s.program_shape2}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.ourProgramBlock}>
          <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
            {items[2].name}
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
            {items[2].subjectsList.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_red}`}>
                  <div className={s.slidePic}>
                    <div className={s.blurRed} />
                    <div
                      className={`${s.slideImg}`}
                      style={{
                        backgroundImage: `url(
                            ${item.icon})`,
                      }}
                    />
                    <div
                      className={`${s.slideImgBefore} ${s.slideImgBefore3}`}
                    ></div>
                  </div>
                  <h3 className={`f23 ${s.slideItemTitle}`}>{item.name}</h3>
                  {item.soon === 0 ? (
                    <>
                      <div className={s.slideItemList}>
                        {item.courses.map((course) => (
                          <div key={course} className={s.slideItemList_item}>
                            <span
                              style={{
                                backgroundImage: `url(
                            ${item.icon_course})`,
                              }}
                              className={s.slideItemList_icon}
                            />
                            <p className={`f20 ${s.slideItemList_text}`}>
                              {course}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className={s.slideItemBtns}>
                        <Link href={`/course/${item.id}qred#firstItem`}>
                          <button className={`btn180 f11 font-black bg-red`}>
                            ЗАПИСАТЬСЯ
                          </button>
                        </Link>
                        <Link href={`/course/${item.id}qred`}>
                          <button className={`arrowBtn-big bg-red`}>
                            <span className="arrowBig" />
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src="/mainPage/CKOPO-red.png"
                        alt="soon"
                        style={{ width: "80%" }}
                      />
                    </>
                  )}

                  <span className={`${s.program_shape} ${s.program_shape3}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.ourProgramBlock}>
          <h4 className={`f28 font-white ${s.ourProgramProgram_title}`}>
            {items[3].name}
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
            {items[3].subjectsList.map((item) => (
              <SwiperSlide key={item}>
                <div className={`${s.slideItem} ${s.slideItem_purple}`}>
                  <div className={s.slidePic}>
                    <div className={s.blurPurple} />
                    <div
                      className={`${s.slideImg}`}
                      style={{
                        backgroundImage: `url(
                            ${item.icon})`,
                      }}
                    />
                    <div
                      className={`${s.slideImgBefore} ${s.slideImgBefore4}`}
                    ></div>
                  </div>
                  <h3 className={`f23 ${s.slideItemTitle}`}>{item.name}</h3>
                  {item.soon === 0 ? (
                    <>
                      <div className={s.slideItemList}>
                        {item.courses.map((course) => (
                          <div key={course} className={s.slideItemList_item}>
                            <span
                              style={{
                                backgroundImage: `url(
                            ${item.icon_course})`,
                              }}
                              className={s.slideItemList_icon}
                            />
                            <p className={`f20 ${s.slideItemList_text}`}>
                              {course}
                            </p>
                          </div>
                        ))}
                        <div className={s.slideItemList_item}>
                          <span
                            style={{
                              backgroundImage: `url(
                            ${item.icon_course})`,
                            }}
                            className={s.slideItemList_icon}
                          />
                          <p className={`f20 ${s.slideItemList_text}`}>
                            {item.text_4}
                          </p>
                        </div>
                      </div>
                      <div className={s.slideItemBtns}>
                        <Link href={`/course/${item.id}qpurple#firstItem`}>
                          <button className={`btn180 f11 font-black bg-purple`}>
                            ЗАПИСАТЬСЯ
                          </button>
                        </Link>
                        <Link href={`/course/${item.id}qpurple`}>
                          <button className={`arrowBtn-big bg-purple`}>
                            <span className="arrowBig" />
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src="/mainPage/CKOPO-purple.png"
                        alt="soon"
                        style={{ width: "80%" }}
                      />
                    </>
                  )}

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
