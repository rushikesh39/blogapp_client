import React from 'react';
import store from '../../Store/StoreCompo';
import { useContext } from 'react';
import Date from '../../Date/Date';
import { Link } from 'react-router-dom';

function Techno() {
    const data = useContext(store);
  const Data = data.StoreData.filter(
    (item) => item.for === "technology"
  );
  return (
    <>
      {Data.map((item ,index) => (
          <div key={index} className='Container'>
            <div className='line'></div>
            <div className='img-item'>
            <Link to='/dynamic' state={{data: item.id}}><img src={item.img} alt='img not found'/></Link>
            </div>
            <div className='discription'>
              <h3>{item.title}</h3>
              <p>{item.discription}</p>
              <br/>
              <p><Date/></p>
            </div>
          
          </div>
        ))}
    </>
  )
}

export default Techno
