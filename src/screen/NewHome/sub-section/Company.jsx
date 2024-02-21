import React from "react";
import images from "../../../images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max:3000, min: 1024 },
    items: 6,
  
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,

  }

};
const Company = () => {
  return (
    <div>
      <div className="main flex flex-col items-center w-[80%] md:w-[75%] lg:w-[90%] mx-auto  ">
        <div className=" flex flex-col items-center p-10 ">
          {/* <div className="img">
            <img src={images.shop} alt="" />
          </div> */}
          <div className="w-full">
            <h1 className="sm:text-2xl md:text-3xl lg:text-[40px] font-poppins  text-center font-semibold">
            Trusted by Top Companies Across Industries!
            </h1>
          </div>
          
<Carousel responsive={responsive} arrows={false} centerMode={true} customTransition="transform 1000ms ease-in-out" infinite={true} autoPlay={true} autoPlaySpeed={900} className="lg:w-[1200px] md:w-[800px] sm:w-[800px] w-[500px] mt-12 mx-auto" >
<div>
              <img
                className="w-[80px] drop-shadow-xl h-[85px] md:w-[85px] m-1.5 tesla"
                src={images.company1}
                alt=""
              />
            </div>
            <div>
              <img
                className=" w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company2}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company3}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company4}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company5}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company6}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company7}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-[86px] md:w-[85px] m-1.5 "
                src={images.company8}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company9}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3"
                src={images.company10}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company11}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company12}
                alt=""
              />
            </div>
           
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company13}
                alt=""
              />
            </div>
          
         
         
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company14}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company15}
                alt=""
              />
            </div>
          
      
            <div>
              <img
                className="w-[80px] drop-shadow-xl h-20 md:w-[85px] m-3 "
                src={images.company16}
                alt=""
              />
            </div> 
</Carousel>
         
         
           
          
          
        </div>
      </div>
    </div>
  );
};

export default Company;
