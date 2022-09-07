import React, { useContext } from 'react';
import styled from 'styled-components';
import OutButton from './OutButton';
import { UserContext } from '../context/UserContext';

const HeaderWrap = styled.header`
  width: 100%;
  height: 118px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  box-sizing: border-box;
  padding: 0 40px;
  background-color: #E4B062;
  img {
    margin-right: auto;
  }
  .logo_small {
    display: none;
  }
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    margin-right: 28px;
  }
  @media (max-width: 744px) {
    p {
      display: none;
    }
  }
  @media (max-width: 620px) {
    padding: 0 15px;
    .logo_small {
      display: block;
    }
    .logo_big {
      display: none;
    }
  }
`;

const Header = () => {

  const { isLoggedIn, logOut } = useContext(UserContext);

  return (
    <HeaderWrap>
      <img className='logo_big' src={require("../assets/images/logo_big.png")} alt="Каналсервис" />
      <img className='logo_small' src={require("../assets/images/logo_small.png")} alt="Каналсервис" />
      {isLoggedIn ? 
      <React.Fragment>
        <p>Username</p> 
        <OutButton handleClick={logOut}/>
      </React.Fragment> : ''}
    </HeaderWrap>
  )
}

export default Header;