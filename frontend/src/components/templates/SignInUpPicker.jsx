import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import Div from '../base/Div';
import Button from '../base/Button';
import Input from '../base/Input';
import Dogtag from '../../assets/images/dogtag.webp';

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
      <Div position='relative' display='flex' alignItems='center'>
        <Div
          position='absolute'
          width='25px'
          height='25px'
          bgimage={Dogtag}
          bgsize='100%'
          left='10px'
        />
        <Input
          width='300px'
          height='40px'
          padding='0px 7px 0px 45px'
          placeholder='군번'
          fontSize='14'
          color={palette('gray', 0)}
          borderRadius='40px'
          border='1px solid #ccc'
        />
      </Div>
    </>
  );
}

export default SignInUpPicker;
