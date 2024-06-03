import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { useNavigate } from 'react-router-dom';
import name from '../assets/images/name.webp';
import home from '../assets/images/home.webp';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate('/mypage');
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ProfileContainer>
      <MyPage src={name} alt='my-page' onClick={toggleOpen} />

      {isOpen && (
        <Details>
          <LargeImage src={name} alt='name' />
          <Nickname onClick={handleMyPageClick}>
            <HomeImage src={home} alt='home' />
            <div>매진매진이라네</div>
          </Nickname>
          <Logout>로그아웃</Logout>
        </Details>
      )}
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  position: relative;
  z-index: 1000;
`;

const MyPage = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid ${palette('gray', 1)};
  border-radius: 100%;
  cursor: pointer;
`;

const Details = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  left: -200px;
  color: ${palette('gray', 0)};
  background: ${palette('green', 1)};
  /* border: 1px solid ${palette('gray', 1)}; */
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 0 4px 8px ${palette('gray', 1)};
  padding: 20px 0;
`;

const LargeImage = styled.img`
  width: 120px;
  height: 120px;
  border: 2px solid ${palette('gray', 0)};
  border-radius: 100%;
  background: white;
  margin-bottom: 10px;
`;

const HomeImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  color: ${palette('gray', 1)};
`;

const Nickname = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    /* text-decoration: underline; */
    border-bottom: 1px solid ${palette('gray', 0)};
  }
`;

const Logout = styled.div`
  margin-top: auto;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
