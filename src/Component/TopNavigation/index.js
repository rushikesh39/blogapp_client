import React from "react";
import './topNavigation.style.css'
import { NavLink } from "react-router-dom";
const TopNavigation = () => {
  return (
    <>
    <div className="nav">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/bollywood'>Bollywood</NavLink>
      <NavLink to='/technology'>Technology</NavLink>
      <NavLink to='/hollywood'>Hollywood</NavLink>
      <NavLink to='/fitness'>Fitness</NavLink>
      <NavLink to='/food'>Food</NavLink>
    </div>
    <div className="hr">
      <hr/>
    </div>
    </>
  );
};
export default TopNavigation;
