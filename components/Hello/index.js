import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0C0F14' }}>
      <Image style={{ width: '50%', height: '30%' }} source={require('../img/llogo.png')} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});