// import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import {BrowserRouter} from 'react-router-dom'
import Rout from './Component/pages/Rout';
import Footer from './Component/Footer';
import Productdetail from './Component/pages/ProductDetails';
import { useState } from 'react';

function App() {
  //cart
  const [cart,setCart]=useState([]);

  //product detail
  const [detail,setDetail]=useState([]);
  const [close,setClose]=useState(false);


  //filter product
  const [product,setProduct]=useState(Productdetail);

  const searchBtn=(product)=>{
    const change=Productdetail.filter((x)=>{
      return x.Cat.toLowerCase()===product.toLowerCase();
    })
    setProduct(change)

  }

  //product detail
  const view=(product)=>{
      setDetail([{...product}])
      setClose(!close)
  }

  //addToCart
  
  const addToCart=(product)=>{
    const exist=cart.find((x)=>{
      return x.id===product.id;
    })
    if(exist){
      alert("This item is already present in your cart")
    }
    else{
      setCart([...cart , {...product , qty:1}])
      alert("product is added to cart")
    }
  }
  return (
  <>
  <BrowserRouter>
    <Nav searchBtn={searchBtn} />
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart}/>
    <Footer />

  </BrowserRouter>
  
  
  </>
  );
}

export default App;
