import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const AllBags = () => {
  return (
    <div>
      <Navigation claass={"optional"} />
      <div className="card_list">
        <div className="card">
          <div className="card-h">
            <p>Nouveautés</p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <Link to="/card_item">
            <img
              className="im"
              src="https://www.tokyobanhbao.com/wp-content/uploads/2017/07/bali_bags_baskets_straw_ubud_market_blog_mode.jpg"
              alt=""
            />
          </Link>
          <div class="card-f">
            <p>120 $</p>
          </div>
        </div>
        <div className="card">
          <div className="card-h">
            <p>Nouveautés</p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <Link to="/card_item">
            <img
              className="im"
              src="https://i.pinimg.com/236x/e5/e0/83/e5e0836fd8c95ad5c434613b228e8009.jpg"
              alt=""
            />
          </Link>
          <div class="card-f">
            <p>120 $</p>
          </div>
        </div>
        <div className="card">
          <div className="card-h">
            <p>Nouveautés</p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <Link to="/card_item">
            <img
              className="im"
              src="https://i.pinimg.com/236x/bd/21/12/bd2112a5f66461b2f03e7d21c1069291.jpg"
              alt=""
            />
          </Link>
          <div class="card-f">
            <p>120 $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBags;
