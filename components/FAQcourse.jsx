"use client";

import { useState } from "react";
import s from "../app/course/[id]/course.module.sass";

const FAQcourse = ({ theme, questions }) => {
  const faq = [
    {
      title: "Вопрос1",
      text: "Определенное количество SPARK начисляется вам как только вы купили курс на нашем сайте. Будьте активными на уроках, отвечайте на вопросы, размышляйте вместе с преподавателями и зарабатывайте больше всех SPARK.На локациях нашего сервера есть много тайных проходов, комнат и сундуков, возможно и там вам тоже повезет найти пару золотых монет! Также SPARK можно получить за выигрыши в конкурсах, ответы на опросы, помощь преподавателям и даже за самое прилежное поведение! Учитесь правильно зарабатывать и тратить вместе с нами! Ждём вас на нашем сервере!",
      id: 1,
    },
    {
      title: "Вопрос2",
      text: "Вопрос вопрос вопросвопросвопросвопрос вопросвопросвопрос",
      id: 2,
    },
  ];
  const [visible, setVisible] = useState(null);
  return (
    <section className={s.FAQ}>
      <span
        className={`coursesPhoneBg-${theme} coursesPhoneBg coursesFAQPhone`}
      />
      <div className="container">
        <span className={s.questionPic} />
        <h4 className={`f40 font-${theme} ${s.FAQTitle}`}>ОСТАЛИСЬ ВОПРОСЫ?</h4>
        <div className={s.FAQblocks}>
          {questions.map((question) => (
            <div
              key={question.id}
              onClick={() =>
                visible === question.id
                  ? setVisible(null)
                  : setVisible(question.id)
              }
              className={`border-${theme} ${s.FAQ_block}`}
            >
              <div className={s.FAQ_row}>
                <h5 className={`f19 ${s.FAQ_blockTitle}`}>
                  {question.question}
                </h5>
                <span
                  className={`FAQ_arrow-${theme} ${
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
              <span
                className={
                  question.id == visible ? `${s.FAQpic} shape-${theme}` : s.none
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQcourse };
