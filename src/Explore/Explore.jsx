import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const Explore = () => {
    return (
        <div className='text-center mt-8'>
            <h1 className="text-3xl text-[#ed2027] font-bold ">EXPLORE CITIES</h1>
            <p className="text-2xl"> Our location For You</p>
            <div class="animate__animated animate__backInLeft animate__delay-1s mt-4">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper w-[750px]"
                >
                    <SwiperSlide >
                        <div className='relative'><img src="https://i.ibb.co/VMkDjPj/explore-1.jpg" alt="" /></div>
                        <div className='absolute top-12 left-20 text-3xl text-purple-100 font-bold shadow-sm text-center '>
                            <h1>FOR SELL</h1>
                            <h1>LOS ANGLES</h1>
                            <h1>USA</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''><img src="https://i.ibb.co/4JWjzDC/explore-2.jpg" alt="" /></div>
                        <div className='absolute top-12 right-20  text-3xl text-red-600 font-bold shadow-lg text-center '>
                            <h1>FOR RENT</h1>
                            <h1>DUHA</h1>
                            <h1>QUATER</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:h-16 w-auto'><img src="https://i.ibb.co/yQQnrXJ/explore-3-1.jpg" alt="" /></div>
                        <div className='absolute top-24 left-20  text-3xl text-red-600 font-bold shadow-lg text-center '>
                            <h1>FOR RENT</h1>
                            <h1>JEDDA</h1>
                            <h1>KSA</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''><img src="https://i.ibb.co/BLjy8pV/explore-4.jpg" alt="" /></div>
                        <div className='absolute top-24 left-20  text-3xl text-white font-bold shadow-lg text-center '>
                            <h1>FOR SELL</h1>
                            <h1>COX'S BAZAR</h1>
                            <h1>BANGLADESH</h1>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div >
    );
};

export default Explore;