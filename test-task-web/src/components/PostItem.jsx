import React from 'react';
import styled from 'styled-components';

const PostWrap = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 388px;
  padding: 25px 15px;
  border: 5px solid #27569C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  p {
    margin: 0 0 auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
  }
  p:last-child {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media (max-width: 960px) {
    height: auto;
    padding: 20px;
  }
  @media (max-width: 620px) {
    padding: 10px;
    gap: 10px;
  }
    
`;
const PostHeader = styled.div`
  margin-bottom: 20px;
  p {
    margin-bottom: 20px;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
    float:left;
    margin-right: 25px;
  }
  @media (max-width: 960px) {
    margin: 0;
    p {
      margin-bottom: 18px;
    }
    img {
      float: none;
      margin-bottom: 22px;
    } 
  }
  @media (max-width: 620px) {
    p {
      margin-bottom: 30px;
    }
    img {
      display: none;
    }
  }
  
`;
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  p {
    height: 50%;
  }
  @media (max-width: 960px) {
    display: block;
    height: auto;
    p:first-child {
      margin-bottom: 15px;
    } 
    p {
      height: auto;
    }
  }
  @media (max-width: 620px) {
    p:last-child {
      display: none;
    }
  }
`;

function PostItem(props) {

  return (
    <PostWrap>
      <PostHeader>
        <img src={require(`../assets/images/users_album/${props.user.id}.png`)} alt={props.post.title} />
        <p>Author: {props.user.name}</p>
        <p>Company: {props.user.company.name}</p>
      </PostHeader>
      <PostContent>
        <p>Title: {props.post.title}</p>
        <p>{props.post.body}</p>
      </PostContent>
    </PostWrap>
  )
}

export default PostItem;