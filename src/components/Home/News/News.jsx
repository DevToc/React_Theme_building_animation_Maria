import React from "react";
import { Container } from "react-bootstrap";
import { BiCheckboxSquare } from "react-icons/bi";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import "./News.scss";
import NewsItem from "./NewsItem";

const images = ["static/assets/img/news/1.jpg","static/assets/img/news/2.jpg","static/assets/img/news/3.jpg","static/assets/img/news/4.jpg","static/assets/img/news/5.jpg",]

const News = () => {
  return (
    <div className="news">
      <Container>
        <div className="news-title text-center">
          <h2>
            <span className="dot">
              <BiCheckboxSquare className="square"></BiCheckboxSquare> Novine
              News
            </span>
          </h2>
        </div>
        <OwlCarousel className="owl-theme" loop  nav items={3} margin={50} >
        {images.map((image) => {
          // return <ImageOverlay imageurl={image}></ImageOverlay>
          return (
            <div><NewsItem imageUrl={image}></NewsItem></div>
            
          )
        })}
      </OwlCarousel>
      </Container>
    </div>
  );
};

export default News;
