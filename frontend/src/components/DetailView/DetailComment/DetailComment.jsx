import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import comment from '../../../assets/images/comment.webp';
import uploadComment from '../../../assets/images/uploadComment.webp';
import { postComments } from '../../../api/detail';

export default function DetailComment({ postId, onCommentPosted }) {
  const location = useLocation();

  const [commentText, setCommentText] = useState('');

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(sessionStorage.getItem('info')).userId;
    const postId = parseInt(location.pathname.split('/')[2]);
    const data = {
      userId: userId,
      postId: postId,
      content: commentText,
    };
    // console.log(data);
    try {
      const response = await postComments(data);
      console.log('Comment posted successfully:', response);
      setCommentText('');
      window.location.reload();
      if (onCommentPosted) {
        onCommentPosted();
      }
    } catch (error) {
      console.error(
        'Error posting comment:',
        error.response || error.message || error
      );
    }
  };

  return (
    <MainContainer onSubmit={handleSubmit}>
      <Image src={comment} alt='comment' />
      <CommentInput
        placeholder='댓글을 입력해주세요.'
        value={commentText}
        onChange={handleInputChange}
      />
      <SubmitButton type='submit'>
        <Image src={uploadComment} alt='uploadComment' />
      </SubmitButton>
    </MainContainer>
  );
}

const MainContainer = styled.form`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${palette('gray', 1)};
  font-size: 14px;
  border: 1px solid ${palette('gray', 1)};
  border-radius: 50px;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const CommentInput = styled.input`
  width: 91.5%;
  height: 90%;
  border: none;
  outline: none;
  font-size: 14px;
  color: ${palette('gray', 0)};
  ::placeholder {
    color: ${palette('gray', 1)};
  }
`;

const SubmitButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
