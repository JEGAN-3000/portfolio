import React from "react";
import image1 from "../../Assets/photo2.jpeg";
import { Element } from "react-scroll";
import zoo from "../../Assets/zoo.png";
import bmi from "../../Assets/bmi.jpg";
import currency from "../../Assets/currency.jpg";
import library from "../../Assets/library.jpg";
import password from "../../Assets/password.jpg";
import weather from "../../Assets/weather.jpg";

const Projects = () => {
  return (
    <Element
      name="projects"
      className="flex h-full w-full flex-col py-36 px-5 justify-center bg-slate-500 text-black"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5 ">
          <h1 className="text-4xl p-2 border-b-4 mb-5 w-full border-blue-500 text-center uppercase shadow-2xl rounded-full shadow-violet-500">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col md:flex-row px-10 gap-10 justify-around flex-wrap   ">
          <div className="relative ">
            <img
              className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-lg"
              src={password}
              alt="img"
            />
            <div className="project_Details flex justify-start items-center flex-col rounded-lg" >
              <p className="text-center text-2xl w-full  bg-black p-3 ">
                {" "}
                PASSWORD GENERATOR
              </p>
              <p className="text-center text-2xl my-auto py-5 px-5">
                A simple web application that generates a
                strong and unique password based on user input.
              </p>
              <a
                className="text-center w-full  bg-slate-700 p-3 hover:bg-slate-950 "
                href="https://react-js-randompassword-generator.netlify.app"
                target="_blank"
              >
                {" "}
                View
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
              src={currency}
              alt="img"
            />
            <div className="project_Details flex justify-start items-center flex-col">
            <p className="text-center text-2xl w-full  bg-black p-3 ">
                {" "}
                CURRENCY CONVERTOR
              </p>
              <p className="text-center py-5 px-5 text-2xl my-auto">
                A simple web application that allows users
                to convert money between different currencies using the Exchange
                Rate API.
              </p>
              <a
                href="https://reactjs-currency-convertor.netlify.app"
                target="_blank"
                className="text-center w-full  bg-slate-700 p-3 hover:bg-slate-950 "
              >
                {" "}
                View
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
              src={bmi}
              alt="img"
            />
            <div className="project_Details flex justify-start items-center flex-col">
            <p className="text-center text-2xl w-full  bg-black p-3 ">
                {" "}
                BMI CALCULATOR
              </p>
              <p className="text-center py-5 px-5 text-2xl my-auto">
                A simple web application that calculates the
                Body Mass Index(BMI) of a user based on their height and weight.
              </p>
              <a
                href="https://react-js-bmi-calculator.netlify.app"
                target="_blank"
                className="text-center w-full  bg-slate-700 p-3 hover:bg-slate-950 "
              >
                {" "}
                View
              </a>
            </div>
          </div>

          <div className="relative ">
            <img
              className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
              src={weather}
              alt="img"
            />
            <div className="project_Details flex justify-start items-center flex-col">
            <p className="text-center text-2xl w-full  bg-black p-3 ">
                {" "}
                WEATHER APP
              </p>
              <p className="text-center py-5 px-5 text-2xl my-auto">
                A weather forecasting app built with ReactJS, and
                OpenWeatherMap API. It displays current weather conditions,
                temperature, humidity, wind speed, UV index, and five day
                forecast for any location entered by the user.
              </p>
              <a
                href="https://react-city-weather-app.netlify.app"
                target="_blank"
                className="text-center w-full  bg-slate-700 p-3 hover:bg-slate-950 "
              >
                {" "}
                View{" "}
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
              src={library}
              alt="img"
            />
            <div className="project_Details flex justify-start items-center flex-col">
            <p className="text-center text-2xl w-full  bg-black p-3 ">
                {" "}
                DIGITAL LIBRARY - CRUD
              </p>
              <p className="text-center py-5 px-5 text-2xl my-auto">
                A library management system where you can add,
                delete or update books in the library.
              </p>
              <a
                href="https://madurai-library.netlify.app"
                target="_blank"
                className="text-center w-full  bg-slate-700 p-3 hover:bg-slate-950 "
              >
                {" "}
                View{" "}
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
              src={zoo}
              alt="img"
            />
            <div className="project_Details flex justify-start items-center flex-col">
            <p className="text-center text-2xl w-full  bg-black p-3 ">
                {" "}
                MADURAI ZOOTOPIA
              </p>
              <p className="text-center py-5 px-5 text-2xl my-auto">
                An interactive zoo website where users can view animal
                profiles for a visit.User will learn more about animal
                classification.
              </p>
              <a
                href="https://madurai-zootopia.netlify.app"
                className="text-center w-full  bg-slate-700 p-3 hover:bg-slate-950 "
                target="_blank"
              >
                {" "}
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
