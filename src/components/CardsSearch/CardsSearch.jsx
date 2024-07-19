import { LuSearch } from "react-icons/lu";
import "./CardsSearch.css";

const CardsSearch = ({ changeHandler }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="name"
        onChange={changeHandler}
        name="name"
        id="name"
        placeholder="Поиск..."
      />
      <div className="icon">
        <LuSearch size={24} color="#E4E4E4" />
      </div>
    </div>
  );
};

export default CardsSearch;
