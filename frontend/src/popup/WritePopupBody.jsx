import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import WritePopupSelect from './WritePopupSelect';
import WritePopupInput from './WritePopupInput';

export default function WritePopupBody({ setAllFieldsFilled }) {
  const [selectFieldsFilled, setSelectFieldsFilled] = useState(false);
  const [inputFieldsFilled, setInputFieldsFilled] = useState(false);

  useEffect(() => {
    setAllFieldsFilled(selectFieldsFilled && inputFieldsFilled);
  }, [selectFieldsFilled, inputFieldsFilled, setAllFieldsFilled]);

  return (
    <Body>
      <WritePopupSelect onAllRequiredFilled={setSelectFieldsFilled} />
      <WritePopupInput onRequiredFieldsFilled={setInputFieldsFilled} />
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  color: ${palette('gray', 0)};
  padding: 20px 0;
  gap: 20px;
`;
