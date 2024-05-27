import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function DetailReason() {
  const exampleText = `이 질환은 주로 과로와 스트레스가 원인입니다. 과도한 업무와 부족한 휴식이 겹쳐 발생합니다.
심리적인 요인도 중요한 역할을 합니다. 지속적인 불안이나 스트레스가 면역력을 약화시켜서 증상을 유발할 수 있습니다.
유전적인 요인도 배제할 수 없으며, 가족력이 있는 경우 발병 가능성이 더 높습니다. 이외에도 여러 환경적 요인들이 복합적으로 작용합니다.`;

  const formattedText = exampleText.replace(/([.?!])\s/g, '$1\n');

  return (
    <MainContainer>
      <Header>
        <span>발</span>
        <span>병</span>
        <span>원</span>
        <span>인</span>
      </Header>
      <Reason>
        {formattedText.split('\n').map((line, index) => (
          <ReasonBox key={index}>{line}</ReasonBox>
        ))}
      </Reason>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 2px solid ${palette('gray', 1)};
  border-right: 1px solid ${palette('gray', 1)};
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${palette('gray', 0)};
  background-color: ${palette('green', 1)};
  border-bottom: 1px solid ${palette('gray', 1)};
  border-right: 1px solid ${palette('gray', 1)};
`;

const Reason = styled.div`
  width: 100%;
  height: 270px;
  overflow-y: auto;
`;

const ReasonBox = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${palette('gray', 1)};
`;
