import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../redux/slices/cartSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Menu from "../Menu/Menu";
import NavigationProduct from "../Navigation/NavigationProduct";
import s from "./Product.module.css";
import "./ProductMap.css";

function ApplewatchProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState();

  const { id } = useParams();

  const cartItem = useSelector(state =>
    state.cart.items.find(obj => obj.id === id)
  );

  const [activeType, setActiveType] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://642c149b208dfe254727719c.mockapi.io/applewatch/" + id
        );
        setProduct(data);
      } catch (error) {
        console.log("Ошибка", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <Loader />
  }

  const onClickAdd = () => {
    const item = {
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      type: product.colors[activeType],
    };
    dispatch(addItem(item));
  };

  return (
    <>
      <Header />
      <Menu />
      <NavigationProduct
        where="Apple Watch"
        title={product.name}
        link="/applewatch"
        link2={"/applewatch/" + product.id}
      />
      <div className={s.product}>
        <div className={s.container}>
          <div className={s.wrap}>
            <img
              className={s.productImage}
              src={product.image}
              alt="productImage"
            />
            <div className={s.wrapper}>
              <h1 className={s.title}>{product.name}</h1>
              <div className={s.containerChoice}>
                <div className={s.wrapChoice}>
                  <p className={s.titleChoice}>Colors</p>
                  <div className={s.wrapperChoice}>
                    {product.colors.map((color, index) => (
                      <button
                        key={color}
                        className={
                          activeType === index
                            ? "buttonChoiceActiveMap"
                            : "buttonChoiceMap"
                        }
                        onClick={() => setActiveType(index)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <h2 className={s.price}>{product.price} $</h2>
              <button className={s.addCart} onClick={onClickAdd}>
                {addedCount > 0 && (
                  <p className={s.addCartNumber}>{addedCount}</p>
                )}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApplewatchProduct;
