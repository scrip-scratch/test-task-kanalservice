import styled from 'styled-components/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import NavigateStack from './navigate';

const fonts = () => Font.loadAsync({
  'Inter': require('./assets/fonts/Inter-ExtraBold.ttf'),
})

export default function App() {

  const [isReady, setReadiness] = useState(false);

  if(isReady){
    return (
      <NavigateStack />
    );
  } else {
    return (
      <AppLoading
          startAsync={fonts}
          onFinish={() => setReadiness(true)}
          onError={console.warn}
        />
    )
  }
  
}

