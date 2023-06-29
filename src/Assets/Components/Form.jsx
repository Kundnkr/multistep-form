import React, { useState } from 'react'
import { FaAddressCard, FaEnvelopeOpen, FaLock} from "react-icons/fa";


export default function Form({ start }) {
  let [content, setContent] = useState({
    fname: "",
    lname:"",
    email: "",
    password: "",
    cpassword:""
  });
  let Formelements = () => {
    if (start === 1) {
      return (
        <div className='items'>
          <h1 className='title-name'>Enter Name <FaAddressCard className='icon' size={"18px"}/></h1>
          <div className="input-box">
            <input required type="text" value={content.fname} onChange={changeHnadler} name='fname' />
            <label htmlFor="name">FirstName</label>
          </div>
          <div className="input-box">
            <input required type="text" value={content.lname} onChange={changeHnadler} name='lname' />
            <label htmlFor="name">Last Name</label>
          </div>
        </div>
      )
    }
    else if (start === 2) {
      return (
        <div className='items'>
          <h1 className='title-name'>Enter Email <FaEnvelopeOpen className='icon' size={"18px"}/></h1>
          <div className="input-box">
            <input required type="eamil" value={content.email} onChange={changeHnadler} name='email' />
            <label htmlFor="">Email</label>
          </div>
        </div>
      )
    }
    else if (start === 3) {
      return (
        <div className='items'>
          <h1 className='title-name'>Enter Password <FaLock className='icon' size={"18px"}/></h1>
          <div className="input-box">
            <input required value={content.password} onChange={changeHnadler} name='password' type='password'/>
            <label htmlFor="">Password</label>
          </div>
          <div className="input-box">
            <input required value={content.cpassword} onChange={changeHnadler} name='cpassword' type='password'/>
            <label htmlFor="">Confirm Password</label>
          </div>
        </div>
      )
    }
  }
  let changeHnadler = (e) => {
    let value = e.target.value;
    setContent({ ...content, [e.target.name]: value });
    console.log(content);

  };
  return (
    <>
      {Formelements()}
    </>
  )
}
