import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import DetailMainHeader from './DetailMainHeader';
import DetailPersonalInformation from './DetailPersonalInformation';
import DetailReason from './DetailReason';
import DetailTreatmentProcess from './DetailTreatmentProcess';
import DetailTip from './DetailTip';

export default function DetailMain() {
  return (
    <MainContainer>
      <DetailMainHeader />
      <DetailPersonalInformation />

      <MiddleContainer>
        <DetailReason />
        <DetailTreatmentProcess />
      </MiddleContainer>

      <DetailTip />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 700px;
  border: 2px solid ${palette('gray', 1)};
`;

const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
`;
