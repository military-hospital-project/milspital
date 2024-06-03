import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import MyPageItem from './MyPageItem';

export default function Picker(state) {
  const navigate = useNavigate();

  const [status, setStatus] = useState('write');
  const [postItems, setPostItems] = useState([
    {
      id: 1,
      disease_name: '소화불량',
      hospital: '국군부산병원',
      department: '내과',
      nickname: '나는 매진이라네',
      date: '2024.05.25 21:00:00',
      scrap: 5,
    },
    {
      id: 2,
      disease_name: '고열',
      hospital: '서울병원',
      department: '응급실',
      nickname: '매진매진이라네',
      date: '2024.05.26 10:00:00',
      scrap: 10,
    },
    {
      id: 3,
      disease_name: '두통',
      hospital: '대구병원',
      department: '정형외과',
      nickname: '혜진혜진',
      date: '2024.05.27 15:30:00',
      scrap: 1,
    },
  ]);

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
      {postItems.map((item) => {
        return <MyPageItem key={item.id} item={item} />;
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
