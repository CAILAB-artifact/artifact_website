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
import artist6 from "../assets/artist6.png";
import artist7 from "../assets/artist7.png";
import artist8 from "../assets/artist8.png";
import artist9 from "../assets/artist9.png";
import artist10 from "../assets/artist10.png";
import artist11 from "../assets/artist11.png";

export default function Artists() {
  const artists = [
    {
      role: "Research Director",
      name: "Bo A Rhee",
      email: "boatersea@cau.ac.kr",
      degree:
        "Ph.D. Florida State University / 예술경영학 박사 \n M.A. 성균관대학교 / 미술학 석사, New York University / 예술경영학 석사 수료 \n B.A. 성균관대학교 / 문헌정보학 학사",
      research:
        `뮤지엄 테크놀로지 및 정보학 (Museum Technology & Informatics), \n 디지털 서러게이트와 메타버스 기반 사용자 경험 (User Experiences in Digital Surrogates & Metaverse for Museums), \n 인공지능 및 컴퓨터 비전 기반 전시 환경 연구 (AI & Computer Vision in Museum Environments), \n 뮤지엄 정보학 관점에서의 관람객 경험 (Visitor Experience in Terms of Museum Informatics)`,
      image: artist1,
    },
    {
      role: "Research Collaborator",
      name: "Youngho Kim",
      email: "youngho.kim@cau.ac.kr",
      degree:
        "Ph.D. 중앙대학교 첨단영상대학원 / 영상학박사 \n M.A. 중앙대학교 첨단영상대학원 / 영상학석사 \n B.A. 중앙대학교 / 미술학사",
      research: "확장현실 (XR, eXtended Reality), 인터랙티브 미디어(Interactive Media), \n 생성형 디자인 (Generative Design), 공간 컴퓨팅(Spatial Computing)",
      image: artist2,
    },
    {
      role: "Creative & Research Team",
      name: "Seongmee Yoon",
      email: "bv829960@cau.ac.kr",
      degree:
        "Ph.D. candidate 중앙대학교 문화재학과 / 디지털 문화유산학 이학 박사 중 \n M.A. Newcastle University UK, Art Museum and Gallery Studies / 문학 석사 \nB.A. 충북대학교 고고미술사학과 / 문학 학사",
      research:
        "박물관학(Museum Studies), 디지털 인문학(Digital Humanities),  \n 미술관 정보학(Museum Informatics), 박물관 관람객 경험(Visitor Experience in museums), \n 유산해석(Heritage Interpretation), 박물관 지역사회 참여(Community Engagement in Museums)",
      image: artist3,
    },
    {
      role: "Creative & Research Team",
      name: "Yeeun Seo",
      email: "sseo55@naver.com",
      degree:
        "Ph.D. Coursework Completed 중앙대학교 첨단영상대학원 영화 · 영상학과 / 박사과정 수료 \n  M.A. 중앙대학교 첨단영상대학원 영화 · 영상학과 / 공학 석사 \n B.A. 서강대학교 미디어공학과 / 학사",
      research:
        "인터랙티브 미디어(Interactive Media), 사용자 경험(UX) 디자인(User Experience Design), \n 3D 애니메이션(3D Animation), 예술공학(Art & Technology)",
      image: artist6,
    },
    {
      role: "Creative & Research Team",
      name: "Sojung Park",
      email: "sj.caugsaim@gmail.com",
      degree: `M.S. 중앙대학교 첨단영상대학원 영상학 석사 이수 중 \n B.E. 중앙대학교 컴퓨터예술학 및 소프트웨어공학 학사`,
      research: `이미징 공학 및 예술(Imaging Science and Arts), 인공지능(Artificial Intelligence), \n 멀티모달 학습(Multimodal Deep Learning), 데이터 시각화 및 분석 (Data Visualization & Analysis)`,
      image: artist4,
    },
    {
      role: "Creative & Research Team",
      name: "Soeun Park",
      email: "soeun.cau@gmail.com",
      degree: `M.S. 중앙대학교 첨단영상대학원 영상학 석사 이수 중 \n B.E. 중앙대학교 컴퓨터예술학 및 소프트웨어공학 학사`,
      research: `이미징 공학 및 예술(Imaging Science and Arts), 인공지능(Artificial Intelligence), \n 멀티모달 학습(Multimodal Deep Learning), 데이터 시각화 및 분석 (Data Visualization & Analysis)`,
      image: artist5,
    },
    {
      role: "Creative & Research Team",
      name: "Youmin Im",
      email: "sskeleton130@gmail.com",
      degree:
        "중앙대학교 컴퓨터예술학부, 응용통계학 학사과정 이수 중",
      research:
        "이미지 처리(Image Processing), 컴퓨터 비전(Computer Vision), \n 빅데이터 분석(Big Data Analytics), 생성 모델 및 데이터 증강(Generative Models & Data Augmentation), \n 데이터 시각화 및 분석 (Data Visualization & Analysis)",
      image: artist7,
    },
    {
      role: "Creative & Research Team",
      name: "Yugyum Kim",
      email: "kyg021003@cau.ac.kr",
      degree:
        "중앙대학교 예술공학부, 산업보안학과, 사이버보안융합전공 학사과정 이수 중",
      research:
        "프론트엔드 개발 (Front-End Development), 웹 백엔드(Web Backend), \n 컴퓨터 비전(Computer Vision), 빅데이터 분석(Big Data Analytics), \n 데이터 시각화 및 분석 (Data Visualization & Analysis)",
      image: artist8,
    },
    {
      role: "Creative & Research Team",
      name: "Minju Kim",
      email: "kmj48807283@gmail.com",
      degree:
        "중앙대학교 예술공학부, 실내환경디자인전공 학사과정 이수 중",
      research:
        "전시 공간 디자인(Exhibition Space Design), 실내 공간 디자인(Interior Space Design), \n 미디어 아트와 공간 연출(Media Art & Spatial Experience), 관람객 경험 디자인(Visitor Experience Design), \n 디지털 아카이빙 및 시각화(Digital Archiving & Visualization)",
      image: artist9,
    },
    {
      role: "Creative & Research Team",
      name: "Park Ye-bon",
      email: "boni7175@gmail.com",
      degree:
        "덕성여자대학교 가상현실융합학과 학사과정 이수 중",
      research:
        "확장현실 (XR, eXtended Reality), 공간 컴퓨팅(Spatial Computing), 인터랙티브 미디어(Interactive Media)",
      image: artist10,
    },
    {
      role: "Creative & Research Team",
      name: "Lee Do-yeon",
      email: "fostrim012@gmail.com",
      degree:
        "덕성여자대학교 가상현실융합학과 학사과정 이수 중",
      research:
        "인터랙티브 미디어(Interactive Media), 생성형 디자인 (Generative Design), \n 인터랙티브 사운드 아트 (Interactive Sound Art)",
      image: artist11,
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
