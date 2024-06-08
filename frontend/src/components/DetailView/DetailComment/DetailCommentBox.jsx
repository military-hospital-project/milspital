import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import profile from '../../../assets/images/name.webp';
import doctorMark from '../../../assets/images/doctorMark.webp';

export default function DetailCommentBox({ comments = [] }) {
  const [isEdit, setIsEdit] = useState(true);
  const [inputValue, setInputValue] = useState('감사합니다');

  useEffect(() => {}, [comments]);

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
        {comments.map((comment) =>
          comment.writerId !== 1 ? (
            <Comment key={comment.commentId}>
              <Profile src={profile} alt='profile' />
              <CommentContainer>
                <Nickname>{comment.nickname}</Nickname>
                <Comments>{comment.content}</Comments>
                <CreatedAt>{comment.createdAt}</CreatedAt>
              </CommentContainer>
            </Comment>
          ) : null
        )}
        {comments
          .filter((comment) => comment.writerId === 1)
          .map((comment) => (
            <MyComment key={comment.commentId}>
              <Profile src={profile} alt='profile' />
              <CommentContainer>
                <Nickname>{comment.nickname}</Nickname>
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
                  <div>{comment.createdAt}</div>
                </CreatedAt>
              </CommentContainer>
            </MyComment>
          ))}
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
  border: none;
  border-radius: 50px;
  color: white;
  background-color: ${(props) =>
    props.type === 'edit' ? palette('green', 0) : palette('delete', 0)};
  cursor: pointer;
  font-size: 10px;
  line-height: 16px;
`;
