import './footer.css';
import Image from 'next/image';
function Footer(){
    return (
        <>
        <div className="footer">      
            <div className='redpart'>
                <div className='address'>
                    <div className='address-icon'><i className="fa-solid fa-location-dot"></i></div>
                    <div className='address-det'>
                        <p>Address</p>
                        <h5>6391 Kafr El Amar St ,Banha</h5>
                    </div>
                </div>
                <div className='address'>
                    <div className='address-icon'><i className="fa-solid fa-envelope"></i></div>
                    <div className='address-det'>
                        <p>Send Email</p>
                        <h5>Omarsamir@gmail.com</h5>
                    </div>
                </div>
                <div className='address'>
                    <div className='address-icon'><i className="fa-solid fa-phone"></i></div>
                    <div className='address-det'>
                        <p>Call Emergency</p>
                        <h5>+88 013 654 99</h5>
                    </div>
                </div>
            </div>
            <div className='secondpart'>
                <div className='sec1'>
                    <Image style={{cursor:"pointer"}} src="/Assets/logo.png" alt="Logo" width={100} height={50} />
                    <p>Nullam Interdum Libero Vitae Pretium Aliquam Donec Purus Laoreet in Ullamcorper Vel Malesuade Sit amet enim</p>
                    <p>Follow On : <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i> </p>
                </div>
                <div className='quicklink'>
                    <h3>Quick Link</h3>
                    <div style={{display:"flex",alignItems:"center",gap:"2px"}}><div style={{width:"30px",height:"3px",backgroundColor:"orangered"}}></div><div style={{width:"90px",height:"3px",backgroundColor:"white"}}></div></div>
                    <ul>
                        <li><span >&gt;&gt;</span> Stratup Business</li>
                        <li><span >&gt;&gt;</span> Financial Advice</li>
                        <li><span >&gt;&gt;</span> Management</li>
                        <li><span >&gt;&gt;</span> Bussiness Advice</li>
                        <li><span >&gt;&gt;</span> Strategy Services</li>
                    </ul>
                </div>
            </div>
            <div className='secondpart'>
                <div className='quicklink'>
                    <h3>Discover </h3>
                    <div style={{display:"flex",alignItems:"center",gap:"2px"}}><div style={{width:"30px",height:"3px",backgroundColor:"orangered"}}></div><div style={{width:"90px",height:"3px",backgroundColor:"white"}}></div></div>
                    <ul>
                        <li><span >&gt;&gt;</span> About</li>
                        <li><span >&gt;&gt;</span> Our Team</li>
                        <li><span >&gt;&gt;</span> Testimonials</li>
                        <li><span >&gt;&gt;</span> Gallery</li>
                        <li><span >&gt;&gt;</span> Contact</li>
                        <li><span >&gt;&gt;</span> Porperties</li>
                        <li><span >&gt;&gt;</span> Agents</li>
                    </ul>
                </div>
                <div className='quicklink'>
                    <h3>Gallary</h3>
                    <div style={{display:"flex",alignItems:"center",gap:"2px"}}><div style={{width:"30px",height:"3px",backgroundColor:"orangered"}}></div><div style={{width:"90px",height:"3px",backgroundColor:"white"}}></div></div>
                    <div style={{marginTop:"20px",display:"flex",gap:"30px",flexWrap:"wrap"}}>
                        <Image style={{cursor:"pointer"}} src="/Assets/gallery-1.jpg" alt="Logo" width={200} height={100} />
                        <Image style={{cursor:"pointer"}} src="/Assets/gallery-2.jpg" alt="Logo" width={200} height={100} />
                        <Image style={{cursor:"pointer"}} src="/Assets/gallery-3.jpg" alt="Logo" width={200} height={100} />
                        <Image style={{cursor:"pointer"}} src="/Assets/gallery-4.jpg" alt="Logo" width={200} height={100} />
                        <Image style={{cursor:"pointer"}} src="/Assets/gallery-3.jpg" alt="Logo" width={200} height={100} />
                        <Image style={{cursor:"pointer"}} src="/Assets/gallery-4.jpg" alt="Logo" width={200} height={100} />
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;