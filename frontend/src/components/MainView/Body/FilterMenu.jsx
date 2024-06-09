import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function FilterMenu() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const filterMenuRef = useRef(null);
  const currentSortField = searchParams.get('sortField') || '';
  const currentSortOrder = searchParams.get('sortNote') || '';

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterMenuRef]);

  const handleSort = (field) => {
    let newSortOrder = 'desc';
    if (field === currentSortField) {
      newSortOrder = currentSortOrder === 'asc' ? '' : 'asc';
    }

    setSearchParams({ sortField: field, sortOrder: newSortOrder });
    window.location.reload();
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const sortOptions = [
    { key: 'date', label: '날짜' },
    // { key: 'scrap', label: '스크랩' },
    { key: 'disease_name', label: '병명' },
    { key: 'hospital', label: '병원' },
    { key: 'department', label: '진료과' },
    { key: 'nickname', label: '닉네임' },
  ];

  const renderSortArrow = (key) => {
    if (currentSortField === key) {
      return currentSortOrder === 'asc' ? ' ↑' : ' ↓';
    }
    return '';
  };

  return (
    <DropdownContainer ref={filterMenuRef}>
      <FilterButton onClick={toggleDropdown}>필터</FilterButton>
      {isOpen && (
        <MenuList>
          {sortOptions.map((option) => (
            <MenuItem
              key={option.key}
              selected={currentSortField === option.key}
              onClick={() => handleSort(option.key)}
            >
              {option.label}
              {renderSortArrow(option.key)}
            </MenuItem>
          ))}
          {currentSortField && (
            <ResetButton
              onClick={() => {
                setSearchParams({});
                window.location.reload();
              }}
            >
              초기화
            </ResetButton>
          )}
        </MenuList>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${palette('gray', 0)};
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MenuList = styled.div`
  width: 100px;
  text-align: center;
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  border: 1px solid ${palette('gray', 3)};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? palette('gray', 1) : 'white'};
  &:hover {
    background-color: ${palette('gray', 2)};
  }
`;

const ResetButton = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;
  background-color: ${palette('gray', 0)};
  color: white;
  &:hover {
    background-color: ${palette('gray', 1)};
  }
`;
