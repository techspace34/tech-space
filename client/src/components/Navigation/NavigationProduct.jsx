import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow_catalog.svg";
import homeLogo from "../../assets/images/home.svg";
import s from "./Navigation.module.css";

function NavigationProduct({where, title, link, link2}) {
  return (
    <div className={s.navigation}>
      <div className={s.container}>
        <Link className={s.link} to="/">
          <img className={s.home} src={homeLogo} alt="home" />
        </Link>
        <img className={s.arrow} src={arrow} alt="arrow" />
        <Link className={s.link} to="/catalog">
          <p className={s.text}>Catalog</p>
        </Link>
        <img className={s.arrow} src={arrow} alt="arrow" />
        <Link className={s.link} to={link}>
          <p className={s.text}>{where}</p>
        </Link>
        <img className={s.arrow} src={arrow} alt="arrow" />
        <Link className={s.link} to={link2}>
          <p className={s.text}>{title}</p>
        </Link>
      </div>
    </div>
  );
}

export default NavigationProduct;
