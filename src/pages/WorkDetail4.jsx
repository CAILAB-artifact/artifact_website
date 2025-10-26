import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 이미지
import workdetail4_1 from "../assets/workdetail4-1.png";
import workdetail4_2 from "../assets/workdetail4-2.png";
import qr_1 from "../assets/qr_1.png";
import qr_2 from "../assets/qr_2.png";

export default function WorkDetail() {
  const videoIframe = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ggOpF1k9Ef0?si=I-HgIOwuOgeW59pi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;

  const images = [workdetail4_1, workdetail4_2, videoIframe];
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
          <Title>Resonance of Fragments</Title>
          <Subtitle>파편의 공명</Subtitle>
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
            〈파편의 공명〉은 백자호롱과 화문기화를 통해 유물이 단순한 과거의 흔적이 아니라 
            오늘날 우리와 대화하는 존재임을 보여줌. 백자호롱은 어둠을 밝히는 빛의 매개체로 
            조선인의 삶과 정서를 담고 있으며, 화문기화는 꽃무늬 장식을 통해 길상과 풍요를 
            기원하는 상징적 유물임.
          </Paragraph>

          <Paragraph>
            이 미디어는 유물의 겉모습을 넘어 보이지 않던 내면을 드러내고, QR코드를 통해 
            접속한 챗봇을 통해 유물의 ‘목소리’를 불러내 관람객과의 대화를 연다. 관람객은 
            실제 질감이 살아 있는 3D 데이터를 감상하며 과거의 의미가 오늘날 새로운 언어로 
            되살아나는 순간을 경험할 수 있음. 이 과정을 통해 유물은 빛과 기원의 메시지를 
            전하며, 기술과 예술이 교차하는 지점에서 특별한 소통의 장을 형성함.
          </Paragraph>

          <Paragraph>
            &lt;Resonance of Fragments&gt; shows that artifacts are not mere traces of 
            the past but voices in conversation with the present. The white-porcelain 
            lantern embodies the light that once pierced darkness, carrying the sentiments 
            and daily life of Joseon; the floral-tile (hwamun giwa) is a symbolic object 
            whose blossoms signified auspice and abundance.
          </Paragraph>

          <Paragraph>
            This media work looks beyond surface appearance to reveal an unseen interior.
            Through a QR-linked chatbot, the artifact’s “voice” is summoned to open a 
            dialogue with viewers. Audiences encounter high-fidelity 3D data whose tangible 
            textures invite close looking, experiencing the moment when past meanings 
            reanimate in a new language today. Through this process, the artifacts convey 
            messages of light and benediction, forming a distinctive field of exchange at 
            the intersection of technology and art.
          </Paragraph>
        </Content>
        {/* QR 코드 섹션 */}
        <QRRow>
          <QRItem>
            <QRImage src={qr_1} alt="qr 1" />
            <QRLabel>백자호롱</QRLabel>
          </QRItem>

          <QRItem>
            <QRImage src={qr_2} alt="qr 2" />
            <QRLabel>화문기화</QRLabel>
          </QRItem>
        </QRRow>
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

const QRRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 40px 0 60px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const QRItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const QRImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  background: #fff;
  padding: 8px;
`;

const QRLabel = styled.div`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc; /* 회색 구분선 */
  margin: 0 auto;
`;
