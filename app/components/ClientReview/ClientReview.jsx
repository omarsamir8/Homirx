'use client'
import './ClientReview.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // الأساسيات
import 'swiper/css/autoplay';
function ClientReview(){
    return (
        <>
        <div className='ClientReview'>
                <div className='clientimage'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team-2.jpg" alt="Logo" width={300} height={50} />
                </div>
                <div className='revcontent'>
                    <h5>Testimonials</h5>
                    <h2>What Your Client Say?</h2>
                    <div style={{marginTop:"-30px"}}>
                    <Swiper
                        style={{marginTop:"50px"}}
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop={true}
                                dir="ltr" // لدعم اللغة العربية أو الاتجاه من اليمين لليسار
                        >
                            <SwiperSlide >
                                <p>It's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters</p>
                                <div className='revline'><div className='revline2'></div></div>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                    <div className='userdet'>
                                        <Image style={{cursor:"pointer"}} src="/Assets/team-1.jpg" alt="Logo" width={50} height={50} />
                                        <div>
                                            <h3>Courtney</h3>
                                            <p>Marketing Coordinator</p>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                        (1)
                                    </div>
                                </div>
                                <div className='divslines'>
                                    <div style={{backgroundColor:"rgb(243, 100, 48)"}}></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                
                            </SwiperSlide> 
                            <SwiperSlide >
                                <p>It's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters</p>
                                <div className='revline'><div className='revline2'></div></div>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                    <div className='userdet'>
                                        <Image style={{cursor:"pointer"}} src="/Assets/team-2.jpg" alt="Logo" width={50} height={50} />
                                        <div>
                                            <h3>Kevin Smith</h3>
                                            <p>Company Founder</p>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                        (1)
                                    </div>
                                </div>
                                <div className='divslines'>
                                    <div style={{backgroundColor:"rgb(243, 100, 48)"}}></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                
                            </SwiperSlide> 
                            <SwiperSlide >
                                <p>It's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of lettersIt's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters</p>
                                <div className='revline'><div className='revline2'></div></div>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                    <div className='userdet'>
                                        <Image style={{cursor:"pointer"}} src="/Assets/team-4.jpg" alt="Logo" width={50} height={50} />
                                        <div>
                                            <h3>Jessica Brown</h3>
                                            <p>Founder & CEO</p>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                        (1)
                                    </div>
                                </div>
                                <div className='divslines'>
                                    <div style={{backgroundColor:"rgb(243, 100, 48)"}}></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                
                            </SwiperSlide> 
                    </Swiper>
                    </div>
                   
                </div>
        </div>
        </>
    )
}
export default ClientReview;