import s from "./payment.module.sass";
export default async function payment({ params: { status } }) {
  return (
    <div className={s.bg}>
      {status === "success" && (
        <div className={s.modalGreen}>
          <p className={s.title}>
            ВАШ ЗАКАЗ
            <br />
            <span>УСПЕШНО ОПЛАЧЕН!</span>
          </p>
          <p className={s.text}>
            Письмо с деталями заказа отправлено на указанный e-mail
          </p>
          <button className={s.btn}>ПЕРЕЙТИ В КАБИНЕТ</button>
          <img className={s.shape} src="/status/greenShape.svg" />
          <img className={s.firstPng} src="/status/firstPng.png" />
          <img className={s.secondPng} src="/status/secondPng.png" />
          <img className={s.thirdPng} src="/status/thirdPng.png" />
        </div>
      )}
      {status === "failure" && (
        <div className={s.modalPink}>
          <p className={s.title}>
            ЗАКАЗ ОПЛАТИТЬ
            <br />
            <span>НЕ УДАЛОСЬ!</span>
          </p>
          <button className={s.btn}>Попробовать снова</button>
          <img className={s.shape} src="/status/pinkShape.svg" />
          <img className={s.firstPng2} src="/status/firstPng2.png" />
          <img className={s.secondPng2} src="/status/secondPng2.png" />
          <img className={s.thirdPng2} src="/status/thirdPng2.png" />
        </div>
      )}
    </div>
  );
}
