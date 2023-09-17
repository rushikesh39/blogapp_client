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
import { lazy, Suspense } from "react";
import { Circles } from 'react-loader-spinner';

const Home=lazy(()=>import("./Routes/Home"))
function App() {
  // const [data, setData] = useState(Data);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://blogapp-backend-1pur.onrender.com/data");
      setData(response.data); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
  return (
    <div className="App">
      <Suspense fallback={<div className="loader"><Circles height="100" width="100"  color="green" ariaLabel="loading"/></div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
