import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import { getPosts, getScraps } from '../../api/mypage';
import { deleteScraps, deletePosts } from '../../api/detail';
import MyPageItem from './MyPageItem';

export default function Picker() {
  const navigate = useNavigate();

  const [status, setStatus] = useState('write');
  const [all, setAll] = useState(false);
  const [postItems, setPostItems] = useState([]);
  const [scrapItems, setScrapItems] = useState([]);

  const [deletes, setDeletes] = useState([]);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem('info')).userId;
    getScraps(userId)
      .then((res) => {
        setScrapItems(res);
      })
      .catch((err) => setScrapItems([]));

    getPosts(userId)
      .then((res) => {
        setPostItems(res);
      })
      .catch((err) => setScrapItems([]));
    setAll(false);
  }, [status]);

  const onClickDelete = () => {
    console.log(deletes);
    if (deletes.length === 0) {
      alert('선택된 글이 없습니다.');
    } else {
      const userId = JSON.parse(sessionStorage.getItem('info')).userId;
      const data = {
        userId: userId,
        deleteList: deletes,
      };
      // console.log(data);
      if (status === 'scrap') {
        deleteScraps(data).then((res) => {
          if (res.status === 204) {
            alert('삭제되었습니다.');
          } else {
            alert('오류가 발생하였습니다.\n다시 시도해주십시오.');
          }
          window.location.reload();
        });
      } else {
        for (let i = 0; i < deletes.length; i++) {
          deletePosts(deletes[i]).then((res) => {
            if (res.status !== 204) {
              alert('오류가 발생하였습니다.\n다시 시도해주십시오.');
              window.location.reload();
            }
          });
        }
        alert('삭제되었습니다.');
        window.location.reload();
      }
    }
  };

  const handleSelectAll = () => {
    console.log(all);
    if (all === false) {
      if (status === 'write') {
        const newDeletes = postItems.map((item) => item.postId);
        setDeletes([...newDeletes]);
      } else {
        const newDeletes = scrapItems.map((item) => item.postId);
        setDeletes(newDeletes);
      }
      setAll(true);
    } else {
      setDeletes([]);
      setAll(false);
    }
  };

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
            <Checkbox
              type='checkbox'
              onChange={handleSelectAll}
              checked={all}
            ></Checkbox>
            <Label>전체 선택</Label>
          </WrapCheckBox>

          <DeleteBtn onClick={onClickDelete}>선택 삭제</DeleteBtn>
        </WrapRightItem>
      </Horizontal>
      {status === 'write'
        ? postItems.map((item) => {
            return (
              <MyPageItem
                key={item.postId}
                items={item}
                handleCheckbox={setDeletes}
              />
            );
          })
        : scrapItems.map((item) => {
            return (
              <MyPageItem
                key={item.postId}
                items={item}
                handleCheckbox={setDeletes}
              />
            );
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
