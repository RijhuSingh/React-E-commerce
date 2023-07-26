import React from 'react'
import './footer.css'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";


const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <div className="footer-logo">
                        {/* <img src="" alt="" /> */}
                        <h1>shop</h1>
                    </div>
                    <div className="footer-detail">
                        <p>We are the team of Developers and designers who creates high quality projects</p>
                        <div className="footer-icon">
                            <li> <BsFacebook /> </li>
                            <li><BsTwitter /></li>
                            <li><BsYoutube /></li>
                            <li><BsPinterest /></li>
                        </div>
                    </div>
                </div>
                <div className="footer-account">
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>

                <div className="footer-page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Footer