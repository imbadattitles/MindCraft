"use client";
import { useState } from "react";
import s from "../styles/posts.module.sass";

const { default: Link } = require("next/link");

const News = ({ items, categories }) => {
  const [posts, setPosts] = useState(items);
  const [choose, setChoose] = useState("");
  const chooseCategory = (cat) => {
    setPosts(
      items.filter((item) => {
        if (cat.value === "") return item;
        else return item.category == cat.value;
      })
    );
    setChoose(cat.value);
  };
  return (
    <>
      <div className={s.choose}>
        {categories.map((cat) => (
          <div
            onClick={() => chooseCategory(cat)}
            key={cat}
            className={`${s.chooseBtn} ${choose == cat.value && s.active}`}
          >
            <span className={s.chooseBtnIcon} />
            <p className={`f13`}>{cat.title}</p>
          </div>
        ))}
      </div>
      <div className={s.posts}>
        {posts.map((item) => (
          <article key={item.name} className={s.post}>
            <img src={item.img} className={s.postImg} />
            <p className={`f13 font-green ${s.date}`}>{item.date}</p>
            <Link href="/" className={`f19 ${s.postTitle}`}>
              {item.title}
            </Link>
            <p className={`f14 ${s.postText}`}>{item.text}</p>
            <Link href="/">
              <button className={`bg-green arrowBtn-small`}>
                <span className="arrowSml" />
              </button>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
};

export { News };
