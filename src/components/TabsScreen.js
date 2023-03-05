import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import FormScreen from './FormScreen';

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2A292E',
        tabBarInactiveTintColor: '#C7C7C9',
        tabBarStyle: {
          backgroundColor: '#fafafa',
          height: 50,
          alignItems: 'center',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        paddingVertical: '4%',
                        borderRadius: 10,
                        backgroundColor: '#e7e8e0',
                        padding: '20%',
                      }
                    : null
                }
              >
                <Text>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Form"
        component={FormScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        paddingVertical: '4%',
                        borderRadius: 10,
                        backgroundColor: '#e7e8e0',
                        padding: '20%',
                      }
                    : null
                }
              >
                <Text>Form</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
