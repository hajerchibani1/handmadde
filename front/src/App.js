import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AllBags from "./component/AllBags";
import Accessory from "./component/Accessory";
import BestSeller from "./component/BestSeller";
import AboutUs from "./component/AboutUs";
import CardItem from "./component/CardItem";
import Souhaite from "./component/Souhaite";
import Recherche from "./component/Recherche";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/best_seller" element={<BestSeller />} />
        <Route path="/card_item" element={<CardItem />} />
        <Route path="/souhaite" element={<Souhaite />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/" element={<Home />} />
        <Route path="/all_bags" element={<AllBags />} />
        <Route path="/accessory" element={<Accessory />} />

        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
