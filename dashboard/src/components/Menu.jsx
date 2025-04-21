import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Login } from "@mui/icons-material";
const Menu = ({username}) => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
 

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handlingMenubar  = () => {
    setOpenMenu(true);
  };

  const handlingCrossbar = () => {
    setOpenMenu(false);
  }

  const handleProfileHover = () => {
    const logout = document.getElementsByClassName("user-login")[0];
    logout.style.display = "block";
  }
  const handlingCross = () => {
    const logout = document.getElementsByClassName("user-login")[0];
    logout.style.display = "none";
  }

  const handlingLogout = async() => {
   try {
    const url = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(url + '/user/logout');
    console.log(response)
    if(response.data.success){
      console.log(response.data.message);
      localStorage.removeItem("user")
      window.location.reload();
    }else{
      console.log(response.data.message)
    }

    
   } catch (error) {
      console.log(error.message)
   }
    
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      
      <img src="../src/assets/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <p onClick={handlingMenubar}><i className="fa-solid fa-bars"></i></p>
        <ul style={openMenu ? {right:"8px"}:{right:"-18rem"} }>
          <p onClick={handlingCrossbar}> <i className="fa-solid fa-xmark"></i></p>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/" }
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>

        </ul>
        <hr />
        <div onMouseOver={handleProfileHover} className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username.slice(0,1).toUpperCase()}</div>
          <p className="username">{username}</p>

          <div className="user-login">
          <i onClick={handlingCross} className="fa-solid fa-circle-xmark"></i>
           <p className="logout" onClick={handlingLogout}>Logout</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
