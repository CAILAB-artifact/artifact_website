import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// 이미지 
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";

export default function Work() {
  const navigate = useNavigate(); // 페이지 이동용 Hook

  const works = [
    { id: 1, image: work1, title: "Passage of Heritage", artist: "SEHWA MUSEUM", date: "05 - 14 NOV 2025" },
    { id: 2, image: work2, title: "Time of Materially", artist: "SEHWA MUSEUM", date: "05 - 14 NOV 2025" },
    { id: 3, image: work3, title: "Thresholds of Fragility: Heritage at Risk", artist: "SEHWA MUSEUM", date: "05 - 14 NOV 2025" },
    { id: 4, image: work4, title: "Resonance of Fragments", artist: "SEHWA MUSEUM", date: "05 - 14 NOV 2025" },
    { id: 5, image: work5, title: "Wall Graphic Visualization", artist: "SEHWA MUSEUM", date: "05 - 14 NOV 2025" },
  ];

  return (
    <PageWrapper>
      <Header color="black" />
      <Main>
        <TextBlock>
          <Title>
            Unveiling and <br /> Breathing Resonance
          </Title>
          <Subtitle>드러내고 숨쉬다</Subtitle>
        </TextBlock>

        <CardGrid>
          {works.map((work) => (
            <Card key={work.id} onClick={() => navigate(`/work/${work.id}`)}>
              <CardImage src={work.image} alt={work.title} />
              <CardContent>
                <Meta>
                  <span>{work.artist}</span>
                  <span>{work.date}</span>
                </Meta>
                <Separator />
                <CardTitle>
                  {work.title.includes(":") ? (
                    (() => {
                      const parts = work.title.split(":");
                      const left = parts.shift();
                      const right = parts.join(":").trim();
                      return (
                        <>
                          <span>{left}:</span>
                          <SmallTitleRight>{right}</SmallTitleRight>
                        </>
                      );
                    })()
                  ) : (
                    work.title
                  )}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </Main>

      <Footer />
    </PageWrapper>
  );
}

/* ===== 스타일 ===== */
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 140px 20px 80px;
  max-width: 1100px;
  margin: 0 auto;
`;

const TextBlock = styled.div`
  margin-bottom: 40px;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Card = styled.div`
  background: #111;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer; /* ✅ 클릭 가능 표시 */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 5 / 6;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.4s ease;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    aspect-ratio: 4 / 5;
  }
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.85;
  margin-bottom: 8px;
`;

const Separator = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin: 8px 0 12px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
`;

const SmallTitleRight = styled.span`
  display: inline-block;
  margin-left: 6px;
  font-size: 16px; /* smaller for the right-hand part */
  font-weight: 600;
  vertical-align: baseline;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
