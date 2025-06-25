'use client'
import { useState } from 'react';
import './DisplayVilla.css';
import Image from 'next/image';
function DisplayVilla(){
        const [mainimg,setmainimg]=useState("/Assets/listing-2-600x385.jpg")
        const backgrounds = [
        "/Assets/listing-2-600x385.jpg",
        "/Assets/listing-3-600x385.jpg",
        "/Assets/listing-4-600x385.jpg",
        "/Assets/listing-5-600x385.jpg",
    ];
    
    return (
        <>
        <div className="DisplayVilla">
            <div className="displaydetails">
                <div>
                    <h2>Nova Quincy Apartment</h2>
                    <p><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street, New York</p>
                </div>
                <div className='displaybtn'>
                    <button  className="btn btn-outline "><i className="fas fa-heart"></i></button>
                    <button  className="btn btn-outline "><i className="fas fa-share"></i> Share</button>
                    <button  className="btn btn-outline ">Report</button>
                </div>
            </div>
            <div style={{marginTop:"20px"}} className='gallary'>
                <div className='maingalaryimg'>
                    <Image  src={mainimg} alt="Logo" width={300} height={50} />
                </div>
                <div className='smallimgs' >
                    <Image onClick={()=>{setmainimg('/Assets/listing-2-600x385.jpg')}} src={backgrounds[0]} alt="Logo" width={300} height={50} />
                    <Image onClick={()=>{setmainimg('/Assets/listing-3-600x385.jpg')}} src={backgrounds[1]} alt="Logo" width={300} height={50} />
                    <Image onClick={()=>{setmainimg('/Assets/listing-4-600x385.jpg')}} src={backgrounds[2]} alt="Logo" width={300} height={50} />
                    <Image onClick={()=>{setmainimg('/Assets/listing-5-600x385.jpg')}} src={backgrounds[3]} alt="Logo" width={300} height={50} />
                </div>
            </div>
        </div>
        </>
    )
}
export default DisplayVilla;