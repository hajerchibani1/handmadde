import React from "react";
import Navigation from "./Navigation";

import Paragraphe from "./Paragraphe";

const Home = () => {
  return (
    <div className="box">
      <Navigation claass={"First"} />
      <div className="home">
        <Paragraphe />
      </div>
    </div>
  );
};

export default Home;
