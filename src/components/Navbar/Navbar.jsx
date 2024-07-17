import "./Navbar.css";
import logo from "../../assets/image/logo.png";
import { LuShoppingCart, LuHeart, LuUserCircle } from "react-icons/lu";
import { useState } from "react";
import shoe from "../../assets/image/shoe.png";
import shoe1 from "../../assets/image/shoe1.png";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setProfileOpen(false);
    setFavoritesOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setCartOpen(false);
    setFavoritesOpen(false);
  };

  const toggleFavorites = () => {
    setFavoritesOpen(!favoritesOpen);
    setCartOpen(false);
    setProfileOpen(false);
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
          <li onClick={toggleFavorites}>
            <LuHeart size={18} color="#9B9B9B" />
            <p>Закладки</p>
          </li>
          <li onClick={toggleProfile}>
            <LuUserCircle size={18} color="#9B9B9B" />
            <p>Профиль</p>
          </li>
        </ul>
      </nav>
      {cartOpen && (
        <div className="cart-menu">
          <h2>Корзина</h2>
          <div className="cart-products">
            <div className="cart-product">
              <div className="cart-product__image">
                <img src={shoe1} alt="Nike Air Max 270" />
              </div>
              <div className="cart-product__text">
                <h3>Мужские Кроссовки Nike Air Max 270</h3>
                <p>12 999 руб.</p>
              </div>
            </div>
            <div className="cart-product">
              <div className="cart-product__image">
                <img src={shoe} alt="Nike Blazer Mid Suede" />
              </div>
              <div className="cart-product__text">
                <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>
                <p>8 499 руб.</p>
              </div>
            </div>
          </div>
          <div className="cart-summary">
            <p>Итого: 21 498 руб.</p>
            <p>Налог 5%: 1074 руб.</p>
          </div>
          <button className="summary-button">Оформить заказ</button>
        </div>
      )}
      {profileOpen && (
        <div className="profile-menu">
          <h2>Профиль</h2>
          <div className="profile-details">
            <p>Имя: Иван Иванов</p>
            <p>Email: ivan.ivanov@example.com</p>
          </div>
          <button className="logout-button">Выйти</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
