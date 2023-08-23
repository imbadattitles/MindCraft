"use client";

import { theme } from "antd";
import Item from "antd/es/list/Item";
import { useState } from "react";

const SelectRadio = ({ notFiltered, setItems, theme }) => {
  const [visible, setVisible] = useState(false);
  const years = ["8-9", "9-10", "11-12", "12-13", "13-14", 8];
  const filterItems = (item) => {
    setItems(
      notFiltered.filter((not) => {
        return not.age.includes(item);
      })
    );
  };
  return (
    <div className={`selectRadio`}>
      <div
        onClick={() => setVisible(!visible)}
        className={`selectRadioTitle borderRadio-${theme}`}
      >
        ВСЕ ВОЗРАСТЫ
        <span
          className={`selectRadioArrow selectRadioArrow-${theme} borderRadio-${theme}`}
        />
      </div>
      <div className={`${!visible && "none"} form_radio borderRadio-${theme}`}>
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
