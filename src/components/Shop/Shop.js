import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
//for random item
  const chooseOne = () => {
    const random = cart[Math.floor(Math.random() * cart.length)];

    setCart([random]);
  };
  // choose again 
  const chooseAgain = () => {
    setCart([]);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
// for all products button event listener
  const handleAddToCart = (selectedProduct) => {

    let newCart = [];

    const exists = cart.find((product) => product.id === selectedProduct.id);

    if (!exists) {
      newCart = [...cart, selectedProduct];
      setCart(newCart);
    }
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          chooseAgain={chooseAgain}
          cart={cart}
          chooseOne={chooseOne}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
