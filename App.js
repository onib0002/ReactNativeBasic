import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import List from './screen/List';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <Tab.Navigator
            initialRouteName= "Home"
            screenOption= {({route})=> ({
              tabBarIcon: ({focused, color, size})=> {
                let iconName;
                if(route.name === 'Home') {
                  iconName = focused ? 'ios-home' : 'ios-home-outline';
                } else {
                  iconName = focused ? 'list-circle' : 'list-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />
              }
            })}
      >
        <Tab.Screen name="Home" component = {Home} />
        <Tab.Screen name="List" component = {List} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}

