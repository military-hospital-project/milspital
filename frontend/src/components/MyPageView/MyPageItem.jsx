import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import dayjs from 'dayjs';

export default function MyPageItem({
  items,
  handleCheckbox,
  handleDeletes,
  handleAll,
  Length,
}) {
  const navigate = useNavigate();
  // console.log(handleDeletes);

  useEffect(() => {
    if (handleDeletes.length === Length) handleAll(true);
    else handleAll(false);
  }, [handleDeletes, Length, handleAll]);

  const onClickList = (postId) => {
    navigate(`/detail/${postId}`);
  };

  const onChangeCheckbox = (postId) => {
    handleCheckbox((prev) => {
      const index = prev.indexOf(postId);
      if (index === -1) {
        return [...prev, postId];
      } else {
        const newArray = prev.filter((e) => e !== postId);
        return [...newArray];
      }
    });
  };

  return (
    <>
      <MainContainer key={items.postId}>
        <Checkbox
          type='checkbox'
          key={items.postId}
          onChange={() => onChangeCheckbox(items.postId)}
          checked={handleDeletes.includes(items.postId)}
        />
        <ItemHover
          onClick={() => onClickList(items.postId)}
          width='39%'
          fontSize='16px'
          justifyContent='flex-start'
        >
          {items.diseaseName}
        </ItemHover>
        <Item width='30%' justifyContent=''>
          <Item1>{items.hospitalName}</Item1>
          <Item2>{items.departmentName}</Item2>
        </Item>
        <Item width='15%'>{items.nickname}</Item>
        <Item width='12%'>
          {dayjs(items.createdAt).format('YYYY.MM.DD HH:mm:ss')}
        </Item>
      </MainContainer>
    </>
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
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0 0 0 0;
  border: 1px solid ${palette('gray', 1)};
  background-color: ${palette('blue', 0)};
`;

const Item = styled.span`
  width: ${(props) => props.width};
  display: flex;
  font-size: ${(props) => props.fontSize || '14px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
`;

const ItemHover = styled(Item)`
  margin-left: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
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
