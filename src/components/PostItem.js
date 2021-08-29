import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const PostItemWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const PostTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PostExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-400);
`;

const PostMeta = styled.div`
  margin-top: 2rem;
  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;

const PostCategory = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  font-size: var(--size-300);
  & a {
    position: relative;
    z-index: 2;
    background-color: rgba(255, 255, 255, 1);
    text-decoration: none;
    color: inherit;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
  }
  & a:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const PostItem = ({
    title,
    date,
    excerpt,
    description,
    slug,
    category,
  }) => {
    return (
      <PostItemWrapper>
        <PostCategory>
          <Link to={`/?category=${category}`}>{category}</Link>
        </PostCategory>
        <PostTitle>
          <Link to={slug}>{title}</Link>
        </PostTitle>
        <PostExcerpt
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />
        <PostMeta>
          <span>{date}</span>
        </PostMeta>
      </PostItemWrapper>
    );
};

export default PostItem;