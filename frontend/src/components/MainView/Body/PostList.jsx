import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PostListHeader from './PostListHeader';
import PostListItem from './PostListItem';
import post from '../../../assets/images/post.webp';

export default function PostList() {
  const items = Array.from({ length: 30 }, (_, i) => i);

  const [hasOverflow, setHasOverflow] = useState(false);
  const itemListRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      const current = itemListRef.current;
      const hasScrollbar = current.scrollHeight > current.clientHeight;
      setHasOverflow(hasScrollbar);
    };

    window.addEventListener('resize', checkOverflow);
    checkOverflow();

    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <MainContainer>
      <PostListHeader hasOverflow={hasOverflow} />
      <ItemList ref={itemListRef}>
        {items.map((item) => (
          <PostListItem key={item} />
        ))}
        <Image src={post} alt='post' />
      </ItemList>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100%;
  position: relative;
`;

const ItemList = styled.div`
  height: 75vh;
  overflow-y: auto;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 50;
`;
