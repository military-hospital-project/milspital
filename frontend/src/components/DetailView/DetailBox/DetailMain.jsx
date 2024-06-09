import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async (postId) => {
    try {
      const detail = await getDetailList(postId);
      console.log('Detail fetched:', detail);
      setDetail(detail);
    } catch (err) {
      console.error('Failed to fetch post detail:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const num = parseInt(location.pathname.split('/')[2]);
    // console.log(num);
    fetchDetail(num);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!detail) {
    return <div>Failed to load detail</div>;
  }

  return (
    <MainContainer>
      <DetailMainHeader detail={detail} />
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
          comments={detail.postId}
        />
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
