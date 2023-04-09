import s from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import whatsspp from "../../assets/images/whataspp.svg";
import instagram from "../../assets/images/instagram.svg";
import telegram from "../../assets/images/telegram.svg";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.wrapBrand}>
          <div className={s.wrap}>
            <img className={s.logo} src={logo} alt="logo" />
            <h1 className={s.title}>tech-space</h1>
          </div>
          <button className={s.buttonBrand}>Write to us</button>
        </div>
        <div className={s.wrapper}>
          <p className={s.text}>Catalog</p>
          <p className={s.text}>About company</p>
          <p className={s.text}>Delivery</p>
          <p className={s.text}>Services</p>
        </div>
        <div className={s.wrapperConctacts}>
          <img className={s.contactsLogo} src={whatsspp} alt="whatsapp" />
          <img className={s.contactsLogo} src={instagram} alt="instagram" />
          <img className={s.contactsLogo} src={telegram} alt="telegram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
