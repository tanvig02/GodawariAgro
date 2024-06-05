import React from "react";
import vision from "../../public/images/vision.jpg";

const Footer = () => {
  return (
    <div className=" h-fit text-white bg-[url('../../public/images/vision.jpg')] ">
      <div className=" h-fit px-10 py-10  bg-green-900/75">
        <div className="lg:flex justify-around space-y-5 ">
          <div className="lg:w-[600px] space-y-5">
            <h1 className="text-2xl font-bold">Godawari Agro Sciences</h1>
            <p>
              In 2014, Godawari Agro Sciences was founded with the purpose of
              educating farmers and making them more independent by providing
              them with a wide range of agricultural products , training and
              support.
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p>Customer Care</p>
            <button className=" border-2 border-white p-2 outline-none rounded-md">
            +91 7722010192
            </button>
            <p>Location</p>
            <button className=" p-2 border-2 border-white outline-none rounded-md">
            Plot No. 112/113, Kopergaon Industrial Estate Area Ltd.
            </button>
          </div>

          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.937198127468!2d74.4727826!3d19.8848736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc455412548505%3A0xe1b55b7b2c335eb5!2sGODAWARI%20AGRO%20SCIENCES!5e0!3m2!1sen!2sin!4v1717516018201!5m2!1sen!2sin"
              width={300}
              height={130}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
