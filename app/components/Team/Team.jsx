'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // الأساسيات
import 'swiper/css/autoplay';
import Link from 'next/link';
function Team(){
    return (
        <>
        <div style={{backgroundColor:"rgb(248, 248, 248)",color:"black",position:"relative"}} className='TopProperty'>
           <h5 style={{fontWeight:"bold"}}>Our Team</h5>
           <h2 style={{fontWeight:"bold",width:"50%"}}>Meet Our Latest Real Estate Team</h2>
          <Link href="/Members"><button style={{position:"absolute",top:"20px",right:"20px"}}  className="btn btn-outline aboutbutton"><i className="fa-solid fa-house"></i> View All Member</button></Link> 
           <div>
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
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team3.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team-1.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>     
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team-2.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>     
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team-4.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>     
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team3.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team-1.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>     
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team-2.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>     
                <SwiperSlide >
                    <div className='estate'>
                        <Image style={{cursor:"pointer"}} src="/Assets/team-4.jpg" alt="Logo" width={400} height={10} />
                        <div className='teamsocial'>
                          <i style={{backgroundColor:"rgb(243, 100, 48) ",color:"white",opacity:"1"}} className="fas fa-share"></i>  <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-instagram"></i> <i className="fab fa-twitter"></i> <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='teamdisc'>
                            <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Savannah Nguyen</h3>
                            <p style={{fontWeight:"bold",fontSize:"16px"}}>Call : (0123) 456 789</p>
                        </div>
                    </div>
                </SwiperSlide>     
                     
           </Swiper>   
           </div>
           
        </div>
        </>
    )
}
export default Team;