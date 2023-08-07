"use client";
import s from "../styles/course.module.sass";
import Link from "next/link";
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const theme = "blue";
const AnotherCourse = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section id="anotherCourses" className={s.anotherCourses}>
      <h3 className={`f40 container font-${theme}`}>ДРУГИЕ КУРСЫ АКАДЕМИИ</h3>
      <div className={s.anotherCoursesRow}>
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
          spaceBetween={55}
          navigation
        >
          {arr.map((item) => (
            <SwiperSlide key={item}>
              <Link href="/">
                <div className={s.anotherCourse}>
                  <div className={s.anotherCourseCircle}>
                    <img
                      src="/courses/anotherCourses.png"
                      className={s.anotherCourseImg}
                    />
                  </div>
                  <h4 className="f19">ПЕРЕГОВОРЫ</h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { AnotherCourse };
