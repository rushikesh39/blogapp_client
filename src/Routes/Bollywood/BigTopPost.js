import React, { useContext } from 'react'
import store from '../../Store/StoreCompo';
import { Link } from 'react-router-dom';


function BigTopPost() {
    const data=useContext(store)
    const TopPost = data.StoreData.filter(
        (item) => item.subtype === "bollywood-top-post"
      );
      
  return (
    <div className="big-top-post">
     {
      TopPost.map((item, index)=>{
        return(
          <div key={index}>
           <Link to='/dynamic' state={{data: item.id}}><img src={item.img} alt='img not found'/></Link>
          </div>
        )
      })
     }
    </div>
  )
}

export default BigTopPost
