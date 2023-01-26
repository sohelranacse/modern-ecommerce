import React from 'react'
import './NewsLetter.scss'

const NewsLetter = () => {
    return (
        <section className="news_letter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 news_letter_info">
                        <div className="news_letter_title">
                            <img src="../images/icon-email.svg" alt="" />
                            <p>Sign up to Newsletter</p>
                        </div>
                        <div className="news_letter_desc">
                        ...and receive $25 coupon for first shopping.
                        </div>
                    </div>
                    <div className="col-lg-5 mt-lg-0 mt-3 d-flex align-items-center">
                        <form className="subscribe_form">
                            <input type="email" placeholder="Enter your email" autoComplete="off" />
                            <p>SUBSCRIBE</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
