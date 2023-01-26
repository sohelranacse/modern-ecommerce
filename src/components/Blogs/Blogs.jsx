import React from 'react'
import {Link} from 'react-router-dom'
import './Blogs.scss'
import {posts} from '../../Blogs'
import { UilArrowRight, UilClock  } from '@iconscout/react-unicons'

const Blogs = () => {
    return (
        <section className="blogs_section">
            <div className="container">
                <div className="title">
                    Visit Our Blog
                </div>
                <div className="row mt-5">
                    {
                        posts?.map((post, i) => {
                            return (<div key={i} className="col-lg-6 mt-3 blog">
                                <div className="row">
                                    <div className="col-md-4">
                                        <Link to={`/blog/${post.id}`}><img src={post.image} alt="PostImage" /></Link>
                                    </div>
                                    <div className="col-md-8 pb-4">
                                        <span className="tag">COMMERCIAL</span>
                                        <Link to={`/blog/${post.id}`} className="blog_title">
                                            The Top 2020 Handbag Trends to Knwo
                                        </Link>
                                        <div className="blog_info d-flex justify-content-between">
                                            <div className="d-flex">
                                                <div className="time">
                                                    <UilClock />
                                                    Aug 21, 2021
                                                </div>
                                                <div className="views">
                                                    1091 Views
                                                </div>
                                            </div>
                                            <Link to={`/blog/${post.id}`} className="more">Read more <UilArrowRight /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs