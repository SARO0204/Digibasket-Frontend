import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProductCardsList from "./ProductCardsList";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./footer";
import Login from "./Login";
import Feedback from "./Feedback";
import MyCart from "./TempCart";

function App() {
  // 🛒 CART STATE
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar cartCount={cart.length} />
              <ProductCardsList cart={cart} setCart={setCart} />
              <Footer />
            </>
          }
        />

        {/* FEEDBACK */}
        <Route
          path="/feedback"
          element={
            <>
              <Header />
              <Navbar cartCount={cart.length} />
              <Feedback />
              <Footer />
            </>
          }
        />

        {/* MY CART */}
        <Route
          path="/mycart"
          element={
            <>
              <Header />
              <Navbar cartCount={cart.length} />
              <MyCart cart={cart} setCart={setCart} />
              <Footer />
            </>
          }
        />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;