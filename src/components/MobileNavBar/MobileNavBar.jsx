import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './MobileNavBar.scss'
import { UilMultiply, UilFire, UilPlug, UilDesktop, UilEstate, UilMedkit, UilMobileAndroid,UilWatchAlt,UilKid } from '@iconscout/react-unicons'
import {ExpandMoreSharp, List, Search } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'

const MobileNavBar = () => {
    const {totalQty}=useSelector(state=>state.products)

    const [activeCategory, setActiveCategory] = useState(false)
    const [activeMainMenu, setActiveMainMenu] = useState(false)
    const [stickyMenu, setStickyMenu] = useState(false)

    const categoryRef=useRef()
    const menuRef=useRef()
     
    window.addEventListener('scroll', (e) => {        
        window.scrollY > 0 ? setStickyMenu(true) : setStickyMenu(false);
    })
     
    window.addEventListener('click', (e) => {
        if (e.target===menuRef.current) {
            setActiveMainMenu(false);
        }            
    })

    return (
        <div className={stickyMenu?activeMainMenu?"mobile_navbar active sticky": "mobile_navbar sticky":activeMainMenu?"mobile_navbar active": "mobile_navbar"}>
            
            <div className="middle_nav">
                <div className="container d-flex align-items-center justify-content-between">
                    {/* logo  */}
                    <div className="logo">
                        <Link to="/"><img src="../images/logo-1.png" alt="" /></Link>
                    </div>

                    {/* add to cart icon */}
                    <div className="nav_middle_icon">
                        <Link to='/cart' className="add_to_cart">
                            <Badge badgeContent={totalQty} color="primary"> <img src="../images/icon-cart.svg" alt="" /></Badge>
                        </Link>
                        <Link to='/login' className="login">
                            <img src="../images/icon-user.svg" alt="" />
                        </Link>
                        <div onClick={()=>setActiveMainMenu(true)} className="open_menu">
                            <div className="bar_icon"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/*TODO: Main Nav Menu*/}
            <div ref={menuRef} className={activeMainMenu?"bottom_nav active":"bottom_nav"}>
                <div className="container bottom_nav_wrapper">
                    
                    <div onClick={()=>setActiveMainMenu(false)} className="close_menu">
                        <UilMultiply />
                    </div>
                    <hr />

                    {/* search bar  */}
                    <div className="nav_search_bar">
                        <form>
                            <input type="text" placeholder="Search Products..." className="search_input" />
                            <Search className="search_button"/>
                        </form>
                    </div>
                    
                    {/*TODO: Categories  */}
                    <div>
                    <div ref={categoryRef} className="main_categories">
                        <div className="category" onClick={()=>setActiveCategory(!activeCategory)}>
                            <div className="catergory_name">
                                <List/>
                                <span>Categories</span>
                            </div>
                            <ExpandMoreSharp className={activeCategory?"down_arrow active" :"down_arrow" }/>
                        </div>
                        <ul className={activeCategory?"category_items active":"category_items"}>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilFire className="category_item_icon"/>
                                    Hot Promotions
                                </p>
                            </li>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilPlug className="category_item_icon"/>
                                    Electronics
                                </p>
                            </li>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilKid className="category_item_icon"/>
                                    Baby
                                </p>
                            </li>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilDesktop className="category_item_icon"/>
                                    Computers
                                </p>
                            </li>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilEstate className="category_item_icon"/>
                                    Home & Kitchen
                                </p>
                            </li>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilMedkit className="category_item_icon"/>
                                    Health & Beauty
                                </p>
                            </li>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilWatchAlt className="category_item_icon"/>
                                    Jewelry & Watch
                                </p>
                            </li>
                            <li className="category_item">
                                <p className="category_item_name">
                                    <UilMobileAndroid className="category_item_icon"/>
                                    Phones
                                </p>
                            </li>
                        </ul>
                    </div>
                    </div>

                    {/* nav menu  */}
                    <div className="main_nav_menu">
                        <ul className="items">
                            <Link onClick={()=>setActiveMainMenu(false)} to="/" className="item">
                                <span className="item_name">Home</span>
                            </Link>
                            <Link onClick={()=>setActiveMainMenu(false)} to='/shop' className="item">
                                <span className="item_name">Shop</span>
                            </Link>
                            <Link onClick={()=>setActiveMainMenu(false)} to='/about' className="item">
                                <span className="item_name">About</span>
                            </Link>
                            <Link onClick={()=>setActiveMainMenu(false)} to='/blogs' className="item">
                                <span className="item_name">Blogs</span>
                            </Link>
                            <Link onClick={()=>setActiveMainMenu(false)} to='/contact' className="item">
                                <span className="item_name">Contact</span>
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobileNavBar
