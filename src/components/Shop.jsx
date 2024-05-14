import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="flex flex-wrap justify-center items-center">
      {data.map((items) => {
        return <ProductCard key={items.id} {...items} />;
      })}
    </div>
  );
}

export default Shop;
