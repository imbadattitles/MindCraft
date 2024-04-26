"use client";
import Link from "next/link";
import s from "./cart.module.sass";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCoins,
  deleteItems,
  setCoins,
  setItems,
  setTotalPrice,
} from "../redux/user/cart-slice";
import { useRouter } from "next/navigation";
import { url } from "../page";

export default function UserPage() {
  const items = useSelector((state) => state.cart.items);
  // const coins = useSelector((state) => state.cart.coins);
  const auth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();
  const amountInCart = useSelector((state) => state.cart.amount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const router = useRouter();
  const deleteItem = (item) => {
    dispatch(deleteItems(item));
    dispatch(setTotalPrice());
  };
  const deleteCoin = (item) => {
    dispatch(deleteCoins(item));
    dispatch(setTotalPrice());
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
      dispatch(setTotalPrice());
    }
    if (item.count === 1) {
      dispatch(deleteItems(item));
      dispatch(setTotalPrice());
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
    dispatch(setTotalPrice());
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
    if (coin.count <= 1) {
      dispatch(deleteCoins(coin));
    }
    dispatch(setTotalPrice());
  };

  const PlusCoinCount = ({ coin, coins }) => {
    const newItems = coins.map((goods) => {
      if (goods.name === coin.name) {
        return { ...coin, count: coin.count + 1 };
      }
      return goods;
    });
    dispatch(setCoins(newItems));
    dispatch(setTotalPrice());
  };
  const countMath = (obj, method) => {
    if (method == "plus") return PlusCount(obj);
    if (method == "minus") return MinusCount(obj);
  };
  const countCoinMath = (obj, method) => {
    if (method == "plus") return PlusCoinCount(obj);
    if (method == "minus") return MinusCoinCount(obj);
  };
  const goOrder = () => {
    if (!auth) {
      router.push("/check-out");
    } else {
      router.push("/payment");
    }
  };
  const [sumCost, setSumCost] = useState(0);
  const [visibleBlock, setVisibleBlock] = useState(1);

  useEffect(() => {
    if (items.length === 0) {
      router.push("/");
    }
  }, []);
  return (
    <section style={{ minHeight: "50vh" }} className="container">
      {visibleBlock === 1 && (
        <>
          <div className={s.titleRow}>
            <p className={`f40 font-green ${s.title}`}>
              КОРЗИНА ({amountInCart}) <span className={s.cartPic} />
            </p>
          </div>
          <div className={s.cartRows}>
            {items.map((item) => (
              <>
                <div className={s.itemRow} key={item.name}>
                  <div className={s.photoCircle}>
                    <img className={s.itemPhoto} src={url + item.img} />
                  </div>
                  <p className={`${s.itemName}`}>
                    {item.title} - {item.alias} - {item.nameItem}
                  </p>
                  {/* {item.discount ? (
                  <div className={s.priceRow}>
                    <span className={s.valutePic} />
                    <p className={s.oldPrice}>{item.cost} ₽</p>
                    <p className={s.NewPrice}>{item.discount} ₽</p>
                  </div>
                ) : ( */}
                  <div className={s.priceRow}>
                    <span className={s.valutePic} />
                    <p className={s.price}>{item.price} ₽</p>
                  </div>
                  {/* )} */}
                  {/* <div className={s.counterRow}>
                    <span
                      // onClick={() => countMath({ item, items }, "minus")}
                      className={s.counterLeft}
                    />
                    <div className={s.counter}>{item.count}</div>
                    <span
                      // onClick={() => countMath({ item, items }, "plus")}
                      className={s.counterRight}
                    />
                  </div> */}
                  <p className={s.delete}>Удалить</p>
                </div>
                {item.options.map((option) => (
                  <div
                    // style={coin.count == 0 ? { opacity: ".5" } : {}}
                    className={s.itemRow}
                    key={option.name}
                  >
                    <div className={s.photoCircle}>
                      <img className={s.itemPhoto} src={"/cart/item2.png"} />
                    </div>
                    <p className={`${s.itemName}`}>{option.name}</p>

                    <div className={s.priceRow}>
                      <span className={s.valutePic} />
                      <p className={s.price}>{option.price} ₽</p>
                    </div>

                    {/* <div className={s.counterRow}>
                      <span
                        // onClick={() => countCoinMath({ coin, coins }, "minus")}
                        className={s.counterLeft}
                      />
                      <div className={s.counter}>{coin.count}</div>
                      <span
                        // onClick={() => countCoinMath({ coin, coins }, "plus")}
                        className={s.counterRight}
                      />
                    </div> */}
                    <p className={s.delete}>Удалить</p>
                  </div>
                ))}
              </>
            ))}
          </div>
          <p className={s.resultSum}>
            Итого <span style={{ fontWeight: "500" }}>{totalPrice} ₽</span>
          </p>
          {items.length >= 1 ? (
            <button
              // onClick={() => goOrder()}
              className={`bg-green font-black btn232 ${s.cartGoBtn}`}
            >
              ОФОРМИТЬ ЗАКАЗ
            </button>
          ) : (
            <button
              style={{ pointerEvents: "none", opacity: ".5" }}
              className={`bg-green font-black btn232 ${s.cartGoBtn}`}
            >
              ОФОРМИТЬ ЗАКАЗ
            </button>
          )}
        </>
      )}
    </section>
  );
}
