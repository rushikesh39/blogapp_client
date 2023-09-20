import React from 'react';
import LatestArticalShort from './LatestArticalShort';
// import { useContext } from 'react';
// import store from '../../Store/StoreCompo';
// import Date from '../../Date/Date';

function TopPost() {
  //   const data = useContext(store);
  // const latestData = data.StoreData.filter(
  //   (item) => item.for === "top-post"
  // );
  // const ImageUrl = latestData.map((item) => item.img);
  // const title = latestData.map((item) => item.title);
  return (
    <div className='post'>
      {/* <img src={ImageUrl} alt='img not found'/>
      <h3>{title}</h3> */}
      {/* <Date/> */}
      <LatestArticalShort/>
    </div>
  )
}

export default TopPost
