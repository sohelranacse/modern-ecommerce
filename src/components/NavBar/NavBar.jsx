import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import { UilFacebookF, UilTwitter ,UilInstagram, UilFire, UilPlug, UilDesktop, UilEstate, UilMedkit, UilMobileAndroid,UilWatchAlt,UilKid } from '@iconscout/react-unicons'
import {ExpandMoreSharp, Phone, Assignment, Search, List, YouTube } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const {totalQty}=useSelector(state=>state.products)

    const [activeCategory, setActiveCategory] = useState(false)
    const [stickyMenu, setStickyMenu] = useState(false)

    const menuRef=useRef()
     
    window.addEventListener('scroll', (e) => {
        setActiveCategory(false);
        
        window.scrollY > 150 ? setStickyMenu(true) : setStickyMenu(false);
    })
     
    window.addEventListener('mousedown', (e) => {
        if (!menuRef.current?.contains(e.target) ) {
            setActiveCategory(false);
        }            
    })

    return (
        <header className={stickyMenu?"sticky":""}>
            {/* top nav bar  */}
            <div className="nav_topbar" data-aos="slide-bottom" data-aos-once="false" data-aos-duration="2000">
                <div className="container">
                    <div className="left">
                        <div className="contact_number">
                            <div className="icon"><Phone/></div>
                            <div className="number">1900-888</div>
                        </div>
                        <div className="track_order">
                            <div className="icon"><Assignment/></div>
                            <div className="track">Track Your Order</div>
                        </div>
                    </div>
                    <ul>
                        <li><UilFacebookF/></li>
                        <li><YouTube /></li>
                        <li><UilTwitter /></li>
                        <li><UilInstagram /></li>
                    </ul>
                </div>
            </div>

            {/* middle nav bar  */}
            <div className="middle_nav">
                <div className="container d-flex align-items-center justify-content-between">
                    {/* logo  */}
                    <div className="logo">
                        <Link to="/"><img src="../images/logo-1.png" alt="" /></Link>
                    </div>

                    {/* search bar  */}
                    <div className="nav_search_bar">
                        <form>
                            <input type="text" placeholder="Search Products..." className="search_input" />
                            <Search className="search_button"/>
                        </form>
                    </div>

                    {/* add to cart icon */}
                    <div className="nav_middle_icon">
                        <Link to='/cart' className="add_to_cart">
                            <Badge badgeContent={totalQty} color="primary"> <img src="../images/icon-cart.svg" alt="" /></Badge>
                        </Link>
                        <Link to='/login' className="login">
                            <img src="../images/icon-user.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* bottom nav bar  */}
            <div className="bottom_nav">
                <div className="container d-flex align-items-center">
                    
                    {/* Categories  */}
                    <div style={{flex:'1'}}>
                    <div ref={menuRef} className="main_categories">
                        <div className="category" onClick={()=>setActiveCategory(!activeCategory)}>
                            <div className="catergory_name">
                                <List/>
                                <span>Categories</span>
                            </div>
                            <ExpandMoreSharp className={activeCategory?"down_arrow active" :"down_arrow" }/>
                        </div>
                        {/* TODO: DROPDOWN HERE*/}
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

                    {/* main nav menu  */}
                    <div className="main_nav_menu">
                        <ul className="items">
                            <Link to="/" className="item">
                                {/* <Accessible className="item_icon" /> */}
                                <span className="item_name">Home</span>
                            </Link>
                            <Link to='/shop' className="item">
                                {/* <Storefront className="item_icon" /> */}
                                <span className="item_name">Shop</span>
                            </Link>
                            <Link to='/about' className="item">
                                {/* <ShopTwo className="item_icon" /> */}
                                <span className="item_name">About</span>
                            </Link>
                            <Link to='/blogs' className="item">
                                {/* <Devices className="item_icon" /> */}
                                <span className="item_name">Blogs</span>
                            </Link>
                            <Link to='/contact' className="item">
                                {/* <FlightTakeoff className="item_icon" /> */}
                                <span className="item_name">Contact</span>
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default NavBar
