import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function MyPageItem({ item }) {
  const navigate = useNavigate();

  console.log({ item });

  const onClickList = () => {
    navigate(`/detail`);
  };

  return (
    <>
      <MainContainer>
        <Checkbox type='checkbox' />
        <ItemHover
          onClick={onClickList}
          width='39%'
          fontSize='16px'
          justifyContent='flex-start'
        >
          {item.disease_name}
        </ItemHover>
        <Item width='30%' justifyContent=''>
          <Item1>{item.hospital}</Item1>
          <Item2>{item.department}</Item2>
        </Item>
        <Item width='15%'>{item.nickname}</Item>
        <Item width='12%'>{item.date}</Item>
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
