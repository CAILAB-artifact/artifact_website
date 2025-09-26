// src/pages/Home.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import banner from "../assets/banner.png"; // 도자기 이미지

import ImageSlider from "../components/ImageSlider";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

import ExhibitionText from "../components/ExhibitionText";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header /> {/* 항상 최상단에 고정 */}
      <Hero>
        <Background>
          <img src={banner} alt="ceramic vase" />
        </Background>
        <Title>Unveiling and<br />Breathing<br />Resonance</Title>
      </Hero>

      <ImageSlider images={[img1, img2, img3]} />

      <ExhibitionText />

      <CtaSection />

      <Footer />
    </>
  );
}

/* ---------------- styled ---------------- */

const Hero = styled.section`
  position: relative;
  width: 100%;
  height: auto; /* 이미지 비율에 맞춰 자동 높이 */
  overflow: hidden;
`;

const Background = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: contain; /* 잘리지 않고 전체 보이게 */
    display: block;

    /* 모바일에서 조금 더 크게 보이도록 */
    @media (max-width: 768px) {
      max-height: 80vh;
    }

    @media (max-width: 480px) {
      max-height: 90vh;
    }
  }
`;

const Title = styled.h1`
  position: absolute;
  left: clamp(24px, 8vw, 100px); /* 왼쪽 여백 */
  bottom: clamp(24px, 8vw, 100px); /* 하단 여백 */
  font-size: clamp(28px, 6vw, 120px); /* 뷰포트 크기에 맞게 반응 */
  font-weight: 800;
  color: white;
  line-height: 1.0;
  margin: 0;
  z-index: 1;
  text-align: left;
`;
