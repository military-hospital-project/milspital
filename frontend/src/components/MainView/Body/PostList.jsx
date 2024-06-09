import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../../context/SearchContext';
import PostListHeader from './PostListHeader';
import PostListItem from './PostListItem';
import WritePopup from '../../../popup/WritePopup';
import { getList } from '../../../api/main.jsx';
import post from '../../../assets/images/post.webp';

export default function PostList() {
  const {
    postItems,
    setPostItems,
    searchResults,
    setSearchResults,
    sortField,
    sortOrder,
  } = useSearch();
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const itemListRef = useRef(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getList()
      .then((data) => {
        console.log('Fetched posts data:', data);
        const searchQuery = searchParams.get('search') || '';
        if (searchQuery) {
          const lowerCaseQuery = searchQuery.toLowerCase();
          const filtered = data.filter(
            (item) =>
              item.diseaseName.toLowerCase().includes(lowerCaseQuery) ||
              item.hospitalName.toLowerCase().includes(lowerCaseQuery) ||
              item.departmentName.toLowerCase().includes(lowerCaseQuery) ||
              item.nickname.toLowerCase().includes(lowerCaseQuery)
          );
          setSearchResults(filtered);
        } else {
          setPostItems(data);
          setSearchResults(data); // 전체 데이터를 설정합니다.
        }
      })
      .catch((error) => {
        console.error('Failed to fetch posts:', error);
      });
  }, [searchParams, setPostItems, setSearchResults]);

  useEffect(() => {
    const checkOverflow = () => {
      const current = itemListRef.current;
      if (current) {
        setHasOverflow(current.scrollHeight > current.clientHeight);
      }
    };

    window.addEventListener('resize', checkOverflow);
    checkOverflow();

    return () => window.removeEventListener('resize', checkOverflow);
  }, [postItems, searchResults]);

  const openWritePopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const displayItems =
    searchResults && searchResults.length > 0 ? searchResults : postItems;

  return (
    <MainContainer>
      {isPopupOpen && <WritePopup onClick={closePopup} />}
      <PostListHeader hasOverflow={hasOverflow} />
      <ItemList ref={itemListRef}>
        {displayItems.map((item, index) => (
          <PostListItem key={index} index={index + 1} item={item} />
        ))}
        <Image src={post} alt='post' onClick={openWritePopup} />
      </ItemList>
      {isPopupOpen && <Overlay />}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100%;
  position: relative;
`;

const ItemList = styled.div`
  height: calc(100vh - 191px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 20px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb {
    width: 30px;
    background: ${palette('gray', 1)};
    border: 6px solid white;
    border-radius: 20px;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: 10px;
  right: 10px;
  z-index: 50;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 101;
`;
