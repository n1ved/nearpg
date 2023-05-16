import React from 'react'
import './login.css'
import google from '../../images/google.png'

export default function Login() {
    return (
        <div className='login'>
            <div className='login-cont'>
                <div className='login-head'>
                    <h1>Welcome to NearPG</h1>
                    <p>Find your perfect PG  in seconds with PGFind </p>
                    <p>  The ultimate time-saving app for locating nearby PG!</p>
                </div>
                <div className='login-button'>
                    <button className='login-btn'>
                        <img src={google}></img><p>Sign in with Google</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
