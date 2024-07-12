import "./Navbar.css"
import logo from "../../assets/image/logo.png";
import {LuShoppingCart , LuHeart , LuUserCircle} from  "react-icons/lu";


function Navbar() {
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
    
      <li>
        <LuShoppingCart size={18} color="#9B9B9B" />
        <p>1205 руб.</p>
      </li>
      <li>
        <LuHeart size={18} color="#9B9B9B"/>
        <p>Закладки</p>
      </li>
      <li>
        <LuUserCircle size={18} color="#9B9B9B" />
        <p>Профиль</p>
      </li>
    
    </ul>
      </nav>
    </header>
  )
}

export default Navbar
