import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import SignIn from './Signin';
import SignUp from './Signup';

function SignInUpPicker(state) {
  const [status, setStatus] = useState('signin');

  return (
    <>
      <Horizontal>
        <SigninBtn
          active={status === 'signin'}
          onClick={() => setStatus('signin')}
        >
          로그인
        </SigninBtn>
        <SignupBtn
          active={status === 'signup'}
          onClick={() => setStatus('signup')}
        >
          회원가입
        </SignupBtn>
      </Horizontal>
      {status === 'signin' && <SignIn />}
      {status === 'signup' && <SignUp />}
    </>
  );
}

const Horizontal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 142px;
  height: fit-content;
  margin: 68px 0 30px 0;
`;

const SigninBtn = styled.button`
  width: fit-content;
  height: 25px;
  border: none;
  color: ${palette('gray', 0)};
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;

  border-bottom: ${({ status }) =>
    status === 'signin' ? '2px solid #6FD063' : ''};
`;

const SignupBtn = styled(SigninBtn)`
  border-bottom: ${({ status }) =>
    status === 'signup' ? '2px solid #6FD063' : ''};
`;

export default SignInUpPicker;
