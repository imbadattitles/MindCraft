import Link from "next/link";
import s from "./post.module.sass";
// import { Order } from "@/components/Order";
import ReactHtmlParser from "react-html-parser";
import { Comments } from "@/components/Comments";
import { url } from "@/app/page";

async function getPost(id) {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/object/Records/${id}`,
    {
      next: {
        revalidate: 120,
      },
    }
  ).then((res) => res.json());
  return result;
}

export async function generateMetadata({ params: { id } }) {
  const post = await getPost(id);
  return {
    title: post.meta_title,
    description: post.meta_description,
  };
}
export default async function Post({ params: { id } }) {
  const post = await getPost(id);
  return (
    <section className={s.section}>
      <span className={s.preparingBg} />
      <div className={s.postTitleBig}>
        <h1>{post.meta_title}</h1>
        <img src={url + post.image} className={s.postTitleImg} />
        <span className={s.postTitleBlur} />
        <span className={`${s.titleCube1} anim2`} />
        <span className={`${s.titleCube2} anim1`} />
      </div>
      <div className={`container`}>
        <div className={s.postTypeRow}>
          <div className={s.chooseBtn}>
            <span className={s.chooseBtnIcon} />
            <p className={`f13`}>{post.meta_description}</p>
          </div>
          <p className={s.postDate}>{post.date}</p>
        </div>
        <div className={s.postContent}>
          {ReactHtmlParser(post.content)}
          {/* <p>
            SPARK — игровая монета, которая используется на нашем сервере для
            покупки блоков, еды и всего необходимого для выживания! Потратить их
            можно в любом магазине в SURVIVAL режиме. Определенное количество
            SPARK начисляется вам как только вы купили курс на нашем сайте.
          </p>
          <p>
            Будьте активными на уроках, отвечайте на вопросы, размышляйте вместе
            с преподавателями и зарабатывайте больше всех SPARK. На локациях
            нашего сервера есть много тайных проходов, комнат и сундуков,
            возможно и там вам тоже повезет найти пару золотых монет!
          </p>
          <p>
            Также SPARK можно получить за выигрыши в конкурсах, ответы на
            опросы, помощь преподавателям и даже за самое прилежное поведение!
            Учитесь правильно зарабатывать и тратить вместе с нами! Ждём вас на
            нашем сервере!
          </p>
          <div>
            <h3>SPARK МОНЕТЫ</h3>
            <ol>
              <li>
                <span>1</span>первый пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
              <li>
                <span>1</span>Второй пункт
              </li>
            </ol>
            <ul>
              <li>первый пункт</li>
              <li>Второй пункт</li>
              <li>Второй пункт</li>
              <li>Второй пункт</li>
              <li>Второй пункт</li>
              <li>Второй пункт</li>
              <li>Второй пункт</li>
              <li>Второй пункт</li>
              <li>Второй пункт</li>
            </ul>
          </div>
          <p>
            Определенное количество SPARK начисляется вам как только вы купили
            курс на нашем сайте. Будьте активными на уроках, отвечайте на
            вопросы, размышляйте вместе с преподавателями и зарабатывайте больше
            всех SPARK.
          </p>
          <p>
            На локациях нашего сервера есть много тайных проходов, комнат и
            сундуков, возможно и там вам тоже повезет найти пару золотых монет!
            Также SPARK можно получить за выигрыши в конкурсах, ответы на
            опросы, помощь <a>преподавателям</a> и даже за самое прилежное
            поведение! Учитесь правильно зарабатывать и тратить вместе с нами!
            Ждём вас на нашем сервере!
          </p>
          <p>
            Также SPARK можно получить за выигрыши в конкурсах, ответы на
            опросы, помощь преподавателям и даже за самое прилежное поведение!
            Учитесь правильно зарабатывать и тратить вместе с нами! Ждём вас на
            нашем сервере!
          </p>
          <div>
            <div>
              <img src={"/post/postImg.png"} />
            </div>
            <p>Подпись к картинке</p>
          </div> */}
        </div>
        {/* <div className="tableScroll">
          <table className={`table`}>
            <thead className="tableHeader">
              <tr>
                <th className={`tableHeaderTitle`}>Предмет</th>
                <th className={`tableHeaderTitle`}>Дата</th>
                <th className={`tableHeaderTitle`}>Время</th>
                <th className={`tableHeaderTitle`}>Статус</th>
                <th className={`tableHeaderTitle`}>Тип урока</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`tableRow`}>
                <th className={`tableRowText`}>Математика</th>
                <th className={`tableRowText`}>23.08.2023</th>
                <th className={`tableRowText`}>10:00</th>
                <th className={`tableRowText`}>Запланирован</th>
                <th className={`tableRowText`}>В группе</th>
              </tr>
              <tr className={`tableRow`}>
                <th className={`tableRowText`}>Математика</th>
                <th className={`tableRowText`}>23.08.2023</th>
                <th className={`tableRowText`}>10:00</th>
                <th className={`tableRowText`}>Запланирован</th>
                <th className={`tableRowText`}>В группе</th>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
      <Comments />
      {/* <div className="container">
        <h3 className={`f40 font-green ${s.postsTitle}`}>
          ДРУГИЕ НОВОСТИ АКАДЕМИИ
        </h3>
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
      </div> */}
    </section>
  );
}
