import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'styled-tools';

export default function PostList() {
  const [searchParams] = useSearchParams();
  const [postItems, setPostItems] = useState([
    {
      id: 1,
      disease_name: '소화불량',
      hospital: '국군부산병원',
      department: '내과',
      nickname: '나는 매진이라네',
      date: '2024.05.25 21:00:00',
      scrap: 5,
    },
    {
      id: 2,
      disease_name: '고열',
      hospital: '서울병원',
      department: '응급실',
      nickname: '매진매진이라네',
      date: '2024.05.26 10:00:00',
      scrap: 10,
    },
    {
      id: 3,
      disease_name: '두통',
      hospital: '대구병원',
      department: '정형외과',
      nickname: '혜진혜진',
      date: '2024.05.27 15:30:00',
      scrap: 1,
    },
  ]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    const sortField = searchParams.get('sort') || 'date';
    const sortOrder = searchParams.get('sortOrder') || 'asc';

    let sortedItems = [...postItems];
    sortedItems.sort((a, b) => {
      let valueA = a[sortField].toLowerCase();
      let valueB = b[sortField].toLowerCase();

      if (sortField === 'date') {
        return sortOrder === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        if (valueA < valueB) {
          return sortOrder === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      }
    });

    if (searchQuery) {
      const normalizedQuery = searchQuery.toLowerCase().replace(/\s+/g, '');
      sortedItems = sortedItems.filter((item) =>
        Object.values(item).some((value) =>
          value
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(normalizedQuery)
        )
      );
    }
    setFilteredItems(sortedItems);
  }, [postItems, searchParams]);

  return (
    <div>
      {filteredItems.map((item, index) => (
        <PostListItem key={index} index={index} item={item} />
      ))}
    </div>
  );
}

function PostListItem({ index, item }) {
  const navigate = useNavigate();

  const onClickList = () => {
    navigate(`/detail/${index}`);
  };

  return (
    <MainContainer onClick={onClickList}>
      <Item width='40%' fontSize='16px' justifyContent='flex-start'>
        {item.disease_name}
      </Item>
      <Item width='30%' justifyContent=''>
        <Item1>{item.hospital}</Item1>
        <Item2>{item.department}</Item2>
      </Item>
      <Item width='15%'>{item.nickname}</Item>
      <Item width='12%'>{item.date}</Item>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${palette('gray', 0)};
  border: 1px solid ${palette('gray', 1)};
  border-radius: 15px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const Item = styled.span`
  width: ${(props) => props.width};
  display: flex;
  font-size: ${(props) => props.fontSize || '14px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
`;

const Item1 = styled.div`
  width: fit-content;
  height: 16px;
  color: white;
  background-color: ${palette('green', 0)};
  border: none;
  border-radius: 3px;
  padding: 5px 8px;
  margin-right: 5px;
  line-height: 16px;
`;

const Item2 = styled.div`
  width: fit-content;
  height: 16px;
  color: white;
  background-color: ${palette('gray', 0)};
  border: none;
  border-radius: 3px;
  padding: 5px 8px;
  line-height: 16px;
`;
