import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function DetailPersonalInformation({ detail }) {
  const formatDate = (dateString) => {
    const date = new Date(
      dateString.replace(
        /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/,
        '$1-$2-$3T$4:$5:$6'
      )
    );
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <MainContainer>
      <VerticalBox>
        환<br />
        <br />자
      </VerticalBox>
      <TitleBox>
        <HorizontalTitle borderBottom>
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
          <TextSpan>{detail.nickname}</TextSpan>
        </HorizontalInformation>
        <HorizontalInformation>
          <TextSpan>{formatDate(detail.createdAt)}</TextSpan>
        </HorizontalInformation>
      </InformationBox>

      <VerticalBox>
        의<br />료<br />기<br />관
      </VerticalBox>

      <TitleBox>
        <HorizontalTitle borderBottom>
          <span>진</span>
          <span>료</span>
          <span>병</span>
          <span>원</span>
        </HorizontalTitle>
        <HorizontalTitle borderBottom>
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
              <TextSpan>{detail.hospitalName}</TextSpan>
            </HorizontalInformation>
            <HorizontalInformation>
              <TextSpan>{detail.departmentName}</TextSpan>
            </HorizontalInformation>
          </InformationBox>

          <TitleBox>
            <HorizontalTitle borderBottom>
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

          <InformationBox wide={true}>
            <HorizontalInformation borderBottom={true}>
              <TextSpan>{detail.address}</TextSpan>
            </HorizontalInformation>
            <HorizontalInformation>
              <TextSpan>{detail.phone}</TextSpan>
            </HorizontalInformation>
          </InformationBox>
        </HospitalBox>

        <HorizontalInformation>
          <TextSpan>{detail.diseaseName}</TextSpan>
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
  width: 44px;
  height: 100%;
  display: flex;
  font-family: 'medium';
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
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  color: ${palette('gray', 0)};
  font-family: 'medium';
  border-right: 1px solid ${palette('gray', 1)};
  border-bottom: ${(props) =>
    props.borderBottom ? `1px solid #cccccc` : 'none'};
`;

const InformationBox = styled.div`
  width: ${(props) => (props.wide ? '350px' : '250px')};
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
  color: ${palette('gray', 0)};
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
