import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 이미지
import workdetail2_1 from "../assets/workdetail2-1.png";
import workdeatil2_2 from "../assets/workdetail2-2.png";
import workdeatil2_3 from "../assets/workdetail2-3.png";

export default function WorkDetail() {
  const videoIframe = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y4S2NkTz6Hc?si=oBXPEw2Wd4vDqGmG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;

  const images = [videoIframe, workdetail2_1, workdeatil2_2, workdeatil2_3];
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
          <Title>Time of Materially</Title>
          <Subtitle>물성의 시간</Subtitle>
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
            &lt;물성의 시간&gt;은 전통 장신구 떨잠을 단순한 장식물이 아니라, 시간 속에서 끊임없이 변화하는 물질의 흐름으로 
            조명한 작품으로써, 작가는 떨잠을 빛과 금속, 유리와 산호, 진주와 옥 같은 서로 다른 재료들은 시대의 기술과 미적 감각, 
            여성의 삶과 시간을 응축한 물질적 기억의 매개체로 간주함.
          </Paragraph>

          <Paragraph>
            본 미디어 작품은 떨잠을 디지털 매체로 변환해, 보석의 굴절과 광택, 산호와 유리의 색감이 해체되고 다시 재구성되는 
            과정을 드러내고자 함. 유물은 과거에 정지된 객체가 아니라, 시간 속에서 살아 움직이며 변화하는 매체로 다시 태어남. 
            결과적으로 &lt;물성의 시간&gt;은 단순한 재현을 넘어, 물성과 시간이 얽히고 흩어지는 흐름 속에서, 물성이란 고정된 본질이 
            아니라 끊임없이 변화하는 존재임을 일깨우며, 관람객은 이 작품을 통해 반짝임과 파동의 리듬을 통해 물질이 지닌 감각적 
            시간을 체험할 수 있음.
          </Paragraph>

          <Paragraph>
           &lt;Time of Materiality&gt; reframes the traditional Korean hair ornament tteoljam—not as 
           a mere accessory, but as a stream of matter continually changing through time. The artist 
           regards its heterogeneous substances—light and metal, glass and coral, pearl and jade—as 
           mediators of material memory, condensing the technologies and aesthetics of each period 
           alongside the lived time of women.
          </Paragraph>

          <Paragraph>
           In this media work, the tteoljam is translated into a digital medium to expose the process 
           by which a gem’s refraction and sheen, and the chroma of coral and glass, are deconstructed 
           and recomposed. The artifact is reborn not as a static object of the past, but as a medium 
           that moves and transforms within time. Ultimately, Time of Materiality goes beyond representation. 
           Within the flows where material and time intertwine and scatter, it reminds us that materiality 
           is not a fixed essence but an ever-evolving presence. Through rhythms of shimmer and wave, 
           viewers experience the sensuous temporality of matter.
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
