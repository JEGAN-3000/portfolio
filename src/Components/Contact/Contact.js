import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="h-full flex flex-col bg-white px-5 py-44">
        <div className="flex flex-col items-center text-black">
          <h1 className="text-2xl p-2 border-b-4 mb-5 w-[140px] border-teal-500 text-center uppercase shadow-2xl rounded-full shadow-violet-500">
            Contact
          </h1>
          <p className="md:text-4xl p-7 pb-5 contactFont">
            If you want discuss more,please contact me..
          </p>
          <p className="py-2">
            <span className="font-bold">Email:</span>dbjegan@gmail.com
          </p>
          <p className="py-2">
            <span className="font-bold">Phone:</span>+91 6384112910
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
