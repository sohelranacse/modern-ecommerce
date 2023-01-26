import React, { useEffect, useState } from 'react'
import { UilShoppingBag,UilEye  } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import QuickViewPopup from '../QuickViewPopup/QuickViewPopup'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
// import './SingleProduct.scss'

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch()
    const {addedProducts, totalQty, subTotalPrice, totalPrice}=useSelector(state=>state.products)

    const [quickView, setQuickView] = useState(false)    

    useEffect(() => {
        localStorage.setItem('addedProducts',JSON.stringify(addedProducts))
        localStorage.setItem('totalQty', JSON.stringify(totalQty))
        localStorage.setItem('subTotalPrice', JSON.stringify(subTotalPrice))
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
    }, [addedProducts, totalQty, subTotalPrice, totalPrice])
    
    return (
        <>
        <div className="product">
            <Link to={`/product/${product.id}`} className="product_img">
                <img src={product.image} alt="" />
            </Link>
            <div className="product_info">
                <div className="product_category">
                    {product.category}
                </div>
                <Link to={`/product/${product.id}`} className="product_title">{product.name}</Link>
                <div className="product_price">
                    <div className="deleted_price">${product.deleted_price}</div>
                    <div className="price">${product.price}</div>
                </div>
                {
                    !addedProducts.filter(v => v.id ===  Number(product.id)).length ?
                    (
                        <div className="add_to_cart_button" onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}>
                        <UilShoppingBag/> ADD TO CART
                        </div>
                    ) : (
                        <Button color="primary" className="view_in_cart">
                            <Link to="/cart">VIEW IN CART</Link>
                        </Button>
                    )
                }
                <div className="quick_view_button" onClick={()=>setQuickView(true)}>
                    <UilEye /> QUICK VIEW
                </div>
            </div>
        </div>
        <QuickViewPopup setQuickView={setQuickView} product={product} quickView={quickView}/>
        </>
    )
}

export default SingleProduct
