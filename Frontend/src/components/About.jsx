import React, { useEffect } from "react";
// import about2 from "../../public/images/center.png";
import about1 from "../../public/images/hero2.jpg";
import mission from "../../public/images/mission.jpg";
import vision from "../../public/images/vision.jpg";
import value from "../../public/images/mission.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, []);
  return (
    <>
      <div className="h-fit mx-10 md:mx-20 pt-20" id="about">
        <h4 className="text-4xl font-extrabold text-green-500 font-mono my-4">
          ABOUT US
        </h4>
        <div className="h-fit md:flex justify-center ">
          <div className="md:w-[50%] md:h-fit">
            <div data-aos="fade-right">
              <h1 className=" text-xl md:text-4xl font-semibold italic">
                Connect power, knowledge and resources for a better future
              </h1>
              <p className="md:m-4">
                In 2014, Godawari Agro Sciences was founded with the purpose of
                educating farmers and making them more independent by providing
                them with a wide range of agricultural products , training and
                support.
              </p>
              <p className="md:m-4 hidden md:block">
                {" "}
                Our company is an ISO 2015 Certified company and operates in
                Kopargaon Taluka, Ahmednagar district, Maharastra, along with
                production unit. As of now, we are present in Maharashtra,
                Karnataka, MP and Punjab, and soon we plan on expanding our
                network across India. Additionally, with at least 1000
                agricultural graduates, we aim to conduct research and achieve
                the goal of 300 crores of sales within the next 10 years in
                conjunction with farmers to improve farming practices.
              </p>
              <p className="md:m-4">
                Shri Dheeraj is a visionary leader who motivates and drives
                Godawari Agro Sciences to success in every mission. He is a
                seasoned manager with more than twenty years experience in
                marketing, manufacturing, and product development among others.
                He is a warm, people-friendly person with advanced
                problem-solving skills.
              </p>
            </div>
          </div>

          <div
            className="h-[300px] md:w-[50%] md:h-fit flex justify-center items-center relative"
            data-aos="zoom-in"
          >
            {/* transform -translate-y-8 absolute transform md:-translate-x-10 -translate-x-6*/}
            <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-green-800 border rounded-3xl z-40 absolute top-10"></div>
            <img
              src={about1}
              className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] border-none rounded-xl outline-none z-50 relative -left-8 top-0"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center space-y-10 bg-gray-100 p-5">
        <div className=" flex-1 flex flex-col justify-center items-center space-y-4 h-[400px]">
          <img
            src={mission}
            alt=""
            className="border rounded-full w-[200px] h-[200px]"
          />
          <h1 className="font-mono font-bold text-2xl">Our Mission</h1>
          <p className="text-center">
            Connect agricultural graduates, scientists from around the world and
            bring the most advanced farming technology to the Indian market to
            improve agricultural practices in India and transfer knowledge to
            one million farmers over the next 10 years
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center space-y-4 h-[400px]">
          <img
            src={vision}
            alt=""
            className="border rounded-full w-[200px] h-[200px]"
          />
          <h1 className="font-mono font-bold text-2xl">Vision</h1>
          <p className="text-center">
            Our mission is to empower both large and small farmers to produce
            more from their land while conserving more of earth's natural
            resources.
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center space-y-4 h-[400px]">
          <img
            src={mission}
            alt=""
            className="border rounded-full w-[200px] h-[200px]"
          />
          <h1 className="font-mono font-bold text-2xl">Core Values</h1>
          <p className="text-center">
            Integrity & Ethics guide our business practices. We pride ourselves
            on the quality of the products we manufacture and the effort we put
            into them. We constantly strive to innovate in the field through our
            R & D department.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
