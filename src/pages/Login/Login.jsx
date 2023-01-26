import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import {Helmet} from "react-helmet";

const Login = () => {
    const [datas, setDatas] = useState({ email: "", password: '' })
    
    const handleChange = (e) => {
        setDatas({...datas,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className='container login_page'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="form_wrapper">
                <div className="form_title">
                    <h3>Login</h3>
                    <p>Please enter your email address and password</p>
                </div>
        
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" onChange={handleChange} value={datas.email} placeholder="Please enter your email" autoComplete='off'/>
                    <input type="password" name="password" onChange={handleChange} value={datas.password} placeholder="Please enter your password" />
                    <input type="submit" value="Submit" />
                </form>
                <p className='create_account'>Don't have an account? <Link to='/signup'>Create one</Link></p>
                <div className="alternate_login">
                    <p>Login with social network</p>
                    <img src='../images/google.png' alt='gmail' className='gmail'/>
                    <img src='../images/facebook.png' alt='facebook' className='facebook'/>
                </div>

            </div>
        </section>
    )
}

export default Login
