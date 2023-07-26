import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { loginWithRedirect , isAuthenticated } = useAuth0();

    const [user,setUser]=useState(
        {
            Name:'' , Email:'', Subject:'',Message:''
        }
    )

    let name,value;
    const data=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user , [name]:value})
    }

    const sendData= async(e)=>{
        const {Name,Email,Subject,Message}=user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://e-commerce-75fb4-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res)
        if(res)
        {
            alert("Your Message sent")
        }
        else
        {
            alert("An error occured")
        }

    }
  return (
    <>
        <div className="contact-container">
            <div className="contact-box">
                <h2># Contact Us</h2>
                <div className="form">
                    <form method='POST'>
                        <input type="text" name='Name' value={user.Name} placeholder='Enter your Name' required  autoComplete='off' onChange={data}/>
                        <input type="email" name='Email' value={user.Email} placeholder='Enter your E-mail' required  autoComplete='off' onChange={data}/>
                        <input type="text" name='Subject' value={user.Subject} placeholder='Enter your subject' required  autoComplete='off' onChange={data}/>
                        <textarea name="Message" value={user.Message} id="tarea" placeholder='Type your Message' required autoComplete='off' onChange={data}></textarea>
                        {
                            isAuthenticated ? 
                        <button type='submit' className='contactBtn' onClick={sendData}> Send</button> :
                        <button type='submit' className='contactBtn' onClick={()=>loginWithRedirect()}>Login to Send</button>
                        

                        }
                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Contact