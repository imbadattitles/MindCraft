"use client";

import { useState } from "react";

const SelectRadio = ({ notFiltered, setItems, theme, years }) => {
  const [visible, setVisible] = useState(false);
  const filterItems = (item) => {
    setStatus(item);
    if (item === "Все") {
      return setItems(notFiltered);
    }
    setItems(
      notFiltered.filter((not) => {
        return not.course_age_groups.includes(item);
      })
    );
  };
  const [status, setStatus] = useState("ВСЕ ВОЗРАСТЫ");
  return (
    <div className={`selectRadio`}>
      <div
        onClick={() => setVisible(!visible)}
        className={`selectRadioTitle borderRadio-${theme}`}
      >
        {status}
        <span
          className={`selectRadioArrow selectRadioArrow-${theme} borderRadio-${theme}`}
        />
      </div>
      <div className={`${!visible && "none"} form_radio borderRadio-${theme}`}>
        <div onClick={() => filterItems("Все")} class="form_radio-item">
          <input
            className={`borderRadio-${theme}`}
            type="radio"
            name="radio"
            value="Все"
            id="Все"
          />
          <label for={"Все"}>Все</label>
        </div>
        {years.map((Item) => (
          <div
            onClick={() => filterItems(Item)}
            key={Item}
            class="form_radio-item"
          >
            <input
              className={`borderRadio-${theme}`}
              id={Item}
              type="radio"
              name="radio"
              value={Item}
            />
            <label for={Item}>{Item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SelectRadio };
