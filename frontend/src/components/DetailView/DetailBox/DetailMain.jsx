import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import DetailMainHeader from './DetailMainHeader';
import DetailPersonalInformation from './DetailPersonalInformation';
import DetailReason from './DetailReason';
import DetailTreatmentProcess from './DetailTreatmentProcess';
import DetailTip from './DetailTip';
import DetailComment from '../DetailComment/DetailComment';
import DetailCommentBox from '../DetailComment/DetailCommentBox';
import { getDetailList } from '../../../api/detail';

export default function DetailMain() {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    const data = await getDetailList(1);
    setDetail(data);
  };

  return (
    <MainContainer>
      <DetailMainHeader />
      {detail && (
        <>
          <DetailPersonalInformation detail={detail} />
          <MiddleContainer>
            <DetailReason causeOfDisease={detail.causeOfDisease} />
            <DetailTreatmentProcess cureProcess={detail.cureProcess} />
          </MiddleContainer>
          <DetailTip tip={detail.tip} />
          <DetailComment postId={detail.postId} onCommentPosted={fetchDetail} />
          {detail.comments && (
            <DetailCommentBox
              key={detail.comments.length}
              comments={detail.comments}
            />
          )}
        </>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: calc(100% - 4px);
  height: 633px;
  overflow: hidden;
  border: 2px solid ${palette('gray', 1)};
`;

const MiddleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  overflow: hidden;
  border-bottom: 2px solid ${palette('gray', 1)};
`;
