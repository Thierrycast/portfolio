import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container,ContainerSwiper, Project } from './style'

// Import Swiper styles
import 'swiper/css';


export default function ProjectsSection() {

    const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsScreenSmall(mediaQuery.matches);
    
    
    
  }, []);

    return (
        
        <Container id='s-projects' >
            <h1>Projetos( )</h1>

            <ContainerSwiper>
            <Swiper
            scrollbar={{ draggable: true }}
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={isScreenSmall ? 1.2 : 3.5}
                onSlideChange={() => console.log()}
                onSwiper={(swiper) => console.log('swiper')}
            >
                <SwiperSlide><Project><span>slide 1</span></Project></SwiperSlide>
                <SwiperSlide><Project><span>slide 2</span></Project></SwiperSlide>
                <SwiperSlide><Project><span>slide 3</span></Project></SwiperSlide>
                <SwiperSlide><Project><span>slide 4</span></Project></SwiperSlide>
                <SwiperSlide><Project><span>slide 5</span></Project></SwiperSlide>
                <SwiperSlide><Project><span>slide 6</span></Project></SwiperSlide>

                
            </Swiper>
            
            </ContainerSwiper>
        </Container>
    );
};