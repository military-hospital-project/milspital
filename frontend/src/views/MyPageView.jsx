import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import DetailHeader from '../components/DetailView/DetailHeader';
import MyCard from '../components/MyPageView/MyCard';
import Picker from '../components/MyPageView/Picker';
import MyPageItem from '../components/MyPageView/MyPageItem';

export default function MyPageView() {
  return (
    <MainContainer>
      <DetailHeader />
      <Title>마이페이지</Title>
      <MyCard />
      <Picker />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  box-sizing: border-box;
  width: fit-content;
  padding: 0 30px;
  border: 1px solid transparent;
`;

const Title = styled.div`
  margin: 30px 0 12px 0;
  font-size: 20px;
  color: ${palette('gray', 0)};
`;
