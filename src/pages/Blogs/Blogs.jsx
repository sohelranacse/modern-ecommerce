import { WatchLaterOutlined } from '@material-ui/icons'
import { UilAngleRightB } from '@iconscout/react-unicons'
import React from 'react'
import './Blogs.scss'
import {posts} from '../../Blogs'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

const Blogs = () => {
    return (
        <section data-aos="fade-top" data-aos-once="true" data-aos-duration="1000" className="blog_page container">
        <Helmet>
            <title>Blogs</title>
        </Helmet>
            <div className="row">
             {
                 posts.map((post,i)=>{
                     return (
                        <div key={i} className="col-md-6 p-3">
                            <div className="blog">
                                <div className="blog_image">
                                <Link to={`/blog/${post.id}`}><img src={post.image} alt="" /></Link>
                                </div>
                                <div className="blog_info">
                                    <Link to={`/blog/${post.id}`} className="blog_title">{post.title}</Link>
                                    <div className="blog_short_desc">
                                        {post.description.slice(0,150)}...
                                    </div>
                                    <div className="my-3 d-flex justify-content-between align-items-center">
                                        <div className="blog_date">
                                            <WatchLaterOutlined/>{post.date}
                                        </div>
                                        <Link to={`/blog/${post.id}`} className="read_more">Read more <UilAngleRightB/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     )
                 })
             }   
            </div>
        </section>
    )
}

export default Blogs
