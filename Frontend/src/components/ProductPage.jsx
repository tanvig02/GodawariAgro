import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import image from '../../public/images/prod1.webp'
import Footer from "./Footer"

const ProductPage = () => {
  const location = useLocation();
  const { prodDetail } = location.state;
  const [option, setOption] = useState(prodDetail.weight[0]);

  const handelOption=(e)=>{
    setOption(e.target.value)
  }


  return (
    <>
    <div className=" ">
      <div className="lg:px-20 py-10 px-10 h-fit w-full">
        <div className="lg:flex max-h-fit">
          <div className=" flex flex-1 justify-center lg:border-r-2 border-gray-300">
            <img src={prodDetail.image} alt="" className="h-fit" />
          </div>
          {/* Details  */}
          <div className=" flex-1 p-8 space-y-4">
            <h3 className="text-4xl text-gray-600 font-serif">{prodDetail.name}</h3>

            <div className="text-xl">{prodDetail.desc}</div>
            
            <h4 className="font-bold text-xl">
              {" "}
              <span >Price: </span> {prodDetail.price}
            <p className="font-semibold text-base">Inclusive of all taxes</p>
            </h4>
            <div className="">
              <p>Country of Origin India</p>
              <p>Secure Payments</p>
              
            </div>

            <div className="border-b-2 border-gray-300 pb-14">
              <label className=" outline-none pr-4">Size : </label>
              <select name="Size" value={option} id="option" onChange={handelOption} className="border-2 border-gray-300 rounded-md px-4 py-2 text-xl font-semibold outline-none">
                {prodDetail.weight.map((element, index) => 
                    <option key={index}  value={element}>{element}</option>
                )}
              </select>
            </div>
            
            <div className="pt-8">
            <button className="bg-green-500 hover:bg-green-800 text-white text-xl p-2 px-4 border-none outline-none rounded-md">
              Buy Now
            </button>
            </div>
          </div>

          {/* <div className="w-[50%] space-y-3">
            <h2 className="text-2xl font-bold">Product Description</h2>
            <div>
              <h3 className="text-xl font-semibold">About Product</h3>
              <ul className="list-disc">
                <li>
                  Isabion Syngenta Growth Promoter is a natural bio stimulant
                  product offered by Syngenta.
                </li>
                <li>
                  <span className="font-semibold">Technical Content:</span>{" "}
                  <i>Amino Acids of natural origin</i>
                </li>
                <li>
                  It is recommended for use on a variety of crops including
                  fruit trees, vegetables, and field crops, and is particularly
                  beneficial during active growth phases, transplantation,
                  flowering, fruit setting, and ripening.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="list-disc">
                <li>
                  <span className="font-semibold">
                    Photosynthesis and action on stomata:
                  </span>{" "}
                  Increasing chlorophyll concentration, resulting crop lush
                  green.
                </li>
                <li>
                  Pollination and fruit formation: Helping transportation of
                  pollen, good fruit set and early harvest.
                </li>
                <li>Stress resistance: Prevention and recovery.</li>
                <li>
                  Activator: It induces the synthesis of flowers and fruit
                  related hormones.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Usage and Crops</h3>
              <ul className="list-disc">
                <li>
                  <span className="font-semibold">Recommended Crops:</span>{" "}
                  fruit trees - Citrus, Grapes, Mango, Apple, Pomegranate &
                  other fruits; vegetables- Tomato, Chilli, Brinjal, Cole crops,
                  Potato, Cucurbits, Onion and all leafy vegetables, field crops
                  etc.
                </li>
                <li>
                  {" "}
                  <span className="font-semibold">Dosage:</span> 2 ml/ 1 L of
                  water & 400 ml/Acre
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;

// About Product
// Isabion Syngenta Growth Promoter is a natural bio stimulant product offered by Syngenta.
// Isabion syngenta technical name - Amino Acid + Peptides
// It contains a well-balanced mix with optimal ratio between short chain peptides, long chain peptides and free amino acids.
// It is designed to enhance the yield and quality of crops naturally.
// It is recommended for use on a variety of crops including fruit trees, vegetables, and field crops, and is particularly beneficial during active growth phases, transplantation, flowering, fruit setting, and ripening.
// Isabion Syngenta Technical Details
// Technical Content: Amino Acids of natural origin
// Key Features and Benefits
// Photosynthesis and action on stomata: Increasing chlorophyll concentration, resulting crop lush green.
// Pollination and fruit formation: Helping transportation of pollen, good fruit set and early harvest.
// Stress resistance: Prevention and recovery.
// Chelating effect: Easy uptake and transportation of micronutrients.
// Activator: It induces the synthesis of flowers and fruit related hormones.
// Isabion Syngenta Usage and Crops
// Recommended Crops: fruit trees - Citrus, Grapes, Mango, Apple, Pomegranate & other fruits; vegetables- Tomato, Chilli, Brinjal, Cole crops, Potato, Cucurbits, Onion and all leafy vegetables, field crops etc.
// Dosage: 2 ml/ 1 L of water & 400 ml/Acre

// Method of Application: Foliar Application
// Time of Application

// Isabion Syngenta is recommended during the active growth phases of the production cycle, in nurseries, and in young plantations.
// It allows flexibility of usage as a foliar spray.
// The number of applications & timings depends on the crop, however, application at the time of transplantation, flowering, fruit set, and ripening are the most important.
// Additional Information
// Isabion Syngenta the world’s purest and the most concentrated product of Amino acids of natural origin.
// Isabion helps the crops in mitigating the damage done by hail, phytotoxicity, parasites and diseases, drought etc.
// It is absorbed by the plant immediately on application.
// Isabion contains unique Amino acids in it which have a specific role for maximizing the plant’s yield potential.
// Disclaimer: This information is provided for reference purposes only. Always follow the recommended application guidelines outlined on the product label and accompanying leaflet.
