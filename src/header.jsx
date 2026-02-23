import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // 👈 correct function

  return (
    <div className="header">
      <div className="logo">
        <img src="/digibasket-logo.webp" alt="logo" />
        <h3>DIGIBASKET</h3>
      </div>

      <div className="search">
        <input type="text" placeholder="Enter the Product details to search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="language">
        <button onClick={() => navigate("/login")}>LOGIN</button>
      </div>

      <div className="language">
        <select>
          <option value="en">🌐 English</option>
          <option value="ta">🌐 Tamil</option>
          <option value="hi">🌐 Hindi</option>
        </select>
      </div>

      <div className="language">
        <button onClick={() => navigate("/mycart")}>
          <i className="fa-solid fa-cart-shopping"></i> MyCart
        </button>
      </div>
    </div>
  );
}

export default Header;