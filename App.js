import React, {Component} from 'react';
// import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/screens/Home/Main';

import LocationPage from './src/screens/Location/LocationPage';
import Projects from './src/screens/Projects/Projects';
import NewMembers from './src/screens/NewMembers/NewMembers';
import SuccessPage from './src/screens/SuccessfullyAddedNewMember/SuccessPage';
import Giving from './src/screens/giving/Giving';
import EnterAmountPage from './src/screens/giving/EnterAmountPage';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="giving" component={Giving} />
          <Stack.Screen name="amount" component={EnterAmountPage} />

          <Stack.Screen name="newMembers" component={NewMembers} />
          <Stack.Screen name="success" component={SuccessPage} />
          {/* <Stack.Screen name="main" component={Main} /> */}
          {/* <Stack.Screen name="location" component={LocationPage} /> */}
          <Stack.Screen name="projects" component={Projects} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
