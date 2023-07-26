import React from "react";
import "./product.css";
import Productdetail from "./ProductDetails";
import { BsCartPlusFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

const Product = ({product , setProduct , detail,view ,close ,setClose,addToCart}) => {

  const { loginWithRedirect , isAuthenticated } = useAuth0();


  const filterProduct=(product)=>{
    const update=Productdetail.filter((x)=>{
      return x.Cat===product;
    })
    setProduct(update);
  }

  const allProducts=()=>{
    setProduct(Productdetail);
  }


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
   
      <div className="products1">
        <h2># Products</h2>
        <p>'Home . Products</p>
        <div className="p-container1">
          <div className="p-filter1">
            <div className="p-categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={()=>allProducts()} >All Products</li>
                <li onClick={()=>filterProduct('Tablet')}  >Tablets</li>
                <li onClick={()=>filterProduct('Smart Watch')}>Smart Watch</li>
                <li onClick={()=>filterProduct('Headphone')}>Headphone</li>
                <li onClick={()=>filterProduct('Camera')}>Camera</li>
                <li onClick={()=>filterProduct('Gaming')}>Gaming</li>
                <li onClick={()=>filterProduct('Electronics')}>Electronics</li>
              </ul>
            </div>
          </div>

          <div className="product-box1">
            <div className="box-container1">
                {
                    product.map((curElem)=>{
                        return(
                            <>
                                <div className="box1" key={curElem.id}>
                                    <div className="img-box1">
                                        <img src={curElem.Img} alt={curElem.Title} />
                                        <div className="icon1">
                                          {
                                            isAuthenticated ? 
                                            <li onClick={()=>addToCart(curElem)} ><BsCartPlusFill /></li> :
                                            <li onClick={()=> loginWithRedirect()} ><BsCartPlusFill /></li>
                                          }
                                            
                                            <li onClick={()=>view(curElem)} ><BsEye /> </li>
                                            <li> <BsHeart /> </li>
                                        </div>
                                    </div>
                                    <div className="detail1">
                                        <p>{curElem.Cat}</p>
                                        <h3> {curElem.Title} </h3>
                                        <h4>RS {curElem.Price} </h4>
                                    </div>
                                </div>
                            
                            </>
                        )
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
