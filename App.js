import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Hello from './components/Hello';
import Pro_detailScreen from './components/Pro_detailScreen';
import PaymentScreen from './components/PaymentScreen';
import Pro_detailScreen_coffee from './components/Pro_detailScreen_coffee';
import PersonalDetailsScreen from './components/PersonalDetailsScreen';
import Register from './components/Register';
import Help from './components/Help';
import Content from '../PH33277_Assignment/components/Content';
import HomeScreen from '../PH33277_Assignment/components/HomeScreen';
import FavoritesScreen from '../PH33277_Assignment/components/FavoritesScreen';
import CartScreen from '../PH33277_Assignment/components/CartScreen';
import Order_HistoryScreen from '../PH33277_Assignment/components/Order_HistoryScreen';
import Setting from '../PH33277_Assignment/components/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Hello"
          component={Hello}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Content"
          component={Content}
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Order_HistoryScreen"
          component={Order_HistoryScreen}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
             <Stack.Screen
          name="Pro_detailScreen"
          component={Pro_detailScreen}
          options={{ headerShown: false }}
        />
                   <Stack.Screen
          name="PersonalDetailsScreen"
          component={PersonalDetailsScreen}
          options={{ headerShown: false }}
        />
                     <Stack.Screen
          name="Pro_detailScreen_coffee"
          component={Pro_detailScreen_coffee}
          options={{ headerShown: false }}
        />
                     <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
                      <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});