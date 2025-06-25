'use client'
import './TopProperty.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // الأساسيات
import 'swiper/css/autoplay';
function TopProperty(){
    return (
        <>
        <div className='TopProperty'>
           <h5>Latest Projects</h5>
           <h2>Meet Our Latest Real Estate Projects</h2>
           <div>
            <Swiper
             style={{marginTop:"50px"}}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    dir="ltr" // لدعم اللغة العربية أو الاتجاه من اليمين لليسار
            >
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-9-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 13 Listings</p>
                              <h3>01. California</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-8-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 3 Listings</p>
                              <h3>02. Las Vegas,Us</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-3-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 7 Listings</p>
                              <h3>03. Melbourne,AU</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-5-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 13 Listings</p>
                              <h3>04. NewYork,US</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-9-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 13 Listings</p>
                              <h3>01. California</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-8-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 3 Listings</p>
                              <h3>02. Las Vegas,Us</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-3-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 7 Listings</p>
                              <h3>03. Melbourne,AU</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/listing-5-600x385.jpg" alt="Logo" width={400} height={10} />
                        <div className='estatedisc'>
                            <div>
                               <p>_ 13 Listings</p>
                              <h3>04. NewYork,US</h3>
                            </div>
                            <div className='divarrow'>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
           </Swiper>   
           </div>
           
        </div>
        </>
    )
}
export default TopProperty;