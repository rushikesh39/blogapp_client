import React,{useState} from "react";
import Logo from "../Logo";
import {NavLink} from "react-router-dom";
import "./MobileNav.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

function MobileNav() {
  const[displayNav,SetdisplayNav]=useState(false);
  const display=()=>{
    SetdisplayNav(!displayNav);
  }

  return (
    <>
      <div className="mobile-container">
          <Logo />
          <div className="icon" onClick={display}> <FontAwesomeIcon icon={faAlignJustify} /></div>
      </div>
      {displayNav && <div className="shownav">
      <NavLink to='/'>Home</NavLink>
      <hr/>
      <NavLink to='/bollywood'>Bollywood</NavLink>
      <hr/>
      <NavLink to='/technology'>Technology</NavLink>
      <hr/>
      <NavLink to='/technology'>Hollywood</NavLink>
      <hr/>
      <NavLink to='/fitness'>Fitness</NavLink>
      <hr/>
      <NavLink to='/food'>Food</NavLink>

      </div>
      }
    </>
  );
}

export default MobileNav;
