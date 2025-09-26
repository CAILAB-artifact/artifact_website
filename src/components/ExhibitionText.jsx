// src/components/ExhibitionText.jsx
import React from "react";
import styled from "styled-components";

export default function ExhibitionText() {
  return (
    <TextWrapper>
      <Title>Unveiling and<br/>Breathing Resonance</Title>
      <Subtitle>드러내고 숨쉬다</Subtitle>
      <Paragraph>
        《<strong>Unveiling and Breathing Resonance</strong> (드러내고, 숨쉬다)》는
        3년간 진행된 초고정밀 문화재 복원 연구 성과를 토대로 기획된 전시입니다.
        소형·초소형 유물의 미세 구조를 정밀하게 기록하고, 그 데이터를 인공지능
        기술과 결합하여 3D 미디어 아트로 재탄생시켰습니다.
      </Paragraph>
      <Paragraph>
        관람객은 단순히 유물을 ‘보는 것’을 넘어, <br />시간과 물질, 원본성과 복원이 교차하는
        장면 속에서 새로운 의미와 미적 경험을 체험하게 됩니다. <br />
        이 전시는 기술과 예술이 만나 만들어내는 문화재 보존의 미래적 비전을 함께
        상상하는 자리입니다.
      </Paragraph>
    </TextWrapper>
  );
}

const TextWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  color: #111;
  background: #fff;
  line-height: 1.6;
`;

const Title = styled.h2`
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 1.5rem;
`;
