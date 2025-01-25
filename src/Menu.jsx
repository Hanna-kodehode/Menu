import React from "react";
import MenuCard from "./Dish";

const Menu = ({ dishes }) => {
  return (
    <>
      {dishes.map((dish) => (
        <MenuCard key={dish.id} data={dish} />
      ))}
    </>
  );
};

export default Menu;
