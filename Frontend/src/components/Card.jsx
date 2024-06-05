import React from "react";
// import img1 from "../images/prod5.webp"

const Card = ({ name, image, price, weight, categ }) => {
  // console.log(image)
  return (
    <div className="flex flex-col md:m-2">
      <div className="w-[160px] h-[250px] lg:w-[230px] lg:h-[360px] border-[1px] rounded-xl border-gray-400 md:p-2 md:space-y-5 bg-white hover:drop-shadow-2xl">
        <div className="flex flex-col justify-center items-center">
          <img
            src={image}
            alt=""
            className="rounded-md w-[120px] h-[140px] lg:w-44 lg:h-44"
          />
        </div>
        <div className="flex flex-col justify-start items-start mx-3 lg:w-44">
          <p className="font-bold lg:text-lg text-blue-900 text-sm text-wrap">{name}</p>
          <p className="font-semibold text-gray-500">{categ}</p>
        </div>
        <div className=" mx-3">
          <p className="font-bold">Price {price}</p>
          <p>Size {weight}</p>
          {/* <select name="quntity" id="">
                    <option value="500">500 ml</option>
                </select> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
