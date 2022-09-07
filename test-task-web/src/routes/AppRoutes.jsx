import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../pages/Posts';
import Autorization from '../pages/Autorization';
import { UserContext } from '../context/UserContext';

function AppRouter() { 

  const { isLoggedIn } = useContext(UserContext);

  return (
    <Routes>
        <Route exact path='*' element={isLoggedIn ? <Posts /> : <Autorization />} />
    </Routes>
  )
}

export default AppRouter;