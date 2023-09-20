import React, { useContext } from "react";
import store from "../Store/StoreCompo";

function Date() {
  const data = useContext(store);
  const dateData = data.StoreData.filter((item) => item.for === "date");
  const date = dateData.map((item) => item.datedata);
  return( 
  <>
    {date}
  </>
  )
  
}

export default Date;
