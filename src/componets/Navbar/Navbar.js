import React from 'react'
import ColorMode from '../ColorMode'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { useFilterContex } from '../../context/filterContex';
import { useCartContext } from '../../context/cartContex';
// import {MdOutlineClose} from 'react-icons/md'
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { text, getsearchvalue } = useFilterContex();
  const { cart } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className='header'>

      <NavLink to="/">
        <div className='logo-container'>
          <FiShoppingBag className='logo-icon' />
          <h1 className='logo'>Gocart</h1>
        </div>
      </NavLink>

      <div className='nav-link'>
        <ul className='nav-items nav-menu'>
          <li className="item home hide" >
            <NavLink to='/'>
              Home
            </NavLink>
          </li>
          <li className="item hide">
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </li>
          <li className="item hide">
            <NavLink to='/products'>
              Products
            </NavLink>
          </li>


          <li className="item nav-cart">
            <NavLink to='/cart'>
              <FiShoppingCart className='cart-icon' />
              <span className='cart-count'>{cart.length}</span>
            </NavLink>
          </li>

        </ul>
        <div className='nav-user-log-btn'>
            {isAuthenticated && <p>{user.name}</p>}
          </div>

          <div className='item'>
            {
              isAuthenticated ? <button className="nav-log-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> : <button className="item nav-log-btn" onClick={() => loginWithRedirect()}>Log In</button>
            }
          </div>
      </div>

      <div className='serach-container'>
        <NavLink to='/products'>
          <form onSubmit={(e) => e.preventDefault()} >
            <input autoComplete="off" className='search-box' type='text' name="text" defaultValue={text} onChange={getsearchvalue} placeholder='Search' />
          </form>
        </NavLink>
        <div className='dark-mode'>
          <ColorMode />
        </div>
      </div>

    </div>
  )
}


export default Navbar
