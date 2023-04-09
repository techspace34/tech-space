import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cart from "../../assets/images/cart.svg";
import trash from "../../assets/images/trash.svg";
import { clearItems } from "../../redux/slices/cartSlice";
import s from "./Cart.module.css";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

function Cart() {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector(state => state.cart);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={s.cart}>
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <img className={s.imageCart} src={cart} alt="cart" />
            <h1 className={s.title}>Cart</h1>
          </div>
          <div className={s.wrapper} onClick={onClickClear}>
            <img className={s.imageTrash} src={trash} alt="trash" />
            <h1 className={s.titleTrash}>Empty trash</h1>
          </div>
        </div>
        <div className={s.menu}>
          {items.map(obj => (
            <CartItem key={obj.id} {...obj} />
          ))}
        </div>
        <div className={s.order}>
          <div className={s.orderWrap}>
            <p className={s.orderTitle}>
              Total items: <span className={s.orderSpan}>{totalCount} шт.</span>
            </p>
            <NavLink className={s.link} to="/">
              <button
                className={
                  s.orderButtonBack
                }
              >
                {"< Сome back"}
              </button>
            </NavLink>
          </div>
          <div className={s.orderWrap}>
            <p className={s.orderTitle}>
              Order price:{" "}
              <span className={s.orderSpanBlack}>{totalPrice} $</span>
            </p>
            <NavLink className={s.link} to="/purchase">
              <button className={s.orderButton}>Pay now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
