"use client";
import { useState } from "react";
import s from "../app/posts/posts.module.sass";
import { url } from "@/app/page";

const { default: Link } = require("next/link");

const News = ({ items, categories }) => {
  const [posts, setPosts] = useState(items);
  const [choose, setChoose] = useState("");
  const chooseCategory = (cat) => {
    setPosts(
      items.filter((item) => {
        if (cat.value === "") return item;
        else
          return item.meta_description.toLowerCase() == cat.value.toLowerCase();
      })
    );
    setChoose(cat.value);
  };
  return (
    <>
      <div className={s.choose}>
        <div className={s.categories}>
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

        <div onClick={() => chooseCategory(categories[0])} className={s.cancel}>
          <p>Сбросить выбор</p>
          <span>.......................</span>
        </div>
      </div>
      <div className={s.posts}>
        {posts.map((item) => (
          <article key={item.id} className={s.post}>
            <img src={url + item.image} className={s.postImg} />
            <p className={`f13 font-green ${s.date}`}>{item.date}</p>
            <Link href={`posts/${item.id}`} className={`f19 ${s.postTitle}`}>
              {item.title}
            </Link>
            <p className={`f14 ${s.postText}`}>{item.content}</p>
            <Link href={`posts/${item.id}`}>
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
