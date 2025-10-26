// src/pages/Artists.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 아티스트 이미지
import artist1 from "../assets/artist1.png";
import artist2 from "../assets/artist2.png";
import artist3 from "../assets/artist3.png";
import artist4 from "../assets/artist4.png";
import artist5 from "../assets/artist5.png";

export default function Artists() {
  const artists = [
    {
      role: "Research Director",
      name: "Bo A Rhee",
      email: "boatersea@cau.ac.kr",
      degree:
        "Ph.D. Florida State University / 예술경영학 박사\nM.A. 성균관대학교 / 미술학 석사, New York University / 예술경영학 석사 수료\nB.A. 성균관대학교 / 문헌정보학 학사",
      research:
        "Museum technology and informatics / Interactive media & interaction design,\nUser experience in exhibition & media (digital media, VR, AR, Metaverse),\n Culture consumer research using A.I., big data, and computer vision, Visitor\n prediction based on artificial intelligence and big data, Digital heritage user\n experience design",
      image: artist1,
    },
    {
      role: "Research Collaborator",
      name: "Youngho Kim",
      email: "youngho.kim@cau.ac.kr",
      degree:
        "Ph.D. 중앙대학교 첨단영상대학원 / 영상학박사\nM.A. 중앙대학교 첨단영상대학원 / 영상학석사\nB.A. 중앙대학교 / 미술학사",
      research: "XR / Interactive Media / Generative Design",
      image: artist2,
    },
    {
      role: "Creative & Research Team",
      name: "Seongmee Yoon",
      email: "bv829960@cau.ac.kr",
      degree:
        "Ph.D. candidate 중앙대학교 문화재학과 / 디지털 문화유산학 이학 박사 \nM.A. Newcastle University UK, Art Museum and Gallery Studies / 문학 석사 \nB.A. 충북대학교 고고미술사학과 / 문학 학사",
      research:
        "박물관학(Museum Studies), 디지털 인문학(Digital Humanities), 미술관 정보학(Museum \n Informatics), 박물관 관람객 경험(Visitor Experience in museums), 유산해석(Heritage \n Interpretation), 박물관 지역사회 참여 (Community Engagement in Museums)",
      image: artist3,
    },
    {
      role: "Creative & Research Team",
      name: "Soeun Park",
      email: "sj.caugsaim@gmail.com",
      degree: `M.S. Candidate Chung-Ang University, Graduate School of Advanced Imaging \n Science, Multimedia & Film / 공학 석사과정
              B.A. Chung-Ang University, College of Art & Technology & College of \n Software / 공학 학사`,
      research: `이미징 공학 및 예술 (Imaging Science and Arts), 인공지능 (Artificial Intelligence), 데이\n터 분석 및 시각화 (Data Analysis and Visualization)`,
      image: artist4,
    },
    {
      role: "Creative & Research Team",
      name: "Soeun Park",
      email: "boatersea@cau.ac.kr",
      degree:
        "Ph.D. Florida State University / 예술경영학 박사\nM.A. 뉴욕대학교 / 미술학 석사, New York University / 예술경영학 석사 수료\nB.A. 성균관대학교 / 경영정보학",
      research:
        "Museum technology and informatics / Interactive media interaction design\nUser experience in exhibition & media (digital media, VR, AR, Metaverse)\nCulture consumer research using AI, big data and computer vision",
      image: artist5,
    },
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

        {artists.map((artist, index) => (
          <ArtistCard key={index}>
            <ImageBox>
              <Photo src={artist.image} alt={artist.name} />
            </ImageBox>
            <InfoBox>
              <Role>{artist.role}</Role>
              <Name>{artist.name}</Name>
              <Email>{artist.email}</Email>
              <Paragraph>{artist.degree}</Paragraph>
              <SectionTitle>Research Area</SectionTitle>
              <Paragraph>{artist.research}</Paragraph>
            </InfoBox>
          </ArtistCard>
        ))}
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
  background: #fff;
`;

const Main = styled.main`
  flex: 1;
  padding: 140px 20px 80px;
  max-width: 1100px;
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

const ArtistCard = styled.div`
  display: flex;
  gap: 24px;
  padding: 40px 0;
  border-top: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageBox = styled.div`
  flex: 0 0 220px;
  display: flex;
  align-items: flex-start;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: auto;        
  }

`;

const InfoBox = styled.div`
  flex: 1;
`;

const Role = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 6px;
`;

const Name = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 6px;
  color: black;
`;

const Email = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin: 16px 0 8px;
  color: #222;
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: #444;
  line-height: 1.6;
  white-space: pre-line; /* 줄바꿈 반영 */
  margin-bottom: 12px;
`;
