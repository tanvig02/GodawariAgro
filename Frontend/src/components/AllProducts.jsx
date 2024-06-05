import React, { useState } from "react";
import Products from "../ProductDetails/products.js";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx"
import  Card from "./Card.jsx";

const AllProducts = () => {
  const [items, setItems] = useState(Products);
  return (
    <>
      <div className="h-fit md:mx-20 md:pt-10 " id="products">
        <div className=" text-4xl italic font-semibold py-8">
          <h1>Our Products</h1>
        </div>
        <div className=" grid md:gap-y-8 md:gap-x-6 gap-x-2 gap-y-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8 mb-20">
          {items.map((place, index) => (
            <div className=" cursor-pointer ">
              <div className="flex justify-center items-center">
                <Link
                  key={index}
                  className="text-black no-underline"
                  to={"/product/" + place.name}
                  state={{ prodDetail: place }}
                >
                  {/* Image */}
                  {/* <div className="h-auto flex relative ">
                    <img
                      className=" object-contain w-full h-auto aspect-square"
                      src={place.image}
                      alt=""
                    />

                
                  </div>

                  <h2 className="text-lg font-semibold font-mono">{place.name}</h2>
                  <h3 className=" font-semibold text-gray-500">
                    {place.category}
                  </h3>
                  <div className="mt-1">
                    <span className="font-bold">₹{place.price}</span>
                  </div> */}
                  <Card name={place.name}
                  image={place.image}
                  price={place.price}
                  weight={place.weight}
                  categ={place.category}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AllProducts;
