import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function DetailTip() {
  const exampleText = `치료 과정은 환자의 적극적인 참여가 필수적입니다. 일상 생활에서 스트레스 관리를 위해 규칙적인 운동과 명상을 실천하세요.
    충분한 휴식과 균형 잡힌 식단은 신체의 자연 치유력을 도울 수 있습니다. 가능하면 가공식품과 고지방 식사를 피하고, 신선한 과일과 채소를 섭취하는 것이 좋습니다.
    정기적인 의료 상담을 통해 치료의 진행 상황을 점검하고, 필요에 따라 치료 방법을 조정해야 합니다. 가족과 친구들의 지지도 치료 과정에서 큰 힘이 됩니다.`;

  const formattedText = exampleText.replace(/([.?!])\s/g, '$1\n');

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

      <Tip>
        {formattedText.split('\n').map((line, index) => (
          <TipBox key={index}>{line}</TipBox>
        ))}
      </Tip>
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
  gap: 20px;
  color: ${palette('gray', 0)};
  background-color: ${palette('green', 1)};
  border-bottom: 1px solid ${palette('gray', 1)};
`;

const Tip = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
`;

const TipBox = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${palette('gray', 1)};
`;
