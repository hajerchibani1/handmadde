import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ claass }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={"navigation " + claass}>
      <div className="nav_left">
        <Link to="/" className="link">
          KOORELOO
        </Link>
      </div>

      <div className="nav_middle">
        <div className="middle-item">
          <Link to="/all_bags">All Bags</Link>
          <div className="under-nav">
            <Link to="/">Crochet</Link>

            <Link to="/">Cuir</Link>

            <Link to="/">Straw</Link>

            <Link to="/">other tissue</Link>
          </div>
        </div>
        <div className="middle-item">
          <Link to="/accessory">Accessory</Link>
          <div className="under-nav">
            <Link to="/">Colliers</Link>

            <Link to="/">Bracelets</Link>

            <Link to="/">Bagues</Link>

            <Link to="/">Boucles d'oreilles</Link>
          </div>
        </div>
        <Link to="/best_seller">
          <p>Best Seller</p>
        </Link>
        <Link to="/about_us">
          <p>About Us</p>
        </Link>
      </div>
      <div className="nav_rigth">
        <Link to="/souhaite">
          <ion-icon name="heart-outline"></ion-icon>
        </Link>

        <button onClick={() => setShow(!show)}>
          {" "}
          <ion-icon name="search"></ion-icon>
          {show ? (
            <div className="person">
              <button onClick={() => setShow(!show)}>
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
              <input>hello</input>
            </div>
          ) : null}
        </button>

        <Link to="/">
          <ion-icon name="bag-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
