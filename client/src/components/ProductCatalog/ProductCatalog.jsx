import s from "./ProductCatalog.module.css";

function ProductCatalog({ name, image }) {
  return (
    <div className={s.card}>
      <div className={s.wrap}>
        <p className={s.title}>{name}</p>
        <div className={s.imgWrapper}>
          <img className={s.image} src={image} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;
