import { Link } from "react-router-dom";
import s from "./Cards.module.css";

function Cards() {
  return (
    <div className={s.cards}>
      <div className={s.container}>
        <div className={s.card}>
          <Link className={s.link} to="/iphone">
            <div className={s.wrap}>
              <p className={s.title}>IPhone</p>
              <div className={s.imgWrapper}>
                <img
                  className={s.image1}
                  src={
                    "https://istudio-samara.ru/a/istudio/files/96745/subimg96745.webp"
                  }
                  alt="product"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className={s.card}>
          <Link className={s.link} to="/airpods">
            <div className={s.wrap}>
              <p className={s.title}>AirPods</p>
              <div className={s.imgWrapper}>
                <img
                  className={s.image}
                  src={
                    "https://istudio-samara.ru/a/istudio/files/96489/subimg96489.webp"
                  }
                  alt="product"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className={s.card}>
          <Link className={s.link} to="/ipad">
            <div className={s.wrap}>
              <p className={s.title}>IPad</p>
              <div className={s.imgWrapper}>
                <img
                  className={s.image}
                  src={
                    "https://istudio-samara.ru/a/istudio/files/49205/subimg49205.webp"
                  }
                  alt="product"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className={s.card}>
          <Link className={s.link} to="/applewatch">
            <div className={s.wrap}>
              <p className={s.title}>Apple Watch</p>
              <div className={s.imgWrapper}>
                <img
                  className={s.image}
                  src={
                    "https://istudio-samara.ru/a/istudio/files/53870/subimg53870.webp"
                  }
                  alt="product"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className={s.card}>
          <Link className={s.link} to="/macbook">
            <div className={s.wrap}>
              <p className={s.title}>MacBook</p>
              <div className={s.imgWrapper}>
                <img
                  className={s.image6}
                  src={
                    "https://istudio-samara.ru/a/istudio/files/multifile/2353/preview_preview_111_0.png"
                  }
                  alt="product"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className={s.card}>
          <Link className={s.link} to="/imac">
            <div className={s.wrap}>
              <p className={s.title}>IMac</p>
              <div className={s.imgWrapper}>
                <img
                  className={s.image}
                  src={
                    "https://istudio-samara.ru/a/istudio/files/65840/subimg65840.webp"
                  }
                  alt="product"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;