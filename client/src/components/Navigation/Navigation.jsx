import s from "./Navigation.module.css";
import homeLogo from "../../assets/images/home.svg";
import arrow from "../../assets/images/arrow_catalog.svg";
import { Link } from "react-router-dom";

function Navigation() {
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
      </div>
    </div>
  );
}

export default Navigation;
