import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import PostListHeader from './PostListHeader';
import PostListItem from './PostListItem';
import post from '../../../assets/images/post.webp';
import WritePopup from '../../../popup/WritePopup';
import { getList } from '../../../api/main.jsx';

export default function PostList() {
  const [postItems, setPostItems] = useState([]);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const itemListRef = useRef(null);

  useEffect(() => {
    getList()
      .then((data) => {
        console.log('Fetched posts data:', data);
        setPostItems(data);
      })
      .catch((error) => {
        console.error('Failed to fetch posts:', error);
      });
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      const current = itemListRef.current;
      const hasScrollbar = current.scrollHeight > current.clientHeight;
      setHasOverflow(hasScrollbar);
    };

    window.addEventListener('resize', checkOverflow);
    checkOverflow();

    return () => window.removeEventListener('resize', checkOverflow);
  }, [postItems]);

  const openWritePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <MainContainer>
      {isPopupOpen && <WritePopup onClick={closePopup} />}

      <PostListHeader hasOverflow={hasOverflow} />

      <ItemList ref={itemListRef}>
        {postItems.map((item, index) => (
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
    /* background: transparent; */
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
