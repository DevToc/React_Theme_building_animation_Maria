import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./ImageOverlay.scss"

const ImageOverlay = ({ imageurl }) => {
  return (
    <div className="imageoverlay">
      <img src={imageurl} alt="" className="image" />
      <div class="overlay">
        <div className="instgram"><FaInstagram></FaInstagram> </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
