const filterReducer = (state, action) => {

    if (action.type === 'FILTER_PRODUCT') {
        return {
            ...state,
            filter_product: [...action.payload],
            all_product: [...action.payload]
        }
    }
    if(action.type === "SELECT_VALUE"){
        // const f_value = document.getElementById("filter-box");
        // const getValue = f_value.options[f_value.selectedIndex].value;
        return{
            ...state,
            filter_value: action.payload,
        }
    }
    if(action.type === "SORTING-PRODDUCT"){
        let newSortingData;
        let tempSortproduct = [...action.payload]

        if(state.filter_value === "Low Price"){
            const sortingProduct =(a,b)=>{
                return a.price - b.price;
            }
            newSortingData = tempSortproduct.sort(sortingProduct)
        }
        if(state.filter_value === "High Price"){
            const sortingProduct =(a,b)=>{
                return b.price - a.price;
            }
            newSortingData = tempSortproduct.sort(sortingProduct)
        }
        if(state.filter_value === "Popular"){
            const sortingProduct =(a,b)=>{
                return b.rating.rate - a.rating.rate;
            }
            newSortingData = tempSortproduct.sort(sortingProduct)
        }
        if(state.filter_value === "filter"){
            newSortingData = tempSortproduct
        }

        return {
            ...state,
            filter_product: newSortingData
        }
    }

    if(action.type === "UPDATE_SEARCH_VALUE"){
        const{name, value} = action.payload;
        return{
            ...state,
            filters:{
                ...state.filters,
                [name] : value,
            }
            
        }
    }

    if(action.type ==="SEARCH_PRODUCT"){
        let {all_product} =state;
        let tempFilterProduct = [...all_product]

        const {text, category} = state.filters;

        if(text){
            tempFilterProduct = tempFilterProduct.filter((Element)=>{
                return Element.title.toLowerCase().includes(text)
            })
        }
        if(category){
            tempFilterProduct = tempFilterProduct.filter((Element)=>{
                return Element.category === category
            })
        }

        return {
            ...state,
            filter_product: tempFilterProduct
        }
    }

    return state
}

export default filterReducer;