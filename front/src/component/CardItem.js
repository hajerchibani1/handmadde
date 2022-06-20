import React from "react";
import Navigation from "./Navigation";

const CardItem = () => {
  return (
    <div>
      <Navigation claass={"gray"} />
      <div className="carditem">
        <img
          src="https://i.pinimg.com/236x/2b/c0/b2/2bc0b2c8fff03222fdef08fd8730bdec.jpg"
          alt=""
        ></img>
        <div className="description">
          <h1>nom:braclet d'or</h1>
          <p>Materiaux: en or</p>
          <h3>prix:150DT</h3>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
