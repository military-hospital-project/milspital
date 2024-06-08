import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import xicon from '../assets/images/xicon.webp';
import WritePopupBody from './WritePopupBody';
import { createPost } from '../api/main';

export default function WritePopup({ onClick }) {
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = async () => {
    if (!allFieldsFilled) return;

    const postData = {
      ...formData,
      writer_id: 1,
    };

    try {
      const response = await createPost(postData);
      console.log('Post created successfully:', response);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <MainContainer>
      <Content>
        <Header>
          <div>진료 후기 작성</div>
          <Image src={xicon} alt='xicon' onClick={onClick} />
        </Header>

        <WritePopupBody
          setAllFieldsFilled={setAllFieldsFilled}
          onDataChange={setFormData}
        />

        <SubmitButton disabled={!allFieldsFilled} onClick={handleSubmit}>
          등록
        </SubmitButton>
      </Content>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 0;
  z-index: 200;
`;

const Content = styled.div`
  width: 1250px;
  height: fit-content;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 30px 20px 30px;
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
  padding-bottom: 14px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 70px;
  height: 40px;
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
