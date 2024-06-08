import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { palette } from 'styled-tools';

export default function PostListItem({ index, item }) {
  const navigate = useNavigate();

  const onClickList = () => {
    navigate(`/detail/${item.postId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(
      dateString.replace(
        /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/,
        '$1-$2-$3T$4:$5:$6'
      )
    );
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <MainContainer onClick={onClickList}>
      <Item width='40%' fontSize='16px' justifyContent='flex-start'>
        {item.diseaseName}
      </Item>
      <Item width='22%' justifyContent=''>
        <Item1>{item.hospitalName}</Item1>
        <Item2>{item.departmentName}</Item2>
      </Item>
      <Item width='15%'>{item.nickname}</Item>
      <Item width='20%'>{formatDate(item.createdAt)}</Item>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${palette('gray', 0)};
  border: 1px solid ${palette('gray', 1)};
  border-radius: 15px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const Item = styled.span`
  width: ${(props) => props.width};
  display: flex;
  font-size: ${(props) => props.fontSize || '14px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
`;

const Item1 = styled.div`
  width: fit-content;
  height: 16px;
  color: white;
  background-color: ${palette('blue', 0)};
  border: none;
  border-radius: 3px;
  padding: 5px 8px;
  margin-right: 5px;
  line-height: 16px;
`;

const Item2 = styled.div`
  width: fit-content;
  height: 16px;
  color: white;
  background-color: ${palette('green', 0)};
  border: none;
  border-radius: 3px;
  padding: 5px 8px;
  line-height: 16px;
`;
