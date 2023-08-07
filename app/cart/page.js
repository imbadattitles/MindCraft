"use client";
import Link from "next/link";
import s from "../../styles/cart.module.sass";
import { useEffect, useState } from "react";
import { Order } from "@/components/Order";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCoins,
  deleteItems,
  setCoins,
  setItems,
} from "../redux/user/cart-slice";

export default function UserPage() {
  const items = useSelector((state) => state.cart.items);
  const coins = useSelector((state) => state.cart.coins);
  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(deleteItems(item));
  };
  const deleteCoin = (item) => {
    dispatch(deleteCoins(item));
  };

  const MinusCount = ({ item, items }) => {
    if (item.count > 1) {
      const newItems = items.map((goods) => {
        if (goods.name === item.name) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return goods;
      });
      dispatch(setItems(newItems));
    }
    if (item.count === 1) {
      dispatch(deleteItems(item));
    }
  };

  const PlusCount = ({ item, items }) => {
    const newItems = items.map((goods) => {
      if (goods.name === item.name) {
        return { ...item, count: item.count + 1 };
      }
      return goods;
    });
    dispatch(setItems(newItems));
  };

  const MinusCoinCount = ({ coin, coins }) => {
    if (coin.count > 1) {
      const newItems = coins.map((goods) => {
        if (goods.name === coin.name) {
          return {
            ...coin,
            count: coin.count - 1,
          };
        }
        return goods;
      });
      dispatch(setCoins(newItems));
    }
    if (coin.count === 1) {
      dispatch(deleteCoins(coin));
    }
  };

  const PlusCoinCount = ({ coin, coins }) => {
    const newItems = coins.map((goods) => {
      if (goods.name === coin.name) {
        return { ...coin, count: coin.count + 1 };
      }
      return goods;
    });
    dispatch(setCoins(newItems));
  };

  const countCoinMath = (obj, method) => {
    if (method == "plus") return PlusCoinCount(obj);
    if (method == "minus") return MinusCoinCount(obj);
  };

  const [sumCost, setSumCost] = useState(0);
  useEffect(() => {
    let cost = 0;
    items.map((item) => {
      cost += item.cost * item.count;
    });
    coins.map((item) => {
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
                  <span
                    onClick={() => countMath({ item, items }, "minus")}
                    className={s.counterLeft}
                  />
                  <div className={s.counter}>{item.count}</div>
                  <span
                    onClick={() => countMath({ item, items }, "plus")}
                    className={s.counterRight}
                  />
                </div>
                <p onClick={() => deleteItem(item)} className={s.delete}>
                  Удалить
                </p>
              </div>
            ))}
            <>
              {coins.map((coin) => (
                <div className={s.itemRow} key={coin.name}>
                  <div className={s.photoCircle}>
                    <img className={s.itemPhoto} src={coin.img} />
                  </div>
                  <p className={`${s.itemName}`}>{coin.name}</p>
                  {coin.discount ? (
                    <div className={s.priceRow}>
                      <span className={s.valutePic} />
                      <p className={s.oldPrice}>{coin.cost} ₽</p>
                      <p className={s.NewPrice}>{coin.discount} ₽</p>
                    </div>
                  ) : (
                    <div className={s.priceRow}>
                      <span className={s.valutePic} />
                      <p className={s.price}>{coin.cost} ₽</p>
                    </div>
                  )}
                  <div className={s.counterRow}>
                    <span
                      onClick={() => countCoinMath({ coin, coins }, "minus")}
                      className={s.counterLeft}
                    />
                    <div className={s.counter}>{coin.count}</div>
                    <span
                      onClick={() => countCoinMath({ coin, coins }, "plus")}
                      className={s.counterRight}
                    />
                  </div>
                  <p onClick={() => deleteCoin(coin)} className={s.delete}>
                    Удалить
                  </p>
                </div>
              ))}
            </>
          </div>
          <p className={s.resultSum}>
            Итого <span style={{ fontWeight: "500" }}>{sumCost} ₽</span>
          </p>
          <button
            onClick={() => {
              if (items.length >= 1 || coins.length >= 1) setVisibleBlock(2);
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
