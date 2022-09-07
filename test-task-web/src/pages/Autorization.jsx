import React, { useState, useContext } from 'react';
import styled from 'styled-components'; 
import { AuthForm, showWrongInput } from '../components/AuthForm';
import { UserContext } from '../context/UserContext';
import { _LOGIN, _PASSWORD } from '../utils/login_data';

let AuthWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 77vh; 
  @media (min-height: 1133px) {
    height: 79vh;
  }
  @media (max-width: 500px) {
    height: auto;
  }
`;

const Autorization = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { logIn } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === _LOGIN && password === _PASSWORD) {
      logIn();
    } 
    else {
      showWrongInput();
    }   
  }

  return (
    <AuthWrap>
      <AuthForm handleSubmit={handleSubmit} setLogin={setLogin} setPassword={setPassword} />
    </AuthWrap>
  )
}

export default Autorization;