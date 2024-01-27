import { useEffect, useRef } from 'react';
import {Swiper,  SwiperSlide} from 'swiper/react';

import { useProductContext } from '../../Services/ProductContext';
import StarIconSvg from '../../assets/images/StarIconSvg';
import "swiper/css"
import 'swiper/css/effect-cards';
import "./ProductSlider.css";
import { Autoplay } from 'swiper/modules';




export default function ProductSlider() {
  const { productList, loading } = useProductContext();
  const sliderRef = useRef(null);


 

  






  return (
    <div className="looped-product-container">
      <div className="looped-product-subcontainer">
        <div className="looped-product-wrapper">
          <div className='carousel-title text-center font-extrabold'>Here Are Some Basics.</div>
          
           <Swiper
           slidesPerView={1}
           centeredSlides="true"
           spaceBetween={0}
           loop={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
           breakpoints={{
            1000:{
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1530:{
              slidesPerView: 5,
              spaceBetween: 20,
            }
           }}
          modules={[Autoplay]}

           className="product-slider">
            {productList.map((card, index) => (
              <SwiperSlide key={card.id}>
                <div className='flex justify-center'>
                  <div className="looped-product-card-container" >
                    <div className="looped-product-card">
                      <img src={card.image} alt={`Product ${index}`}/>
                    </div>
                    
                    
                   
                  </div>
                </div>
                </SwiperSlide>
            ))}
          </Swiper>
          
       
        </div>
    </div>
    </div>
    
  );
}
