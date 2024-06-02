import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import spanner from '../../../assets/images/spanner.webp';
import hoverspanner from '../../../assets/images/hoverspanner.webp';
import trash from '../../../assets/images/trash.webp';
import pill from '../../../assets/images/pill.webp';

export default function DetailMainHeader() {
  return (
    <MainContainer>
      <Title>
        <TitleText>
          처 방 전
          {/* <span>처</span>
          <span>방</span>
          <span>전</span> */}
        </TitleText>
        <SmallImageWrapper>
          <SmallImage src={spanner} backHoverImg={hoverspanner} alt='spanner' />
          <SmallImage src={trash} alt='trash' />
        </SmallImageWrapper>
        <BigImage src={pill} alt='pill' />
      </Title>
      <Warning>
        참고용으로만 사용해 주시고 꼭 병원에 방문하여 의사와 상의하세요.
      </Warning>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 66px;
  border-bottom: 2px solid ${palette('gray', 1)};
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  margin: 12px 0 18px 0;
  justify-content: center;
  font-size: 28px;
  color: ${palette('gray', 0)};
`;

const TitleText = styled.div`
  position: absolute;
  width: 100%;
  line-height: 30px;
  width: 260px;
  word-spacing: 83px;
`;

const Warning = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 10px;
  color: ${palette('gray', 0)};
  margin: 0 0 0px 5px;
  /* padding: 5px; */
`;

const SmallImageWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 782px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover {
    background-image: url(${(props) => props.backHoverImg});
  }
`;

const BigImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: 12px;
  cursor: pointer;
  /* opacity: 50%; */
`;
