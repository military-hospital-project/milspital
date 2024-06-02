import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function PostListItem({ index, item }) {
  const navigate = useNavigate();

  const onClickList = () => {
    console.log(index);
    navigate(`/detail/${index}`);
  };

  return (
    <MainContainer onClick={onClickList}>
      <Item width='40%' fontSize='16px' justifyContent='flex-start'>
        소화불량, 고열
      </Item>
      <Item width='30%' justifyContent=''>
        <Item1>국군부산병원</Item1>
        <Item2>내과</Item2>
      </Item>
      <Item width='15%'>나는 매진이라네</Item>
      <Item width='12%'>2024.05.25 21:00:00</Item>
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
  /* padding-left: 20px; */
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
  background-color: ${palette('green', 0)};
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
  background-color: ${palette('gray', 0)};
  border: none;
  border-radius: 3px;
  padding: 5px 8px;
  line-height: 16px;
`;
