import React from "react";
import Hero from "../../Component/Hero/Hero.jsx";
import MenuList from "../../Component/MenuList/MenuList.jsx";
import CafeMenuList from "../../Component/CafeMenuList/CafeMenuList.jsx";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div id="menu" className="menu-section">
        <MenuList />
        <CafeMenuList />
      </div>
    </div>
  );
}
