'use client'
import Link from 'next/link';
import './navbar.css'
import Image from 'next/image';
import { useState } from 'react';

function Navbar(){
    const [classname,setclassname]=useState(true)
    return (
        <>
        <div className="navbaar">
            <div className='logo'>
              <Link href="/"><Image style={{cursor:"pointer"}} src="/Assets/logo.png" alt="Logo" width={100} height={50} /></Link>
              <div onClick={()=>{setclassname(!classname)}} className='barcont'><i style={{fontSize:"28px"}} className='fas fa-bars'></i></div>  
            </div>
            <div className={classname===true?'nav-links':'navlinks'}>
                <ul className='links'>
                    <li>
                       <Link href="/">Home</Link>  
                    </li>
                    <li>
                        <Link href="/Properties">Porperties</Link>  
                    </li>
                    <li>
                       <Link href="/AboutUs">About Us</Link>                         
                    </li>
                    <li>
                        <Link href="/Members">Members</Link>                      
                    </li>
                    <li>
                        <Link href="/News">News</Link>                      
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                </ul>
                {/* <button className="btn btn-outline btn-success"><i className="fa-solid fa-house"></i> Add Properties</button> */}
            </div>
        </div>
        </>
    )
}
export default Navbar;