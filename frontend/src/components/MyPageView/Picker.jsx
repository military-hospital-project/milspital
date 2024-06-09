import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import { getScraps } from '../../api/mypage';
import MyPageItem from './MyPageItem';

export default function Picker(state) {
  const navigate = useNavigate();

  const [status, setStatus] = useState('write');
  const [scrapItems, setScrapItems] = useState([]);
  const [postItems, setPostItems] = useState([]);
  const [deletePost, setDeletePost] = useState([]);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem('info')).userId;
    getScraps(userId).then((res) => {
      setScrapItems(res);
    });
  }, [status]);

  return (
    <>
      <Horizontal style={{ marginTop: '30px', marginBottom: '20px' }}>
        <WrapPicker>
          <WrtieBtn status={status} onClick={() => setStatus('write')}>
            작성글
          </WrtieBtn>
          <ScrapBtn status={status} onClick={() => setStatus('scrap')}>
            스크랩
          </ScrapBtn>
        </WrapPicker>
        <WrapRightItem>
          <WrapCheckBox>
            <Checkbox type='checkbox'></Checkbox>
            <Label>전체 선택</Label>
          </WrapCheckBox>

          <DeleteBtn>선택 삭제</DeleteBtn>
        </WrapRightItem>
      </Horizontal>
      {status === 'write'
        ? postItems.map((item) => {
            return <MyPageItem key={item.postId} items={item} />;
          })
        : scrapItems.map((item) => {
            return <MyPageItem key={item.postId} items={item} />;
          })}
    </>
  );
}

const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  /* margin: 30px 0 30px 0; */
`;

const WrapPicker = styled(Horizontal)`
  width: 130px;
`;

const WrapCheckBox = styled(Horizontal)`
  width: 75px;
  align-items: center;
  justify-content: none;
`;

const WrapRightItem = styled(Horizontal)`
  width: fit-content;
  align-items: center;
`;

const WrtieBtn = styled.button`
  box-sizing: content-box;
  width: fit-content;
  height: 24px;
  border: none;
  color: ${palette('gray', 0)};
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;

  border-bottom: ${({ status }) =>
    status === 'write' ? '2px solid #6FD063' : ''};
`;

const ScrapBtn = styled.button`
  box-sizing: content-box;
  width: fit-content;
  height: 24px;
  border: none;
  color: ${palette('gray', 0)};
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;

  border-bottom: ${({ status }) =>
    status === 'scrap' ? '2px solid #6FD063' : ''};
`;

const Label = styled.label`
  font-size: 13px;
  line-height: 14px;
  color: ${palette('gray', 0)};
`;

const Checkbox = styled.input`
  width: 14px;
  height: 14px;
`;

const DeleteBtn = styled.button`
  width: 75px;
  height: 22px;
  margin: 0 2px 0 8px;
  color: white;
  font-size: 14px;
  line-height: 21px;
  border: none;
  background-color: ${palette('delete', 0)};
  border-radius: 22px;
  cursor: pointer;
`;
