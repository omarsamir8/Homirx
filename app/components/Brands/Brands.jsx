'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // الأساسيات
import 'swiper/css/autoplay';
import Image from 'next/image';
import './Brands.css'
function Brands(){
    return (
        <>
        <div className="Brands">
            <Swiper
             style={{marginTop:"50px"}}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={5}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    dir="ltr" // لدعم اللغة العربية أو الاتجاه من اليمين لليسار
            >
                <SwiperSlide >
                    <div className='brand'>
                        <Image style={{cursor:"pointer"}} src="/Assets/brand-1.png" alt="Logo" width={300} height={50} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='brand'>
                        <Image style={{cursor:"pointer"}} src="/Assets/brand-2.png" alt="Logo" width={300} height={50} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='brand'>
                        <Image style={{cursor:"pointer"}} src="/Assets/brand-3.png" alt="Logo" width={300} height={50} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='brand'>
                        <Image style={{cursor:"pointer"}} src="/Assets/brand-4.png" alt="Logo" width={300} height={50} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='brand'>
                        <Image style={{cursor:"pointer"}} src="/Assets/brand-5.png" alt="Logo" width={300} height={50} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='brand'>
                        <Image style={{cursor:"pointer"}} src="/Assets/brand-6.png" alt="Logo" width={300} height={50} />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
        </>
    )
}
export default Brands;