import React from 'react'
import './Blog.scss'
import {posts} from '../../Blogs'
import { useParams } from 'react-router'
import {Helmet} from "react-helmet";

const Blog = () => {

    const { id } = useParams()
    return (
        <section data-aos="fade-top" data-aos-once="true" data-aos-duration="1000" className="blog_section">
        <Helmet>
            <title>{posts[id-1]?.title}</title>
        </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto post">
                        <div className="post_title">
                            {posts[id-1]?.title}
                        </div>
                        <div className="post_info mb-2">
                            <div className="time">
                                {posts[id-1]?.date}
                            </div>
                            <div className="views">
                                {posts[id-1]?.views}
                            </div>
                        </div>
                        <div className="post_thumb">
                            <img src={posts[id-1]?.image} alt="" />
                        </div>
                        <div className="post_description">
                            {posts[id - 1]?.description}
                            
                            I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.

                            You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
