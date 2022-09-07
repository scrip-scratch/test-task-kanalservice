import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../components/Loader';
import PostItem from '../components/PostItem';

const PostWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 19px;
    margin: 17px 17% 0;
    @media (max-width: 960px) {
      margin: 24px 36px 0;
    }
    @media (max-width: 620px) {
    grid-template-columns: 1fr;
    margin: 10px 15px 0;
  }
`;
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

  return (
    <PostWrapper>
      {!isFetching ? posts.map(post => <PostItem user={users[post.userId - 1]} post={post} key={post.id}/>) : <Loader />}
    </PostWrapper>
  )
}

export default Posts;