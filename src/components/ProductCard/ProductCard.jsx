import "./ProductCard.css";
import { LuPlus } from "react-icons/lu";

function ProductCard({ productTitle, productPrice, img }) {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={img} alt="Product" />
      </div>
      <p className="product-title">{productTitle}</p>
      <div className="product-bottom">
        <div className="product-info">
          <p>Цена:</p>
          <h5>{productPrice}</h5>
        </div>
        <button>
          <LuPlus size={11} color="#d3d3d3" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
