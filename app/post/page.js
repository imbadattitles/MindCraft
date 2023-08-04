import Link from "next/link";
import s from "../../styles/post.module.sass";
import { Order } from "@/components/Order";
import { Comments } from "@/components/Comments";
export default function Post() {
  const posts = [
    {
      name: "kek",
      img: "/pic.png",
      title: "Определенный эйдос глазами современников",
      date: "09.2023 . 12:30",
      text: "Механизм эвокации органичен. Холерик, так или иначе, традиционен. Переживание и его претворение, на первый взгляд, гармонично. Беспристрастный анализ любого творческого акта показывает, что мистерия свободна.",
    },
    {
      name: "kek",
      img: "/pic.png",
      title: "Определенный эйдос глазами современников",
      date: "09.2023 . 12:30",
      text: "Механизм эвокации органичен. Холерик, так или иначе, традиционен. Переживание и его претворение, на первый взгляд, гармонично. Беспристрастный анализ любого творческого акта показывает, что мистерия свободна.",
    },
    {
      name: "kek",
      img: "/pic.png",
      title: "Определенный эйдос глазами современников",
      date: "09.2023 . 12:30",
      text: "Механизм эвокации органичен. Холерик, так или иначе, традиционен. Переживание и его претворение, на первый взгляд, гармонично. Беспристрастный анализ любого творческого акта показывает, что мистерия свободна.",
    },
  ];
  return (
    <section className={s.section}>
      <div className={s.postTitleBig}>
        <h1>SPARK МОНЕТЫ В MINDCRAFT АКАДЕМИИ</h1>
        <img src="/post/picTitle.png" className={s.postTitleImg} />
        <span className={s.postTitleBlur} />
        <span className={s.titleCube1} />
        <span className={s.titleCube2} />
      </div>
      <div className={`container`}>
        <div className={s.postTypeRow}>
          <div className={s.chooseBtn}>
            <span className={s.chooseBtnIcon} />
            <p className={`f13`}>НАЗВАНИЕ РУБРИКИ</p>
          </div>
          <p className={s.postDate}>23.09.2023</p>
        </div>
        <div className={s.postContent}>
          <p>
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
          </div>
        </div>
        <div className="tableScroll">
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
        </div>
        <Comments />
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
      </div>
    </section>
  );
}
