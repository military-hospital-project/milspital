import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';
import { signup } from '../../api/signinup';
import Dogtag from '../../assets/images/dogtag.webp';
import Speical from '../../assets/images/speical.webp';
import Name from '../../assets/images/name.webp';
import Nickname from '../../assets/images/nickname.webp';
import Password from '../../assets/images/password.webp';
import Repassword from '../../assets/images/repassword.webp';

function SignUp() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('soldier');
  const [inputs, setInputs] = useState({
    armyNumber: '',
    specialtyNumber: '',
    name: '',
    nickname: '',
    password: '',
    repassword: '',
  });

  const { armyNumber, specialtyNumber, name, nickname, password, repassword } =
    inputs;

  useEffect(() => {
    setInputs({
      armyNumber: '',
      specialtyNumber: '',
      name: '',
      nickname: '',
      password: '',
      repassword: '',
    });
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const checkPassword = () => {
    if (inputs.password !== inputs.repassword) return false;
    else return true;
  };

  const checkInputs = () => {
    const keys = Object.keys(inputs).filter((key) => key !== 'specialtyNumber');

    for (let key of keys) {
      if (inputs[key].trim() === '') {
        return false;
      }
    }
    return true;
  };

  const onClickSignup = async () => {
    const { repassword, ...newInputs } = inputs;
    console.log(newInputs);

    if (checkPassword() && checkInputs()) {
      const result = await signup(newInputs);
      console.log(result.status);
      if (result.status === 201) {
        alert('회원가입에 성공했습니다.\n로그인 후 사용하실 수 있습니다.');
        window.location.reload();
      } else {
        alert('오류가 발생하였습니다.\n다시 시도해주십시오.');
      }
    } else if (!checkPassword()) {
      alert('비밀번호가 다릅니다.');
    } else if (!checkInputs()) {
      alert('값을 모두 작성해주세요.');
    } else {
      alert('오류가 발생하였습니다.\n다시 시도해주십시오.');
    }
  };

  return (
    <>
      <Flex margin='0 0 15px -160px'>
        <Flex>
          <RadioInput
            name='soldier'
            onChange={() => setStatus('soldier')}
            checked={status === 'soldier'}
          />
          <RadioLabel>장병</RadioLabel>
        </Flex>
        <Flex margin='0 0 0 10px'>
          <RadioInput
            name='soldier'
            onChange={() => setStatus('surgeon')}
            checked={status === 'surgeon'}
          />
          <RadioLabel>군의관</RadioLabel>
        </Flex>
      </Flex>

      <WrapInput>
        <InputIcon width='25px' height='25px' bgimage={Dogtag} />
        <Input
          placeholder='군번'
          name='armyNumber'
          value={armyNumber}
          onChange={handleChange}
        />
      </WrapInput>

      {status === 'surgeon' ? (
        <WrapInput>
          <InputIcon width='25px' height='25px' bgimage={Speical} />
          <Input
            placeholder='군사특기번호'
            name='specialtyNumber'
            value={specialtyNumber}
            onChange={handleChange}
          />
        </WrapInput>
      ) : (
        <div></div>
      )}

      <WrapInput>
        <InputIcon width='25px' height='25px' bgimage={Name} />
        <Input
          placeholder='이름'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </WrapInput>

      <WrapInput>
        <InputIcon width='25px' height='25px' bgimage={Nickname} />
        <Input
          placeholder='닉네임'
          name='nickname'
          value={nickname}
          onChange={handleChange}
        />
      </WrapInput>

      <WrapInput>
        <InputIcon width='22px' height='22px' bgimage={Password} />
        <Input
          placeholder='비밀번호'
          name='password'
          value={password}
          onChange={handleChange}
          type='password'
        />
      </WrapInput>

      <WrapInput>
        <InputIcon width='22px' height='22px' bgimage={Repassword} />
        <Input
          placeholder='비밀번호 재확인'
          name='repassword'
          value={repassword}
          onChange={handleChange}
          type='password'
        />
      </WrapInput>

      <SignButton onClick={onClickSignup}>회원가입</SignButton>
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

const Flex = styled.div`
  display: flex;
  margin: ${(props) => props.margin};
  /* width: 140px; */
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 16px;
  height: 16px;
  box-shadow: 0 0 0 1px ${palette('gray', 1)};
  border: 2.5px solid white;
  border-radius: 50%;
  background-color: white;

  &:checked {
    box-shadow: 0 0 0 1px ${palette('gray', 1)};
    border: 2.5px solid white;
    background-color: ${palette('green', 0)};
  }
`;

const RadioLabel = styled.label`
  margin-left: 2px;
  font-size: 14px;
  color: ${palette('gray', 0)};
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

export default SignUp;
