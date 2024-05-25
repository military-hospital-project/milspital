import React from 'react';
import { palette } from 'styled-tools';
import styled from 'styled-components';
import Button from '../components/base/Button';
import Div from '../components/base/Div';
import SignInUpPicker from '../components/templates/SignInUpPicker';
import logo1 from '../assets/images/logo1.webp';

function SignInUpView() {
  return (
    <>
      <Div
        display='flex'
        alignItems='center'
        flexDirection='column'
        width='448px'
        height='calc(100vh - 2px)'
        margin='0 auto'
        bgcolor={palette('green', 1)}
        border='1px solid #F3FBF3'
        // border='1px solid red'
      >
        <Div
          width='126px'
          height='121px'
          marginTop='160px'
          bgimage={logo1}
          bgsize='100%'
        />
        <SignInUpPicker />
      </Div>
    </>
  );
}

export default SignInUpView;
