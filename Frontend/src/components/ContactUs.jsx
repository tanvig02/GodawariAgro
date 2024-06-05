import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

const ContactUs = () => {
  return (
    <>
      <div className=" px-10 md:px-20 md:py-28 h-fit" id="contactus">
        <h1 className=" text-4xl font-semibold text-green-500 text-start">
          Contact Information
        </h1>
        <div className="lg:flex justify-center items-center">
          <div className="m-4">
            <h1 className="text-3xl font-semibold mb-8">Send us a Mail</h1>
            <div className="space-y-6">
              <input
                type="text"
                className=" p-2 border-none outline-none bg-green-100 w-full"
                placeholder="Name"
                name=""
                id=""
              />{" "}
              <br />
              <input
                type="text"
                className=" p-2 border-none outline-none bg-green-100"
                placeholder="Email"
              />{" "}
              <input
                type="text"
                placeholder="Phone Number"
                className="p-2 border-none outline-none bg-green-100"
              />{" "}
              <br />
              <textarea
                className="p-2 border-none outline-none bg-green-100 w-full"
                placeholder="Query"
                name=""
                id=""
              ></textarea>{" "}
              <br />
              <button className="w-full p-2 text-center bg-green-600 text-white">
                Send
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <div className="lg:flex m-4">
                <IoCall className="bg-green-500 text-white w-14 h-14 p-2 border rounded-full " />
                <div className="lg:mx-4 space-y-4">
                  <h3 className="text-lg font-bold hidden lg:block">Customer Care</h3>
                  <p className="font-semibold text-gray-600">+91 7722010192</p>
                </div>
              </div>
              <div className="lg:flex m-4">
                <IoMail className="bg-yellow-500 text-white w-14 h-14 p-2 border rounded-full" />
                <div className="lg:mx-4 space-y-4">
                  <h3 className="text-lg font-bold hidden lg:block">Official Email</h3>
                  <p className="font-semibold text-gray-600">
                    godawariagroscience@gmail.com
                  </p>
                </div>
              </div>
              <div className="lg:flex m-4">
                <FaLocationDot className="bg-green-800 text-white w-14 h-14 p-2 border rounded-full" />
                <div className="lg:mx-4 space-y-4">
                  <h3 className="text-lg font-bold hidden lg:block">Our Location</h3>
                  <p className="font-semibold text-gray-600">
                    Plot No. 112/113, Kopergaon Industrial Estate Area Ltd.{" "}
                    <br />
                    Tal: Kopergaon, Dist: Ahemadnagar, Maharashtra -423601
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ContactUs;
