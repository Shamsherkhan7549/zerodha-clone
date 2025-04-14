import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Login from '../components/Login'


const Home = () => {
    const [username, setUsername] = useState();
    const [token, setToken] = useState();

  const genUser = () => {

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(savedUser){
      setUsername(savedUser.username);
      setToken(savedUser.token);
    } 
    return null
  }

 useEffect(()=>{
  genUser()
 },[])

  
  return (
    <>

      {token ?
        <> 
          <TopBar  username = {username}/>
          <Dashboard/> 
        </> :
        <Login/>
      }
    </>

     
   
  );
};

export default Home;
