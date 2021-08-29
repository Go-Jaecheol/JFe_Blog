import React from 'react';
import styled from 'styled-components';

import PostItem from './PostItem';

const PostListWrapper = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`;

const PostList = ({ posts }) => {
  return (
    <PostListWrapper>{
        posts.map(({ frontmatter, fields, excerpt}) => {
            const { title, date, description, category } = frontmatter;
            const { slug } = fields;
            return (
            <PostItem
                key={slug}
                title={title}
                date={date}
                slug={slug}
                description={description}
                category={category}
                excerpt={excerpt}
            />
            );
        })}
    </PostListWrapper>
  );
};

export default PostList;