import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo2.webp';
import name from '../../assets/images/name.webp';

export default function DetailHeader() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Image
        src={logo}
        alt='Logo'
        onClick={() => {
          navigate('/main');
        }}
      />
      <MyPage src={name} alt='my-page' />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 1280px;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 16px;
  /* padding: 0 30px; */
`;

const Image = styled.img`
  width: 45px;
  height: 40px;
  cursor: pointer;
`;

const MyPage = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 100%;
`;
