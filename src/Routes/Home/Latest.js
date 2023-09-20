import React, { useContext } from "react";
import store from "../../Store/StoreCompo";
import Date from "../../Date/Date";
import "./home.style.css";
import { Link } from "react-router-dom";

const Latest = () => {
  const data = useContext(store);
  const latestData = data.StoreData.filter((item) => item.subtype === "latest");
  // const ImageUrl = latestData.map((item) => item.img);
  // const title = latestData.map((item) => item.title);
  // const discription = latestData.map((item) => item.description);
  return (
    <>
      {latestData.map((item, index) => {
        return (
          <div className="latest" key={index}>
            <div className="latestitem">
              <Link to='/dynamic' state={{data: item.id}}><img src={item.img} alt="img not found" /></Link>
              
              <div className="items">
                <h3>{item.title}</h3>
                {/* <p>{item.description}</p> */}

                <div className="date">
                  <Date />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Latest;
