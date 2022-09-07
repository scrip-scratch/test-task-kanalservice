import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "./components/Header";
import GlobalStyles from "./assets/styles/global";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./routes/AppRoutes";
import { UserContext } from "./context/UserContext";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
  `;

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const logIn = () => {
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', "true");
  }
  const logOut = () => {
    setLoggedIn(false);
    localStorage.setItem('isLoggedIn', "false");
  }

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setLoggedIn(true);
    }
  }, []);
  

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrapper>
        <UserContext.Provider value={{
          isLoggedIn,
          logIn: logIn,
          logOut: logOut
        }}>
          <Header />
          <AppRouter />
        </UserContext.Provider>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
