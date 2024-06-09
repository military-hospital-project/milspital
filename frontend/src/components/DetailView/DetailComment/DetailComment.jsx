import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import commentIcon from '../../../assets/images/comment.webp';
import uploadCommentIcon from '../../../assets/images/uploadComment.webp';
import { postComments } from '../../../api/detail';

const USER_ID = 1; // Temporary hardcoded user ID

export default function DetailComment({ postId, onCommentPosted }) {
  const [commentText, setCommentText] = useState('');

  const handleInputChange = (e) => {
    setCommentText(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText) {
      console.error('Comment text is empty.');
      return;
    }
    const data = {
      userId: USER_ID,
      postId: postId,
      content: commentText,
    };

    const response = await postComments(data);
    if (response) {
      console.log('Comment posted successfully:', response);
      setCommentText('');
      onCommentPosted && onCommentPosted();
    }
  };

  return (
    <MainContainer onSubmit={handleSubmit}>
      <Image src={commentIcon} alt='Comment' />
      <CommentInput
        placeholder='댓글을 입력해주세요.'
        value={commentText}
        onChange={handleInputChange}
      />
      <SubmitButton type='submit'>
        <Image src={uploadCommentIcon} alt='Upload Comment' />
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
