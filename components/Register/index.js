import {Keyboard, Platform,TouchableWithoutFeedback ,View, Text, Image, TextInput, Button, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Login from '../Login';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
const [email, setemail] = useState('')
const [Re_password, setRe_password] = useState('')
//
const [fullname, setfullname] = useState('.')
const [phone, setphone] = useState('.')
const [address, setaddress] = useState('.')
  const navigation = useNavigation();

  const onPressLogin = () => {
    navigation.navigate('Login');
  }
 
const Register =()=>{
  if (username.length === 0) {
    alert('Chưa nhập Username');
    return;
  } else if (username.length < 5) {
    alert('Username phải có ít nhất 5 ký tự');
    return;
  } else if (username.includes(' ')) {
    alert('Username không được cách');
    return;
  }
  if (email.length === 0) {
    alert('Chưa nhập Email');
    return;
  } else if (!email.endsWith('@gmail.com')) {
    alert('Email phải có đuôi là "@gmail.com"');
    return;
  } else if (email.includes(' ')) {
    alert('Email không được cách');
    return;
  }
  if (password.length === 0) {
    alert('Chưa nhập Password');
    return;
  } else if (password.length < 8) {
    alert('Password phải có ít nhất 8 ký tự');
    return;
  }else if (password.includes(' ')) {
    alert('Password không được cách');
    return;
  }
  if (Re_password.length == 0) {
    alert('Chưa nhập Password'); return;
  }
  if (Re_password !== password) {
    alert('Password nhập lại chưa đúng'); return;
  }
  let obj_user = {fullname:fullname,email:email,username:username,password:password,phone:phone,address:address }
  let url_Register = 'http://10.24.31.113:3000/users'
  fetch(url_Register, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj_user),
  })

    .then((res) => {
      if (res.status == 201){
        alert('Đăng ký thành công') ;
        navigation.navigate('Login');
      } 
    })
    .catch((ex) => {
      console.log(ex);
    });
}
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/llogo.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.text_01}>Welcome to Lungo !!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text_02}>Register to Continue</Text>
      </View>
      <KeyboardAvoidingView 
      
      style={styles.keyboardAvoidingContainer}
       
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'
       } keyboardVerticalOffset = {80}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
         <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Name"
          placeholderTextColor="#aeaeae"
        />
        <TextInput
          style={styles.input}
          onChangeText={setemail}
          value={email}
          placeholderTextColor="#aeaeae"
          placeholder="Email"
         
       
        />
        <TextInput
          style={styles.input}
         onChangeText={setPassword}
         value={password}
          placeholder="Password"
          placeholderTextColor="#aeaeae"
          secureTextEntry={true}
        />
           <TextInput
          style={styles.input}
         onChangeText={setRe_password}
         value={Re_password}
          placeholder="Re-type password"
          placeholderTextColor="#aeaeae"
          secureTextEntry={true}
        />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonContainer}>
       
        <View style={styles.button_01}>
          <Button title="Đăng ký" onPress={Register} />
        </View>
      </View>
      </KeyboardAvoidingView>
      <View style={styles.textContainer}>
        <Text style={styles.text_03}>You have an account? Click</Text>
        <TouchableWithoutFeedback onPress={onPressLogin}>
          <Text style={styles.text_04}> Sign in</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default Index