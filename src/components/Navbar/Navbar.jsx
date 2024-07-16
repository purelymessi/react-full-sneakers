import "./Navbar.css";
import logo from "../../assets/image/logo.png";
import { LuShoppingCart, LuHeart, LuUserCircle } from "react-icons/lu";
import { useState } from "react";
import shoe from  "../../assets/image/shoe.png";
import shoe1 from "../../assets/image/shoe1.png"

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header className="navbar">
      <nav className="navbar-nav container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-title">
            <h1>REACT SNEAKERS</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="navbar-right">
          <li onClick={toggleCart}>
            <LuShoppingCart size={18} color="#9B9B9B" />
            <p>1205 руб.</p>
          </li>
          <li>
            <LuHeart size={18} color="#9B9B9B" />
            <p>Закладки</p>
          </li>
          <li>
            <LuUserCircle size={18} color="#9B9B9B" />
            <p>Профиль</p>
          </li>
        </ul>
      </nav>
      {cartOpen && (
        <div className="cart-menu">
          <h2>Корзина</h2>
          <div className="cart-item">
            <img src={shoe1} alt="" />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <h3>12 999 руб.</h3>
            </div>
          </div>
          <div className="cart-item2">
            <img src={shoe} alt="" />
            <div>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <h3>8 499 руб.</h3>
            </div>
          </div>
          <div className="cart-summary">
            <p>Итого: 21 498 руб.</p>
            <p>Налог 5%: 1074 руб.</p>
          </div>
          <button className="summary-button">Оформить заказ</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
