import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function WritePopupInput({ onRequiredFieldsFilled }) {
  const [cause, setCause] = useState('');
  const [treatment, setTreatment] = useState('');
  const [tips, setTips] = useState('');

  useEffect(() => {
    onRequiredFieldsFilled(cause.trim() !== '' && treatment.trim() !== '');
  }, [cause, treatment, onRequiredFieldsFilled]);

  return (
    <MainContainer>
      <InputWrapper>
        <Label>
          발병 원인 <RequiredIndicator>*</RequiredIndicator>
        </Label>
        <Textarea
          value={cause}
          onChange={(e) => setCause(e.target.value)}
          maxLength={500}
          placeholder='발병 원인을 500자 내로 적어주세요.'
          required
        />
        <CharacterCount>{cause.length}/500</CharacterCount>
      </InputWrapper>

      <InputWrapper>
        <Label>
          치료 과정 <RequiredIndicator>*</RequiredIndicator>
        </Label>
        <Textarea
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          maxLength={500}
          placeholder='치료 과정을 500자 내로 적어주세요.'
          required
        />
        <CharacterCount>{treatment.length}/500</CharacterCount>
      </InputWrapper>

      <InputWrapper>
        <span>나만의 팁</span>
        <Textarea
          value={tips}
          onChange={(e) => setTips(e.target.value)}
          maxLength={500}
          placeholder='나만의 팁을 500자 내로 적어주세요.'
        />
        <CharacterCount>{tips.length}/500</CharacterCount>
      </InputWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  font-size: 14px;
  color: ${palette('gray', 0)};
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RequiredIndicator = styled.span`
  color: red;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 110px;
  resize: none;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${palette('gray', 1)};
  box-sizing: border-box;
  overflow-y: auto;
`;

const CharacterCount = styled.div`
  align-self: flex-end;
  color: ${palette('gray', 2)};
`;
