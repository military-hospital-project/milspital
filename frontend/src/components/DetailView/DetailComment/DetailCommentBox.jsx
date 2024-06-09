import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import dayjs from 'dayjs';
import { getComments, putComments, deleteComments } from '../../../api/detail';
import profile from '../../../assets/images/name.webp';
import doctorMark from '../../../assets/images/doctorMark.webp';

const MyCommentes = ({ comment, userId }) => {
  console.log('MyComment: ', comment.content);
  const [isEdit, setIsEdit] = useState(true);
  const [content, setContent] = useState(comment.content);

  const onClickEdit = (commentId) => {
    setIsEdit(!isEdit);
    if (isEdit === true) setIsEdit(false);
    else {
      const data = {
        userId: userId,
        content: content,
      };
      putComments(commentId, data).then((res) => {
        if (res.filter === 1 || typeof res.commentId === 'number') {
          alert('댓글이 수정되었습니다.');
          setIsEdit(true);
          window.location.reload();
        } else if (res.filter === 0) {
          alert('부적절한 단어가 검출되었습니다.');
        } else {
          alert('오류가 발생했습니다.\n다시 시도해주십시오.');
        }
      });
    }
  };
  const handleInput = (e) => {
    setContent(e.target.value);
  };

  const onClickDelete = (commentId) => {
    if (confirm('댓글을 삭제하시겠습니까?')) {
      deleteComments(commentId);
      window.location.reload();
      console.log('삭제');
    }
  };

  return (
    <MyComment>
      <Profile src={profile} alt='profile' />
      <CommentContainer>
        <WrapNickname>
          <div>{comment.nickname}</div>
          {comment.userType === 20 && <DoctorMark />}
        </WrapNickname>

        <MyCommentInput
          isEdit={isEdit}
          value={content}
          readOnly={isEdit}
          onChange={handleInput}
        />

        <CreatedAt>
          <Button type='edit' onClick={() => onClickEdit(comment.commentId)}>
            {isEdit ? '수정' : '확인'}
          </Button>
          <Button
            type='delete'
            onClick={() => onClickDelete(comment.commentId)}
          >
            삭제
          </Button>
          <div>{dayjs(comment.createdAt).format('YYYY.MM.DD HH:mm:ss')}</div>
        </CreatedAt>
      </CommentContainer>
    </MyComment>
  );
};

export default function DetailCommentBox() {
  const location = useLocation();
  const [postId, setPostId] = useState(location.pathname.split('/')[2]);
  const [userId, setUserId] = useState(
    JSON.parse(sessionStorage.getItem('info')).userId
  );
  // const [isEdit, setIsEdit] = useState(true);
  const [inputValue, setInputValue] = useState('감사합니다');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId).then((res) => {
      console.log(res);
      setComments(res.data);
    });
  }, []);

  // const onClickEdit = () => {
  //   console.log('edit');
  //   setIsEdit(!isEdit);
  // };

  return (
    <MainContainer>
      <Header>댓글</Header>
      <CommentBox>
        {comments.length === 0 ? (
          <First>첫댓글을 작성해주세요!</First>
        ) : (
          comments.map((comment) =>
            comment.writerId !== userId ? (
              <Comment key={comment.commentId}>
                <Profile src={profile} alt='profile' />
                <CommentContainer>
                  <WrapNickname>
                    <div>{comment.nickname}</div>
                    {comment.userType === 20 && <DoctorMark />}
                  </WrapNickname>
                  <Comments>{comment.content}</Comments>
                  <CreatedAt>
                    {dayjs(comment.createdAt).format('YYYY.MM.DD HH:mm:ss')}
                  </CreatedAt>
                </CommentContainer>
              </Comment>
            ) : (
              <MyCommentes
                key={comment.commentId}
                comment={comment}
                userId={userId}
              />
            )
          )
        )}
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
  height: fit-content;
  max-height: 344px;
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

const First = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
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

const WrapNickname = styled.div`
  display: flex;
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

const DoctorMark = styled.div`
  width: 15px;
  height: 15px;
  margin-left: 5px;
  margin-top: 2px;
  background-image: url(${doctorMark});
  background-size: 100%;
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
