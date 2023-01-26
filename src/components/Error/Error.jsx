import React from 'react'
import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
    return (
        <section className="error_section"> 
            <div className="container text-center">
                <div className="error_img m-auto"><img src="../images/404.png" alt="" /></div>
                <h3>Page Not Found</h3>
                <p>The link you clicked may be broken or the page may have been removed.</p>
                <Link to='/'>BACK TO HOME PAGE</Link>
            </div>
        </section>
    )
}

export default Error
