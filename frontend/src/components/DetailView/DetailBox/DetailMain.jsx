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
  width: calc(100% - 4px);
  height: 633px;
  overflow: hidden;
  border: 2px solid ${palette('gray', 1)};
  /* border-bottom: 1px solid ${palette('gray', 1)}; */
`;

const MiddleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  overflow: hidden;
  border-bottom: 2px solid ${palette('gray', 1)};
`;
