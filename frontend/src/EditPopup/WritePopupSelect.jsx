import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { getHospitals, getDepartments } from '../api/main';

WritePopupSelect.propTypes = {
  onAllRequiredFilled: PropTypes.func.isRequired,
  onDataChange: PropTypes.func.isRequired,
};

export default function WritePopupSelect({
  onAllRequiredFilled,
  onDataChange,
  onSelectChange,
  selectDetail,
}) {
  const [hospital, setHospital] = useState(selectDetail.hospitalName);
  const [department, setDepartment] = useState(selectDetail.departmentName);
  const [disease, setDisease] = useState(selectDetail.diseaseName);
  const [hospitals, setHospitals] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    onAllRequiredFilled(hospital && department && disease);
    onDataChange({
      hospitalName: hospital,
      departmentName: department,
      diseaseName: disease,
    });
    onSelectChange({
      hospitalName: hospital,
      departmentName: department,
      diseaseName: disease,
    });
    // console.log(hospital, department, disease);
  }, [
    hospital,
    department,
    disease,
    onAllRequiredFilled,
    onDataChange,
    onSelectChange,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hospitalsData = await getHospitals();
        const departmentsData = await getDepartments();
        console.log('Hospitals:', hospitalsData);
        console.log('Departments:', departmentsData);
        setHospitals(hospitalsData);
        setDepartments(departmentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
            {hospitals.map((hospital) => (
              <option key={hospital.hospitalId} value={hospital.hospitalName}>
                {hospital.hospitalName}
              </option>
            ))}
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
            {departments.map((department) => (
              <option
                key={department.departmentId}
                value={department.departmentName}
              >
                {department.departmentName}
              </option>
            ))}
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
  font-weight: bold;
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
  outline: none;
  cursor: pointer;
`;

const DeseaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
`;

const DeseaseInput = styled.input`
  box-sizing: border-box;
  width: 555px;
  height: 36px;
  border: 1px solid ${palette('gray', 1)};
  font-size: 14px;
  color: ${palette('gray', 0)};
  padding: 4px 8px;
  outline: none;
`;
