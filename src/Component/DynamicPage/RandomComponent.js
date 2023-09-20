import React from "react";
import "./dynamic.style.css";
import person from "./person.png";
import { Link } from "react-router-dom";

function RandomComponent(props) {
  const arr = props.data;
<<<<<<< HEAD
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



  
=======
>>>>>>> origin/main
  console.log(arr);

  const random = arr[Math.floor(Math.random() * arr.length)];
  console.log(random);
  return (
<<<<<<< HEAD
    <>
    {randomObject.map((item ,index)=>(
      <div className="random-component" key={index}>
      <p>Related Reads</p>
      <Link to="/dynamic" state={{ data: random.id }}>
        <img src={item.img} alt="Refresh" className="img" />
      </Link>
      <h2>{item.title}</h2>
=======
    <div className="random-component">
      <p>Related Reads</p>
      <Link to="/dynamic" state={{ data: random.id }}>
        <img src={random.img} alt="Refresh" className="img" />
      </Link>
      <h2>{random.title}</h2>
>>>>>>> origin/main
      <div className="person">
        <img src={person} alt="img not found" className="person-img" />
        <div>
          <p>Rushi Thange</p>
          <p>Aug 10. 4min read</p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    ))}
    </>
    
=======
>>>>>>> origin/main
  );
}

export default RandomComponent;
