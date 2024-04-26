"use client";

import { useState } from "react";
import s from "../styles/mainPage.module.sass";

const FAQ = ({ questions }) => {
  const [theme, setTheme] = useState("dblue");
  const [visible, setVisible] = useState(null);
  return (
    <section className={s.FAQ}>
      <div className="container">
        <h4 className={`f40 font-${theme} ${s.FAQTitle}`}>ОСТАЛИСЬ ВОПРОСЫ?</h4>
        <div className={s.FAQblocks}>
          {questions?.map((question) => (
            <div
              key={question.id}
              onClick={() => setVisible(question.id)}
              className={`border-${theme} ${s.FAQ_block}`}
            >
              <div className={s.FAQ_row}>
                <h5 className={`f19 ${s.FAQ_blockTitle}`}>
                  {question.question}
                </h5>
                <span
                  className={`${s.FAQ_arrow} ${
                    question.id == visible && s.FAQ_arrowRew
                  }`}
                />
              </div>
              <h6
                className={`f18 ${
                  question.id == visible ? s.FAQ_blockText : s.none
                }`}
              >
                {question.answer}
              </h6>
              <span className={question.id == visible ? s.FAQpic : s.none} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
