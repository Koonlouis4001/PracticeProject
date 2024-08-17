import React, { useEffect, useState } from "react";
import ApiConnection from "../ApiConnection";
import LoginWindow from "../components/Login/LoginWindow";
import RegisterWindow from "../components/Login/RegisterWindow";

const LoginPage = () => {

  const apiConnection = new ApiConnection();

  const [registerMenu,setRegisterMenu] = useState(false);

  const [modelUser,setModelUser] = useState({
    userName: '',
    password: ''
  });

  return (
    <div className="login-page">
      {registerMenu && (<RegisterWindow setRegisterMenu = {setRegisterMenu} modelUser={modelUser}/>)}
      {!registerMenu && (<LoginWindow setRegisterMenu = {setRegisterMenu} modelUser={modelUser}/>)}
    </div>
  );
};

export default LoginPage;