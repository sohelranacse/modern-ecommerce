import { UilTruck, UilUsdCircle, UilHeadphonesAlt } from '@iconscout/react-unicons'
import Title from '../../components/Title/Title'
import React from 'react'
import PartnerSlider from '../../components/PartnerSlider/PartnerSlider'
import './About.scss'
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <section data-aos="fade-top" data-aos-once="true" data-aos-duration="1000" className="about_page container">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className="story">
                <Title title="Our Story"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
            
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
            </div>
            <div className="why_choose_us">
                <Title title="Why Choose Us"/>
                <div className="row">
                    <div className="col-lg-4 col-md-6 p-3">
                        <div className="item">
                            <UilTruck/>
                            <div className="item_title">FREE SHIPPING</div>
                            <div className="item_desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, deleniti fugiat recusandae voluptates laborum eat.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-3">
                        <div className="item">
                            <UilUsdCircle />
                            <div className="item_title">FREE SHIPPING</div>
                            <div className="item_desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, deleniti fugiat recusandae voluptates laborum eat.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-3">
                        <div className="item">
                            <UilHeadphonesAlt />
                            <div className="item_title">FREE SHIPPING</div>
                            <div className="item_desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, deleniti fugiat recusandae voluptates laborum eat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* partner slider  */}
            <PartnerSlider/>
        </section>
    )
}

export default About
