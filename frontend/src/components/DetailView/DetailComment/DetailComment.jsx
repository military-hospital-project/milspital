import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import comment from '../../../assets/images/comment.webp';
import uploadComment from '../../../assets/images/uploadComment.webp';

export default function DetailComment() {
  return (
    <MainContainer>
      <Image src={comment} alt='comment' />
      <CommentInput placeholder='댓글을 입력해주세요.' />
      <Image src={uploadComment} alt='uploadComment' />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${palette('gray', 1)};
  font-size: 14px;
  border: 1px solid ${palette('gray', 1)};
  border-radius: 50px;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const CommentInput = styled.input`
  width: 90%;
  height: 80%;
  border: none;
  color: ${palette('gray', 0)};
  ::placeholder {
    color: ${palette('gray', 1)};
  }
`;
