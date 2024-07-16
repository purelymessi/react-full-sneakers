import "./ProductCard.css";
import { useState } from "react";
import { LuPlus , LuCheck , LuHeart} from "react-icons/lu";

function ProductCard({ productTitle, productPrice, img }) {
  const [selected, setSelected] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div className="product-card">
      <div className="product-like">
      <button  className={liked && "liked"} onClick={() => setLiked(!liked)}>
         <LuHeart color= {liked ? "#FF8585" : "#EAEAEA"} 
         fill={liked ? "#FF8585" : "none"} size={16} />
        </button>
      </div>
      <div className="product-card__image">
        <img src={img} alt="Product" />
      </div>
      <p className="product-title">{productTitle}</p>
      <div className="product-bottom">
        <div className="product-info">
          <p>Цена:</p>
          <h5>{productPrice}</h5>
        </div>
        <button 
          className={selected && "selected" } 
          onClick={() => setSelected(!selected)}
        >
          {!selected ? <LuPlus size={12} color="#d3d3d3" /> : <LuCheck />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
