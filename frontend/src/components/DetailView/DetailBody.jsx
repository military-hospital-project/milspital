import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import DetailMain from './DetailBox/DetailMain';
import DetailComment from './DetailComment/DetailComment';
import DetailCommentBox from './DetailComment/DetailCommentBox';

export default function DetailBody() {
  return (
    <MainContainer>
      <DetailMain />
      <DetailComment />
      <DetailCommentBox />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${palette('gray', 1)};
  font-size: 14px;
`;
