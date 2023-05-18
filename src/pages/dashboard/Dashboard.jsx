import React from 'react'
import './Dashboard.css'
import DashboardCard from './DashboardCard'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='page-cont'>
                <div className='sideBar'>
                    <div className='sidebar-top'>
                        <div className='hero-title'>
                            <h1>NearPG</h1>
                            <hr />
                        </div>

                        <div className='links-cont'>
                            <a href="/">Home</a>
                            <a href='/dashboard'>Dashboard</a>
                        </div>
                    </div>
                    <div className='user-cont'>
                        <div className='avatar'>
                            <img src="https://i.pravatar.cc/100?img=57" alt="avatar" />
                        </div>
                        <h1>Jhon Doe</h1>
                        <button className='logout-btn'>Logout</button>
                    </div>
                </div>
                <div className='card-cont'>
                    <h1 className='dashboard-head'>Dashboard</h1>
                    <DashboardCard />
                    <DashboardCard />
                    <DashboardCard />
                </div>
                <div className='form-cont'>
                    <h1 className='form-head'>Add new PG</h1>
                    <form className='uploadForm'>
                        <input type='text' id='hname' placeholder='Enter House Name'></input>
                        <br />
                        <input type='text' id='hnum' placeholder='Enter House Number'></input>
                        <br />
                        <input type='text' id='haddr' placeholder='Enter Address' className='address-input'></input>
                        <br />
                        <input type='number' id='hph' placeholder='Enter Phone Number'></input>
                        <input type='submit' id='hsubmit' className='submit-buttton'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
