import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo2.webp';

export default function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main');
  };

  return (
    <div>
      <Image src={logo} alt='Logo' onClick={handleLogoClick} />
    </div>
  );
}

const Image = styled.img`
  width: 45px;
  height: 40px;
  cursor: pointer;
`;
