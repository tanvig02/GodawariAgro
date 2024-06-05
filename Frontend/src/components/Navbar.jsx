import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../ProductDetails/products.js";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  const [input, setInput] = useState();
  const [items, setItems] = useState(Products);
  const [prodDetail, setProdDetail] = useState();
  const search = (items) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name === input) {
        setProdDetail(items[i]);
        console.log(prodDetail);
        break;
      }
    }
  };
  return (
    <>
      <div className="max-w-full px-6 text-green-600 backdrop-blur-[2px] shadow-md shadow-slate-400 sticky top-0 z-50 ">
        <div className="flex flex-col h-[80px] sticky top-0 z-50  ">
          <div className=" flex justify-around items-center ">
            <Link to={"/"} className="text-lg font-bold">
              <img src={logo} className="w-28 h-20" alt="" />
            </Link>
            {/* <div>
          <form action="">
          <input type="text" 
            className="border-gray-300 border-1 outline-none rounded-md p-2" 
            placeholder="Search " 
            value={input }
            onChange={(e)=>{ setInput(e.target.value)}}
          
          />
          <Link  to={"/product/" + input} state={{prodDetail: prodDetail}} ><button onClick={search(items)}>Search</button></Link>
          </form>
        </div> */}
            <div className="hidden md:block ">
              <div className="flex justify-center items-center text-xl font-medium space-x-4 ">
              <ul className="flex items-center space-x-5 ">
              <li className="cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer">
                <a href="#categories">Categories</a>
              </li>
              <li className="cursor-pointer">
                <a href="#products">Products</a>
              </li>
              <li className="cursor-pointer">
                <a href="#review">Reviews</a>
              </li>
              <li className="cursor-pointer">
                <a href="#contactus">Contact Us</a>
              </li>
            </ul>
              </div>
            </div>
            <div className="space-x-2">
              <Link to={"/login"}>
                <button className="bg-green-500 hover:bg-green-800 text-white font-semibold p-2 md:py-2 md:px-4 rounded">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="text-green-700 hover:text-white hover:bg-green-700  font-semibold p-2 md:py-2 md:px-4 rounded border-2 border-green-700 ">
                  Register
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="border-1 border-gray-400"></div> */}

          {/* <div className=" ">
        <div className="flex justify-center items-center text-xl font-medium space-x-4 ">
          <button className="hover:bg-green-300 hover:text-green-900 p-2">Home</button>
          <button className="hover:bg-green-300 hover:text-green-900 p-2">Products</button>
          <button className="hover:bg-green-300 hover:text-green-900 p-2">Categories</button>
          <button className="hover:bg-green-300 hover:text-green-900 p-2">About</button>
          <button className="hover:bg-green-300 hover:text-green-900 p-2">Contact</button>
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
