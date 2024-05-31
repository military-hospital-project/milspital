import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import Dogtag from '../../assets/images/dogtag.webp';
import Password from '../../assets/images/password.webp';

function Signin() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    num: '',
    pw: '',
  });

  const { num, pw } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      <WrapInput>
        <InputIcon width='25px' height='25px' bgimage={Dogtag} />
        <Input
          placeholder='군번'
          name='num'
          value={num}
          onChange={handleChange}
        />
      </WrapInput>

      <WrapInput>
        <InputIcon width='22px' height='22px' bgimage={Password} />
        <Input
          placeholder='비밀번호'
          name='pw'
          value={pw}
          onChange={handleChange}
          type='password'
        />
      </WrapInput>

      <SignButton onClick={() => navigate('/main')}>로그인</SignButton>
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

export default Signin;
