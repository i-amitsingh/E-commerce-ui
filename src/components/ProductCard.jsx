import { useState } from "react";

const ProductCard = ({ title, price, category, rating, image }) => {
  const [added, setAdded] = useState(false);
  return (
    <div className=" bg-white border-2 shadow-sm rounded-lg overflow-scroll m-4 w-[25vw] min-h-[80vh]">
      <img
        src={image}
        alt="Product"
        className="max-h-[300px] mx-auto px-2 py-1 rounded-none"
      />
      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">{title}</h2>
        <p>${price}</p>

        <p className="text-gray-600 mt-2">Category: {category}</p>
        <div className="flex justify-between">
          <p className="text-gray-600 mt-2">Rating: {rating.rate}/5</p>
          <p className="text-gray-600 mt-2">Rating Count: {rating.count}</p>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setAdded(!added)}
        >
          {added ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
