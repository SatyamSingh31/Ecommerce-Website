import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';


const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="Navbar">
      <div className="wrapper">   
      <div className="left">
      <div className="item">
        <span>USD</span>
        <KeyboardArrowDownIcon/>
      </div>
      <div className="item">
        <Link className="link" to="/products/1">Women</Link>
      </div>
      <div className="item">
        <Link className="link" to="/products/2">Men</Link>
      </div>
      <div className="item">
        <Link className="link"to="/products/3">Children</Link>
      </div>
      </div>
      
      <div className="center">
      <Link className="link"to="/">Pocket-Friendly</Link>
      </div>

      <div className="right">
      <div className="item">
        <Link className="link"  to="/products/3">Homepage</Link>
      </div>
      <div className="item">
        <Link className="link" to="/products/3">About</Link>
      </div>
      <div className="item">
        <Link className="link"  to="/products/3">Contact</Link>
      </div>
      <div className="item">
        <Link className="link"  to="/products/3">Stores</Link>
      </div>
      <div className="icons">
        <SearchIcon/>
        <PersonOutlineIcon/>
        <FavoriteBorderIcon/>
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
          <ShoppingCartIcon/>
          <span>0</span>
        </div>
      </div>
      </div>
    </div>
    {open && <Cart/>}
    </div>
  )
}

export default Navbar