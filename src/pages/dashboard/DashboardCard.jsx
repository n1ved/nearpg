import React from 'react'
import houseimg from '../../images/house.png'
import './DashboardCard.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function DashboardCard({ houseName, houseNumber, houseAddr, houseImgUrl, housePH }) {
    return (
        <div className='card-container'>
            <div className='left-container'>
                <div className='img-cont'>
                    <img src={houseimg} alt="" />
                </div>
                <div className='price-cont'>
                    <h1>₹5000</h1>
                </div>
            </div>
            <div className='info-cont'>
                <div className='houseNameNum'>
                    <h1 className='houseName'>House Name</h1>
                </div>

                <h1 className='houseFacil'>facilities : Laundry , Mess , Internet</h1>
                <div className='data-icon-cont'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h1 className='houseAddr'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aspernatur eum aliquid corporis</h1>
                </div>
                <div className='data-icon-cont'>
                    <FontAwesomeIcon icon={faPhone} />
                    <h1 className='housePh'>9876543210</h1>
                </div>
                <div className='data-icon-cont'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h1 className='houseMail'>example@example.com</h1>
                </div>
            </div>

        </div>
    )
}
