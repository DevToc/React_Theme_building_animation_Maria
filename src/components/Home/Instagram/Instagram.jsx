import React from "react";
import ImageOverlay from "./ImageOverlay";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
const images = [
  "static/assets/img/instgram/1.jpg",
  "static/assets/img/instgram/2.jpg",
  "static/assets/img/instgram/3.jpg",
];

const Instagram = () => {
  return (
    <div>
      <OwlCarousel className="owl-theme" loop  nav items={9}>
        {images.map((image) => {
          return <ImageOverlay imageurl={image}></ImageOverlay>
          // return (
          //   <div><img className="image" src={image} alt="" /></div>
          // )
        })}
      </OwlCarousel>
    </div>
  );
};

export default Instagram;
