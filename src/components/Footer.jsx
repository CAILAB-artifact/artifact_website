// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <Content>
        <Title>Unveiling and Breathing Resonance</Title>
        <Subtitle>드러내고 숨쉬다</Subtitle>

        <Info>
          <p>장소: 세화미술관 (서울 종로구 새문안로 68)</p>
          <p>일정: 2025.11.15 – 2025.11.20</p>
          <p>주최: 중앙대학교, 성균관대학교, 한국과학기술원, ㈜씨에이티밋텍</p>
          <p>후원: 한국콘텐츠진흥원</p>
          <p>Email: support@heritage-exhibit.org</p>
          <p>Tel: (+82) 02-1234-5678</p>
        </Info>

        <Copyright>
          ©2025 《Unveiling and Breathing Resonance》 Exhibition Team. All Rights Reserved.
        </Copyright>
      </Content>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: #222;
  color: #eee;
  padding: 3rem 1.5rem;
  text-align: left;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 2rem;
  color: #ccc;
`;

const Info = styled.div`
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 2rem;
  p {
    margin: 0.2rem 0;
  }
`;

const Copyright = styled.div`
  font-size: 12px;
  color: #888;
  text-align: center;
  margin-top: 2rem;
`;
