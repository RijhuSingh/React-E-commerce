import React, { useState } from "react";
import "./nav.css";
import { FaTruck, FaRupeeSign } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import {AiOutlineHeart } from "react-icons/ai";
import {BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Nav = ({searchBtn}) => {
    const [search , setSearch]=useState();
    const { loginWithRedirect , logout , user, isAuthenticated } = useAuth0();

  return (
  <>
      <div className="free">
      <p>
        {" "}
        <div className="icon1">
          <FaTruck />
        </div>{" "}
        Free Shipping when shopping above{" "}
        <div className="icon2">
          <FaRupeeSign />
          
        </div>{" "}
        799
      </p>
    </div>
  
    <div className="header">
        <div className="container">
            <div className="logo">
                {/* <img src="./img/logo.png" alt="logo" /> */}
                <h1>Shop</h1>
            </div>

            <div className="search-box">
                <input type="text" value={search} placeholder="Just Name It..." autoComplete="off" onChange={(e)=>{
                    e.preventDefault();
                    setSearch(e.target.value)
                }} />
                <button onClick={()=>searchBtn(search)} >Search</button>
            </div>

            <div className="nav-icon">
                {
                    isAuthenticated && (
                        <div className="account">
                        <div className="user-icon">
                        < BiSolidUser />
    
                        </div>
                        <p>Hello, {user.name}</p>
                    </div>

                    )
                }
               
                <div className="right-icon">
                    <Link to='/'  className="link">< AiOutlineHeart /></Link>
                    <Link to='/cart'  className="link">< BsBagCheck /></Link>
                </div>
            </div>

        </div>
    </div>

    <div className="navbar">
        <div className="box">
           <div className="nav-content">
            <ul>
                    <li>
                        <Link to='/' className="nav-links" >Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className="nav-links" >Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className="nav-links" >About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="nav-links" >Contact</Link>
                    </li>
                </ul>
           </div>
            <div className="auth">
                {
                    isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <BiLogOut/></button> : <button onClick={()=>loginWithRedirect()} ><BiLogIn/></button>
                 
                }
                
            </div>
        </div>
    </div>
  
  </>


  );
};

export default Nav;
