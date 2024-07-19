import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import CardsSearch from "../CardsSearch/CardsSearch";
import "./Cards.css";
import shoe from "../../assets/image/shoe.png";
import shoe1 from "../../assets/image/shoe1.png";
import shoe2 from "../../assets/image/shoe2.png";
import shoe3 from "../../assets/image/shoe3.png";
import shoe4 from "../../assets/image/shoe4.png";
import shoe5 from "../../assets/image/shoe5.png";
import shoe6 from "../../assets/image/shoe6.png";
import shoe7 from "../../assets/image/shoe7.png";
import shoe8 from "../../assets/image/shoe8.png";

const products = [
  {
    productPrice: "12 999 руб.",
    productTitle: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: shoe,
  },
  {
    productPrice: "12 999 руб.",
    productTitle: "Мужские Кроссовки Nike Air Max 270",
    img: shoe1,
  },
  {
    productPrice: "8 499 руб.",
    productTitle: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: shoe2,
  },
  {
    productPrice: "8 999 руб.",
    productTitle: "Кроссовки Puma X Aka Boku Future Rider",
    img: shoe3,
  },
  {
    productPrice: "15 199 руб.",
    productTitle: "Мужские Кроссовки Under Armour Curry 8",
    img: shoe4,
  },
  {
    productPrice: "11 299 руб.",
    productTitle: "Мужские Кроссовки Nike Kyrie 7",
    img: shoe5,
  },
  {
    productPrice: "10 799 руб.",
    productTitle: "Мужские Кроссовки Jordan Air Jordan 11",
    img: shoe6,
  },
  {
    productPrice: "16 499 руб.",
    productTitle: "Мужские Кроссовки Nike LeBron XVIII",
    img: shoe7,
  },
  {
    productPrice: "13 999 руб.",
    productTitle: "Мужские Кроссовки Nike Lebron XVIII Low",
    img: shoe8,
  },
];

function Cards() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.productTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cards-wrapper">
      <div className="cards-top container">
        <h1>Все кроссовки</h1>
        <CardsSearch changeHandler={handleSearch} />
      </div>
      <div className="cards container">
        {filteredProducts.length === 0 ? (
          <div className="text-not-found">Not Found</div>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              productTitle={product.productTitle}
              productPrice={product.productPrice}
              img={product.img}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Cards;
