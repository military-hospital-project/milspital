import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { deletePosts, postScraps } from '../../../api/detail';
import { getScraps } from '../../../api/mypage';
import WritePopup from '../../../EditPopup/WritePopup';
import spanner from '../../../assets/images/spanner.webp';
import trash from '../../../assets/images/trash.webp';
import pill from '../../../assets/images/pill.webp';
import hoverspanner from '../../../assets/images/hoverspanner.webp';
import hovertrash from '../../../assets/images/hovertrash.webp';
import hoverpill from '../../../assets/images/hoverpill.webp';
import selectpill from '../../../assets/images/selectpill.webp';

export default function DetailMainHeader({ detail }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [userId, setUserId] = useState(
    JSON.parse(sessionStorage.getItem('info')).userId
  );
  const [postId, setPostId] = useState(
    parseInt(location.pathname.split('/')[2])
  );
  const [isScrap, setIsScrap] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [scraps, setScraps] = useState([]);

  useEffect(() => {
    async function scrap() {
      const result = await getScraps(userId);
      console.log(result);
      if (result.some((post) => post.postId === postId)) {
        console.log(result.some((post) => post.postId === postId));
        setIsScrap(true);
      }
    }
    scrap();
  }, []);

  const onClickDelete = async () => {
    if (confirm('게시글을 삭제하시겠습니까?')) {
      const result = await deletePosts(postId);
      alert('삭제되었습니다.');
      navigate('/main');
    }
  };

  const onClickPill = async () => {
    const result = await postScraps({ userId, postId });
    setIsScrap(!isScrap);
  };

  return (
    <>
      <MainContainer>
        <Title>
          <TitleText>
            처 방 전
            {/* <span>처</span>
          <span>방</span>
          <span>전</span> */}
          </TitleText>
          {detail.userId ===
          JSON.parse(sessionStorage.getItem('info')).userId ? (
            <SmallImageWrapper>
              <SmallImage
                backImg={spanner}
                backHoverImg={hoverspanner}
                onClick={() => setIsEdit(!isEdit)}
                alt='spanner'
              />
              <SmallImage
                backImg={trash}
                backHoverImg={hovertrash}
                onClick={onClickDelete}
                alt='trash'
              />
            </SmallImageWrapper>
          ) : (
            <></>
          )}
          <BigImage
            backImg={isScrap ? selectpill : pill}
            backHoverImg={isScrap ? selectpill : hoverpill}
            onClick={onClickPill}
            alt='pill'
          />
        </Title>
        <Warning>
          참고용으로만 사용해 주시고 꼭 병원에 방문하여 의사와 상의하세요.
        </Warning>
      </MainContainer>
      {isEdit && (
        <Overlay>
          <WritePopup onClick={() => setIsEdit(!isEdit)} detail={detail} />
        </Overlay>
      )}
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 66px;
  border-bottom: 2px solid ${palette('gray', 1)};
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  margin: 12px 0 18px 0;
  justify-content: center;
  font-size: 28px;
  color: ${palette('gray', 0)};
`;

const TitleText = styled.div`
  position: absolute;
  width: 100%;
  line-height: 30px;
  width: 260px;
  word-spacing: 83px;
`;

const Warning = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 11px;
  color: ${palette('gray', 0)};
  margin: 0 0 0px 5px;
  /* padding: 5px; */
`;

const SmallImageWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 782px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.backImg});
  background-size: 100%;
  cursor: pointer;
  :hover {
    background-image: url(${(props) => props.backHoverImg});
  }
`;

const BigImage = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: 12px;
  background-image: url(${(props) => props.backImg});
  background-size: 100%;
  cursor: pointer;
  /* opacity: 50%; */
  :hover {
    background-image: url(${(props) => props.backHoverImg});
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 199;
`;
