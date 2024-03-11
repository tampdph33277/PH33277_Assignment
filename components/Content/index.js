import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Register from '../Register';
import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen';
import FavoritesScreen from '../FavoritesScreen';
import Order_HistoryScreen from '../Order_HistoryScreen';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0C0F14', // Thay đổi màu nền của thanh tab thành màu đỏ (#FF0000)
       borderColor:'0C0F14'
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#D17842' : '#52555a'
              }}
              resizeMode='stretch'
              source={require('../img/hơm.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: 22,
                height: 25,
                tintColor: focused ? '#D17842' : '#52555a'
              }}
              resizeMode='stretch'
              source={require('../img/cart.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: 25,
                height: 24,
                tintColor: focused ? '#D17842' : '#52555a'
              }}
              resizeMode='stretch'
              source={require('../img/favo.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Order_HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: 21,
                height: 24,
                tintColor: focused ? '#D17842' : '#52555a'
              }}
              resizeMode='stretch'
              source={require('../img/noti.png')}
            />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default Index