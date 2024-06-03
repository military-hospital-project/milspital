import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import name from '../../assets/images/name.webp';
import logo from '../../assets/images/logo4.webp';

export default function MyCard() {
  return (
    <CardContainer>
      <Logo src={logo}></Logo>
      <VerticalBox>
        <Image src={name}></Image>
        <div>
          <Name>군필여대생쨩</Name>
          <Nickname>2018158014</Nickname>
          <Info>작성글 : 4개</Info>
          <Info>스크랩 : 7개</Info>
        </div>
      </VerticalBox>
      <Title>장병들의 빠른 완쾌를 기원합니다.</Title>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 200px;
  border: 1px solid ${palette('gray', 1)};
  border-radius: 10px;
  background-color: ${palette('green', 1)};
`;

const Logo = styled.img`
  position: absolute;
  width: 68px;
  height: 15px;
  top: 12px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Title = styled.div`
  width: 100%;
  font-size: 12px;
  color: ${palette('gray', 0)};
  text-align: center;
  margin-top: 24px;
`;

const VerticalBox = styled.div`
  display: flex;
  color: ${palette('gray', 0)};
  margin: 42px 0 0 20px;
  gap: 28px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 2px solid ${palette('gray', 1)};
  border-radius: 80px;
`;

const Name = styled.div`
  margin-top: 6px;
  font-size: 16px;
`;

const Nickname = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${palette('gray', 0)};
`;
