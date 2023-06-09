import React from 'react'
import heroimg from './../../images/apartment.webp'
import './Hero.css'
import { useNavigate } from 'react-router-dom'


export default function Hero() {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/login");
    }
    return (
        <div className='hero'>
            <div className='nav'>
                <div className='nav-left'>
                    <h1 className='icon-decoration'>/</h1>
                    <h1>NearPG</h1>
                </div>
                <div className='nav-right'>
                    <a href="/login">
                        login
                    </a>
                </div>
            </div>
            <div className='hero-cont'>
                <div className='hero-left'>
                    <h1>Discover your dream PG  today</h1>
                    <button onClick={handleNavigate}>Join Today</button>
                </div>
                <div className='hero-right'>
                    <img src={heroimg} alt="" />
                </div>
            </div>
        </div>
    )
}
