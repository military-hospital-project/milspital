import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { useSearch } from '../../../context/SearchContext';

export default function FilterMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const filterMenuRef = useRef(null);
  const {
    setSortField,
    setSortOrder,
    sortField,
    sortOrder,
    setSearchResults,
    postItems,
  } = useSearch();

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

  useEffect(() => {
    if (sortField && sortOrder) {
      const sortedItems = [...postItems].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
      setSearchResults(sortedItems);
    } else {
      setSearchResults(postItems);
    }
  }, [sortField, sortOrder, postItems, setSearchResults]);

  const handleSort = (field) => {
    let newSortOrder = 'desc';
    if (field === sortField) {
      newSortOrder = sortOrder === 'asc' ? '' : 'asc';
    }

    if (newSortOrder === '') {
      setSortField('');
      setSortOrder('');
      setSearchParams({});
    } else {
      setSortField(field);
      setSortOrder(newSortOrder);
      setSearchParams({ sortField: field, sortOrder: newSortOrder });
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const sortOptions = [
    { key: 'createdAt', label: '날짜' },
    { key: 'diseaseName', label: '병명' },
    { key: 'hospitalName', label: '병원' },
    { key: 'departmentName', label: '진료과' },
    { key: 'nickname', label: '닉네임' },
  ];

  const renderSortArrow = (key) => {
    if (sortField === key) {
      return sortOrder === 'asc' ? ' ↑' : ' ↓';
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
              selected={sortField === option.key}
              onClick={() => handleSort(option.key)}
            >
              {option.label}
              {renderSortArrow(option.key)}
            </MenuItem>
          ))}
          {sortField && (
            <ResetButton
              onClick={() => {
                setSortField('');
                setSortOrder('');
                setSearchParams({});
                setSearchResults(postItems);
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
