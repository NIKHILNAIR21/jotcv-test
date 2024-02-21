import React from "react";
import images from "../../../images";
import Reviewcard from "../../../NewComponent/ReviewCard/Reviewcard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Review = () => {
  return (
    <div>
      <div className="w-full flex justify-center gap-10 p-4">
        <Reviewcard
          review="jotcv.com turned my career dreams into reality! Crafting my resume and a stunning web portfolio was a breeze. The personalized touch and attention to detail showcased my unique strengths. I landed my dream job within weeks. Thank you for making my professional journey unforgettable!"
          user="Harshit saaho"
        />

        <Reviewcard
          review="jotcv.com turned my career dreams into reality! Crafting my resume and a stunning web portfolio was a breeze. The personalized touch and attention to detail showcased my unique strengths. I landed my dream job within weeks. Thank you for making my professional journey unforgettable!"
          user="Firoz  Khan"
        />

        <Reviewcard
          review="As a recent graduate, jotcv.com gave me the confidence to step into the professional world. The beautifully designed resume and portfolio highlighted my academic achievements and extracurriculars. The video profile added a personal touch that helped me secure my first job!"
          user="Joel Abraham"
        />
      </div>
    </div>
  );
};

export default Review;
