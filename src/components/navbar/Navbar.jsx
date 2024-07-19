import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
// import { a } from 'react-router-dom';
import { ShrefreContext } from '../../context/ShrefreContext';

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu] = useState("home");
    const {gethreftalCartAmount} = useContext(ShrefreContext)

  return (
    <div className='navbar'>
        <a href='/'><img src={assets.logo} className='logo' alt="" /></a>
        <ul className='navbar-menu'>
            <a href='/' onClick={()=>{setMenu("home")}} className={menu=="home"?"active":""}>home</a>
            <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu=="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu=="mobile-app"?"active":""}>mobile app</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu=="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <a href='/cart'><img src={assets.basket_icon} alt="" /></a>
                <div className={gethreftalCartAmount()===0?"":"dot"}></div>
            </div>
            <buthrefn onClick={()=>{setShowLogin(true)}}>Sign in</buthrefn>
        </div>
    </div>
  )
}

export default Navbar