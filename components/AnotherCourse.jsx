"use client";
import s from "../app/course/[id]/course.module.sass";
import Link from "next/link";
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { url } from "@/app/page";
const theme = "blue";
const AnotherCourse = ({ items }) => {
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
          {items.map((item) => (
            <SwiperSlide key={item}>
              <Link href={`/course/${item.id}qblue`}>
                <div className={s.anotherCourse}>
                  <div className={s.anotherCourseCircle}>
                    <img src={url + item.icon} className={s.anotherCourseImg} />
                  </div>
                  <h4 className="f19">{item.name}</h4>
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
