import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const BestSeller = () => {
  return (
    <div className="bestSeller">
      <Navigation claass={"gray"} />
      <div className="bestSeller_box">
        <Link to="/card_item">
          <img
            src="https://i.pinimg.com/236x/38/6a/e0/386ae083d1a03ff3c3db6ac76b65d8f6.jpg"
            alt="accessory"
          ></img>
        </Link>
        <Link to="/card_item">
          <img
            src="https://i.etsystatic.com/27635202/r/il/d790d5/3729122543/il_794xN.3729122543_4r77.jpg"
            alt="bags"
          ></img>
        </Link>
        <Link to="/card_item">
          <img
            src="https://i.pinimg.com/236x/2b/c0/b2/2bc0b2c8fff03222fdef08fd8730bdec.jpg"
            alt="braclet"
          ></img>
        </Link>
        <Link to="/card_item">
          <img
            src="https://i.pinimg.com/236x/31/a2/0b/31a20bc1b1386cf75961d647d5166f6e.jpg"
            alt="braclet"
          ></img>
        </Link>
        <Link to="/card_item">
          <img
            src="https://i.pinimg.com/236x/45/47/d5/4547d5853950e2f3058a9d5250d648bb.jpg"
            alt=""
          ></img>
        </Link>
        <Link to="/card_item">
          <img
            src="https://i.pinimg.com/236x/8a/d4/45/8ad445797bca4f0383382de3796219c1.jpg"
            alt=""
          ></img>
        </Link>
        <Link to="/card_item">
          <img
            src="https://i.pinimg.com/236x/4c/54/48/4c5448cccd5720335e7ebc3ffff8fbb7.jpg"
            alt=""
          ></img>
        </Link>
        <Link to="/card_item">
          <img
            src="https://i.pinimg.com/236x/ad/e8/d0/ade8d0ef4dad20136e804ee4b71ddcc8.jpg"
            alt=""
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
