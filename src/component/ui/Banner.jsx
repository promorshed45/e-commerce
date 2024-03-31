import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';




import bannerOne from '../../assets/banner/bannerOne.jpg'
import bannerTwo from '../../assets/banner/bannerTwo.jpg'
import bannerThree from '../../assets/banner/bannerThree.jpg'
import bannerFour from '../../assets/banner/bannerFour.jpg'



const Banner = () => {
    return (
     
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // style={{ height: '400px', borderRadius: '10px' }}
            className='mySwiper h-full object-contain rounded-xl'
        >
            <SwiperSlide> <img className='w-full' src={bannerOne} /> </SwiperSlide>
            <SwiperSlide> <img src={bannerTwo} /> </SwiperSlide>
            <SwiperSlide> <img src={bannerThree} /> </SwiperSlide>
            <SwiperSlide> <img src={bannerFour} /> </SwiperSlide>
          
        </Swiper>
    );
};

export default Banner;