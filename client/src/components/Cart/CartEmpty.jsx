import { Link } from "react-router-dom";
import s from "./Cart.module.css";

function CartEmpty() {
  return (
    <div className={s.cartEmpty}>
      <h2 className={s.title}>Cart is empty :(</h2>
      <p className={s.cartEmptySubtitle}>
        Chances are you haven't chosen a product yet.
      </p>
      <p className={s.cartEmptySubtitle}>
        To order a product go to the catalog.
      </p>
      <Link className={s.link} to="/catalog">
        <button className={s.orderButtonBack}>{"< Catalog"}</button>
      </Link>
    </div>
  );
}

export default CartEmpty;
