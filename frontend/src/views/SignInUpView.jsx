import React from 'react';
import { palette } from 'styled-tools';
import styled from 'styled-components';
import SignInUpPicker from '../components/SignInUpView/SignInUpPicker';
import Logo1 from '../assets/images/logo1.webp';

const GreenBg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 448px;
  height: calc(100vh - 2px);
  margin: 0 auto;
  background-color: ${palette('green', 1)};
  border: 1px solid ${palette('green', 1)};
`;

const Logo = styled.div`
  width: 126px;
  height: 121px;
  margin-top: 160px;
  background-image: url(${Logo1});
  background-size: 100%;
`;
function SignInUpView() {
  return (
    <>
      <GreenBg>
        <Logo />
        <SignInUpPicker />
      </GreenBg>
    </>
  );
}

export default SignInUpView;
