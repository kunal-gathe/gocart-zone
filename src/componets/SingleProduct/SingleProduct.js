import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext';
import '../SingleProduct/Singleproduct.css'
import { useCartContext } from '../../context/cartContex';
const Api = "https://fakestoreapi.com/products/"


function SingleProduct() {
  const {setSingleProduct,getSingleProduct,} = useProductContext();
  const {addToCart} = useCartContext()
  const {id} = useParams();

  const {
    id: alis,
    title,
    price,
    description,
    category,
    image,
    
  } = setSingleProduct;

  useEffect(()=>{
    getSingleProduct(`${Api}${id.slice(1)}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <div className='single-product-container'>
      <img className='s-image' src={image}  alt='product'/>
      <div className='s-info'>
          <h1 className='s-title'>{title}</h1>
          {/* <p className='s-rating'>{rating}</p> */}
          <h2 className='s-price'>Best Deal ${price}</h2>
          <p className='s-description'>{description}</p>
          <hr className="new4" />
          <p> Category: {category}</p>
          <p>Available</p>
          <NavLink to='/cart'
          onClick={()=> addToCart(alis,title,image,price,setSingleProduct)}
          >
          <button className='s-btn'>Add To cart</button>
          </NavLink>
      </div>
    </div>
    
  )
}

export default SingleProduct
