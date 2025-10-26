import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 이미지
import workdetail3_1 from "../assets/workdetail3-1.png";
import workdetail3_2 from "../assets/workdetail3-2.png";
import workdetail3_3 from "../assets/workdetail3-3.png";

export default function WorkDetail() {
  const videoIframe = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/c7TEuBtigFA?si=iYZJg4Zxg69ImsjH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;

  const images = [videoIframe, workdetail3_1, workdetail3_2, workdetail3_3];
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
          <Title>Thresholds of Fragility: Heritage at Risk</Title>
          <Subtitle>취약성의 임계선: 위기의 문화유산</Subtitle>
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
            국립해양유산연구소 자료에 따르면, 해양 출수 유물의 97%가 도자기이며, 
            최근 급격한 해수 온도 상승과 오염 물질 유입으로 인한 부식과 손상이 
            가속화되고 있음. 작품 〈취약성의 임계선: 위기의 문화유산〉은 이러한 해양 
            출수 도자기를 중심으로, 기후변화와 환경오염으로 인해 문화유산이 직면한 
            손상 문제를 디지털 기술로 시각화 함.
          </Paragraph>

          <Paragraph>
            이 미디어 작업은 유물의 다시점 3D RGB 4K 60FPS 이미지와 3차원 
            CT 데이터를 결합해 원형을 디지털로 재현하는 동시에, 실시간 환경 
            뉴스 데이터를 연동해 기후변화와 오염 수치에 따라 손상 과정을 가속·감속 
            시뮬레이션 함. 특히 CT 데이터는 수분 침투와 균열 과정의 시뮬레이션을 통해, 
            오염이 심화될수록 유물 손상이 누적되는 양상을 보여줌. 또한 이 작업은 단순한 
            보존을 넘어, 디지털 데이터가 지닌 고유한 특성을 통해 환경 문제와 문화유산 
            보존이라는 메시지를 확장하고 있음. 관람객은 유물의 과거를 기록하는 차원을 넘어, 
            변화와 재해석을 통해 새로운 의미와 형태로 확장되는 가능성을 경험하게 됨.
          </Paragraph>

          <Paragraph>
           According to the National Research Institute of Maritime Cultural 
           Heritage, 97% of marine-recovered artifacts are ceramics, and 
           corrosion and damage have accelerated with recent rises in sea 
           temperature and the influx of pollutants. &lt;Thresholds of 
           Fragility: Heritage at Risk&gt; focuses on these marine finds, 
           digitally visualizing the damage driven by climate change and 
           environmental pollution.
          </Paragraph>

          <Paragraph>
           The work combines multi-view 3D RGB 4K 60fps imagery with 3D CT 
           data to digitally reconstruct the originals, while linking to 
           real-time environmental news feeds to accelerate or decelerate 
           damage simulations based on climate and pollution indicators. 
           CT-based simulations of moisture ingress and cracking reveal 
           how damage accumulates as contamination intensifies. Beyond 
           simple preservation, the piece leverages the distinctive 
           capacities of digital data to amplify the message of environmental 
           crisis and cultural-heritage conservation. Visitors move past 
           mere record-keeping to experience the potential for heritage to 
           expand into new meanings and forms through change and reinterpretation.
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
