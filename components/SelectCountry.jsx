"use client";

import { useState } from "react";

const SelectCountry = ({ countries, country, setCountry }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={`selectCountry`}>
      <div onClick={() => setVisible(!visible)} className={`selectCountryTop`}>
        <img src={countries[country].svg} className="svg" />
        <span className={`selectCountryArrow`} />
      </div>
      {visible && (
        <div className={`countryList`}>
          {countries.map((item, index) => (
            <div
              onClick={() => {
                setCountry(index);
                setVisible(false);
              }}
              key={item}
              class="countryList-item"
            >
              <img src={item.svg} className="svg" />
              <p>+ {item.phone}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { SelectCountry };
