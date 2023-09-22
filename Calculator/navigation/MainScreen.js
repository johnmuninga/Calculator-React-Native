import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native'

// Screens

import CalculatorScreen from './screens/CalculatorScreen'
import SecondScreen from './screens/SecondScreen'
import ThirdScreen from './screens/ThirdScreen'

//Screen names
const CalculatorName = "Calculator";
const SecondName = "Second";
const ThirdName = "Third";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={CalculatorName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === CalculatorName) {
              iconName = focused ? 'calculator' : 'calculator-outline';

            } else if (rn === SecondName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === ThirdName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={CalculatorName} component={CalculatorScreen} />
        <Tab.Screen name={SecondName} component={SecondScreen} />
        <Tab.Screen name={ThirdName} component={ThirdScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;