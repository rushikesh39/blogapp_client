import React from "react";
import Logo from "../Logo";
import TopNavigation from "../TopNavigation";
import MobileNav from "../MobileNav/MobileNav";


import './header.style.css'
// import {Route, Routes } from 'react-router-dom';
// import Home from "../../Routes/Home";
const header=()=>{
    return(
        <>
        
        <div className="big-nav">
        <Logo/>
        <TopNavigation/>
        </div>
        <div className="small-nav">
            <MobileNav/>
        </div>
       
        </>
    )
}
export default header;
