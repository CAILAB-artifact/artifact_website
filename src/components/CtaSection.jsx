import React from "react";
import styled from "styled-components";
import museumMain from "../assets/museum_main.jpg";
import museumLeft from "../assets/museum_left.png";
import museumRight from "../assets/museum_right.png";

export default function CtaSection() {
  return (
    <Section>
      <Box>
        {/* 이미지 */}
        <MainImage src={museumMain} alt="Sehwa Museum Main" />
        <SideImageLeft src={museumLeft} alt="Sehwa Museum Left" />
        <SideImageRight src={museumRight} alt="Sehwa Museum Right" />

        {/* 텍스트 */}
        <Content>
          <Title>
            <TitleMain>SEHWA MUSEUM</TitleMain>
            <TitleSub>OF ART</TitleSub>
          </Title>
          <Desc>
            세화미술관(Sehwa Museum of Art)은 태광그룹 산하 세화예술문화재단이 2017년 개관한 현대미술관으로, <br />
            전통과 현대, 예술과 기술이 교차하는 다양한 전시를 통해 대중과 예술을 잇는 열린 공간을 지향합니다.
          </Desc>
          <Desc>
            광화문 도심 속에서 누구나 쉽게 예술을 향유할 수 있는 문화예술의 장으로 자리매김한 세화미술관은, <br />
            이번 《드러내고, 숨쉬다(Unveiling and Breathing Resonance)》 전시를 통해 <br />
            초고정밀 데이터와 인공지능 기술이 전통 유물과 만나는 특별한 순간을 선보입니다.
          </Desc>
          <MoreLink href="https://sehwamuseum.org/">세화미술관 &gt;</MoreLink>
        </Content>
      </Box>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
  margin: clamp(120px, 8vh, 180px) 0; 

`;

const Box = styled.div`
  position: relative;
  width: 90%;              /* 화면 기준 유동 */
  max-width: 800px;        /* 데스크탑에서는 800px 제한 */
  min-height: 400px;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  padding: 20px;
`;

const MainImage = styled.img`
  position: absolute;
  top: -25%;               
  width: 80%;
  max-width: 650px;
  height: clamp(180px, 25vw, 300px);
  object-fit: cover;

  filter: grayscale(100%);          /* 기본 흑백 */
  transition: filter 0.6s ease,     /* 부드러운 전환 */
              transform 0.6s ease;  /* 확대 효과 */

  &:hover {
    filter: grayscale(0%);          /* 컬러 전환 */
    transform: scale(1.05);         /* 살짝 확대 */
  }
`;

const SideImageLeft = styled.img`
  position: absolute;
  top: 15%;
  left: -7%;
  width: clamp(80px, 12vw, 110px);
  height: clamp(120px, 20vw, 170px);
  object-fit: cover;

  filter: grayscale(100%);
  transition: filter 0.6s ease, transform 0.6s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.08);   /* 작은 이미지는 확대를 조금 더 */
  }
`;

const SideImageRight = styled.img`
  position: absolute;
  top: 12%;
  right: -8%;
  width: clamp(80px, 12vw, 110px);
  height: clamp(180px, 25vw, 280px);
  object-fit: cover;

  filter: grayscale(100%);
  transition: filter 0.6s ease, transform 0.6s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.08);
  }
`;



const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 85%;
  margin-top: 25%;
  color: #fff;
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 35%;   /* 모바일에서 조금 더 아래 */
    max-width: 95%;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  line-height: 1.2;
`;

const TitleMain = styled.span`
  display: block;
  font-size: clamp(24px, 6vw, 50px);
  font-weight: 800;
`;

const TitleSub = styled.span`
  display: block;
  font-size: clamp(14px, 3vw, 28px);
  font-weight: 400;
  letter-spacing: 0.05em;
`;

const Desc = styled.p`
  font-size: clamp(12px, 1.5vw, 16px);
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 16px;
`;

const MoreLink = styled.a`
  position: absolute;
  bottom: -5%;              /* ✅ 박스 높이 기준 비율 */
  right: -6%;               /* ✅ 박스 너비 기준 비율 */
  font-size: clamp(10px, 1.5vw, 14px);
  font-weight: 700;
  color: #ccc;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    bottom: -8%;   /* 모바일에서 튀어나오는 정도 줄임 */
    right: -3%;
  }
`;
