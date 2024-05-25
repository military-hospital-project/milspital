import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import Dogtag from '../../assets/images/dogtag.webp';
import Password from '../../assets/images/password.webp';

const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 142px;
  height: fit-content;
  margin-top: 68px;
`;

const SelectButton = styled.button`
  width: fit-content;
  height: 22px;
  margin-bottom: 30px;
  border: none;
  color: ${palette('gray', 0)};
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
`;

const WrapInput = styled(Horizontal)`
  position: relative;
  align-items: center;
  width: 300px;
  margin: 0 0 15px 0;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 8px 0 45px;
  color: ${palette('gray', 0)};
  border: 1px solid ${palette('gray', 1)};
  border-radius: 40px;
  outline: none;
  &::placeholder {
    color: ${palette('gray', 1)};
  }
`;

const InputIcon = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 10px;
  background-image: url(${(props) => props.bg || ''});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const SignButton = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 15px;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 40px;
  background-color: ${palette('green', 0)};
  cursor: pointer;
`;

function SignInUpPicker(state) {
  const [status, setStatus] = useState('signin');

  const handleStatus = (stat) => {
    setStatus(stat);
    console.log(status);
  };
  return (
    <>
      <Horizontal>
        <SelectButton onClick={() => handleStatus('signin')}>
          로그인
        </SelectButton>
        <SelectButton onClick={() => handleStatus('signup')}>
          회원가입
        </SelectButton>
      </Horizontal>

      <WrapInput>
        <InputIcon bg={Dogtag} />
        <Input placeholder='군번' />
      </WrapInput>

      <WrapInput>
        <InputIcon bg={Password} />
        <Input placeholder='비밀번호' />
      </WrapInput>

      <SignButton>로그인</SignButton>
    </>
  );
}

export default SignInUpPicker;
