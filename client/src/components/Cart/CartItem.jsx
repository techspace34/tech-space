import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import s from "./Cart.module.css";

function CartItem({ id, title, price, type, count, storage, image }) {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  console.log(type);

  return (
    <div className={s.menuContainer}>
      <div className={s.menuWrap}>
        <img className={s.menuImage} src={image} alt=" " />
        <div className={s.menuWrapper}>
          <h2 className={s.menuTitle}>{title}</h2>
          <p className={s.menuSubtitle}>{type}, {storage}</p>
        </div>
      </div>
      <div className={s.menuWrap}>
        <div className={s.menuMinus} onClick={onClickMinus}>-</div>
        <p className={s.menuCount}>{count}</p>
        <div className={s.menuPlus} onClick={onClickPlus}>+</div>
      </div>
      <p className={s.menuPrice}>{price * count} $</p>
      <div className={s.menuCancel} onClick={onClickRemove}>x</div>
    </div>
  );
}

export default CartItem;
