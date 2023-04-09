import loaderImage from "../../assets/images/loader.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Loader.css";

function Loader() {
  return (
    <>
      <Header />
      <Menu />
      <div className="loader">
        <img
          className="loader__image rotation"
          src={loaderImage}
          alt="loader"
        />
      </div>
      <Footer />
    </>
  );
}

export default Loader;
