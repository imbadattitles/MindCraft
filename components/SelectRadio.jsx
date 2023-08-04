"use client";

import { useState } from "react";

const SelectRadio = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="selectRadio-blue">
      <div onClick={() => setVisible(!visible)} className="selectRadioTitle">
        ВСЕ ВОЗРАСТЫ
        <span className="selectRadioArrow" />
      </div>
      <div className={`${!visible && "none"} form_radio-blue`}>
        <div class="form_radio">
          <input id="radio-1" type="radio" name="radio" value="1" checked />
          <label for="radio-1">10-11</label>
        </div>
        <div class="form_radio">
          <input id="radio-2" type="radio" name="radio" value="2" />
          <label for="radio-2">12-13</label>
        </div>
      </div>
    </div>
  );
};

export { SelectRadio };
