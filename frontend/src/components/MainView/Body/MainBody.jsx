import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import PostList from './PostList';
import filter from '../../../assets/images/filter.webp';

export default function MainBody() {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>장병들의 후기</Title>
        <FilterContainer>
          <FilterImage src={filter} alt='filter' />
          <span>필터</span>
        </FilterContainer>
      </TitleContainer>
      <PostList />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1280px;
  height: 100%;
  display: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const Title = styled.div`
  color: ${palette('gray', 0)};
  font-size: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${palette('gray', 0)};
  font-size: 16px;
`;

const FilterImage = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
