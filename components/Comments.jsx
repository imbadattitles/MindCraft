"use client";
import { useState } from "react";
import s from "../app/posts/[id]/post.module.sass";

const Comments = () => {
  const comments = [
    {
      name: "Petya_Smirnov",
      date: "23.09.2023",
      img: "/post/petya.png",
      comment:
        "SPARK — игровая монета, которая используется на нашем сервере для покупки блоков, еды  всего необходимого для выживания! Потратить их можно в любом магазине в SURVIVAL режиме. Определенное количество SPARK начисляется вам как только вы купили курс на нашем сайте.",
      answer: {
        name: "Katya_Smirnov",
        date: "23.09.2023",
        img: "/post/katya.png",
        comment:
          "Потратить их можно в любом магазине в SURVIVAL режиме. Определенное количество SPARK начисляется вам как только вы купили курс на нашем сайте.",
      },
    },
    {
      name: "Michael",
      date: "02.08.2023",
      img: "/post/noImg.jpg",
      comment:
        "test test testtesttest test testtesttesttest test test test testtesttest test",
      answer: null,
    },
  ];
  const [myComment, setMyComment] = useState("");
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        <p className={`f28 font-green`}>КОММЕНТАРИИ ({comments.length}):</p>
        <div className={s.commentsGrid}>
          <>
            {comments.map((item) => (
              <>
                <div key={item.name} className={s.commentInfo}>
                  <div className={s.picContainer}>
                    <span className={s.formCube1} />
                    <img src={item.img} className={s.commentPic} />
                  </div>
                  <div>
                    <p className={s.commentName}>{item.name}</p>
                    <p className={s.commentDate}>{item.date}</p>
                  </div>
                </div>
                <div className={s.commentText}>
                  <span className={s.polygon} />
                  {item.comment}
                </div>
                {item.answer && (
                  <>
                    <div
                      key={item.answer.name}
                      className={`${s.commentInfo} ${s.commentInfoAnswer}`}
                    >
                      <div className={s.picContainer}>
                        <span className={s.formCube2} />
                        <span className={s.answerArrow} />
                        <img src={item.answer.img} className={s.commentPic} />
                      </div>
                      <div>
                        <p className={s.commentName}>{item.answer.name}</p>
                        <p className={s.commentDate}>{item.answer.date}</p>
                      </div>
                    </div>
                    <div className={`${s.commentText} ${s.commentAnswer}`}>
                      <span className={s.polygon} />
                      {item.answer.comment}
                    </div>
                  </>
                )}
              </>
            ))}
          </>
          <form className={s.commentForm}>
            <textarea
              className={`${s.formInput} ${s.textarea}`}
              placeholder="Мой комментарий"
              value={myComment}
              onChange={(e) => setMyComment(e.target.value)}
            />
            <div className={s.inputRow}>
              <div style={{ width: "100%" }}>
                <p className="input60title">Имя*</p>
                <input
                  type="text"
                  value={myName}
                  onChange={(e) => setMyName(e.target.value)}
                  className={s.input}
                />
              </div>
              <div style={{ width: "100%" }}>
                <p className="input60title">E-MAIL*</p>
                <input
                  type="email"
                  value={myEmail}
                  onChange={(e) => setMyEmail(e.target.value)}
                  className={s.input}
                />
              </div>
            </div>
            <p className={s.formText}>
              Ваш адрес email не будет опубликован. Обязательные поля помечены *
            </p>
            <button className="f12 font-black bg-green btn232">
              ОПУБЛИКОВАТЬ
            </button>
          </form>
        </div>
      </div>
      <span className={s.formBg} />
    </section>
  );
};

export { Comments };
