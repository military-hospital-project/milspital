import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function DetailTip({ tip }) {
  return (
    <MainContainer>
      <Header>
        <span>나</span>
        <span>만</span>
        <span>의</span>
        <span />
        <span>꿀</span>
        <span>팁</span>
      </Header>

      <TipTextarea readOnly value={tip}></TipTextarea>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-size: 14px;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-family: 'medium';
  color: ${palette('gray', 0)};
  background-color: ${palette('green', 1)};
  border-bottom: 1px solid ${palette('gray', 1)};
`;

const TipTextarea = styled.textarea`
  box-sizing: border-box;
  width: 1276px;
  height: 200px;
  overflow-y: auto;
  color: ${palette('gray', 0)};
  font-family: 'regular';
  border: none;
  padding: 0 10px;
  resize: none;

  background-attachment: local;
  background-image: linear-gradient(to right, white 0px, transparent 0px),
    linear-gradient(to left, white 0px, transparent 0px),
    repeating-linear-gradient(
      white,
      white 39px,
      ${palette('gray', 1)} 39px,
      ${palette('gray', 1)} 40px,
      white 40px
    );
  line-height: 40px;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background: ${palette('gray', 1)};
    border: 2px solid white;
    border-radius: 20px;
  }
`;
