import React,{useEffect, useState} from "react";
import AOS from 'aos'
import './Slider.scss'
import {motion} from 'framer-motion'

// Import Swiper React components
import { Swiper, SwiperSlide } from "../../../node_modules/swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay,Pagination } from "../../../node_modules/swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const title_1 = {
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
        delay:.3*.7,
        duration: 0.4,
    },
  },
};

const title_2 = {
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
        delay:.3*1.4,
        duration: 0.4,
    },
  },
};

const title_3 = {
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
        delay:.3*2.1,
        duration: 0.4,
    },
  },
};

const title_4 = {
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
        delay:.3*2.8,
        duration: 0.4,
    },
  },
};

const title_5 = {
  initial: { x: -60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
        delay:.3*3,
        duration: 0.4,
    },
  },
};

const image = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
        delay:.3,
        duration: 0.6,
    },
  },
};

function Slider() {

  const [state, setState] = useState(0)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    console.log(state);
    AOS.refresh()
  },[state])

  const sliders = [
    {
      title1:"Trade-In Offer",
      title2:"Super Value Deals",
      title3:"On All Products",
      title4:"Save more with coupons & up to 70% off",
      image: '../images/slider1.png',
      bgImage: "url('../images/slider1.png')",
    },
    {
      title1:"Tech Promotions",
      title2:"Tech Trending",
      title3:"Great Collection",
      title4:"Save more with coupons & up to 20% off",
      image: '../images/slider2.png',
      bgImage: "url('../images/slider2.png')",
    },
    {
      title1:"Upcoming Offer",
      title2:"Big Deals From",
      title3:"Manufacturer",
      title4:"Headphone, Gaming Laptop, PC and more...",
      image: '../images/slider3.png',
      bgImage: "url('../images/slider3.png')",
    }
  ];

  const slider = sliders.map((value, i) => {
    return (
      <SwiperSlide key={i} >
        <div
          style={{ background:value.bgIamage ,backgroundPosition:"center right",backgroundRepeat:'no-repeat', backgroundSize:"contain", height:"auto" }}
          className="container"
        >
          {slide===i && <div className="row h-100">
            <div className="col-6 d-flex align-items-center">
              <motion.div className="banner_info">
                <motion.div initial="initial" animate="animate" variants={title_1} className="title1">{value.title1}</motion.div>
                <motion.div initial="initial" animate="animate" variants={title_2} className="title2">{value.title2}</motion.div>
                <motion.div initial="initial" animate="animate" variants={title_3} className="title3">{value.title3}</motion.div>
                <motion.div initial="initial" animate="animate" variants={title_4} className="title4">{value.title4}</motion.div>
                <motion.div initial="initial" animate="animate" variants={title_5} className="shop_now">Shop Now</motion.div>
              </motion.div>
            </div>
            <motion.div className="col-6 text-center right_image" initial="initial" animate="animate" variants={image}>
              <img className="w-100" src={value.image} alt="" />
            </motion.div>
          </div>}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section className="Allslider">
      <Swiper
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        onSlideChange={(e)=>setSlide(e.realIndex)}
        className="mySwiper"
      >
        {slider}
      </Swiper>
    </section>
  );
}

export default Slider;
