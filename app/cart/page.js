"use client";
import Link from "next/link";
import s from "../../styles/cart.module.sass";
import { useEffect, useState } from "react";
import { Order } from "@/components/Order";

export default function UserPage() {
  const [items, setItems] = useState([
    {
      name: "Курс «Основы информатики»",
      img: "/cart/item1.png",
      cost: 1950,
      discount: false,
      count: 1,
    },
    {
      name: "10 монет IDEA",
      img: "/cart/item2.png",
      cost: 1950,
      discount: 6400,
      count: 1,
    },
  ]);
  const [sumCost, setSumCost] = useState(0);
  useEffect(() => {
    let cost = 0;
    items.map((item) => {
      cost += item.cost * item.count;
    });
    setSumCost(cost);
  }, []);
  const [visibleBlock, setVisibleBlock] = useState(1);
  return (
    <section style={{ minHeight: "50vh" }} className="container">
      {visibleBlock === 1 && (
        <>
          <div className={s.titleRow}>
            <p className={`f40 font-green ${s.title}`}>
              КОРЗИНА (2) <span className={s.cartPic} />
            </p>
          </div>
          <div className={s.cartRows}>
            {items.map((item) => (
              <div className={s.itemRow} key={item.name}>
                <div className={s.photoCircle}>
                  <img className={s.itemPhoto} src={item.img} />
                </div>
                <p className={`${s.itemName}`}>{item.name}</p>
                {item.discount ? (
                  <div className={s.priceRow}>
                    <span className={s.valutePic} />
                    <p className={s.oldPrice}>{item.cost} ₽</p>
                    <p className={s.NewPrice}>{item.discount} ₽</p>
                  </div>
                ) : (
                  <div className={s.priceRow}>
                    <span className={s.valutePic} />
                    <p className={s.price}>{item.cost} ₽</p>
                  </div>
                )}
                <div className={s.counterRow}>
                  <span className={s.counterLeft} />
                  <div className={s.counter}>{item.count}</div>
                  <span className={s.counterRight} />
                </div>
                <p className={s.delete}>Удалить</p>
              </div>
            ))}
          </div>
          <p className={s.resultSum}>
            Итого <span style={{ fontWeight: "500" }}>{sumCost} ₽</span>
          </p>
          <button
            onClick={() => {
              if (items.length >= 1) setVisibleBlock(2);
            }}
            className={`bg-green font-black btn232 ${s.cartGoBtn}`}
          >
            ОФОРМИТЬ ЗАКАЗ
          </button>
        </>
      )}
      {visibleBlock === 2 && <Order setVisibleBlock={setVisibleBlock} />}
    </section>
  );
}
