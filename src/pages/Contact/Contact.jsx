import { Map } from '@material-ui/icons'
import React from 'react'
import './Contact.scss'
import {Helmet} from "react-helmet";

const Contact = () => {
    return (
        <section data-aos="fade-top" data-aos-once="true" data-aos-duration="1000" className="contact_page container my-5">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            {/* map section  */}
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58958.389663046204!2d91.79608444257414!3d22.54544266016204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1631640825937!5m2!1sbn!2sbd" style={{border:0,height:"350px",width:"100%"}}></iframe>

            </div>

            <div className="shop_info row">
                {
                    ['Head Office', 'Our Shop', "Our Studio"].map(v => {
                        return (
                            <div className="col-lg-4 col-md-6 p-4">
                                <h3>{v}</h3>
                                <p>205 North Michigan Avenue, Suite 810, Chicago, 60601, USA</p>
                                <div className="contact_info">
                                    <p><span>Phone</span>: (+01) 234 567</p>
                                    <p><span>Email</span>: office@botble.com</p>
                                </div>
                                <div className="view_map_button">
                                    <Map/>View map
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="contact_form">
                <div className="form_title">
                    <h3>Drop Us a Line</h3>
                    <p>Contact Us For Any Questions</p>
                </div>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="phone" placeholder="Phone" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </section>
    )
}

export default Contact
