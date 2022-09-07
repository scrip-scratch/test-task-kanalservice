import React from "react";
import Posts from "./components/pages/Posts";
import Authorization from "./components/pages/Authorization";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HeaderLogo from './components/HeaderLogo';
import OutButton from "./components/OutButton";

const Stack = createStackNavigator();

export default function Navigate({navigation}) {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Authorization"
        component={Authorization}
        options={{ 
          headerStyle: {
            backgroundColor: '#E4B062',
            height: 150,
          },
          headerTitleAlign: 'left',
          headerTitle: props => <HeaderLogo {...props} /> 
        }}
      />
      <Stack.Screen 
        name="Posts"
        component={Posts}
        options={{ 
          headerStyle: {
            backgroundColor: '#E4B062',
            height: 150,
          },
          headerLeft: () => {
            return null;
          },
          headerTitleAlign: 'left',
          headerTitle: props => <HeaderLogo {...props} />,
          headerRight: ({navigation}) => (<OutButton
            onPress={() => navigation.navigate('Authorization')}
          />),
        }}
        
      />
    </Stack.Navigator>
  </NavigationContainer>;
}