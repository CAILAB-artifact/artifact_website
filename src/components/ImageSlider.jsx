// src/components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // 추가
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function ImageSlider({ slides = [] }) {
  const navigate = useNavigate(); // 페이지 이동용 Hook

  return (
    <SliderWrapper>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2} // 기본으로 가운데(3번째) 활성화
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        loop={false}
        modules={[EffectCoverflow, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => navigate(slide.link)} // 클릭 시 해당 링크로 이동
          >
            <PosterBox>
              <img src={slide.img} alt={`slide-${index}`} />
            </PosterBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}

/* ---------------- styled ---------------- */

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;
  background: #fff;

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    width: 280px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; 
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  .swiper-pagination {
    bottom: 0;
    top: auto;
  }

  .swiper-pagination-bullet {
    background: #555;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #555;
    width: 24px;
    height: 8px;
    border-radius: 8px;
  }
`;

const PosterBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(100%);
    transition: filter 0.6s ease;
  }

  .swiper-slide-active & img,
  &:hover img {
    filter: grayscale(0%);
  }
`;
