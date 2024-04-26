"use client";

import { useDispatch } from "react-redux";
import s from "../app/course/[id]/course.module.sass";
import {
  pushItems,
  setAmount,
  setTotalPrice,
} from "@/app/redux/user/cart-slice";
import { useEffect, useState } from "react";
import { SelectRadio } from "./SelectRadio";
import { url } from "@/app/page";
import Course from "./Course";

const CourseItems = ({ theme, notFiltered }) => {
  // const [chaptersAllAll, setchaptersAll] = useState(chaptersAll);
  const dispatch = useDispatch();
  const addCourse = (item, price) => {
    dispatch(
      pushItems({
        ...item,
        count: 1,
        type: price,
        cost: price.price,
      })
    );
    dispatch(setAmount());
    setIncart([...incart, item.name]);
    dispatch(setTotalPrice());
  };
  const [items, setItems] = useState(notFiltered);
  const [incart, setIncart] = useState([]);

  // const getYears = () => {
  //   const arr = notFiltered
  //     .map((item) => {
  //       return item.course_age_groups.map((item) => {
  //         return item;
  //       });
  //     })
  //     .flat();
  //   return Array.from(new Set(arr));
  // };
  // const years = getYears();
  useEffect(() => {
    var hash = window.location.hash.substring(1);
    var targetElement = document.getElementById(hash);
    if (targetElement) {
      var targetOffset = targetElement.offsetTop;
      window.scrollTo(0, targetOffset + 200);
    }
  }, []);
  return (
    <>
      <div className={`container ${s.titleRow}`}>
        <h3 className={`f40 font-${theme}`}>ПРОГРАММЫ</h3>
        {/* <SelectRadio
          notFiltered={notFiltered}
          setItems={setItems}
          theme={theme}
          years={years}
        /> */}
      </div>
      <div className={`coursesBg-${theme} ${s.coursesBlock}`}>
        {items.map((item, index) => {
          if (item.chapters.length >= 1)
            return (
              <Course item={item} theme={theme} index={index} key={item} />
            );
        })}
      </div>
    </>
  );
};

export { CourseItems };
