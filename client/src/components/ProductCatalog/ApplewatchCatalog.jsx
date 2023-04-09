import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchApplewatch } from "../../redux/slices/applewatchSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import NavigationProductCatalog from "../Navigation/NavigationProductCatalog";
import CardEmpty from "./CardEmpty";
import ProductCatalog from "./ProductCatalog";
import s from "./ProductCatalog.module.css";
import SkeletonLoader from "./SkeletonLoader";

function ApplewatchCatalog() {
  const categoryId = useSelector(state => state.filter.categoryId);
  const searchValue = useSelector(state => state.filter.searchValue);
  const currentPage = useSelector(state => state.filter.currentPage);
  const items = useSelector(state => state.applewatch.items);
  const status = useSelector(state => state.applewatch.status);

  const dispatch = useDispatch();

  const sortType = useSelector(state => state.filter.sort.sortProperty);

  const getCard = async () => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchApplewatch({ currentPage, category, sortBy, order, search }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, currentPage, dispatch, searchValue, sortType]);

  const skeletons = [...new Array(4)].map((_, index) => (
    <SkeletonLoader key={index} />
  ));

  const product = items.map(obj => (
    <Link className={s.link} to={`/applewatch/${obj.id}`} key={obj.id}>
      <ProductCatalog
        name={obj.name}
        link={obj.link}
        image={obj.image}
        id={obj.id}
      />
    </Link>
  ));

  return (
    <>
      <Header />
      <Menu />
      <NavigationProductCatalog link="/applewatch" name="Apple Watch" />
      <div className={s.productCatalog}>
        <div className={s.container}>
          {status === "error" ? (
            <CardEmpty />
          ) : (
            <>{status === "loading" ? skeletons : product}</>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApplewatchCatalog;
