import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.scss'
import {Helmet} from "react-helmet";

const SignUp = () => {
    const [datas, setDatas] = useState({ name:'', email: "", password: '', cpassword: '' })
    
    const handleChange = (e) => {
        setDatas({...datas,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className='container login_page'>
            <Helmet>
                <title>Create New Account</title>
            </Helmet>
            <div className="form_wrapper">
                <div className="form_title">
                    <h3>Register</h3>
                    <p>Please fill in the information below</p>
                </div>
        
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" onChange={handleChange} value={datas.name} placeholder="Please enter your name" autoComplete='off'/>
                    <input type="email" name="email" onChange={handleChange} value={datas.email} placeholder="Please enter your email" autoComplete='off'/>
                    <input type="password" name="password" onChange={handleChange} value={datas.password} placeholder="Please enter your password" />
                    <input type="password" name="cpassword" onChange={handleChange} value={datas.cpassword} placeholder="Confirm your password" />
                    <input type="submit" value="Sign Up" />
                </form>
                <p className='create_account'>Have an account already?<Link to='/login'> Login</Link></p>
                <div className="alternate_login">
                    <p>Register with social network</p>
                    <img src='../images/google.png' alt='gmail' className='gmail'/>
                    <img src='../images/facebook.png' alt='facebook' className='facebook'/>
                </div>

            </div>
        </section>
    )
}

export default SignUp
