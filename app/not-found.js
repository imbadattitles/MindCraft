import Link from "next/link";
import s from "../styles/404.module.sass";
export default function notFound() {
  return (
    <div className={s.main}>
      <p className={`f40 ${s.error}`}>ОШИБКА</p>
      <span className={s.errorPic} />
      <p className={s.ups}>Упс... Страница не найдена.</p>
      <Link href="/">
        <button className={`f12_Unbounded font-black bg-green btn232`}>
          НА ГЛАВНУЮ
        </button>
      </Link>
      <span className={s.bg} />
    </div>
  );
}
