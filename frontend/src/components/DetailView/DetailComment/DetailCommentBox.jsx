import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import profile from '../../../assets/images/name.webp';
import doctorMark from '../../../assets/images/doctorMark.webp';

export default function DetailCommentBox() {
  const [isEdit, setIsEdit] = useState(true);
  const [inputValue, setInputValue] = useState('감사합니다');

  const onClickEdit = () => {
    console.log('edit');
    setIsEdit(!isEdit);
  };

  const onClickDelete = () => {
    if (confirm('댓글을 삭제하시겠습니까?')) {
      console.log('삭제');
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <MainContainer>
      <Header>댓글</Header>
      <CommentBox>
        <Comment>
          <Profile src={profile} alt='profile' />
          <CommentContainer>
            <Nickname>매진매진이</Nickname>
            <Comments>꿀팁이군요!</Comments>
            <CreatedAt>2024.05.17. 21:00:00</CreatedAt>
          </CommentContainer>
        </Comment>

        <MyComment>
          <Profile src={profile} alt='profile' />
          <CommentContainer>
            <Nickname>나는 매진이라네</Nickname>
            <MyCommentInput
              isEdit={isEdit}
              value={inputValue}
              readOnly={isEdit}
              onChange={handleInput}
            />
            <CreatedAt>
              <Button type='edit' onClick={onClickEdit}>
                {isEdit ? '수정' : '확인'}
              </Button>
              <Button type='delete' onClick={onClickDelete}>
                삭제
              </Button>
              <div>2024.05.17. 21:30:00</div>
            </CreatedAt>
          </CommentContainer>
        </MyComment>

        <Comment>
          <Profile src={profile} alt='profile' />
          <CommentContainer>
            <Nickname>
              의사의사야
              <DoctorMark src={doctorMark} alt='doctorMark' />
            </Nickname>
            <Comments>꿀팁이군요!</Comments>
            <CreatedAt>2024.05.17. 22:00:00</CreatedAt>
          </CommentContainer>
        </Comment>

        <Comment>
          <Profile src={profile} alt='profile' />
          <CommentContainer>
            <Nickname>매진매진이</Nickname>
            <Comments>꿀팁이군요!</Comments>
            <CreatedAt>2024.05.17. 21:00:00</CreatedAt>
          </CommentContainer>
        </Comment>

        <Comment>
          <Profile src={profile} alt='profile' />
          <CommentContainer>
            <Nickname>매진매진이</Nickname>
            <Comments>꿀팁이군요!</Comments>
            <CreatedAt>2024.05.17. 21:00:00</CreatedAt>
          </CommentContainer>
        </Comment>

        <Comment>
          <Profile src={profile} alt='profile' />
          <CommentContainer>
            <Nickname>매진매진이</Nickname>
            <Comments>꿀팁이군요!</Comments>
            <CreatedAt>2024.05.17. 21:00:00</CreatedAt>
          </CommentContainer>
        </Comment>
      </CommentBox>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 2px solid ${palette('gray', 1)};
`;

const Header = styled.div`
  font-size: 16px;
  color: ${palette('gray', 0)};
  padding: 20px;
`;

const CommentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: auto;
  /* padding: 0 0px 0 0; */
  padding: 0 14px 14px 14px;
  overflow-y: auto;
  color: ${palette('gray', 0)};
  font-size: 14px;
  gap: 14px;
  &::-webkit-scrollbar {
    width: 20px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    border-radius: 16px;
    /* background: transparent; */
  }
  &::-webkit-scrollbar-thumb {
    width: 30px;
    background: ${palette('gray', 1)};
    border: 6px solid white;
    border-radius: 20px;
  }
`;

const Comment = styled.div`
  width: 700px;
  height: 50px;
  border: 1px solid ${palette('gray', 1)};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid ${palette('gray', 1)};
  border-radius: 100%;
`;

const CommentContainer = styled.div`
  position: relative;
  width: 600px;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${palette('gray', 0)};
  font-size: 14px;
`;

const Comments = styled.div`
  position: absolute;
  bottom: 6px;
  left: 0;
  font-size: 12px;
  display: flex;
  /* gap: 5px; */
`;

const MyCommentInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 99%;
  height: 22px;
  padding: ${({ isEdit }) => (isEdit ? '0px' : '1px 0 1px 5px')};
  border-radius: 4px;
  border: ${({ isEdit }) => (isEdit ? 'none' : '1px solid #ccc')};
  bottom: 0px;
  left: 0;
  font-size: 12px;
  color: ${palette('gray', 0)};
  outline: none;
`;

const CreatedAt = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${palette('gray', 1)};
`;

const MyComment = styled.div`
  width: 700px;
  height: 50px;
  border: 1px solid ${palette('gray', 1)};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: auto;
  padding: 10px 0;
`;

const DoctorMark = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 5px;
`;

const Button = styled.button`
  width: 30px;
  height: 16px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  /* margin: auto; */
  border: none;
  border-radius: 50px;
  color: white;
  background-color: ${(props) =>
    props.type === 'edit' ? palette('green', 0) : palette('delete', 0)};
  cursor: pointer;
  font-size: 10px;
  line-height: 16px;
`;
