// src/pages/About.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import poster_1 from "../assets/poster_1.png";
import poster_2 from "../assets/poster_2.png";

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
          한국콘텐츠진흥원이 지원한 「초고정밀 문화재 복원을 위한 미세구조의 3차원 정밀 정보 획득 및 저작 기술 개발(2023–2025)」은
          한국원자력연구소의 주도로 CAT Beam Tech, 한국과학기술원, 성균관대학교, 중앙대학교 연구팀이 함께 수행하고 있습니다. 
          본 프로젝트는 미세 구조를 지닌 초소형 문화유산을 비접촉식 방식으로 정밀하게 3차원 데이터화하고, 
          이를 기반으로 복원 및 문화콘텐츠 제작이 가능한 기술적 기반을 마련하는 것을 목표로 합니다.
        </Paragraph>

        <Paragraph>
          이번 쇼케이스 《드러내고, 숨쉬다(Unveiling and Breathing Resonance)》는 3년간의 연구 성과를 시각화하고, 
          고정밀 3차원 문화콘텐츠의 활용 가능성과 서비스 모델을 제시하는 장입니다. 본 쇼 케이스는 인공지능과 시각화 기술이 
          융합된 다양한 작품으로 구성되어 있으며, 〈월 그래픽 시각화〉, 〈유산의 여정(Passage of Heritage)〉, 
          〈물성의 시간(Time of Materiality)〉, 〈취약성의 임계선(Thresholds of Fragility): 위기의 문화유산Cultural Heritage 
          in Crisis〉, 〈파편의 공명(Resonance of Fragments)〉, 〈쇼케이스 웹사이트(Showcase Website)〉로 구성되어 있습니다.
        </Paragraph>

        <Paragraph>
          이번 쇼케이스는 문화유산의 보존과 재현, 기술과 예술, 데이터와 감성의 경계를 잇는 실험적 무대입니다. 
          이를 통해 우리가 잃어버린 것들과 다시 호흡하며 그 본질적 가치를 성찰할 수 있는 기회를 제공합니다.
        </Paragraph>

        {/* 포스터 섹션: 위쪽은 크게, 아래쪽은 더 작게 */}
        <PosterRow>
          <PosterTop>
            <PosterImage src={poster_1} alt="poster 1" />
          </PosterTop>

          <PosterSmall>
            <PosterImage src={poster_2} alt="poster 2" />
          </PosterSmall>
        </PosterRow>
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
  padding: 140px 20px 80px;
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
  margin-bottom: 4rem;
  color: #222;

  max-width: 800px;   
  margin-left: auto; 
  margin-right: auto; 
  text-align: left;   
`;

const PosterRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0 auto 4rem;
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 6px;
`;

const PosterTop = styled.div`
  width: 100%;
  max-width: 840px; /* 위에 것을 더 크게 */
  display: flex;
  justify-content: center;
`;

const PosterSmall = styled.div`
  width: 100%;
  max-width: 360px; /* 아래 것은 더 작게 */
  display: flex;
  justify-content: center;
`;

