import React from "react";
import Campus from "../assets/campus.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Banner = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showArrows={false}>
          <img
            className="object-cover h-full"
            src={Campus}
            alt="dashboard image"
          />
          <img
            className="object-cover h-full"
            src={Campus}
            alt="dashboard image"
          />
          <img
            className="object-cover h-full"
            src={Campus}
            alt="dashboard image"
          />
          <img
            className="object-cover h-full"
            src={Campus}
            alt="dashboard image"
          />
          </Carousel>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, rem.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              itaque eaque ipsum, porro ad earum quos facere voluptas doloremque
              vitae minus? Tempore itaque facilis minima exercitationem aliquid
              labore ut. Minima voluptas doloremque vitae minus? Tempore itaque
              facilis minima exercitationem aliquid labore ut. Minima.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Know more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
