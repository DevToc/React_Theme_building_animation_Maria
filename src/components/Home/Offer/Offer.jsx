import React from "react";
import { Container } from "react-bootstrap";
import OfferItem from "./OfferItem";
import  './Offer.scss'

const images = [
  "static/assets/img/offer/1.jpg",
  "static/assets/img/offer/2.jpg",
  "static/assets/img/offer/3.jpg",
];
const lists = [
  {
    title: "WOMEN'S",
    list: ["Woman Accessories", "Man Accessories", "SunGlasses", "Belts"],
  },
  {
    title: "ACCESSORIES",
    list: ["Woman Accessories", "Man Accessories", "SunGlasses", "Belts"],
  },
  {
    title: "MEN'S",
    list: ["Woman Accessories", "Man Accessories", "SunGlasses", "Belts"],
  },
];

const Offer = () => {
  return (
    <div className="offer">
      <Container>
        <div className="row d-flex justify-content-between">
          {lists.map((item, index) => {
            return (
              <div className="col-4 position-relative">
                <div className="offer-content d-flex justify-content-center">
                  <img src={images[index]} alt="" />

                  <OfferItem title={item.title} list={item.list}></OfferItem>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Offer;
