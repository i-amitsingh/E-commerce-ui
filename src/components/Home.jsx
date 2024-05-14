import "../App.css";
// import products from "../Data.js";
import ProductCard from "./ProductCard.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProdects] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProdects(data));
  }, []);

  return (
    <div>
      <div className="w-[100vw] h-[90vh] flex items-center justify-around gap-10 bg-gray-900">
        <div className="w-[40vw]">
          <div className="flex flex-col gap-1">
            <p className="text-md text-gray-200">New Arrival</p>
            <p className="text-5xl font-bold text-yellow-600">
              Discover Our New Collection
            </p>
            <p className="text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
              voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sed, amet.
            </p>
          </div>

          <button className="bg-yellow-600 text-white px-3 py-2 hover:bg-yellow-700 duration-150 mt-3">
            Shop Now
          </button>
        </div>
        <div className="w-[40vw]">
          <img
            className="max-h-[80vh] w-full object-cover mix-blend-luminosity"
            src="https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-900 text-center my-10 px-20">
          Our Product
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
