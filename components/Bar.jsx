"use client";
import { useState } from "react";
import s from "../styles/postStatic.module.sass";
import Link from "next/link";

const Bar = () => {
  const barItems = [
    {
      name: "Общие условия",
      link: "/",
      id: 1,
      inside: [
        { name: "Общие условия", link: "/" },
        { name: "Политика возвратов", link: "/" },
      ],
    },
    { name: "сведения о платформе", link: "/", id: 2, inside: false },
  ];
  const [visible, setVisible] = useState(null);
  return (
    <div className={s.bar}>
      {barItems.map((item) => (
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
      ))}
    </div>
  );
};

export { Bar };
