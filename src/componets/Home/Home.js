import React from 'react'
import { NavLink } from 'react-router-dom'
import Home_img from '../../asset/home img.avif'
import '../Home/Home.css'
import FeatureProduct from '../FeatureProduct/FeatureProduct'

function Home() {
  return (
    <>
      <div className='home-container'>
          <div className='web-info'>
            <p className='wellcome-text'>WELLCOME TO</p>
            <h1 className='logo-heading'>Gocart</h1>
            <p className='description'>Welcome to our online store, where you'll find a wide selection of products for all your needs. Shop conveniently and securely from the comfort of your home!"</p>
            <NavLink to="/products">
              <button className='shop-btn'>Shop Now</button>
            </NavLink>
          </div>
          <div className='home-image'>
            <img src={Home_img} alt="Shoping-img" className='shoping-img' />
            <div className='box-1'></div>
          </div>
      </div>
      <FeatureProduct />
    </>
  )
}

export default Home
