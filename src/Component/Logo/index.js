
import "./logo.style.css";
import React, { useContext } from "react";
// import { store } from '../../Store/StoreCompo';
import { store } from "../../Store/StoreCompo";

const Logo = () => {
  const data = useContext(store);
  // console.log("data", data.StoreData);
  const subheading = data.StoreData[0].headertxt;
  const logo = data.StoreData[0].logo;
  return (
    <div className="logo">
      <div className="subheading">{subheading}</div>
      <div><h1>{logo}</h1></div>
    </div>
  );
};
export default Logo;
