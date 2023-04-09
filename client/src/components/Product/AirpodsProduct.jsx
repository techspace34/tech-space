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

function AirpodsProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState();

  const { id } = useParams();

  const cartItem = useSelector(state =>
    state.cart.items.find(obj => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://642c149b208dfe254727719c.mockapi.io/airpods/" + id
        );
        setProduct(data);
      } catch (error) {
        console.log("Ошибка", error);
      }
    }

    fetchProduct();
  }, [id]);

  const onClickAdd = () => {
    const item = {
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
    };
    dispatch(addItem(item));
  };

  if (!product) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Menu />
      <NavigationProduct
        where="AirPods"
        title={product.name}
        link="/airpods"
        link2={"/airpods/" + product.id}
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
                {/* <div className={s.wrapChoice}>
                  <p className={s.titleChoice}>Colors</p>
                  <div className={s.wrapperChoice}>
                    {product.colors.map(color => (
                      <button
                        key={color}
                        className={
                          activeType === color
                            ? "buttonChoiceActiveMap"
                            : "buttonChoiceMap"
                        }
                        onClick={() => setActiveType(color)}
                      >
                        {typesName[color]}
                      </button>
                    ))}
                  </div>
                </div> */}
              </div>
              <h2 className={s.price}>{product.price} $</h2>
              <button className={s.addCart} onClick={onClickAdd}>
              {addedCount > 0 && (
                <p className={s.addCartNumber}>{addedCount}</p>
              )}
              Add to cart</button>     
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AirpodsProduct;
