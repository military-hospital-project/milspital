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
  /* width: 1278px; */
  /* height: 50px; */
  border: none;
  outline: none;
  font-size: 14px;
  color: ${palette('gray', 0)};
  ::placeholder {
    color: ${palette('gray', 1)};
  }
`;
