import React from 'react'
import { UilArrowRight } from '@iconscout/react-unicons'
import './Advertise.scss'

const Advertise = () => {
    return (
        <section className="advertise_section">
            <div className="container">
                <div className="advertise_image">
                    <img src="../images/banner.png" alt="" />
                    <div className="advertise_info">
                        <div className="repair_service">
                            Repair Services
                        </div>
                        <div className="repair_title">
                            We're an Apple<br/>
                            Authorised Service Provider
                        </div>
                        <div>
                        <p>LEARN MORE<UilArrowRight/></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertise
