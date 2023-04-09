import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartWhite from "../../assets/images/cartWhite.svg";
import s from "./Menu.module.css";

function Menu() {
  const { items } = useSelector(state => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={s.catalog}>
      <div className={s.container}>
        <Link className={s.link} to="/catalog">
          <div className={s.wrap}>
            <div className={s.menu}>
              <div className={s.menuElement} />
              <div className={s.menuElement} />
              <div className={s.menuElement} />
            </div>
            <h1 className={s.title}>Catalog</h1>
          </div>
        </Link>
        <div className={s.wrapper}>
          <Link className={s.link} to="/iphone">
            <p className={s.text}>iPhone</p>
          </Link>
          <Link className={s.link} to="/airpods">
            <p className={s.text}>AirPods</p>
          </Link>
          <Link className={s.link} to="/ipad">
            <p className={s.text}>iPad</p>
          </Link>
          <Link className={s.link} to="/applewatch">
            <p className={s.text}>Apple Watch</p>
          </Link>
          <Link className={s.link} to="/macbook">
            <p className={s.text}>MacBook</p>
          </Link>
          <Link className={s.link} to="/imac">
            <p className={s.text}>iMac</p>
          </Link>
        </div>
        <Link className={s.link} to="/cart">
          <button className={s.cart}>
            <img className={s.cartLogo} src={cartWhite} alt="cart" />
            {totalCount}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
