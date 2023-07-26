import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './cart.css'


const Cart = ({cart,setCart}) => {
    const incqty=(product)=>{
        const exist=cart.find((x)=>{
            return x.id===product.id;
        })
        setCart(cart.map((curElem)=>{
            return curElem.id===product.id ? {...exist , qty:exist.qty+1} : curElem;
        }))

    }

    const decqty=(product)=>{
        const exist=cart.find((x)=>{
            return x.id===product.id;
        })
        setCart(cart.map((curElem)=>{
            return curElem.id===product.id ? {...exist , qty:exist.qty-1} : curElem;
        }))
    }
    //remove product
    const removeProduct=(product)=>{
        const exist=cart.find((x)=>{
            return x.id===product.id;
        })
        if(exist.qty>0){
            setCart(cart.filter((x)=>{
                return x.id !== product.id;
            }))
        }
    }
    //TotalPrice
    const totalPrice=cart.reduce((price,item)=>price + (item.qty * item.Price),0)
  return (
    <>
        <div className="cart-container1">
            {
                cart.length===0 && 
                <div className="emptyCart">
                    <h2 className="empty">Cart is empty</h2>
                    <Link to='/product' className='emptyBtn' >Shop Now</Link>
                </div>
            }
            <div className="cart-container2">
                {
                    cart.map((curElem)=>{
                        return(
                            <div className="cart-item" key={curElem.id}>
                                <div className="cart-img">
                                    <img src={curElem.Img} alt={curElem.Title} />
                                </div>
                                <div className="cart-detail">
                                    <div className="info">
                                    <h4>{curElem.Cat}</h4>
                                    <h3>{curElem.Title}</h3>
                                    <p>{curElem.Price}</p>
                                    <div className="qty">
                                        <button className='incqty' onClick={()=>incqty(curElem)} >+</button>
                                        <input type="text" value={curElem.qty} />
                                        <button className="decqty" onClick={()=>decqty(curElem)} >-</button>
                                    </div>
                                    <h4 className='subtotal' >Sub Total: RS {curElem.Price * curElem.qty}</h4>
                                    </div>
                                    <div className="close">
                                    <button onClick={()=>removeProduct(curElem)} className='delBtn'> <AiFillCloseCircle /> </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                cart.length > 0 &&
                <>  
                    <h2 className="totalPrice"> Total : RS {totalPrice}</h2>
                    <button className='checkout'>Checkout</button>
                </>
            }
        </div>
    
    </>
  )
}

export default Cart