import "./App.css";
import React, { useState } from "react";
// import Header from "./Component/Header";
// import Data from "./Store/Data";
import store from "./Store/StoreCompo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Routes/Home";
import Bollywood from "./Routes/Bollywood";
import Techology from "./Routes/Technology";
import Hollywood from "./Routes/Hollywood";
import Fitness from "./Routes/Fitness";
import Food from "./Routes/Food";
import DynamicPage from "./Component/DynamicPage/DynamicPage";
import axios from "axios";
import { useEffect } from "react";
import Home from "./Routes/Home"
import { Circles } from 'react-loader-spinner';

function App() {
  const [isloading ,setIsloading]=useState(false)
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsloading(true)
    try {
      const response = await axios.get("https://blogapp-backend-1pur.onrender.com/data");
      setData(response.data); // Update state with the fetched data
      setIsloading(false)
     
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsloading(false)
      
    }
  };

  return (
    <div className="App">
      {isloading&&<div className="loader"><Circles height="100" width="100"  color="gray" ariaLabel="loading"/></div>}
      {data && (
        <BrowserRouter>
          <store.Provider value={{ StoreData: data, StoreDataF: setData }}>
            {/* <Header /> */}
          </store.Provider>
          <Routes>
         
            <Route
              path="/"
              element={
                <store.Provider
                  value={{ StoreData: data, StoreDataF: setData }}
                >
                  
                  <Home />
                 
                  
                </store.Provider>
              }
            />
            
            
            <Route
              path="/bollywood"
              element={
                <store.Provider
                  value={{ StoreData: data, StoreDataF: setData }}
                >
                  <Bollywood />
                </store.Provider>
              }
            />
            <Route
              path="/technology"
              element={
                <store.Provider
                  value={{ StoreData: data, StoreDataF: setData }}
                >
                  <Techology />
                </store.Provider>
              }
            />
            <Route
              path="/hollywood"
              element={
                <store.Provider
                  value={{ StoreData: data, StoreDataF: setData }}
                >
                  <Hollywood />
                </store.Provider>
              }
            />
            <Route
              path="/fitness"
              element={
                <store.Provider
                  value={{ StoreData: data, StoreDataF: setData }}
                >
                  <Fitness />
                </store.Provider>
              }
            />
            <Route
              path="/dynamic"
              element={
                <store.Provider
                  value={{ StoreData: data, StoreDataF: setData }}
                >
                  <DynamicPage />
                </store.Provider>
              }
            />

            <Route
              path="/food"
              element={
                <store.Provider
                  value={{ StoreData: data, StoreDataF: setData }}
                >
                  <Food />
                </store.Provider>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
      {/* </Suspense> */}
    </div>
  );
}

export default App;