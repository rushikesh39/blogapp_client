import React, { useContext } from "react";
import Date from "../../Date/Date";
import store from "../../Store/StoreCompo";
import { Link } from "react-router-dom";

const LatestStories = () => {
  const data = useContext(store);
  const latestData = data.StoreData.filter(
    (item) => item.subtype === "latest-stories"
  );
  // const title = latestData.map((item) => item.title);
  // const discription = latestData.map((item) => item.discription);
  return (
    <>
      {latestData.map((item, index) => {
        return (
          <div className="stories-item" key={index}>
            <Link to='/dynamic' state={{data: item.id}} ><h3>{item.title}</h3></Link>
            <p> {item.discription}</p>
            <p className="date">
              <Date />
            </p>
          </div>
        );
      })}
    </>
  );
};
export default LatestStories;
