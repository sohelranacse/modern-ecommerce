import './QuickViewPopup.scss'
import { UilMoneyWithdraw, UilHourglass, UilMessage, UilMultiply } from '@iconscout/react-unicons'
import { UilMinus, UilPlus  } from '@iconscout/react-unicons'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {Button} from '@material-ui/core'

const QuickViewPopup = ({ setQuickView, quickView, product }) => {
    const dispatch = useDispatch()
    const {addedProducts, totalQty, subTotalPrice, totalPrice}=useSelector(state=>state.products)
    
    window.addEventListener('click', (e) => {
        e.target===document.querySelector(".quick_view_popup.active") && setQuickView(false)
    })

    const [productQty, setProductQty] = useState(1)

    useEffect(() => {
        localStorage.setItem('addedProducts',JSON.stringify(addedProducts))
        localStorage.setItem('totalQty', JSON.stringify(totalQty))
        localStorage.setItem('subTotalPrice', JSON.stringify(subTotalPrice))
        localStorage.setItem('totalPrice', JSON.stringify(subTotalPrice))
    }, [addedProducts, totalQty, subTotalPrice,totalPrice])

    return (
        <section className={quickView ? 'quick_view_popup active' : 'quick_view_popup'}>
            <div className="popup">
                <div className="popup_inner">
                    <div className="row">
                    <div onClick={()=>setQuickView(false)} className="cancel_popup"><UilMultiply/></div>
                    <div className="col-lg-5">
                        <div className="product_images">
                            <img className="mobile_product_image" src={ product.image} alt="productImage" />
                        </div>
                    </div>

                    <div className="col-lg-7 product_info">
                        <div className="product_title">
                            { product.name}
                        </div>
                        <div className="product_brand">
                            Brands: <span>{ product.brand}</span>
                        </div>
                        <div className="price d-flex">
                            <div className="product_price">
                                ${ product.price}
                            </div>
                            <div className="product_deleted_price text-decoration-line-through">
                                ${ product.deleted_price}
                            </div>
                        </div>
                        <div className="product_short_desc">
                            { product.short_desc}
                        </div>
                        <ul className="list_items">
                            <li>
                                <UilHourglass />
                                <span> 1 Year AL Jazeera Brand Warranty</span>
                            </li>
                            <li>
                                <UilMessage />
                                <span> 30 Day Return Policy</span>
                            </li>
                            <li>
                                <UilMoneyWithdraw/>
                                <span> Cash on Delivery available</span>
                            </li>
                        </ul>
                        {
                            !addedProducts.filter(v => v.id ===  Number(product.id)).length ? (
                                <div className="d-flex align-items-center my-4">
                                    <div className="items_amount">
                                        <UilMinus className="minus" onClick={()=>productQty>1 && setProductQty(productQty-1)}/>
                                        <p>{productQty}</p>
                                        <UilPlus  className="add" onClick={()=>setProductQty(productQty+1)}/>
                                    </div>
                                    <div className="add_to_cart" onClick={()=>dispatch({type:"ADD_TO_CART",payload: product,qty:productQty})}>
                                        <Link to="#">ADD TO CART</Link>
                                    </div>
                                </div>
                            ) : (
                                <Button color="primary" className="view_in_cart">
                                    <Link to="/cart">VIEW IN CART</Link>
                                </Button>
                            )
                        }
                        <ul className="categories_items">
                            <li>Categories: <span>{ product.category}</span></li>
                            <li>Availability: <span>{ product.availability}</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickViewPopup
