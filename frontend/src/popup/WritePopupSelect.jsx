import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function WritePopupSelect({ onAllRequiredFilled }) {
  const [hospital, setHospital] = useState('');
  const [department, setDepartment] = useState('');
  const [disease, setDisease] = useState('');

  useEffect(() => {
    onAllRequiredFilled(hospital && department && disease);
  }, [hospital, department, disease]);

  return (
    <SelectContainer>
      <SelectBox>
        <Label>
          진료 병원 <RequiredIndicator>*</RequiredIndicator>
        </Label>
        <SelectWrapper>
          <Select
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            <option value='' disabled>
              병원을 선택하세요.
            </option>
            <option value='hospital1'>병원1</option>
            <option value='hospital2'>병원2</option>
            <option value='hospital3'>병원3</option>
          </Select>
        </SelectWrapper>
      </SelectBox>
      <SelectBox>
        <Label>
          진료과 <RequiredIndicator>*</RequiredIndicator>
        </Label>
        <SelectWrapper>
          <Select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value='' disabled>
              진료과를 선택하세요.
            </option>
            <option value='department1'>내과</option>
            <option value='department2'>외과</option>
            <option value='department3'>소아과</option>
          </Select>
        </SelectWrapper>
      </SelectBox>
      <DeseaseWrapper>
        <Label>
          병명 <RequiredIndicator>*</RequiredIndicator>
        </Label>
        <DeseaseInput
          placeholder='병명을 입력하세요.'
          required
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
        />
      </DeseaseWrapper>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${palette('gray', 0)};
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RequiredIndicator = styled.span`
  color: red;
  font-size: 14px;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 250px;
`;

const Select = styled.select`
  width: 100%;
  font-size: 14px;
  color: ${palette('gray', 0)};
  padding: 8px;
  border: 1px solid ${palette('gray', 1)};
  cursor: pointer;
`;

const DeseaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
`;

const DeseaseInput = styled.input`
  width: 555px;
  height: 30px;
  border: 1px solid ${palette('gray', 1)};
  font-size: 14px;
  color: ${palette('gray', 0)};
`;
