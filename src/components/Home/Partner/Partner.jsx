import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { Container } from "react-bootstrap";
import "./Partner.scss"
const images = [
  "static/assets/img/partner/1.png",
  "static/assets/img/partner/2.png",
  "static/assets/img/partner/3.png",
  "static/assets/img/partner/4.png",
  "static/assets/img/partner/5.png",
  "static/assets/img/partner/6.png",
];

const Partner = () => {
  return (
    <div className="partner">
     <Container>
     <OwlCarousel className="owl-theme" loop  nav items={6} margin={20}>
        {images.map((image) => {
          // return <ImageOverlay imageurl={image}></ImageOverlay>
          return (
            <div><img className="image" src={image} alt="" /></div>
            
          )
        })}
      </OwlCarousel>
     </Container>
    </div>
  );
};

export default Partner;
