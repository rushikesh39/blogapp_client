import React from "react";
import "./dynamic.style.css";
import person from "./person.png";
import { Link } from "react-router-dom";

function RandomComponent(props) {
  const arr = props.data;
  const randomObject=[];
  const useIndexes=new Set();

  while(randomObject.length<3){
    
    const randomIndex=Math.floor(Math.random()*arr.length)
    if(!useIndexes.has(randomIndex)){
      useIndexes.add(randomIndex);
      randomObject.push(arr[randomIndex]);
      console.log("random object",randomObject)
    }
  }



  
  console.log(arr);

  const random = arr[Math.floor(Math.random() * arr.length)];
  console.log(random);
  return (
    <>
    {randomObject.map((item ,index)=>(
      <div className="random-component" key={index}>
      <p>Related Reads</p>
      <Link to="/dynamic" state={{ data: random.id }}>
        <img src={item.img} alt="Refresh" className="img" />
      </Link>
      <h2>{item.title}</h2>
      <div className="person">
        <img src={person} alt="img not found" className="person-img" />
        <div>
          <p>Rushi Thange</p>
          <p>Aug 10. 4min read</p>
        </div>
      </div>
    </div>
    ))}
    </>
    
  );
}

export default RandomComponent;
