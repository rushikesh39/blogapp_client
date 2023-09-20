import "./home.style.css";
import React from "react";
import { useContext } from "react";
import store from "../../Store/StoreCompo";
import Date from "../../Date/Date";
import { Link } from "react-router-dom";

const Banner = () => {
  const data = useContext(store);
  const bannerData = data.StoreData.filter(
    (item) => item.subtype === "home-banner"
  );
  // const bannerImageUrl = bannerData.map((item) => item.img);
  // const title = bannerData.map((item) => item.title);
  // console.log("title", title);

  const filteredSubBanner = data.StoreData.filter(
    (item) => item.subtype === "home-sub-banner"
  );
  // const subBannerImageUrl = filteredSubBanner.map((item) => item.img);
  // const subBannerTitle=filteredSubBanner.map((item)=>item.title)
  return (
    <div className="banner">
      {bannerData.map((item, index) => {
        return (
          <div className="banneritem1" key={index}>
            <Link to='/dynamic' state={{data: item.id}}>
              <img src={item.img} alt="img not found" />
            </Link>
            <div className="banner-title">
              {/* <h1>{title}</h1> */}
              {/* <p>{<Date />}</p> */}
            </div>
          </div>
        );
      })}

      <div className="banneritem2">
        {filteredSubBanner.map((item, index) => {
          return (
            <div className="item1" key={index}>
              <Link to='/dynamic' state={{data: item.id}} ><img src={item.img} alt="img not fond " /></Link>
              <div className="sub-banner-title1">
                <p>{<Date />}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Banner;
