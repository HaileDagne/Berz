import React from "react";
import Banner from "../../Component/Banner/Banner.jsx";
import MenuList from "../../Component/MenuList/MenuList.jsx";
import "./BannerHome.css";

export default function Home() {
  return (
    <div className="home-page">
      <Banner type="home" />
      <div id="menu" className="menu-section">
        <MenuList />
      </div>
    </div>
  );
}
