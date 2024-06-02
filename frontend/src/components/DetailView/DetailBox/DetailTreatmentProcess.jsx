import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function DetailTreatmentProcess() {
  const exampleText = `이 질환의 치료 과정은 다양한 접근법을 포함합니다. 첫째로, 적절한 휴식과 스트레스 관리가 필요합니다. 둘째, 정기적인 운동과 건강한 식습관을 통해 신체의 전반적인 상태를 개선하는 것이 중요합니다. 셋째, 필요한 경우 약물 치료를 병행하여 증상을 완화시킬 수 있습니다. 이 외에도 상담이나 심리 치료가 도움이 될 수 있으며, 가족의 지지와 이해 또한 치료 과정에서 중요한 역할을 합니다.
  ㅁㄴㅇㄹ
  ㅁㄴㅇㄹ
  ㅁㄴㅇㄹ
  ㅁㄴㅇㄹ`;

  const formattedText = exampleText.replace(/([.?!])\s/g, '$1\n');

  return (
    <MainContainer>
      <Header>
        <span>치</span>
        <span>료</span>
        <span>과</span>
        <span>정</span>
      </Header>
      <TreatmentProcessTextarea readOnly>
        {exampleText}
      </TreatmentProcessTextarea>

      {/* <TreatmentProcess>
        {formattedText.split('\n').map((line, index) => (
          <TreatmentProcessBox key={index}>{line}</TreatmentProcessBox>
        ))}
      </TreatmentProcess> */}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 50%;
  height: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 2px solid ${palette('gray', 1)}; */
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
`;

// const TreatmentProcess = styled.div`
//   width: 100%;
//   height: 270px;
//   /* height: fit-content; */
//   overflow-y: auto;
//   color: ${palette('gray', 0)};
// `;

// const TreatmentProcessBox = styled.div`
//   padding: 10px;
//   border-bottom: 1px solid ${palette('gray', 1)};
// `;

const TreatmentProcessTextarea = styled.textarea`
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
    /* background: transparent; */
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background: ${palette('gray', 1)};
    border: 2px solid white;
    border-radius: 20px;
  }
`;
