import React from "react";
import "./OfferItem.scss"
const OfferItem = ({ title, list }) => {
  return (
    <div className="offer-item">
      <div className="offer-content">
        <h5 className="title text-center">{title}</h5>
        <div className="list">
          {list.map((item,index)=>{
            return (
              <li>
              <a href="">{item}</a>
            </li>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
