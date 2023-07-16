import React from 'react'
import { useProductContext } from '../../context/productContext'
import { NavLink } from 'react-router-dom';
import '../FeatureProduct/Featured.css'

function FeatureProduct() {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        return <div>.....Loading</div>
    }

    return (
        <>
            <div>
                <h3 className='featured-title'>Featured Product</h3>
                <section className='flex'>
                    {featureProducts.map(item => {
                        return (
                            <div key={item.id} className='featured-card-container'>
                                <NavLink to={`/singleproduct/:${item.id}`} >
                                    <img src={item.image} alt={item.name} className='product-img-1' />
                                        <p className='card-title-1'>{item.title.slice(0, 19)}</p>
                                        <p className='card-price-1'>${item.price}</p>
                                </NavLink>
                            </div>)
                    })}
                </section>
            </div>

        </>
    )


}

export default FeatureProduct
