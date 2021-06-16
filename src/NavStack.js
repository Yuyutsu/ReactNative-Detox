/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScene from './Scenes/HomeScene';
import LoginScene from './Scenes/LoginScene';

const Stack = createStackNavigator();

export default class NavStack extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'LoginScene'}
          screenOptions={{
            headerBackTitle: ' ',
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="LoginScene"
            // component={LandingScreen}
            options={{headerShown: false}}>
            {props => <LoginScene {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="HomeScene"
            component={HomeScene}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
