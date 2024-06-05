import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import hero1 from "../../public/images/main3.jpg";
import hero2 from "../../public/images/hero2.jpg";
import hero3 from "../../public/images/main4.jpg";

const Review = () => {
  return (
    <div className="h-fit px-10 md:px-20 py-28 bg-gray-100" id="review">
      <div className=" text-4xl font-semibold text-green-500 text-start mb-10">
        <h1>Reviews</h1>
      </div>
      <div className="flex justify-center items-center">
        <Carousel fade className="w-[400px] h-[300px] lg:w-[900px] lg:h-[400px]" id="root">
          <Carousel.Item className="flex justify-end">
            <div className="lg:flex justify-center items-center">
              <img
                className="d-block w-[400px] h-[180px] lg:w-[500px] lg:h-[400px] "
                src={hero1}
                alt="First slide"
              />
              <div className="m-4 space-y-4" >
                <h1 className="text-2xl font-bold italic">Tanvi Gaikwad</h1>
                <p className="text-xl font-semibold hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  ratione? Nostrum est temporibus animi necessitatibus
                  repellendus inventore id! Quo et at, est inventore ad eaque
                  explicabo illo quibusdam aspernatur culpa.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="lg:flex justify-center items-center">
              <img
                className="d-block w-[400px] h-[180px] lg:w-[500px] lg:h-[400px]  "
                src={hero2}
                alt="second slide"
              />
              <div className="m-4 space-y-4" >
                <h1 className="text-2xl font-bold italic">Siddhi Gaikwad</h1>
                <p className="text-xl font-semibold hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  ratione? Nostrum est temporibus animi necessitatibus
                  repellendus inventore id! Quo et at, est inventore ad eaque
                  explicabo illo quibusdam aspernatur culpa.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="lg:flex justify-center items-center">
              <img
                className="d-block w-[400px] h-[180px] lg:w-[500px] lg:h-[400px]   "
                src={hero3}
                alt="third slide"
              />
              <div className="m-4 space-y-4" >
                <h1 className="text-2xl font-bold italic">Vaibhavi Gaikwad</h1>
                <p className="text-xl font-semibold hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  ratione? Nostrum est temporibus animi necessitatibus
                  repellendus inventore id! Quo et at, est inventore ad eaque
                  explicabo illo quibusdam aspernatur culpa.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
