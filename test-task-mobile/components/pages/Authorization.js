import styled from 'styled-components/native';
import React, { useState, useContext } from 'react';
import { AuthForm, startShake } from '../AuthForm';
import { _LOGIN, _PASSWORD } from '../../assets/utils/login_data'


let AuthWrap = styled.View`
  width: 100%;
  margin: 15px auto 0;
`;

const Authorization = ({ navigation }) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === _LOGIN && password === _PASSWORD) {
      navigation.navigate('Posts');
    } 
    else {
      startShake();
    }   
  }

  return (
    <AuthWrap>
      <AuthForm setLogin={setLogin} setPassword={setPassword} handleSubmit={handleSubmit} />
    </AuthWrap>
  )
}

export default Authorization;