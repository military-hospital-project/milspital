import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import xicon from '../assets/images/xicon.webp';

export default function WritePopup({ onClick }) {
  return (
    <MainContainer>
      <Content>
        <Header>
          <span>진료 후기 작성</span>
          <Image src={xicon} alt='xicon' onClick={onClick} />
        </Header>
      </Content>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Content = styled.div`
  width: 1250px;
  height: 600px;
  border: none;
  box-shadow: 0 0 10px 0;
  display: flex-start;
  justify-content: center;
  padding: 24px;
  background: white;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: ${palette('gray', 0)};
  border-bottom: 1px solid ${palette('gray', 1)};
  padding-bottom: 10px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
