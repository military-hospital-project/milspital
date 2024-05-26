import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import spanner from '../../../assets/images/spanner.webp';
import bottle from '../../../assets/images/bottle.webp';
import hoverpill from '../../../assets/images/hoverpill.webp';

export default function DetailMainHeader() {
  return (
    <MainContainer>
      <Title>
        <TitleText>
          <span>처</span>
          <span>방</span>
          <span>전</span>
        </TitleText>
        <SmallImageWrapper>
          <SmallImage src={spanner} alt='spanner' />
          <SmallImage src={bottle} alt='bottle' />
        </SmallImageWrapper>
        <BigImage src={hoverpill} alt='hoverpill' />
      </Title>
      <Warning>
        참고용으로만 사용해 주시고 꼭 병원에 방문하여 의사와 상의하세요.
      </Warning>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${palette('gray', 1)};
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: ${palette('gray', 0)};
`;

const TitleText = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

const Warning = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 10px;
  color: ${palette('gray', 0)};
  padding: 5px;
`;

const SmallImageWrapper = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 350px;
  position: fixed;
`;

const SmallImage = styled.img`
  width: 20px;
  height: 20px;
`;

const BigImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: 10px;
  opacity: 50%;
`;
