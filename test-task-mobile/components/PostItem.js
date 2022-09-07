import React from 'react';
import styled from 'styled-components/native';

const PostWrap = styled.View`
  padding: 10px;
  border: 5px solid #27569C;
  margin: 10px 15px 0;
`;

const PostHeader = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 30px;
`;

const PostText = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
`;

function PostItem(props) {

  return (
    <PostWrap>
        <PostHeader>Author: {props.user.name}</PostHeader>
        <PostHeader>Company: {props.user.company.name}</PostHeader>
        <PostText>Title: {props.post.title}</PostText>
    </PostWrap>
  )
}

export default PostItem;