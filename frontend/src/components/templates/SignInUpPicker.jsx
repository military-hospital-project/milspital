import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import Div from '../base/Div';
import Button from '../base/Button';
import Input from '../base/Input';

const borderStyle = css`
  border-bottom: 2px solid #6fd063;
`;

function SignInUpPicker(state) {
  const [status, setStatus] = useState('login');

  const handleStatus = (stat) => {
    setStatus(stat);
  };
  return (
    <>
      <Div
        display='flex'
        justifyContent='space-between'
        width='142px'
        marginTop='68px'
      >
        <Button
          width='fit-content'
          height='22px'
          border='none'
          color={palette('gray', 0)}
          fontSize='14px'
          name='로그인'
          backgroundColor='transparent'
          // onClick={handleStatus('signin')}
        />
        <Button
          width='fit-content'
          height='22px'
          border='none'
          color={palette('gray', 0)}
          fontSize='14px'
          name='회원가입'
          backgroundColor='transparent'
          // onClick={handleStatus('signup')}
        />
      </Div>
      <Input
        width='300px'
        height='40px'
        padding='0px 7px 0px 45px'
        placeholder='군번'
        fontSize='14'
        color='#ccc'
        borderRadius='40px'
        border='1px solid #ccc'
      />
    </>
  );
}

export default SignInUpPicker;
