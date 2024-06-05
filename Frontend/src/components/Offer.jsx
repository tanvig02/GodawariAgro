import React, { useState } from "react";
import Card from "./Card";
import Product from "../ProductDetails/products";
import { Link } from "react-router-dom";

const Offer = () => {
  const [item, setItem] = useState(Product);
  console.log(item);
  return (
    <div className="h-fit px-10 lg:px-20 py-28 bg-gray-100" id="products">
      <div className="">
        <div className="flex justify-around md:justify-start items-start">
          <h1 className="text-4xl font-extrabold text-green-500 font-mono mb-4">
            Best Selling{" "}
          </h1>
          
          <Link to={`/allProducts`} className="md:hidden block underline">view all </Link>
        </div>
        <div className="md:flex justify-center items-center">
          {item.slice(0, 5).map((elem) => {
            const { id, name, image, price, weight, categ } = elem;

            return (
              <div className="flex justify-center items-center" key={id}>
                <Card
                  name={name}
                  image={image}
                  price={price}
                  weight={weight}
                  categ={categ}
                />
          
              </div>
            );
          })}
        <Link to={`/allProducts`} className="hidden md:block underline">view all </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
