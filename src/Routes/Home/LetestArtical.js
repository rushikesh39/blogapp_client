import React from "react";
import Date from "../../Date/Date";
import store from "../../Store/StoreCompo";
import { useContext } from "react";
import "./home.style.css";
import { Link } from "react-router-dom";

const LatestArtical = () => {
  const data = useContext(store);
  const latestData = data.StoreData.filter(
    (item) => item.subtype === "latest-artical"
  );
  // const ImageUrl = latestData.map((item) => item.img);
  // const title = latestData.map((item) => item.title);
  // const discription = latestData.map((item) => item.discription);
  return (
    <>
      {latestData.map((item, index) => {
        return (
          <div key={index}>
          <hr/>
          <div className="article-item" >
           
            <div className="article-img">
              <Link to='/dynamic'  state={{data: item.id}}><img src={item.img} alt="img not found" /></Link>
             
            </div>
            <div className="article-content">
              <h3>{item.title}</h3>
              <p>{item.discription}</p>
              <p className="date">
                <Date />
              </p>
            </div>
          </div>
          </div>
        );
      })}
    </>
  );
};
export default LatestArtical;
