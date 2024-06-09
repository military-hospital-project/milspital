import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import xicon from '../assets/images/xicon.webp';
import WritePopupBody from './WritePopupBody';
import { putPosts } from '../api/detail';

export default function WritePopup({ onClick, detail }) {
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const [formData, setFormData] = useState({});

  const [selectDetail, setSelectDetail] = useState({
    hospitalName: detail.hospitalName,
    diseaseName: detail.diseaseName,
    departmentName: detail.departmentName,
  });

  const [inputDetail, setInputDetail] = useState({
    causeOfDisease: detail.causeOfDisease,
    cureProcess: detail.cureProcess,
    tip: detail.tip,
  });

  const [selectData, setSelectData] = useState({});
  const [inputData, setInputData] = useState({});

  console.log(selectData, inputData);
  const handleSubmit = async () => {
    if (!allFieldsFilled) return;

    // const postData = {
    //   ...formData,
    //   userId: JSON.parse(sessionStorage.getItem('info')).userId,
    // };

    const postData = {
      ...selectData,
      ...inputData,
      userId: detail.userId,
    };

    console.log(postData);

    try {
      const response = await putPosts(detail.postId, postData);
      console.log('Post created successfully:', response);
      if (response.filter === 1 && typeof response.postId === 'number') {
        alert('작성글이 수정되었습니다.');
        window.location.reload();
      } else if (response.filter === 0 && response.postId === null) {
        alert('욕설이 발견되었습니다.\n재작성 부탁드립니다.');
      } else {
        alert('오류가 발생하였습니다.\n다시 시도해주십시오.');
      }
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
          onSelectChange={setSelectData}
          onInputChange={setInputData}
          selectDetail={selectDetail}
          inputDetail={inputDetail}
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
