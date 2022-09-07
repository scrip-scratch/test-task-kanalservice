import React from 'react';
import styled from 'styled-components';

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const LoaderItem = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
  position: absolute;
  border: 4px solid #E4B062;
  opacity: 1;
  border-radius: 50%;
  animation: loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
  animation-delay: -0.5s;
  }
  @keyframes loader {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

`;

const Loader = () => {
  return (
    <LoaderWrap>
      <LoaderItem>
        <div></div>
        <div></div>
      </LoaderItem>
    </LoaderWrap>
  )
}

export default Loader;