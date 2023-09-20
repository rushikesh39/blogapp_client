
import TopPost from "./TopPost";
import Films from "./Films";
import "./bollywood.style.css";
import React from "react";
import Header from "../../Component/Header";
import BigTopPost from "./BigTopPost";
import Add from "../../Advertisement/Add";

const Bollywood = () => {
  return (
    <>
    <Header/>
      <div className="bollywoodContainer">
        <div className="bollywooditem1">
          <h2>Bollywood</h2>
          <Films/>
          <div className="arrow">
            <span id="right-arrow">&darr;</span>
            <p>Load More </p>
          </div>
        </div>
        <div className="bollywooditem2">
          <h2>Top Post</h2>
          <div>
            <BigTopPost/>
          </div>
          <div className="bollyitem">
            <TopPost />
          </div>
          <div className="Advertistement">
            <Add/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bollywood;
