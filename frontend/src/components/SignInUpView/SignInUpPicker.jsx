import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import Signin from './Signin';

function SignInUpPicker(state) {
  const [status, setStatus] = useState('signin');

  const handleStatus = (stat) => {
    console.log(stat);
    setStatus(stat);
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

      <Signin />
      {/* <Signup /> */}
    </>
  );
}

const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 142px;
  height: fit-content;
  margin-top: 68px;
`;

const SelectButton = styled.button`
  width: fit-content;
  height: 25px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 2px solid ${palette('green', 0)};
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
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  left: 10px;
  background-image: url(${(props) => props.bgimage || ''});
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

export default SignInUpPicker;
