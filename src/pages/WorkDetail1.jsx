import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 여러 이미지 임포트
import workdetail1 from "../assets/workdetail1.png";

export default function WorkDetail() {
  const videoIframe1 = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/o0_yZMWqMmY?si=JXzhC0WxoNGOlDv7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;

  const videoIframe2 = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KLT2zTfF86w?si=vyUROoeZkVEGvzhe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;

  const images = [videoIframe1, videoIframe2, workdetail1];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <PageWrapper>
      <Header />

      <Main>
        {/* 제목 영역 */}
        <TextBlock>
          <Title>Passage of Heritage</Title>
          <Subtitle>유산의 여정</Subtitle>
        </TextBlock>
      </Main>

      <DescriptionSection>
        {/* 이미지 슬라이드 섹션 */}
        <SliderContainer>
          <ArrowButton onClick={prevSlide}>‹</ArrowButton>

          <ImageContainer>
            {/* 이미지일 경우는 <SlideImage>, iframe 문자열일 경우는 그대로 삽입 */}
            {typeof images[current] === "string" && images[current].trim().startsWith("<iframe") ? (
              <VideoWrapper dangerouslySetInnerHTML={{ __html: images[current] }} />
            ) : (
              <SlideImage src={images[current]} alt={`slide ${current + 1}`} />
            )}
          </ImageContainer>

          <ArrowButton onClick={nextSlide}>›</ArrowButton>
        </SliderContainer>

        {/* 하단 작은 점 네비게이션 */}
        <Dots>
          {images.map((_, index) => (
            <Dot
              key={index}
              $active={index === current}
              onClick={() => setCurrent(index)}
            />
          ))}
        </Dots>

        {/* 회색 설명 영역 */}
        <Content>
          <Paragraph>
            &lt;유산의 여정&gt;은 부지쌈지, 인장, 청화백자주병 등 세 점의 유물을 3D 형태로 재구성하여 약 300도 회전이 
            가능한 인터랙티브 홀로그램으로 구현한 작품임. 관람객이 유물을 다양한 각도에서 조망할 수 있도록 설계되어 
            있으며, 각 유물의 현재 상태와 본 연구를 통해 획득한 내·외부 3차원 데이터가 정밀하게 동기화되어 있음. 
            이를 통해 관람객은 유물의 표면 질감, 균열, 내부 구조를 동시에 탐색하며, 눈에 보이지 않던 시간의 흔적을 
            감각적으로 경험할 수 있음.
          </Paragraph>

          <Paragraph>
            &lt;유산의 여정&gt;은 단순한 3D 복원이 아니라, 디지털 기술을 통해 유물의 물리적 한계를 넘어 그 안에 잠재된 
            시간성과 공간성을 드러내는 예술적 시도임. 회전하는 홀로그램은 과거와 현재, 물질과 데이터, 예술과 과학의 
            경계를 넘나들며 유물이 지닌 생명력을 새롭게 불러냄. 특히 복원된 과거의 형태와 현재의 손상된 상태가 
            실시간으로 전환·비교되며, 관람객은 시간의 흐름 속에서 문화유산이 겪어온 변화를 한눈에 체험할 수 있음.
          </Paragraph>

          <Paragraph>
            &lt;유산의 여정&gt;은 또한 ‘살아 있는 데이터로서의 문화유산’을 제안함. 유물의 형태와 질감, 손상 정보는 고정된 
            기록이 아니라, 기술과 감각의 상호작용을 통해 재해석되는 동적 존재로 제시됨. &lt;유산의 여정&gt;은 과거의 
            예술이 미래의 기술과 만나는 지점에서, 문화유산이 다시 숨쉬고 빛나는 디지털 재탄생의 순간을 구현하고 있음.
          </Paragraph>

          <Paragraph>
            &lt;Passage of Heritage&gt; reconstructs three artifacts—a Bujissamji (ornamental pouch), 
            a seal, and a blue-and-white porcelain bottle—as interactive 3D holograms that can be 
            rotated by nearly 300 degrees. Designed for immersive observation, the installation 
            synchronizes each artifact’s current form with high-precision internal and external 
            3D data acquired during the research process. This allows viewers to explore both the 
            surface textures and the inner microstructures of the artifacts simultaneously, revealing 
            subtle traces of time that are invisible to the naked eye.
          </Paragraph>

          <Paragraph>
            〈Beyond a simple act of digital reconstruction, Passage of Heritage reimagines heritage as a 
            living, temporal phenomenon that transcends its physical boundaries. Through rotation and motion, 
            the holograms bridge past and present, matter and data, art and science—awakening the latent 
            vitality embedded in these historical objects. As the restored forms and their present-day 
            deteriorated states alternate in real time, visitors witness the evolving condition of heritage 
            within the continuum of time.
          </Paragraph>

          <Paragraph>
            Ultimately, the work proposes a new understanding of cultural heritage as living data—not 
            a static record of the past, but a dynamic field of transformation where meaning is continually 
            redefined through technology and perception. At the intersection of light, data, and art, Passage 
            of Heritage invites viewers to experience the moment when heritage breathes anew, illuminated by
            both memory and innovation.
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

const DescriptionSection = styled.section`
  background: #222;
  padding: 60px 20px;
  margin-top: 20px;
  overflow-x: hidden;
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

const SlideImage = styled.img`
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

const Content = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 15px;
  line-height: 3;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 2.6;
    padding: 0 4px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 60px;
  white-space: pre-line;
  text-indent: 10px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
  margin: 0 auto;
`;
