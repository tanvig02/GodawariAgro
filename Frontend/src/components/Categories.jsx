import React, { useEffect } from 'react'
import categ1 from "../../public/images/categori1.webp"
import categ2 from "../../public/images/categori2.webp"
import categ3 from "../../public/images/categori3.webp"
import categ4 from "../../public/images/categ4.webp"
import categ5 from "../../public/images/categori2.webp"
import categ6 from "../../public/images/categori3.webp"
import categ7 from "../../public/images/categori1.webp"
import categ8 from "../../public/images/categ4.webp"
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    //build complete restfull api 
    <div  className="flex flex-col h-fit md:h-screen mx-5 md:mx-20 py-20 " id='categories'>
        <div className=' text-4xl font-semibold text-green-500 text-start m-6'>
            <h1>Categories</h1>
        </div>
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center font-medium text-sm items-center cursor-pointer ' >
                <div className='flex flex-col items-center ' data-aos="zoom-in">
                  <img src={categ1} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Agro Chemicals</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ2} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Bio Stimulants</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ3} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Straight Micronutrient Fertilizer</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ6} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Micronutrient Mixture Fertilier</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ8} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Straight Sulphur Fertilizer</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ1} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Beneficial Element Fertilizer</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ3} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>100% Water Soluble Complex Fertlizer</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ4} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Organic Fertilezer</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ4} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Bio Fertilezer</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ4} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Provisional Fertilezer</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ4} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Non edible De Oiled Cakes</p>
                </div>
                <div className='flex flex-col items-center' data-aos="zoom-in">
                  <img src={categ4} alt="" className='rounded-full transition-all duration-300 hover:scale-110' />
                  <p>Straight Postassium Fertilezer</p>
                </div>
                {/* <div className='flex flex-col items-center'>
                  <img src={categ4} alt="" className='rounded-full' />
                  <p>Straight Phosphorous Fertilezer</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Categories