'use client'
import Image from 'next/image';
import './Listing.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // الأساسيات
import 'swiper/css/autoplay';
import Link from 'next/link';
function Listing(){
    return (
        <>
        <div className='Listing'>
            <p>Our Listing</p>
            <h2>Find Home Listing In Your <span style={{color:"yellowgreen"}}>Area</span> !</h2>
            <div className='listbtns'>
                <button className="btn btn-soft"><i className="fa-solid fa-hotel"></i> Apartment</button>
                <button className="btn btn-soft"><i className="fa-solid fa-location-dot"></i> General</button>
                <button className="btn btn-soft"><i className="fa-solid fa-house"></i> Villa</button>
            </div>
            <Swiper
             style={{marginTop:"50px"}}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    dir="ltr" // لدعم اللغة العربية أو الاتجاه من اليمين لليسار
            >
                <SwiperSlide >
                    <div className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer"}} src="/Assets/trashed-1752325273-listing-13-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
                    </div>
                        
                </SwiperSlide>
                <SwiperSlide >
                    <div className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer"}} src="/Assets/trashed-1752325273-listing-9-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>West Square Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
                    </div>
                        
                </SwiperSlide>
                <SwiperSlide >
                    <div className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer"}} src="/Assets/trashed-1752325273-listing-8-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Eaton Garth Penthouse</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
                    </div>
                        
                </SwiperSlide>
                <SwiperSlide >
                    <div className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer"}} src="/Assets/trashed-1752325273-listing-12-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Nova Quincy Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div className='det'>
                            <h4>$198.00</h4>
                          <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>  
                        </div>
                    </div>
                        
                </SwiperSlide>
                <SwiperSlide >
                    <div className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer"}} src="/Assets/trashed-1752325273-listing-14-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div className='he' style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Coloful Small Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
                    </div>
                        
                </SwiperSlide>
                <SwiperSlide >
                    <div className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer"}} src="/Assets/trashed-1752325273-listing-11-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Elavation Small Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
                    </div>
                        
                </SwiperSlide>
               
            </Swiper>   
        </div>
        </>
    )
}
export default Listing;