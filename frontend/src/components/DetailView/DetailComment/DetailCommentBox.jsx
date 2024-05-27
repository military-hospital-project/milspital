import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import profile from '../../../assets/images/name.webp';
import doctorMark from '../../../assets/images/doctorMark.webp';

export default function DetailCommentBox() {
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
            <Comments>감사합니다!</Comments>
            <CreatedAt>
              <Button type='edit'>수정</Button>
              <Button type='delete'>삭제</Button>2024.05.17. 21:30:00
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
      </CommentBox>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid ${palette('gray', 1)};
`;

const Header = styled.div`
  font-size: 16px;
  color: ${palette('gray', 0)};
  padding: 20px;
`;

const CommentBox = styled.div`
  width: 97%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: auto;
  overflow-y: auto;
  color: ${palette('gray', 1)};
  font-size: 14px;
  gap: 10px;
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
`;

const Comments = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  display: flex;
  gap: 5px;
`;

const CreatedAt = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10px;
  display: flex;
  gap: 5px;
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
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: none;
  border-radius: 50px;
  color: white;
  background-color: ${(props) =>
    props.type === 'edit' ? palette('green', 0) : palette('delete', 0)};
  cursor: pointer;
  font-size: 10px;
`;
