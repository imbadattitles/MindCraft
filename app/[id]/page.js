import { Bar } from "@/components/Bar";
import s from "./postStatic.module.sass";
import ReactHtmlParser from "react-html-parser";
import { notFound } from "next/navigation";
import { title } from "process";

async function getPost(id) {
  const { result } = await fetch(
    `https://api.mchamp.ru/v1/objects/objects/Pages`,
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
  if (!post) return notFound();
  else
    return {
      title: post.meta_title,
      description: post.meta_description,
    };
}
export default async function Post({ params: { id } }) {
  const posts = await getPost();
  const thisPost = posts.find((item) => item.alias === id);
  const sideBar = {
    parent: {
      title: "",
      link: "",
    },
    child: [],
    link: [],
    brothers: [],
  };

  const valuesLinks = thisPost.links ? Object.values(thisPost.links) : null;
  const parent = posts.find((item) => item.alias === thisPost.parent_alias);
  const child = posts.filter((item) => item.parent_alias === thisPost.alias);
  const brothers = posts.filter(
    (item) => item.parent_alias === thisPost.parent_alias
  );

  valuesLinks &&
    valuesLinks.map((item) => {
      sideBar.link.push({ link: item.alias, title: item.title });
    });

  parent && (sideBar.parent.title = parent.title);
  parent && (sideBar.parent.title = parent.link);
  child &&
    child.map((item) => {
      sideBar.child.push({ link: item.alias, title: item.title });
    });
  brothers &&
    brothers.map((item) => {
      if (item.alias !== thisPost.alias) {
        sideBar.brothers.push({ link: item.alias, title: item.title });
      }
    });
  const sideBarTrue =
    sideBar.parent.title ||
    sideBar.child.length > 0 ||
    sideBar.link.length > 0 ||
    sideBar.brothers.length > 0;
  if (!thisPost) return;
  else
    return (
      <section className={`container ${sideBarTrue ? s.postRow1 : s.postRow2}`}>
        {sideBarTrue && <Bar links={sideBar} thisItem={thisPost} />}
        <div>
          <div className={s.postContent}>
            {ReactHtmlParser(thisPost.content)}
          </div>
        </div>
      </section>
    );
}
