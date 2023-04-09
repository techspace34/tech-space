import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link className={s.link} to="/">
          <div className={s.wrapper}>
            <img className={s.logo} src={logo} alt="logo" />
            <h1 className={s.title}>tech-space</h1>
          </div>
        </Link>
        <div className={s.wrap}>
          <Link className={s.link} to="/catalog">
            <p className={s.text}>Catalog</p>
          </Link>
          <p className={s.text}>About Company</p>
          <p className={s.text}>Contacts</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
