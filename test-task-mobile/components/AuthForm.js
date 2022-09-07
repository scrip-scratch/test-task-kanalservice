import styled, {css} from 'styled-components/native';
import { View, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';

const fontStyles = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  line-height: 29px;
  font-size: 24px;
`;

const Form = styled.View`
  margin: 15px;
  border: 5px solid #27569C;
  padding: 0 33px;

`;

const AuthLegend = styled.Text`
  ${fontStyles};
  color: #27569C;
  margin: 10px auto 40px;
`;

const AuthText = styled.Text`
  ${fontStyles};
  margin-bottom: 10px;
`;

const AuthInput = styled.TextInput`
  ${fontStyles};
  padding: 5px;
  background: #D9D9D9;
  border:  4px solid #27569C;
  border-radius: 10px;
  transition: all .2s;
  margin-bottom: 15px;
`;

const AuthButton = styled.TouchableOpacity`
  margin-bottom: 25px;
  background: #E4B062;
  border-radius: 10px;
  padding: 8px;
  align-items: center;
`;

const AuthButtonText = styled.Text`
  ${fontStyles};
`;

const shakeAnimation = new Animated.Value(0);

export const startShake = () => {
  Animated.sequence([
    Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
  ]).start();
}

export const AuthForm = (props) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={{ transform: [{translateX: shakeAnimation}] }}> 
        <Form >
          <AuthLegend>Autorization</AuthLegend>
          <View>
            <AuthText>login</AuthText>
            <AuthInput onChangeText={(login) => props.setLogin(login)}/>
          </View>
          <View>
            <AuthText>password</AuthText>
            <AuthInput secureTextEntry={true} onChangeText={(password) => props.setPassword(password)}/>
          </View>
          <AuthButton onPress={props.handleSubmit}>
            <AuthButtonText>Submit</AuthButtonText>
          </AuthButton>
        </Form>
      </Animated.View>
    </TouchableWithoutFeedback>
    
  )
}

