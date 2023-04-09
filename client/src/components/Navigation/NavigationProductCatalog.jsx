import s from "./Navigation.module.css";
import homeLogo from "../../assets/images/home.svg";
import arrow from "../../assets/images/arrow_catalog.svg";
import { Link } from "react-router-dom";

function NavigationProductCatalog({link, name}) {
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
          <p className={s.text}>{name}</p>
        </Link>
      </div>
    </div>
  );
}

export default NavigationProductCatalog;
