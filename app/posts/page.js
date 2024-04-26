import Link from "next/link";
import s from "./posts.module.sass";
import { News } from "@/components/News";
import ReactHtmlParser from "react-html-parser";

export const metadata = {
  title: "Новости MindCube",
  description:
    "Используем платформу Minecraft для обучения языкам, математике, программированию, развитию лидерских и коммуникативных навыков",
};
async function getPosts() {
  const response = await fetch(
    "https://api.mchamp.ru/v1/objects/objects/Records",
    {
      next: {
        revalidate: 120,
      },
    }
  );
  return response.json();
}
async function getCategories() {
  const response = await fetch(
    "https://api.mchamp.ru/v1/objects/objects/Rubric",
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const { result } = await response.json();
  const arr = await result.map((item) => {
    return { value: item.title, title: item.title };
  });
  return [{ value: "", title: "Все" }, ...arr];
}
export default async function Posts() {
  const { result } = await getPosts();
  const items = result.map((item) => {
    const parsedContent = ReactHtmlParser(item.content); // Парсинг контента с помощью ReactHtmlParser
    const truncatedContent = parsedContent[0].props.children.join(""); // Объединение всех дочерних элементов в строку
    const summary = truncatedContent.substring(0, 220) + "...";
    return { ...item, content: summary };
  });
  const categories = await getCategories();
  return (
    <section className={`${s.section}`}>
      <div className="container">
        <h2 className={`f40 font-green ${s.title}`}>НОВОСТИ</h2>
        <News items={items} categories={categories} />
      </div>
    </section>
  );
}
