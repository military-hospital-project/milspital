import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function PostListHeader({ hasOverflow }) {
  return (
    <MainContainer hasOverflow={hasOverflow}>
      <Header width='40%'>병명</Header>
      <Header width='30%'>병원 정보</Header>
      <Header width='15%'>닉네임</Header>
      <Header width='12%'>게시일</Header>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${palette('gray', 0)};
  border: none;
  border-radius: 36px;
  background-color: ${palette('green', 1)};
  margin-bottom: 8px;
  /* padding-left: 30px; */
  padding-right: ${(props) => (props.hasOverflow ? '15px' : '0')};
`;

const Header = styled.span`
  width: ${(props) => props.width};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
`;
