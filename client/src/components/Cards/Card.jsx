import { Link } from "react-router-dom";
import s from "./Cards.module.css";

function Card({ name, image, link }) {
  return (
    <div className={s.card}>
      <Link className={s.link} to={link}>
        <div className={s.wrap}>
          <p className={s.title}>{name}</p>
          <div className={s.imgWrapper}>
            <img className={s.image} src={image} alt="product" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
