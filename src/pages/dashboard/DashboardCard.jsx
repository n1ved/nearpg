import React from 'react'
import houseimg from '../../images/house.png'
import './DashboardCard.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function DashboardCard({ houseName, houseMail, houseAddr, houseImgUrl, housePH, houseFacil, houseRent, }) {
    return (
        <div className='card-container'>
            <div className='left-container'>
                <div className='img-cont'>
                    <img src={houseImgUrl} alt="" />
                </div>
                <div className='price-cont'>
                    <h1>₹{houseRent}</h1>
                </div>
            </div>
            <div className='info-cont'>
                <div className='houseNameNum'>
                    <h1 className='houseName'>{houseName}</h1>
                </div>

                <h1 className='houseFacil'>facilities : {houseFacil}</h1>
                <div className='data-icon-cont'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h1 className='houseAddr'>{houseAddr}</h1>
                </div>
                <div className='data-icon-cont'>
                    <FontAwesomeIcon icon={faPhone} />
                    <h1 className='housePh'>{housePH}</h1>
                </div>
                <div className='data-icon-cont'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h1 className='houseMail'>{houseMail}</h1>
                </div>
            </div>

        </div>
    )
}
