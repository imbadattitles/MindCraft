import { Bar } from "@/components/Bar";
import s from "./postStatic.module.sass";
import ReactHtmlParser from "react-html-parser";

async function getPost(id) {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/object/Pages/${id}`,
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
    <section className={`container ${s.postRow}`}>
      <Bar links={post.links} />
      <div>
        <div className={s.postContent}>{ReactHtmlParser(post.content)}</div>
      </div>
    </section>
  );
}
