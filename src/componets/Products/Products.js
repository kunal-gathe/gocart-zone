import React from 'react'
import { useFilterContex } from '../../context/filterContex'
import '../Products/Product.css'
import { NavLink } from 'react-router-dom';
function Products() {

  const {filter_product,getFiltervalue, all_product,getsearchvalue  } = useFilterContex();

  const getCategory = (data, property)=>{
    let newval = data.map((Element)=>{
      return Element[property];
    });
    return newval = [...new Set(newval)]
  }
  const getcategoryData = getCategory( all_product, "category")
  
  return (
    <>
      <div className='product-container'>
        <div className='category-container'>
      <h2 className='category-title'>Category</h2>
        {
          getcategoryData.map((Element,index)=>{
            return(
              <button className='category-btn'
              key={index}
              type='button'
              name="category"
              value={Element}
              onClick={getsearchvalue}
              >
              {Element}
              </button>
            )
          })
        }
        </div>
        <div className='product-list-container'>

          <div className='filter'>
            <div className='filter-container'>
              <select name="products" id="filter-box" onClick={getFiltervalue}>
                <option value="filter">Filter</option>
                <option value="Low Price">Low Price</option>
                <option value="High Price">High Prace</option>
                <option value="Popular">Popular</option>
              </select>
            </div>
          </div>
          <div>
            <section className='product-flex'>
              {filter_product.map(item => {
                return (
                  <div key={item.id} className='product-card-container'>
                    <NavLink to={`/singleproduct/:${item.id}`} >
                      <p className='product-rating'>{item.rating.rate}</p>
                      <img src={item.image} alt={item.name} className='product-img' />
                        <p className='card-title-1'>{item.title.slice(0, 15)}</p>
                        <p className='card-price-1'>${item.price}</p>
                    </NavLink>
                  </div>)
              })}
            </section>
          </div>

        </div>
      </div>


    </>
  )

}

export default Products

