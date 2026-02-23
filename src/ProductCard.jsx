import { useState } from "react";

function ProductCard({
  id,
  head,
  name,
  price,
  oldprice,
  image,
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  addToCart,
  delete: deleteProduct,
}) {
  const [liked, setLiked] = useState(false);

  const product = {
    id,
    head,
    name,
    price,
    oldprice,
    image,
  };

  return (
    <div className="card">
      <h4>{head}</h4>
      <img src={image} alt="Product Image" />
      <p>{name}</p>
      <b>{price}</b>
      <pre>{oldprice}</pre>

      <div className="thumb">
        <img src={thumb1} alt="Thumb 1" />
        <img src={thumb2} alt="Thumb 2" />
        <img src={thumb3} alt="Thumb 3" />
        <img src={thumb4} alt="Thumb 4" />
      </div>

      <span
        className="heart"
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
      >
        {liked ? (
          <i className="fa-solid fa-heart fa-xl"></i>
        ) : (
          <i className="fa-regular fa-heart fa-xl"></i>
        )}{" "}
        Add to favourites
      </span>
    <div className="cart">
      <button
        onClick={() => {
          if (!addToCart) {
            console.error("addToCart function not passed!");
            return;
          }
          addToCart(product);
        }}
      >
        Add to MyCart
      </button>
    </div>

      <div className="delete">
        <button onClick={() => deleteProduct(id)}>
          Hide this Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;