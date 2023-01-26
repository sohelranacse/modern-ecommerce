import { IconButton, Button } from '@material-ui/core'
import { Add, Clear, Remove } from '@material-ui/icons'
import React,{useEffect} from 'react'
import './Cart.scss'
import { useSelector, useDispatch} from 'react-redux'
import {Helmet} from "react-helmet";

const Cart = () => {
    const { addedProducts, totalQty, subTotalPrice, totalPrice } = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handleRadioChange = (e) => {
        dispatch({type:"ADD_SHIPPING_METHOD",value:e.target.value,name:e.target.id==="free_shipping"?"Free Delivery":"Home Delivery"})
    }
    
    useEffect(() => {
        localStorage.setItem('totalQty', JSON.stringify(totalQty))
        localStorage.setItem('subTotalPrice', JSON.stringify(subTotalPrice))
        localStorage.setItem('addedProducts', JSON.stringify(addedProducts))
        localStorage.setItem('totalPrice', JSON.stringify(subTotalPrice))
    }, [subTotalPrice,totalQty,addedProducts,totalPrice])
    return (
        <div className='container cart_page'>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            {
            totalQty ? (
            <div className="cart_wrapper row">
                <div className="col-lg-8">
                <div className='cart_products'>
                    <div className="main_title">
                        <div className="product_title1">PRODUCT</div>
                        <div className="price_title1">PRICE</div>
                        <div className="quantity_title1">QUANTITY</div>
                        <div className="subtotal_title1">SUBTOTAL</div>
                    </div>
                    <div className="products1">
                        {
                            addedProducts.map((item,i)=>{
                                return (
                                    <div key={i} className="product1">
                                        <div onClick={()=>dispatch({type:'DELETE_PRODUCT',payload:item})} className="delete_product"><IconButton><Clear/></IconButton></div>
                                        
                                        <div className='image'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        
                                        <div className="product_detail">
                                        <div className='price'>
                                            <div className="mobile_price_title">Price</div>
                                            <p>${item.price}</p>
                                        </div>
                                        
                                        <div className='quantity'>
                                            <div className="mobile_quantity_title">
                                                Quantity
                                            </div>
                                            <div className='product_amount'>
                                                <IconButton onClick={()=>dispatch({type:"DEC_PRODUCT",payload:item})}><Remove className="decrease"/></IconButton>
                                                <p className='amout'>{item.qty}</p>
                                                <IconButton onClick={()=>dispatch({type:"INC_PRODUCT",payload:item})}><Add className="increase"/></IconButton>
                                            </div>
                                        </div>
                                        
                                        <div className='subtotal'>
                                            <div className="mobile_subtotal_title">Subtotal</div>
                                            <p>${item.qty*item.price}</p>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                </div>

                <div className="col-lg-4 p-3">
                    <div className="cart_data">
                        <h3>CART TOTALS</h3>
                        <div className="subtotal_data">
                            <p className='subtotal_title'>Total Products</p>
                            <p className="subtotal_price">{totalQty}</p>
                        </div>
                        <div className="subtotal_data">
                            <p className='subtotal_title'>Subtotal</p>
                            <p className="subtotal_price">${subTotalPrice}</p>
                        </div>
                        <div className="shipping_data">
                            <p className="shipping_title">
                              Shipping  
                            </p>
                            <div className="choose_shipping">
                                <div>
                                    <label htmlFor="flate_rate">Flate rate: <span>$20.00</span></label>
                                    <input onChange={handleRadioChange} type="radio" id="flate_rate" name="shipping" value="20.00" />
                                </div>
                                <div>
                                    <label htmlFor="free_shipping">Free Shipping</label>
                                    <input onChange={handleRadioChange} id="free_shipping" type="radio" name="shipping" value="00.00" />
                                </div>

                            </div>
                        </div>
                        <div className="total_price">
                            <p className="total_title">Total</p>
                            <p className="price">${totalPrice}</p>
                        </div>
                        <Button className="checkout_button">PROCEED TO CHECKOUT</Button>
                    </div>
                </div>
            </div>
            ) : (
                <div className="no__message"><h1>You have no product in the cart 🤷‍♂️</h1></div>
            )
            }
        </div>
    )
}

export default Cart
