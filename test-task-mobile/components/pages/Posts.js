import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import PostItem from '../PostItem';

const PostWrapper = styled.View`
  flex: 1;
`
const Posts = () => {

const [posts, setPosts] = useState([]);
const [users, setUsers] = useState([]);
const [isFetching, setFetchingStatus] = useState(true);

useEffect(() => {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=').then(posts => posts.json()),
    fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json())
  ]).then(([posts, users]) => {
    setUsers(users);
    sortPosts(posts, users);
    setFetchingStatus(false);
  })
}, []);

function sortPosts(posts, users) {
  let newPosts = [];
  posts.sort(() => Math.random() - 0.5);
  users.forEach(user => {
    for (let post of posts) {
      if (user.id === post.userId) {
        newPosts.push(post);
        return;
      }
    }
  })
  setPosts(newPosts);
}

function renderItem ({ item }) {
  return (
    <PostItem user={users[item.userId - 1]} post={item}/>
  )
}

return (
<PostWrapper>
  <FlatList data={posts} renderItem={renderItem} keyExtractor={item => item.id} />
</PostWrapper>
)
}

export default Posts;