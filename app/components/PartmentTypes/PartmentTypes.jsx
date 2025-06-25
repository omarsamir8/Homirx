'use client'
import './PartmentTypes.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // الأساسيات
import 'swiper/css/autoplay';
import Link from 'next/link';
function PartmentTypes(){
    return(
        <>
        <div className="PartmentTypes">
            <p>Property By Requirement</p>
            <h2>Explore Apartment <span style={{color:"greenyellow"}}>Types</span></h2>
            
             <Swiper
             style={{marginTop:"50px"}}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={5}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    dir="rtl" // لدعم اللغة العربية أو الاتجاه من اليمين لليسار
                >   
                    <SwiperSlide >
                        
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                               <div className='imgcart'>
                                   <i className="fa-solid fa-building"></i>
                               </div>
                           </Link>
                        
                        <h3>Warehouse</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                    <i className="fas fa-hotel"></i>
                               </div>
                            </Link>
                        
                        <h3>Villa</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                   <i className="fas fa-store"></i>
                                </div>
                            </Link>
                        
                        <h3>Apartment</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                   <i className="fas fa-hotel"></i>
                                </div>
                            </Link>
                       
                        <h3>Homestay</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                   <i className="fas fa-house"></i>
                                </div>
                            </Link>
                        
                        <h3>Commercial</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>   
                    <SwiperSlide >
                        
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                               <div className='imgcart'>
                                   <i className="fa-solid fa-building"></i>
                               </div>
                           </Link>
                        
                        <h3>Warehouse</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                    <i className="fas fa-hotel"></i>
                               </div>
                            </Link>
                        
                        <h3>Villa</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                   <i className="fas fa-store"></i>
                                </div>
                            </Link>
                        
                        <h3>Apartment</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                   <i className="fas fa-hotel"></i>
                                </div>
                            </Link>
                       
                        <h3>Homestay</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                        className='swapcart'
                        style={{
                            height: '250px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            borderRadius: '8px',
                        }}
                        >
                            <Link href="/Properties">
                                <div className='imgcart'>
                                   <i className="fas fa-house"></i>
                                </div>
                            </Link>
                        
                        <h3>Commercial</h3>
                        <p>6 Properties</p>
                        </div>
                    </SwiperSlide>   
                    
            </Swiper>
        </div>
        </>
    )
}
export default PartmentTypes;