import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import { BsPercent } from "react-icons/bs";
import { BsHeadphones } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Homeproduct from "./HomeProduct";
// import { HiReceiptPercent} from 'react-icons/hi';

const Home = ({detail,view ,close ,setClose , addToCart}) => {
  const [homeProduct, setHomeProduct] = useState(Homeproduct);
  return (
    <>
    {
      close ?  <div className="product-detail2">
      <div className="container2">
        <button onClick={()=>setClose(false)} className="closeBtn" > <AiFillCloseCircle /> </button>
        {
          detail.map((curElem)=>{
            return(
              <div className="product-box2">
                  <div className="img-box2">
                    <img src={curElem.Img} alt={curElem.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElem.Cat}</h4>
                    <h2>{curElem.Title}</h2>
                    <p>A screen everyone will love:whether your family is streaming or video chattinng with friends....</p>
                    <h3>{curElem.Price}</h3>
                    <button>Add to cart</button>

                  </div>
              </div>
            )
          })
        }
       
      </div>
  </div> : null
    }
      <div className="home-banner">
        <div className="home-container">
          <div className="home-detail">
            <h2>The best Notebook Collection 2023.</h2>
            <Link to="/product" className="home-product">
              Shop Now <BsFillArrowRightCircleFill />{" "}
            </Link>
          </div>
          <div className="img-box">
            <img src="./img/slider-img.png" alt="slider" className="slider" />
          </div>
        </div>
      </div>
      <div className="product-type">
        <div className="pro-container">
          <div className="pro-box">
            <div className="pro-img">
              <img src="./img/Mobile phone.png" alt="mobile" />
            </div>
            <div className="pro-detail">
              <p>23 Products</p>
            </div>
          </div>
          <div className="pro-box">
            <div className="pro-img">
              <img src="./img/smart watch.png" alt="mobile" />
            </div>
            <div className="pro-detail">
              <p>52 Products</p>
            </div>
          </div>
          <div className="pro-box">
            <div className="pro-img">
              <img src="./img/headphone.png" alt="mobile" />
            </div>
            <div className="pro-detail">
              <p>63 Products</p>
            </div>
          </div>
          <div className="pro-box">
            <div className="pro-img">
              <img src="./img/cpu heat.jpg" alt="mobile" />
            </div>
            <div className="pro-detail">
              <p>18 Products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-container">
          <div className="about-box">
            <div className="about-icon">
              <BsTruck />
            </div>
            <div className="about-detail">
              <h3>Free Shipping</h3>
              <p>Order Above RS 799</p>
            </div>
          </div>
          <div className="about-box">
            <div className="about-icon">
              <BsCurrencyRupee />
            </div>
            <div className="about-detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className="about-box">
            <div className="about-icon">
              <BsPercent />
            </div>
            <div className="about-detail">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className="about-box">
            <div className="about-icon">
              <BsHeadphones />
            </div>
            <div className="about-detail">
              <h3>Customer Support</h3>
              <p>24 / 7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>Top Products</h2>
        <div className="product-container">
          {homeProduct.map((curElem) => {
            return (
              <>
                <div className="product-box" key={curElem.id}>
                  <div className="product-img">
                    <img src={curElem.Img} alt={curElem.Title} />
                    <div className="product-icon">
                      <li onClick={()=>addToCart(curElem)} >
                        <BsCartPlusFill />
                      </li>
                      <li onClick={()=>view(curElem)}>
                        {" "}
                        <BsEye />
                      </li>
                      <li>
                        <BsHeart />
                      </li>
                    </div>
                  </div>

                  <div className="product-detail">
                    <p>{curElem.Cat}</p>
                    <h3>{curElem.Title}</h3>
                    <h4>RS {curElem.Price}</h4>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="banner">
        <div className="banner-container">
          <div className="banner-detail">
            <h4>Latest Technology Added</h4>
            <h3>Apple ipad 11.2 10th Gen-2023</h3>
            <p>RS 69999</p>
            <Link to='/product' className="banner-link" >Shop Now <BsFillArrowRightCircleFill /> </Link>
          </div>

          <div className="banner-img">
            <img src="./img/slider-img.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
