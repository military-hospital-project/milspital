import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import xicon from '../assets/images/xicon.webp';
import WritePopupBody from './WritePopupBody';

export default function WritePopup({ onClick }) {
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  return (
    <MainContainer>
      <Content>
        <Header>
          <span>진료 후기 작성</span>
          <Image src={xicon} alt='xicon' onClick={onClick} />
        </Header>

        <WritePopupBody setAllFieldsFilled={setAllFieldsFilled} />

        <SubmitButton disabled={!allFieldsFilled}>등록</SubmitButton>
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
  height: 700px;
  border: none;
  box-shadow: 0 0 10px 0;
  display: flex;
  flex-direction: column;
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

const SubmitButton = styled.button`
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1px solid ${palette('green', 0)};
  border-radius: 50px;
  color: ${palette('green', 0)};
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  opacity: 1;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
