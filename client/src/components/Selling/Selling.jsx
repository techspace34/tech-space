import s from "./Selling.module.css";

function Selling() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Top Selling</h1>
      <div className={s.imageItem}>
        <div className={s.content}>
          <p className={s.text}>IPhone 14 Pro</p>
          <button className={s.button}>Purchase now</button>
        </div>
      </div>
    </div>
  );
}

export default Selling;
