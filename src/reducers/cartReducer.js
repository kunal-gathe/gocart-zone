

function cartReducer(state, action) {
    
  if(action.type === "ADD_TO_CART"){
    let {id,title,image,price, setSingleProduct} = action.payload; //setSingleProduct
    let cartproduct;

    cartproduct ={
        id,
        title,
        image,
        price,
        setSingleProduct
    }
    return {
        
        ...state,
        cart: [...state.cart, cartproduct]
    }
  }

  if(action.type === "REMOVE_ITEM"){
    let updateCart = state.cart.filter(
        (Element)=>{return Element.title !== action.payload}
    );
    return {
        ...state,
        cart: updateCart
        }
  }
  if(action.type === "CLEAR_CART"){
    
    return {
        ...state,
        cart: []
        }
  }


  if(action.type === "CART_TOTAL_PRICE"){

    let total_price = state.cart.reduce((initialVal, Element)=>{
        let {price} = Element;

        
        initialVal = initialVal + price;
        return initialVal;
    },0)
    return {
      ...state,
      total_item: total_price,
    }
  }

  return state;
}

export default cartReducer
