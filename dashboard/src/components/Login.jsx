import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Login = () => {

    const[register, setRegister] = useState("login");

    const[userInfo, setUserInfo] = useState({});

    const handlingRegister = () => {
      register == "login" ? setRegister("signup") : setRegister("login")
    }

    const handlingChange = (e) => {
      setUserInfo((prevInfo)=>( {...prevInfo, [e.target.name]:e.target.value}))
    }

    const handlingSubmit = async(e) =>{
      e.preventDefault();
      
      const url = import.meta.env.VITE_BACKEND_URL;
     if(register === "signup"){
       try {

          let response = await axios.post(url + '/user/signup',userInfo);
          if(response.data.success){
            setUserInfo(prevInfo=>({...prevInfo, username:"",email:"",phone:"",password:""}));

            const user = {
              username:response.data.user.username,
              token:response.data.user.verificationToken
            }
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();

          }else{
            console.log(response.data.message)
          }

       } catch (error) {
        console.log(error.message);
       }
     }else{

      try {

          const{username,password} = userInfo;
          let response = await axios.post(url + '/user/login',{username, password},{withCredentials:true});
          if(response.data.success){
            const user = {
              username:response.data.user.username,
              token:response.data.user.verificationToken
            }
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();
          }else{
            console.log(response.data.message)
          }
        }catch (error) {
        console.log(error.message);
      }}}

    
  return (

    <div className="form-box">
    <form onSubmit={handlingSubmit} className='user-info'>
    <div className="input-box">
    <h2>{register == "login" ? "Login": "Sign Up"}</h2>
      <label htmlFor="username">Username</label> <br />
      <input onChange={handlingChange} name='username' type="text" id="username" placeholder='Enter Username' required />
    </div>

    {register === "signup" ? 
      <>
        <div className="input-box">
          <label htmlFor="email">Email</label> <br />
          <input onChange={handlingChange} name='email' type="email" id="email" placeholder='Enter Email' required />
        </div>

        <div className="input-box">
          <label htmlFor="phone">Phone</label> <br />
          <input onChange={handlingChange} name='phone' type="number" id="phone" placeholder='Enter Phone' required />
        </div> 
      </> 
   
   
    : null
  
  }

    <div className="input-box">
      <label htmlFor="password">Password</label> <br />
      <input onChange={handlingChange} name='password' type="password" id="password" placeholder='Enter Password' required />
    </div>

    <div className="chooseOutIn">
    <a href="/">Forgote Password</a>
    <p onClick={handlingRegister}>{register == "login" ? "Signup": "Login"}</p>
    </div>

    <button type='submit'>{register == "login" ? "Login": "SignUp"}</button>
    
    </form>
    </div>
  )
}

export default Login