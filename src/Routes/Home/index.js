import React, { useContext } from "react";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArtical from "./LetestArtical";
import LatestStories from "./LetestStories";
import "./home.style.css";
import store from "../../Store/StoreCompo";
import TopPost from "./TopPost";
import Header from "../../Component/Header";
import BigTopPost from "./BigTopPost";
import { Link } from "react-router-dom";
import Add from "../../Advertisement/Add";

const Home = () => {
  const data = useContext(store);
  const latestData = data.StoreData.filter(
    (item) => item.subtype === "latest-artical-large"
  );
  // const ImageUrl = latestData.map((item) => item.img);

  return (
    <>
  
      <Header />
      <Banner />
      <h2>The Latest</h2>
      <div className="latest-container">
        <Latest />
      </div>
      <h2>Latest Articles</h2>
      <div className="artical-container">
        <div className="artical">
          <LatestArtical />
          <div className="arrow">
            <span id="right-arrow">&darr;</span>
            <p>Load More </p>
          </div>
          {latestData.map((item, index) => {
            return (
              <div className="artical-full-img" key={index}>
                <Link to='/dynamic' state={{data: item.id}} > <img src={item.img} alt="img not found" /></Link>
                
              </div>
            );
          })}
        </div>
        <div className="side-item">
          <div className="Advertistement">
           <Add/>
          </div>
          <div className="top-post">
            <h2>Top Post</h2>
            <div>
              <BigTopPost />
            </div>
            <TopPost />
          </div>
        </div>
      </div>
      <h2>Latest Stories</h2>
      <hr />
      <div className="stories">
        <LatestStories />
      </div>
      {/* <hr /> */}
      {/* <div className="arrow">
        <p>View More </p>
        <span id="right-arrow">&rarr;</span>
      </div> */}
    </>
  );
};
export default Home;
