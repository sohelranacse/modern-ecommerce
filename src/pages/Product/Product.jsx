import { UilMoneyWithdraw, UilHourglass, UilMessage  } from '@iconscout/react-unicons'
import { UilMinus, UilPlus  } from '@iconscout/react-unicons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Product.scss'
import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import { products } from '../../Products'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import { Helmet } from "react-helmet";
import {FacebookIcon,FacebookShareButton,FacebookMessengerShareButton} from 'react-share'

const Product = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const {addedProducts, totalQty, subTotalPrice, totalPrice}=useSelector(state=>state.products)
    
    const [tabs, setTabs] = useState('description')
    const [productQty, setProductQty] = useState(1)

    useEffect(() => {
        localStorage.setItem('addedProducts',JSON.stringify(addedProducts))
        localStorage.setItem('totalQty', JSON.stringify(totalQty))
        localStorage.setItem('subTotalPrice', JSON.stringify(subTotalPrice))
        localStorage.setItem('totalPrice', JSON.stringify(subTotalPrice))
    }, [addedProducts, totalQty, subTotalPrice,totalPrice])

    return (
        <section className="product_page my-5">
            <Helmet>
                <title>{products[id - 1].name}</title>
                <meta property="og:image" content={ products[id-1].image}></meta>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product_image text-center">
                            <ReactImageMagnify className="zoom_product_image" {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: products[id-1].image
                                },
                                largeImage: {
                                    src: products[id-1].image ,
                                    background:'white',
                                    width:1000,
                                    height: 700,
                                },
                                enlargedImageContainerClassName:"zoom_large_product_image",
                            }} />
                            
                            <img className="mobile_product_image" src={ products[id-1].image} alt="productImage" />
                        </div>
                    </div>

                    <div className="col-md-7 product_info">
                        <div className="product_title">
                            { products[id-1].name}
                        </div>
                        <div className="product_brand">
                            Brands: <span>{ products[id-1].brand}</span>
                        </div>
                        <div className="price d-flex">
                            <div className="product_price">
                                ${ products[id-1].price}
                            </div>
                            <div className="product_deleted_price text-decoration-line-through">
                                ${ products[id-1].deleted_price}
                            </div>
                        </div>
                        <div className="product_short_desc">
                            { products[id-1].short_desc}
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
                            !addedProducts.filter(v => v.id ===  Number(id)).length ? (
                                <div className="d-flex align-items-center my-4">
                                    <div className="items_amount">
                                        <UilMinus className="minus" onClick={()=>productQty>1 && setProductQty(productQty-1)}/>
                                        <p>{productQty}</p>
                                        <UilPlus  className="add" onClick={()=>setProductQty(productQty+1)}/>
                                    </div>
                                    <div className="add_to_cart" onClick={()=>dispatch({type:"ADD_TO_CART",payload: products[id-1],qty:productQty})}>
                                        <Link to="#">ADD TO CART</Link>
                                    </div>
                                </div>
                            ) : (
                                <Button color="primary" className="view_in_cart">
                                    <Link to="/cart">VIEW IN CART</Link>
                                </Button>
                            )
                        }

                        <FacebookShareButton
                            url={`https://shajib-test-ecommerce.netlify.app/product/${id}`}
                            quote={ products[id-1].name}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>

                        <ul className="categories_items">
                            <li>Categories: <span>{ products[id-1].category}</span></li>
                            <li>Availability: <span>{ products[id-1].availability}</span></li>
                        </ul>
                    </div>

                    {/* long description and review  */}
                    <div className="col long_description">
                        <div className="tabs">
                            <ul>
                                <li className={tabs==="description"?"active":undefined} onClick={()=>setTabs("description")}>DESCRIPTION</li>
                                <li className={tabs==="reviews"?"active":undefined} onClick={()=>setTabs("reviews")}>REVIEWS (2)</li>
                            </ul>
                        </div>

                        {
                            tabs==="description" ? (
                                <>
                                    <div className="main_long_description">
                                        <div dangerouslySetInnerHTML={{__html:products[id - 1].desc}}></div>
                                    </div>
                                </>
                            ): (
                                <>
                                <div className="row reviews">
                                    <div className="col-lg-8 ">
                                        <h4 className="title mb-4">Customers Reviews About This Product</h4>
                                        {
                                        [1,2].map((v,i)=>{
                                            return (
                                                <div key={i} className="row review">
                                                    <div className="col-12 d-flex align-items-center">
                                                        <div className="customers_img">
                                                            <img src="../images/review1.jpg" alt="" />
                                                        </div>
                                                        <div className="customers_info d-flex align-items-center">
                                                            <p>Haylee Zieme</p> | <span>1 week ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="start_icon">
                                                            
                                                        </div>
                                                        <div className="review_description">
                                                            <p>Doloremque neque ut officiis. Inventore aut non vero debitis. Eveniet libero blanditiis aut sed. Dolorum nostrum impedit dolore.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                                </> 
                            )
                        }

                    </div>

                    {/* Related Products  */}
                    <div className="related_products">
                        <h1 className="text-center my-3 title">Related Products</h1>
                        <div className="row">
                        {
                            products.filter(e=>e.category.toLocaleLowerCase()===products[id-1].category.toLocaleLowerCase() && e.id !== Number(id))?.map((product, i) => {
                                return (
                                    <div key={i} className="col-lg-3 col-md-4 col-6">
                                        <SingleProduct product={product}/>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Product
