import { YouTube } from '@material-ui/icons'
import React from 'react'
import './Footer.scss'
import { UilFacebookF, UilTwitter ,UilInstagram  } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer1">
                            <div className="logo">
                                <Link to='/'><img src="../images/logo-1.png" alt="" /></Link>
                            </div>
                            <div className="contact">
                                <div className="title">Contact</div>
                                <div className="address">
                                    <p><span>Address:</span> 562 Wellington Road, Street 32, San Francisco</p>
                                </div>
                                <div className="phone">
                                    <p><span>Phone:</span> +01 2222 365 /(+91) 01 2345 6789</p>
                                </div>
                                <div className="address">
                                    <p><span>Working hours:</span> 10:00 - 18:00, Mon - Sat</p>
                                </div>
                            </div>
                            <div className="follow_us">
                                <div className="title">Follow Us</div>
                                <div className="social_icons">
                                    <div className="icon"><UilFacebookF/></div>
                                    <div className="icon"><UilTwitter/></div>
                                    <div className="icon"><UilInstagram/></div>
                                    <div className="icon"><YouTube/></div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="footer2">
                        <div className="title">
                            Categories
                        </div>
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Accessories</li>
                            <li>Shoes</li>
                            <li>Denim</li>
                            <li>Dress</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                    <div className="footer2">
                        <div className="title">
                            Information
                        </div>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>Returns & Exchanges</li>
                            <li>Shipping & Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer4">
                            <div className="title">
                                Payments
                            </div>
                            <p>Secured Payment Gateways</p>
                            <img src="../images/payment.png" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
