import React, { useContext } from 'react'
import store from '../../Store/StoreCompo';
import "./home.style.css";
import { Link } from 'react-router-dom';

function BigTopPost() {
    const data=useContext(store)
    const TopPost = data.StoreData.filter(
        (item) => item.subtype === "top-post"
      );
      // const TopPostImg=TopPost.map((item, index)=>item.img)
  return (
    <div className="big-top-post">
      {
        TopPost.map((item, index)=>{
          return(
            
             <Link to='/dynamic' state={{data: item.id}} key={index}><img src={item.img} alt='img not found'/></Link>
            
            
          )
        })
      }
     
      
    </div>
  )
}

export default BigTopPost
