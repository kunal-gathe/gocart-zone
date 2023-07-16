const productReducer = (state, action) => {

    if (action.type === "Loading") {
        return {
            ...state,
            isLoading: true,
        }
    }
    if (action.type === "API_DATA") {
        const featureProductsList = action.payload.filter((element) => {
            return element.rating.rate > 4.6;
        })
        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureProductsList,
        }
    }
    if (action.type === "Error") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        }
    }
    if (action.type === "SingleProduct_Loading") {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === "SET_SINGLEPROFDUCT") {
        return {
            ...state,
            isError: false,
            isLoading: false,
            setSingleProduct: action.payload
        }
    }
    if (action.type === "SET_ERROR") {
        return {
            ...state,
            isError: true
        }
    }
  

    return state;
}

export default productReducer;