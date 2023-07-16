import React from 'react'
import { useCartContext } from '../../context/cartContex'
import '../Cart/Cart.css'
import CartItem from '../Cart/CartItem'
import { NavLink } from 'react-router-dom';


function Cart() {
  const { cart, clearcart,shipping_fee,total_item} = useCartContext();

  return (
    <>
      <div className='cart-container' key={Math.random()}>
        <p className='cart-img'>Image</p>
        <p className='cart-title'>Title</p>
        <p className='cart-price'>Price</p>
        <p className='cart-price'>Remove</p>
        <hr /><hr /><hr /><hr />
      </div>

      <div className='cart-item' key={Math.random()}>
        {cart.map((Element) => {
          return <CartItem key={Math.random()} {...Element} />
        })}
      </div>
      <hr />

      <div className='cart-btns' key={Math.random()}>
        <NavLink to='/products' >
          <button className='Continue-Shopping'>Contineu Shopping</button>
        </NavLink>
        <button className='Clear-cart' onClick={() => clearcart()}>Clear Cart</button>
      </div>

      <div className='payment-box'>
        <div>
          <div className='subtotal'>SubTotal:</div>
          <div className='shipping-fee'>Shipping Fee:</div>
          <hr/>
          <div className='order-total'>Order-total:</div>
        </div>
        <div>
          <div className='subtotal'>${total_item}</div>
          <div className='shipping-fee'>${cart.length === 0 ? 0.00 : shipping_fee}</div>
          <hr/>
          <div className='order-total'>${Math.floor(total_item + shipping_fee).toFixed(2)}</div>
        </div>
      </div>

    </>
  )
}

export default Cart
