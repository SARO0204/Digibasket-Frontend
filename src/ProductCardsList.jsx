import ProductCard from "./ProductCard";
import midi1 from "./assets/Midi1.jpg";
import midi2 from "./assets/Midi2.jpg";
import midi3 from "./assets/Midi3.jpg";
import midi4 from "./assets/Midi4.jpg";
import kurthi1 from "./assets/Kurthi1.webp";
import kurthi2 from "./assets/Kurthi2.jpg";
import kurthi3 from "./assets/Kurthi3.jpg";
import kurthi4 from "./assets/Kurthi4.jpg";
import cosuit1 from "./assets/Cosuit1.jpg";
import cosuit2 from "./assets/Cosuit2.jpg";
import cosuit3 from "./assets/Cosuit3.jpg";
import cosuit4 from "./assets/Cosuit4.jpg";
import polo1 from "./assets/Polo shirt1.jpg";
import polo2 from "./assets/Polo shirt2.jpg";
import polo3 from "./assets/Polo shirt3.jpg";
import polo4 from "./assets/Polo shirt4.jpg";
import baggy1 from "./assets/Baggy1.jpg";
import baggy2 from "./assets/Baggy2.jpg";
import baggy3 from "./assets/Baggy3.jpg";
import baggy4 from "./assets/Baggy4.jpg";
import csk1 from "./assets/CSK Jersey1.jpg";
import csk2 from "./assets/CSK Jersey2.jpg";
import csk3 from "./assets/CSK Jersey3.jpg";
import csk4 from "./assets/CSK Jersey4.jpg";
import hoodie1 from "./assets/Hoodie1.jpg";
import hoodie2 from "./assets/Hoodie2.jpg";
import hoodie3 from "./assets/Hoodie3.jpg";
import hoodie4 from "./assets/Hoodie4.jpg";
import sweater1 from "./assets/Sweater 1.jpg";
import sweater2 from "./assets/Sweater 2.jpg";
import sweater3 from "./assets/Sweater 3.jpg";
import sweater4 from "./assets/Sweater 4.jpg";
import { useState, useEffect } from "react";

function ProductCardsList() {
  const [products, setProducts] = useState([
    // {
    //   id: 1,
    //   head: "-40% offer | Everyday fashion finds",
    //   image: midi1,
    //   name: "Women's Georgette Printed Dress | Women Midi Dress",
    //   price: "M.R.P: ₹ 599",
    //   oldprice: "₹899",
    //   thumb1: midi1,
    //   thumb2: midi2,
    //   thumb3: midi3,
    //   thumb4: midi4,
    // },
    // {
    //   id: 2,
    //   head: "-50% offer | Everyday fashion finds",
    //   image: kurthi1,
    //   name: "Women's Floral Anarkali Kurta, Maroon Rayon with Gold Embroidery, 3/4 Sleeve",
    //   price: "M.R.P: ₹499",
    //   oldprice: "₹999",
    //   thumb1: kurthi1,
    //   thumb2: kurthi2,
    //   thumb3: kurthi3,
    //   thumb4: kurthi4,
    // },
    // {
    //   id: 3,
    // head: "-35% offer | Everyday fashion finds",
    // image: cosuit1,
    // name: "Peter England Neo Slim Fit Self Design Textured Single-Breasted Formal Blazer",
    // price: "M.R.P: ₹4599",
    // oldprice: "₹5999",
    // thumb1: cosuit1,
    // thumb2: cosuit2,
    // thumb3: cosuit3,
    // thumb4: cosuit4,
    // },
    // {
    //   id: 4,
    //   head: "-81% offer | Everyday fashion finds",
    //   image: csk1,
    //   name: "CSK Jersey MS Dhoni 7 Cricket Team Half Sleeve Jersey, Chennai Team  Jersey",
    //   price: "M.R.P: ₹174",
    //   oldprice: "₹899",
    //   thumb1: csk1,
    //   thumb2: csk2,
    //   thumb3: csk3,
    //   thumb4: csk4,
    // },
    // {
    //   id: 5,
    //   head: "-61% offer | Everyday fashion finds",
    //   image: polo1,
    //   name: "KAJARU Men's Polyester Polo T Shirt with Spread Collar Neck Line Full Sleeves",
    //   price: "M.R.P: ₹312",
    //   oldprice: "₹799",
    //   thumb1: polo1,
    //   thumb2: polo2,
    //   thumb3: polo3,
    //   thumb4: polo4,
    // },
    // {
    //   id: 6,
    //   head: "-20% offer | Everyday fashion finds",
    //   image: baggy1,
    //   name: "Ben Martin Men's Denim || Stretchable Baggy Fit ||Cotton Cargo Jeans",
    //   price: "M.R.P: ₹799",
    //   oldprice: "₹899",
    //   thumb1: baggy1,
    //   thumb2: baggy2,
    //   thumb3: baggy3,
    //   thumb4: baggy4,
    // },
    // {
    //   id: 7,
    //   head: "-30% offer | Everyday fashion finds",
    //   image: sweater1,
    //   name: "SARETRA MALL Both Men's & Women's Floral Printed Georgette Sweater",
    //   price: "M.R.P: ₹399",
    //   oldprice: "₹599",
    //   thumb1: sweater1,
    //   thumb2: sweater2,
    //   thumb3: sweater3,
    //   thumb4: sweater4,
    // },
    // {
    //   id: 8,
    //   head: "-30% offer | Everyday fashion finds",
    //   image: hoodie1,
    //   name: "Lymio Hoodie|| Sweatshirt for Unisex || Unisex Hoodie and Sweatshirt",
    //   price: "M.R.P: ₹499",
    //   oldprice: "₹799",
    //   thumb1: hoodie1,
    //   thumb2: hoodie2,
    //   thumb3: hoodie3,
    //   thumb4: hoodie4,
    // },
]);

  useEffect(() => {
    console.log("Use Effect Called");
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function handleDelete(id) {
    const newProducts = products.filter((product) => product._id !== id);
    setProducts(newProducts);
  }

  const imageMap = {
    midi1,
    midi2,
    midi3,
    midi4,

    kurthi1,
    kurthi2,
    kurthi3,
    kurthi4,

    cosuit1,
    cosuit2,
    cosuit3,
    cosuit4,

    polo1,
    polo2,
    polo3,
    polo4,

    baggy1,
    baggy2,
    baggy3,
    baggy4,

    csk1,
    csk2,
    csk3,
    csk4,

    hoodie1,
    hoodie2,
    hoodie3,
    hoodie4,

    sweater1,
    sweater2,
    sweater3,
    sweater4,
  };

  const productsList = products.map((product) => (
    <ProductCard
      key={product._id}
      id={product._id}
      head={product.head}
      name={product.name}
      price={product.price}
      oldprice={product.oldprice}
      image={imageMap[product.image]}
      thumb1={imageMap[product.thumb1]}
      thumb2={imageMap[product.thumb2]}
      thumb3={imageMap[product.thumb3]}
      thumb4={imageMap[product.thumb4]}
      delete={handleDelete}
    />
  ));

  return <>{productsList}</>;
}
export default ProductCardsList;
