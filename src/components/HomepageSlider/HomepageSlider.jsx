import { useEffect, useRef } from 'react';
import {Swiper,  SwiperSlide} from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';


export default function HomepageSlider () {

    return (
        <Swiper className="h-[70vh] w-[100vw] overflow-hidden shadow-md"
           modules={[EffectFade, Navigation]}
           effect="fade"
           navigation={true}
           slidesPerView={1}
           centeredSlides="true"
           spaceBetween={0}
           >
            <SwiperSlide>
              <div className="h-[70vh] w-[100vw]">
                    <img className="slider-img-1" src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" />
                    <div className="absolute bottom-52 glowing-text text-white bg-[#0303024f] p-5 font-thin w-[60%]">
                        <p className="font-thin">
                        Discover the joy in the small details – because life's most meaningful treasures are found in the simple and the splendid.
                        </p>
                        <a className="bg-[#9caf88bb] p-1" href="/Brilliant-Basics/store">Get Started.</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[70vh] w-[100vw]">
                    <img className="slider-img-2" src="https://images.pexels.com/photos/5184422/pexels-photo-5184422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <div className="absolute bottom-52 glowing-text text-white bg-[#0303024f] p-5 font-thin w-[60%]">
                        <p className="font-thin">
                        Uncover the perfect gifts for your significant other – timeless pieces that reflect the enduring nature of your love. From exquisite jewelry to finely crafted home decor, each item is a testament to the art of gifting.
                        </p>
                        <a className="bg-[#9caf88bb] p-1" href="/Brilliant-Basics/store">Get Started.</a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}