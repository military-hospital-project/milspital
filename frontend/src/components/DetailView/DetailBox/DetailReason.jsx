import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function DetailReason() {
  const exampleText = `이 질환은 주로 과로와 스트레스가 원인입니다. 과도한 업무와 부족한 휴식이 겹쳐 발생합니다.
심리적인 요인도 중요한 역할을 합니다. 지속적인 불안이나 스트레스가 면역력을 약화시켜서 증상을 유발할 수 있습니다.
유전적인 요인도 배제할 수 없으며, 가족력이 있는 경우 발병 가능성이 더 높습니다. 이외에도 여러 환경적 요인들이 복합적으로 작용합니다.

`;

  return (
    <MainContainer>
      <Header>
        <span>발</span>
        <span>병</span>
        <span>원</span>
        <span>인</span>
      </Header>
      <ReasonTextarea readOnly value={exampleText} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 50%;
  height: 229px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${palette('gray', 1)};
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: ${palette('gray', 0)};
  font-family: 'medium';
  background-color: ${palette('green', 1)};
  border-bottom: 1px solid ${palette('gray', 1)};
  border-right: 1px solid ${palette('gray', 1)};
`;

const ReasonTextarea = styled.textarea`
  box-sizing: border-box;
  width: 638px;
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
