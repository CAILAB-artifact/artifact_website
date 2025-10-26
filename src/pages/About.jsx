// src/pages/About.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <PageWrapper>
      <Header color="black" />
      <Main>
        {/* 타이틀 */}
        <TextBlock>
          <Title>
            Unveiling and <br /> Breathing Resonance
          </Title>
          <Subtitle>드러내고 숨쉬다</Subtitle>
        </TextBlock>

        {/* 소개 텍스트 */}
        <Paragraph>
          《<strong>드러내고, 숨쉬다 (Unveiling and Breathing Resonance)</strong>》는
          문화체육관광부와 한국콘텐츠진흥원이 지원한 「초고정밀 문화재 복원을 위한 미세구조의
          3차원 정밀 정보 획득 및 저작 기술개발」 사업의 성과를 기반으로 마련된 전시입니다.
        </Paragraph>

        <Paragraph>
          이 사업은 지난 3년간 중앙대학교, 성균관대학교, 한국과학기술원, ㈜세이데이티밋텍 등
          여러 연구기관이 참여하여 진행되었습니다. 특히 소형 및 초소형 문화재의 미세 구조를
          초정밀하게 기록하고 보존하는 기술 개발에 주력했으며, 그 과정에서 수집된 방대한
          3차원 데이터는 단순한 기록을 넘어 디지털 테크놀로지 구현과 예술적 해석으로 확장될 수 있는
          새로운 가능성을 보여주었습니다.
        </Paragraph>

        <Paragraph>
          이번 전시는 이러한 연구 성과를 대중에게 공개하는 자리입니다. 관람객은 초고정밀 데이터와
          인공지능 기술이 결합해 만들어낸 3D 미디어 아트 작품을 통해, 과거와 현재, 원본성과 복원,
          기술과 미학이 교차하는 다층적인 경험을 체험할 수 있습니다.
        </Paragraph>

        <Paragraph>
          이는 단순히 전통 유물을 ‘보는 것’을 넘어, 디지털 기술이 문화재를
          어떻게 새롭게 해석하고 미래로 이어갈 수 있는지를 탐구하는 기회이기도 합니다. 
          《드러내고, 숨쉬다》는 문화재 보존의 미래적 비전을 공유하며, 기술과 예술이 만나는 새로운 장(場)을
          열어가고자 합니다.
        </Paragraph>
      </Main>

      <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
`;

const Main = styled.main`
  flex: 1;
  padding: 140px 20px 80px; /* Header 공간 확보 + 여백 크게 */
  max-width: 900px;
  margin: 0 auto;
`;

const TextBlock = styled.div`
  margin-bottom: 80px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(28px, 5vw, 42px);  
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px; 
  color: black;
`;

const Subtitle = styled.h2`
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 500;
  line-height: 1.4;
  color: #333;
  margin-bottom: 40px;
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 2;
  margin-bottom: 2.5rem;
  color: #222;

  max-width: 800px;   
  margin-left: auto; 
  margin-right: auto; 
  text-align: left;   
`;

