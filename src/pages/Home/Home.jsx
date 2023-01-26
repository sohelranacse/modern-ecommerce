import React from 'react'
import Blogs from '../../components/Blogs/Blogs'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import PartnerSlider from '../../components/PartnerSlider/PartnerSlider'
import './Home.scss'
import Advertise from '../../components/Advertise/Advertise'
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <section className="HomePage">
            <Helmet>
                <title>React - Ecommerce Website</title>
            </Helmet>
            <Slider />
            <Categories />
            <FeaturedProducts />
            <Advertise/>
            <PartnerSlider/>
            <Blogs/>
        </section>
    )
}

export default Home
