"use client";
import s from "../styles/mainPage.module.sass";

const MySelect = ({
  options,
  defaultValue,
  value,
  onChange,
  selectStyle,
  optionStyle,
}) => {
  return (
    <select
      className={`f24 font-black ${s.SignUp_input} ${s.SignUp_select}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option className={optionStyle} value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option
          className={`f24 font-black ${s.SignUp_input}`}
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export { MySelect };
