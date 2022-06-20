import React from "react";
import Navigation from "./Navigation";

const Souhaite = () => {
  return (
    <div>
      <Navigation claass={"gray"} />
      <h1 style={{ marginTop: "50px", marginLeft: "100px" }}>
        {" "}
        Liste de souhaits
      </h1>
      <div className="souhaite_list">
        <div className="souhaite_card">
          <img
            src="https://i.etsystatic.com/9841613/r/il/6ccf70/3953683416/il_794xN.3953683416_96fq.jpg"
            alt="sac cuir"
          />
          <span>Sac à main Boho gravé</span>
          <span>60$</span>
          <button>Ajouter au panier</button>
        </div>
        <div className="souhaite_card">
          <img
            src="https://i.etsystatic.com/29928370/r/il/e73aba/3694973023/il_794xN.3694973023_scbd.jpg"
            alt="sac en laine"
          />
          <span>Sac en laine </span>
          <span>55$</span>
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default Souhaite;
