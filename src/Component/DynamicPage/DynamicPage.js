import React, { useContext } from "react";
import Header from "../Header";
import person from "./person.png";
import "./dynamic.style.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import store from "../../Store/StoreCompo";
import RandomComponent from "./RandomComponent";
import share from "./share.svg";
import clap from "./rythm.svg";

function DynamicPage() {
  const location = useLocation();
  const id = location.state.data;
  console.log(id);
  const data = useContext(store);
  console.log(data);
  const Data = data.StoreData.filter((item) => item.id === id);

  const categary = Data[0].for;
  console.log(categary);

  const categaryData = data.StoreData.filter((item) => item.for === categary);
  console.log(categaryData);
  return (
    <div className="dynamic">
      <Header />
      <div className="icon1">
          <div className="icon-item">
            <img src={clap} alt="img not found" />
           <p> 9.4m</p>
          </div>
          <div className="icon-item">
            <img src={share} alt="img not found" />
            <p>share this artical</p>
          </div>
        </div>
      {/* <Nav/> */}
      <div className="dynamic-nav"></div>
      <div className="sub-container">
        
        <h1>5 Ways to animate a React app.</h1>
        <div className="info">
          <div className="person">
            <img src={person} alt="img not found" id="person" />
            <div>
              <p>Rushi Thange</p>
              <p>Aug 5 2032</p>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={32} />
            </a>
          </div>
        </div>
        {Data.map((item, index) => {
          return (
            <div className="dynamic-data" key={index}>
              <h2>{item.title}</h2>
              <img src={item.img} alt="img not found" />
              <h2>Discription</h2>
              <p className="dynamic-discription">{item.discription}</p>
            </div>
          );
        })}
        <div className="btn">
          <button>React</button>
          <button>javaScrip</button>
          <button>Animation</button>

        </div>
        <div>
        <div className="icon-item">
            <img src={clap} alt="img not found" />
           <p> 9.4m clap</p>
          </div>
          <hr/>
          <div className="person">
        <img src={person} alt="img not found" className="person-img" />
        <div>
          <p>Written by</p>
          <p>Rushi Thange</p>
          <p>Aug 10. 4min read</p>
        </div>
       
      </div>
      <hr/>
        </div>
      </div>
      <p className="dynamic-discription"> More from siren</p>
      <hr />
      <div className="random-card">
        <RandomComponent data={categaryData} />
<<<<<<< HEAD
        {/* <RandomComponent data={categaryData} />
        <RandomComponent data={categaryData} /> */}
=======
        <RandomComponent data={categaryData} />
        <RandomComponent data={categaryData} />
>>>>>>> origin/main
      </div>
    </div>
  );
}

export default DynamicPage;
