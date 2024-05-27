import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function DetailPersonalInformation() {
  return (
    <MainContainer>
      <VerticalBox>
        환<br />
        <br />자
      </VerticalBox>

      <TitleBox>
        <HorizontalTitle borderBottom={true}>
          <span>작</span>
          <span>성</span>
          <span>자</span>
        </HorizontalTitle>
        <HorizontalTitle>
          <span>작</span>
          <span>성</span>
          <span>일</span>
        </HorizontalTitle>
      </TitleBox>

      <InformationBox>
        <HorizontalInformation borderBottom={true}>
          <TextSpan>나는매진이라네</TextSpan>
        </HorizontalInformation>
        <HorizontalInformation>
          <TextSpan>2024.05.17 17:00:00</TextSpan>
        </HorizontalInformation>
      </InformationBox>

      <VerticalBox>
        의<br />료<br />기<br />관
      </VerticalBox>

      <TitleBox>
        <HorizontalTitle borderBottom={true}>
          <span>진</span>
          <span>료</span>
          <span>병</span>
          <span>원</span>
        </HorizontalTitle>
        <HorizontalTitle borderBottom={true}>
          <span>진</span>
          <span>료</span>
          <span>과</span>
        </HorizontalTitle>
        <HorizontalTitle>
          <span>병</span>
          <span>명</span>
        </HorizontalTitle>
      </TitleBox>

      <HospitalWrapper>
        <HospitalBox>
          <InformationBox>
            <HorizontalInformation borderBottom={true}>
              <TextSpan>국군부산병원</TextSpan>
            </HorizontalInformation>
            <HorizontalInformation>
              <TextSpan>내과</TextSpan>
            </HorizontalInformation>
          </InformationBox>

          <TitleBox>
            <HorizontalTitle borderBottom={true}>
              <span>병</span>
              <span>원</span>
              <span>주</span>
              <span>소</span>
            </HorizontalTitle>
            <HorizontalTitle>
              <span>전</span>
              <span>화</span>
              <span>번</span>
              <span>호</span>
            </HorizontalTitle>
          </TitleBox>

          <InformationBox>
            <HorizontalInformation borderBottom={true}>
              <TextSpan>부산광역시 해운대구 세실로 186</TextSpan>
            </HorizontalInformation>
            <HorizontalInformation>
              <TextSpan>051-1234-2432</TextSpan>
            </HorizontalInformation>
          </InformationBox>
        </HospitalBox>

        <HorizontalInformation>
          <TextSpan>독감으로 인한 고열, 소화 불량 및 탈수</TextSpan>
        </HorizontalInformation>
      </HospitalWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: start;
  justify-content: start;
  border-bottom: 2px solid ${palette('gray', 1)};
`;

const VerticalBox = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${palette('gray', 0)};
  border-right: 1px solid ${palette('gray', 1)};
`;

const TitleBox = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HorizontalTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${palette('gray', 0)};
  border-right: 1px solid ${palette('gray', 1)};
  border-bottom: ${(props) =>
    props.borderBottom ? `1px solid #cccccc` : 'none'};
`;

const InformationBox = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HorizontalInformation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${palette('gray', 1)};
  border-right: 1px solid ${palette('gray', 1)};
  border-bottom: ${(props) =>
    props.borderBottom ? `1px solid #cccccc` : 'none'};
`;

const TextSpan = styled.span`
  padding-left: 10px;
`;

const HospitalWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HospitalBox = styled.div`
  height: 180px;
  display: flex;
  border-bottom: 1px solid ${palette('gray', 1)};
`;
