import React from "react";
import { useContext } from "react";
import Date from "../../Date/Date";
import store from "../../Store/StoreCompo";
import { Link } from "react-router-dom";

const TopPost=()=>{
    const data = useContext(store);
  const Data = data.StoreData.filter(
    (item) => item.for === "fitness"
  );
    return(
    <>
   
     {Data.map((item ,index) => (
          <div key={index} className='Container'>
            <div className='line'></div>
            <div className='post-item1'>
            <Link to='/dynamic' state={{data: item.id}}><img src={item.img} alt='img not found'/></Link>
            </div>
            <div className='post-item2'>
              <h3>{item.title}</h3>
              {/* <p>{item.discription}discription</p> */}
              <br/>
              <p><Date/></p>
            </div>
          
          </div>
        ))}
    </>
       
    )
}
export default TopPost;