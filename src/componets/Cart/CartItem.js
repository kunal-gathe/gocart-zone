import React from 'react'
import { MdDelete } from "react-icons/md";
import { useCartContext } from '../../context/cartContex';


function CartItem({ id, title, image, price }) {
    const { removeCartitem } = useCartContext();
    return (
        <>
            <div className='cart-item-container' key={title}>
                <img src={image} alt={id} className='cart-item-img' />
                <h2 className='cart-item-title'>{title.slice(0, 20)}</h2>
                <h2 className='cart-item-price'>${price}</h2>
                <p className='cart-item-delete'><MdDelete onClick={() => removeCartitem(title)} /></p>
            </div>
        </>
    )
}

export default CartItem
