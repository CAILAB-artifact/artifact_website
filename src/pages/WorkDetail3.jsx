import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 이미지
import workdeatil3 from "../assets/workdetail3.png";


export default function WorkDetail() {
  return (
    <PageWrapper>
      <Header color="black" />
      <Main>
        {/* 제목 영역 */}
        <TextBlock>
          <Title>Currents Of Time</Title>
          <Subtitle>세월의 흐름</Subtitle>
        </TextBlock>
      </Main>
      <DescriptionSection>
        {/* 이미지 섹션 */}
        <ImageWrapper>
          <ImageContainer>
            <Image src={workdeatil3} alt="CurrentsOfTime" />

          </ImageContainer>
        </ImageWrapper>
      
      {/* 회색 설명 영역 */}
        <Content>
          <Paragraph>
            〈위기의 문화유산: 취약성의 시각화〉는 해양에서 출수된 문화유산, 특히 도자기를 중심으로 기후변화와
            환경오염으로 인해 가속화되는 손상 문제를 디지털 기술로 시각화한 작품이다. 국립해양문화재연구소의
            조사에 따르면, 해양 출수 유물의 97%가 도자기로, 최근 급격한 해수 온도 상승과 오염 물질 유입으로
            인해 부식과 균열이 빠르게 진행되고 있다.
          </Paragraph>

          <Paragraph>
            이 작품은 다각도의 3D RGB 4K 60FPS 이미지와 3차원 CT 데이터를 결합해 유물의 원형을 정밀하게
            복원한다. 동시에 실시간 합성 데이터로 형태 왜곡이 가해질수록 연도와 습도 수치에 따라 손상 진행을
            가속화하거나 완화하는 시뮬레이션을 구현한다. 특히 CT 데이터는 해수 침투와 미세 균열의 진행을 가시화하여,
            오염이 심화될수록 손상이 복제되는 양상을 시각적으로 보여준다.
          </Paragraph>

          <Paragraph>
           〈위기의 문화유산: 취약성의 시각화〉는 단순히 물리적 보존을 모사하는 데 그치지 않고, 디지털 데이터
            기반의 시뮬레이션을 통해 관람자가 문화유산의 취약성과 손상 메커니즘을 직접 확장된 담론으로 체험한다.
            이로써 보존과 재현, 복원과 재창조 사이의 경계를 허무는 전시로서 새로운 미디어 환경 속에서
            되는 가능성을 경험하게 된다.
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

const ImageWrapper = styled.div`
  border-radius: 8px;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 960px;
  border-radius: 6px;
  object-fit: contain;
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
