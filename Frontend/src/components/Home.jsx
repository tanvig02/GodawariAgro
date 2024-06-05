import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import hero1 from "../../public/images/main3.jpg";
import hero2 from "../../public/images/main2.jpg";
import hero3 from "../../public/images/vision.jpg";
import center from "../../public/images/center2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Navbar";

function Home() {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);

  return (
    <>
      <div className="relative w-full">
        <div className="w-full h-[calc(100vh-80px)] md:h-screen absolute left-0 top-0 z-40 bg-green-700/40 flex justify-center items-center">
          <div
            className=" w-[300px] lg:w-[900px] font-serif text-white z-50 space-y-4 font-extrabold "
            data-aos="fade-right"
          >
            <h1 className="text-5xl text-center">
              The screte of a successfull farmer
            </h1>
            <p className="text-xl text-center hidden lg:block">
              We are focused on being a leader in the conception and
              implementation of agricultural projects, with a focus on the
              establishment of agricultural farms, farm management and
              operation, sales and marketing of agricultural products.
            </p>
          </div>
        </div>

        <div className="m-0">
          <Carousel fade className="" id="root">
            <Carousel.Item>
              <img
                className="d-block w-full md:h-screen h-[calc(100vh-80px)] "
                src={hero1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full sm:h-screen h-[calc(100vh-80px)]"
                src={hero2}
                alt="second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full sm:h-screen h-[calc(100vh-80px)] "
                src={hero3}
                alt="third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* // <>
    //   <div className="h-[700px] relative bg-[url('../../public/images/hero5.jpg')]">
    //     <div className="h-[700px] w-screen bg-black opacity-50 absolute z-0"></div>
    //     <Navbar className=" absolute z-10"/>
    //     <div className=" absolute z-10 h-[700px] flex justify-center items-center mx-20" data-aos="fade-right">
    //       <h1 className="font-extrabold font-mono w-[700px] text-7xl text-white">The Screte of a Successfull Farmer</h1>
    //     </div>
    //   </div>
    // </> */}
    </>
  );
}

export default Home;
