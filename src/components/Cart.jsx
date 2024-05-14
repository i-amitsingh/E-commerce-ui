import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
function Cart() {
  const added = true;
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=2")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold ml-10 text-center mb-4">Cart</h1>
      <div className="flex flex-wrap justify-center items-center">
        {cart.map((items) => {
          return <ProductCard key={items.id} {...items} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
