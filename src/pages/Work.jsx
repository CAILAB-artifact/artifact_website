// src/pages/Work.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 예시 이미지 
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";

export default function Work() {
  return (
    <PageWrapper>
      <Header color="black" />
      <Main>
        {/* 상단 타이틀 */}
        <TextBlock>
          <Title>
            Unveiling and <br /> Breathing Resonance
          </Title>
          <Subtitle>드러내고 숨쉬다</Subtitle>
        </TextBlock>

        {/* 전시 카드 그리드 */}
        <CardGrid>
          <Card>
            <CardImage src={work1} alt="Passage of Heritage" />
            <CardContent>
              <Meta>
                <span>LEVINNON ARTISTS</span>
                <span>10 - 25 APR 2024</span>
              </Meta>
              <Separator />
              <CardTitle>Passage of Heritage</CardTitle>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={work2} alt="Time of Materially" />
            <CardContent>
              <Meta>
                <span>JOHNSON, MARY ANN</span>
                <span>09 - 12 MAY 2024</span>
              </Meta>
              <Separator />
              <CardTitle>Time of Materially</CardTitle>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={work3} alt="Currents of Time" />
            <CardContent>
              <Meta>
                <span>ⓒRTIST, EVORY</span>
                <span>01 - 30 JAN 2024</span>
              </Meta>
              <Separator />
              <CardTitle>Currents of Time</CardTitle>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={work4} alt="Resonance of Fragments" />
            <CardContent>
              <Meta>
                <span>RHEA GASOTREA</span>
                <span>17 - 20 OCT 2024</span>
              </Meta>
              <Separator />
              <CardTitle>Resonance of Fragments</CardTitle>
            </CardContent>
          </Card>
        </CardGrid>
      </Main>

      <Footer />
    </PageWrapper>
  );
}

/* ===== 스타일 ===== */
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 120px 20px 60px; /* Header 공간 확보 */
  max-width: 1100px;
  margin: 0 auto;
`;

const TextBlock = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 8px;
  color: black;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 40px;
  color: black;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 모바일 1열 */
    gap: 24px;
  }
`;

const Card = styled.div`
  background: #111;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 5 / 6; 
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.4s ease;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    aspect-ratio: 4 / 5; 
  }
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.85;
  margin-bottom: 8px;
`;

const Separator = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.4); 
  margin: 8px 0 12px;
`;

const CardTitle = styled.h3`
  font-size: 22px; 
  font-weight: 700;
  line-height: 1.3;
`;
