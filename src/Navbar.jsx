import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
  };

  return (
    <div className="nav">
      <nav>
        <a onClick={() => go("/")}>≡ All</a>
        <a onClick={() => go("/mobiles")}>Mobiles</a>
        <a onClick={() => go("/laptops")}>Laptops</a>
        <a onClick={() => go("/watches")}>Watches</a>
        <a onClick={() => go("/home-appliances")}>Home Appliances</a>
        <a onClick={() => go("/vehicles")}>Car & MotorBike</a>
        <a onClick={() => go("/groceries")}>Groceries</a>
        <a onClick={() => go("/feedback")}>FeedBack</a>
      </nav>
    </div>
  );
}

export default Navbar;