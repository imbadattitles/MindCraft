"use client";
import ReactInputMask from "react-input-mask";
import s from "../app/user/userPage.module.sass";
import { useState } from "react";
import { SelectCountry } from "./SelectCountry";
import { forMask, forSelect } from "./country";
import { useSelector } from "react-redux";

const ChangeInfo = () => {
  const user = useSelector((item) => item.user.user);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [born, setBorn] = useState("");
  const [country, setCountry] = useState(0);
  const submit = async () => {
    const formData = new FormData();
    formData.append("name", firstname || user.name);
    formData.append("age", born || user.age);
    formData.append("phone", phone || user.phone);
    const res = await fetch(
      `https://api.mchamp.ru/v1/user/change-information/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );
  };
  return (
    <>
      <p className={`f28 ${s.formTitle}`}>Редактировать информацию:</p>
      <form className={s.form}>
        <div className={"input60block"}>
          <p className="input60title">ИМЯ</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className={`input60 f19`}
          />
        </div>
        <div className={"input60block"}>
          <p className="input60title">ТЕЛЕФОН</p>
          <SelectCountry
            countries={forSelect}
            setCountry={setCountry}
            country={country}
          />
          <ReactInputMask
            mask={`+${forMask[country].phone} (999)-999-9999`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => (
              <input
                className={`input60 f19 phoneInput`}
                type="tel"
                value={phone}
              />
            )}
          </ReactInputMask>
        </div>
        <button
          onClick={() => submit()}
          className={`btn209 f12 bg-green ${s.saveBtn}`}
        >
          Сохранить
        </button>
      </form>
    </>
  );
};

export { ChangeInfo };
