import React from "react";
import Menu from "../Menu/Menu.jsx";
import { menuItems } from "../../data/menuData.js";

export default function MenuList() {
  return (
    <div className="foods-container">
      {menuItems.map((item) => (
        <Menu
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </div>
  );
}
