"use client";
import { useEffect } from "react";

const AmoCrmBtn = () => {
  useEffect(() => {
    (function (a, m, o, c, r) {
      console.log("amoamo");
      a[m] = {
        id: "406684",
        hash: "67c4ee1051b3ea5334631702f4cf59490c7757be6513e11e84793fd4ba3e3a01",
        locale: "ru",
        inline: true,
        setMeta: function (p) {
          this.params = (this.params || []).concat([p]); // Исправление: добавляем проверку на существование this.params
        },
      };
      a[o] =
        a[o] ||
        function () {
          // Исправление: добавляем проверку на существование a[o]
          (a[o].q = a[o].q || []).push(arguments); // Исправление: добавляем проверку на существование a[o].q
        };
      a[o + "Config"] = a[o + "Config"] || {}; // Исправление: добавляем проверку на существование a[o + "Config"]
      a[o + "Config"].hidden = !0;
      var d = a.document,
        s = d.createElement("script");
      s.async = true;
      s.id = m + "_script";
      s.src = "https://gso.amocrm.ru/js/button.js";
      d.head && d.head.appendChild(s);
    })(window, 0, "amoSocialButton", 0, 0, "amo_social_button");
  }, []);

  return null; // Компонент не визуализирует ничего, просто вставляет скрипт
};
export default AmoCrmBtn;
