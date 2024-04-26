"use client";
import { useState } from "react";
import s from "../app/postStatic/[id]/postStatic.module.sass";
import Link from "next/link";

const Bar = ({ links, thisItem }) => {
  const barItems = [
    {
      name: "Общие условия",
      id: 1,
      inside: [
        { name: "Общие условия", link: "/" },
        { name: "Политика возвратов", link: "/" },
      ],
    },
    { name: "сведения о платформе", link: "/", id: 2, inside: false },
  ];
  const [visible, setVisible] = useState(null);

  const sideBar = {
    parent: {
      title: "",
      link: "",
    },
    child: [],
    link: [],
    brothers: [],
  };
  return (
    <div className={s.bar}>
      {links.parent.link && (
        <>
          <div className={s.barLink}>{links.parent.title}</div>
          {links.brothers.length > 0 && (
            <div className={s.insideItems}>
              {links.brothers.map((insideItem) => (
                <Link
                  key={insideItem.link}
                  className={s.insideItem}
                  href={insideItem.link}
                >
                  {insideItem.title}
                </Link>
              ))}
              <Link className={s.insideItem} href={thisItem.alias}>
                {thisItem.title}
              </Link>
            </div>
          )}
        </>
      )}
      {links.child.length > 0 && (
        <>
          <div className={s.barLink}>{thisItem.title} 1</div>
          <div className={s.insideItems}>
            {links.child.map((insideItem) => (
              <Link
                key={insideItem.link}
                className={s.insideItem}
                href={insideItem.link}
              >
                {insideItem.title}
              </Link>
            ))}
          </div>
        </>
      )}
      {!links.parent.link &&
        links.brothers.length > 0 &&
        links.brothers.map((brother) => (
          <div key={brother.title} className={s.barLink}>
            {brother.title}
          </div>
        ))}
      {links.link.length > 0 &&
        links.link.map((brother) => (
          <div key={brother.title} className={s.barLink}>
            {brother.title}
          </div>
        ))}
      {/* {links.map((item) => (
        <Link key={item.link} className={s.insideItem} href={item.link}>
          {item.title}
        </Link>
      ))} */}
      {/* {barItems.map((item) => (
        <>
          {item.inside ? (
            <>
              <div onClick={() => setVisible(item.id)} className={s.barLink}>
                {item.name} <span className={s.itemArrow} />
              </div>
              {visible == item.id && (
                <div className={s.insideItems}>
                  {item.inside.map((insideItem) => (
                    <Link
                      key={insideItem.link}
                      className={s.insideItem}
                      href={insideItem.link}
                    >
                      {insideItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link href={item.link} className={s.barLink}>
              {item.name}
            </Link>
          )}
        </>
      ))} */}
    </div>
  );
};

export { Bar };
