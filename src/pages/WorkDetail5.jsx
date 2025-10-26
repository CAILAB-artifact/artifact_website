import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 이미지
import workdetail5_1 from "../assets/workdetail5-1.png";
import workdetail5_2 from "../assets/workdetail5-2.png";
import workdetail5_3 from "../assets/workdetail5-3.png";

export default function WorkDetail() {
  
  const images = [workdetail5_1, workdetail5_2, workdetail5_3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <PageWrapper>
      <Header color="black" />
      <Main>
        {/* 제목 영역 */}
        <TextBlock>
          <Title>Wall Graphic Visualization</Title>
          <Subtitle>월 그래픽 시각화</Subtitle>
        </TextBlock>
      </Main>
      <DescriptionSection>
        {/* 이미지 슬라이드 섹션 */}
        <SliderContainer>
          <ArrowButton onClick={prevSlide}>‹</ArrowButton>

          <ImageContainer>
            {typeof images[current] === "string" && images[current].trim().startsWith("<iframe") ? (
              <VideoWrapper dangerouslySetInnerHTML={{ __html: images[current] }} />
            ) : (
              <Image src={images[current]} alt={`slide ${current + 1}`} />
            )}
          </ImageContainer>

          <ArrowButton onClick={nextSlide}>›</ArrowButton>
        </SliderContainer>

        {/* 하단 작은 점 네비게이션 */}
        <Dots>
          {images.map((_, index) => (
            <Dot key={index} $active={index === current} onClick={() => setCurrent(index)} />
          ))}
        </Dots>

        {/* 회색 설명 영역 */}
        <Content>
          <Paragraph>
            월 그래픽 시각화는 콘텐츠진흥원의 문화서비스 확산형 기술개발 과제 
            &lt;초고정밀 문화재 복원을 위한 미세구조의 3차원 정밀 정보 획득 및 저작 기술개발&gt;의
            참여 기관 역할과 3년간 연구 성과를 도식화한 것임. 한국원자력연구원, 한국과학기술원
            (KAIST), (주)씨에이티빔텍(CBT)은 내부 정보 획득용 3차원 CT 개발을 담당했음. 
            이들 기관들은 초고해상도 갠트리 회전형 X-선 CT 장치 설계 및 제작, AI 기반 초정밀 
            영상 데이터 정합 및 애셋화 기술, 소형 문화재 고정밀·고해상도 3D 데이터 획득을 수행함. 성균관대학교는 3D 스캐닝 
            기반 디지털 복원 기술에 주력하였음. 이를 위해 add-on 렌즈 기반 광학 기술, 
            Multiple Auto Exposure 기술, multi-resolution voxel 기반 표면 복원 정밀화, 이상치 자동 
            제거 및 고품질 Mesh 생성 기술을 개발했음.
          </Paragraph>

          <Paragraph>
            중앙대학교는 3차원 렌더링(IRIS Lab)과 문화 콘텐츠 개발(cAI Lab)을 담당함. 
            다시점 영상 기반 3차원 렌더링 모델 설계는 Implicit Neural Representations 
            (INRs) 기법, Progressive Score-Guided Masking 기법이 적용되어 미세구조까지 정확하고 
            빠르게 구현 될 수 있도록 함. 또한 문화 콘텐츠 개발은 문화유산 기반의 실감 콘텐츠 사례 검토 및 관람객의 
            관람경험 측정을 통한 초소형 문화 콘텐츠 개발의 방향성을 제시하며, 획득된 데이터를 종합하여 몰입형 실감미디어를 
            제작하고 이를 소개하는 쇼케이스를 진행함. 이번 쇼케이스는 각 기관의 연구 성과를 융합하여 인공지능과 창의성을 
            접목한 몰입형 실감미디어 예술 전시로 구현되었으며, 관람객에게 문화유산의 디지털 보존과 예술적 경험을 동시에 
            제공하고자 함.
          </Paragraph>

          <Paragraph>
           The wall graphic visualizes the roles of participating institutions and the three-year outcomes of 
           the KOCCA Cultural Service Expansion Project: “Development of Microstructure-Based 3D Precision 
           Information Acquisition and Authoring Technology for Ultra-Precise Cultural Heritage Restoration.” 
           The Korea Atomic Energy Research Institute, KAIST, and CAT BeamTech (CBT) developed 3D CT systems for 
           internal information acquisition, including ultra-high-resolution gantry-type X-ray CT design, AI-based 
           data registration and assetization, and high-precision 3D data acquisition of small-scale artifacts. 
           Sungkyunkwan University advanced 3D scanning-based digital restoration, developing add-on lens optical 
           technologies, Multiple Auto Exposure, multi-resolution voxel methods, and filtering for outlier removal 
           to produce high-quality meshes.
          </Paragraph>

          <Paragraph>
           Chung-Ang University contributed 3D rendering (IRIS Lab) and cultural content development (cAI Lab). 
           Multi-view rendering applied Implicit Neural Representations (INRs) and Progressive Score-Guided Masking 
           to capture fine microstructures efficiently. The content team examined cultural heritage-based immersive 
           media cases, studied visitor experiences, and integrated the datasets into an immersive exhibition. 
           This showcase illuminates the achievements of all institutions, merging artificial intelligence and creativity 
           into an immersive media art experience that offers audiences both artistic inspiration and insights into 
           digital heritage preservation.
          </Paragraph>
        </Content>
      </DescriptionSection>

      <BottomLine />

      <Footer />
    </PageWrapper>
  );
}

/* ===== styled-components ===== */
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
`;

const Main = styled.main`
  flex: 1;
  padding: 140px 20px 40px;
  max-width: 960px;
  margin: 0 auto;
`;

const TextBlock = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 10px;
  color: #000;
`;

const Subtitle = styled.h2`
  font-size: clamp(15px, 2vw, 18px);
  font-weight: 500;
  color: #444;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 960px;
  margin: 0 auto 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 960px;
  height: 540px; /* 이미지 높이 고정 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 프레임 밖 잘라내기 */
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 300px; /* 모바일에서는 약간 낮게 */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 프레임에 꽉 차게 */
  border-radius: 8px;
  transition: opacity 0.5s ease;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#fff" : "#777")};
  cursor: pointer;
  transition: background 0.3s ease;
`;

const DescriptionSection = styled.section`
  background: #222;
  padding: 60px 20px;
  margin-top: 20px;
  overflow-x: hidden;
`;

const Content = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 15px;
  line-height: 3; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 14px;   /* 모바일 가독성 개선 */
    line-height: 2.6;  /* 모바일에서 살짝 더 넓게 */
    padding: 0 4px;    /* 양쪽 여백 확보 */
  }
`;

const Paragraph = styled.p`
  margin-bottom: 60px; 
  white-space: pre-line;

  @media (max-width: 768px) {
    margin-bottom: 40px; /* 모바일에서는 조금 줄이기 */
  }
`;

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc; /* 회색 구분선 */
  margin: 0 auto;
`;
