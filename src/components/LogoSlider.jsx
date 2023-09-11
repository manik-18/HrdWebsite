import React from "react";
import Slider from "react-infinite-logo-slider";

const LogoSlider = () => {
  const imageLinks = [
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2022/05/aws-1.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/06/capgemini.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/05/VMware.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/05/SAP-Next-Gen.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/05/Cisco.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/05/Schneider.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/06/ibm-power.png",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/06/automation-anywherw.png",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/06/capgemini.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2022/03/oracle-2.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/06/capgemini.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2021/12/altair.png",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/06/capgemini.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2020/06/hp2.jpg",
    "https://newhorizoncollegeofengineering.in/wp-content/uploads/2022/11/fanuc.jpg",
  ];

  return (
    <div>
      <section className="bg-white">
        <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Industries
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at
              expedita ipsum facilis ipsam recusandae.
            </p>
        </div>
          <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={"#fff"}
          >
            {imageLinks.map((imageUrl, index) => (
              <Slider.Slide key={index}>
                <img src={imageUrl} alt={`Slide ${index}`} className="w-36" />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default LogoSlider;
