import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,

} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import Register from '../Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Index = () => {

 
  const navigation = useNavigation();
  const onPressHome = () => {
    navigation.navigate('Setting')
  }  
  const [message, setMessage] = useState('');
  const SaveProduct = () => {


    if (message.length === 0) {
      alert('Không được để trống');
      return;
    }
    let objSP = { message: message};
    const contacts = 'http://10.24.31.113:3000/contacts';
    fetch(contacts, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objSP),
    })
      .then((res) => {
        if (res.status == 201){
          alert('Gửi yêu cầu thành công ') ;
          setMessage('');
        } 
      })
      .catch((ex) => {
        console.log(ex);
      });
  };



  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <TouchableWithoutFeedback onPress={onPressHome}>
      <View  style={styles.box_img}>
           <Image style={{width:10,height:10}} source={require('../img/UOT.png')}/>
      </View>
      </TouchableWithoutFeedback>
     <View style={styles.box_text_container}>
     <Text style={styles.box_text}>Help</Text>
     
     </View>
   
      </View>
      <View style={{justifyContent:'center',alignItems:'center',padding:30}}>
        <Image style={styles.logo} source={require('../img/avaa.png')} />
      
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
        
        
         
             
           
            <View style={{  marginTop:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <TextInput
              style={styles.input}
              placeholder="Nhập nội dung hỗ trợ"
              placeholderTextColor="#aeaeae"
              onChangeText={(text) => setMessage(text)}
              value={message}
            />
             
            </View>
           
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <View style={styles.button_01}>
            <Button title="Gửi yêu cầu" onPress={SaveProduct} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Index;
