"use client";

import Item from "antd/es/list/Item";
import { useState } from "react";

const SelectRadio = ({ notFiltered, setItems }) => {
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
    <div className="selectRadio-blue">
      <div onClick={() => setVisible(!visible)} className="selectRadioTitle">
        ВСЕ ВОЗРАСТЫ
        <span className="selectRadioArrow" />
      </div>
      <div className={`${!visible && "none"} form_radio-blue`}>
        <>
          {years.map((Item) => (
            <>
              <div
                onClick={() => filterItems(Item)}
                key={Item}
                class="form_radio"
              >
                <input id={Item} type="radio" name="radio" value={Item} />
                <label for={Item}>{Item}</label>
              </div>
            </>
          ))}
        </>
      </div>
    </div>
  );
};

export { SelectRadio };
