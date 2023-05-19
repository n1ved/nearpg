import { React, useContext } from 'react'
import './Dashboard.css'
import DashboardCard from './DashboardCard'
import { AuthContext } from '../../context'
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { storage } from '../../firebase';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';

export default function Dashboard() {

    const initialValue = {
        name: "",
        hname: "",
        haddr: "",
        hfacil: "",
        hph: "",
        hphoto: "",
        hrent: ""
    };
    const imageLabelValue = "Select Image";

    const [imgLbl, setImgLbl] = useState(imageLabelValue);
    const [pg, setPg] = useState(initialValue);
    const [file, setFile] = useState(null);
    const [urlkey, seturlkey] = useState("");

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0]);
        setImgLbl(event.target.files[0].name);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPg({ ...pg, [name]: value });
    }

    const handleImageUpload = () => {
        const uploadImageRef = ref(storage, `images/${file.name}`);
        console.log("file ready to upload reference set...");

        uploadBytes(uploadImageRef, file).then((snapshot) => {
            console.log("Image uploaded...");

            getDownloadURL(uploadImageRef).then((url) => {
                seturlkey(url);
                setPg({
                    ...pg, photoURL: url
                });
                console.log(url);
            }).catch((error) => {
                console.log(error);
            });
        });

    }

    console.log(pg);

    const { user, loading } = useContext(AuthContext);
    // console.log(user);
    if (user) {
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
                                <img src={user.photoURL} alt="avatar" />
                            </div>
                            <h1>{user.displayName}</h1>
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
                            <input type='text' id='hname' name='hname' value={pg.hname} onChange={handleChange} placeholder='Enter House Name'></input>
                            <br />
                            <input type='text' id='hfacil' name='hfacil' value={pg.hfacil} onChange={handleChange} placeholder='Enter Facilities'></input>
                            <br />
                            <div className='image-upload-cont'>
                                <label className='image-upload-label'>
                                    <input type='file' id='himage' className='image-upload' onChange={(event) => handleFileInputChange(event)} accept='image/*' />
                                    <FontAwesomeIcon icon={faFile} />
                                    &ensp;{imgLbl}
                                </label>
                                <button className='upload-btn' onClick={handleImageUpload} type='button'>Upload</button>
                            </div>
                            <br />
                            <input type='text' id='haddr' name='haddr' value={pg.haddr} onChange={handleChange} placeholder='Enter Address' className='address-input'></input>
                            <br />
                            <input type='number' id='hph' name='hph' value={pg.hph} onChange={handleChange} placeholder='Enter Phone Number'></input>

                            <br />
                            <input type='number' id='hrent' name='hrent' value={pg.hrent} onChange={handleChange} placeholder='Enter Rent'></input>
                            <input type='submit' id='hsubmit' className='submit-buttton'></input>
                        </form>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div>
                Error : user not logged in
            </div>
        )
    }
}
