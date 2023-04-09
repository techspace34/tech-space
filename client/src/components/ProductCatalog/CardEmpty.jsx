import s from "../Cards/Cards.module.css";

function CardEmpty() {
  return (
    <div className={s.cardempty}>
      <h2 className={s.titleEmpty}>An error has occurred :c</h2>
      <p className={s.subtitleEmpty}>
        Unfortunately, the item could not be received.
      </p>
      <p className={s.subtitleEmpty}>Please try again later.</p>
    </div>
  );
}

export default CardEmpty;
