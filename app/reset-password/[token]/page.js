"use client";

import Reset from "./Reset";
import s from "./reset.module.sass";

export default async function course({ params: { token } }) {
  return (
    <div className={s.page}>
      <Reset token={token} />
    </div>
  );
}
