import React from 'react'
import houseimg from '../../images/house.png'
import './DashboardCard.css'


export default function DashboardCard({ houseName, houseNumber, houseAddr, houseImgUrl, housePH }) {
    return (
        <div className='card-container'>
            <div className='img-cont'>
                <img src={houseimg} alt="" />
            </div>
            <div className='info-cont'>
                <div className='houseNameNum'>

                    <h1 className='houseName'>House Name</h1>
                    <h1 className='houseNum'>House Number</h1>
                </div>

                <h1 className='houseAddr'>🖈 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aspernatur eum aliquid corporis</h1>
                <h1 className='housePh'>☎ 9876543210</h1>
            </div>

        </div>
    )
}
