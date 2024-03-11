import { Keyboard, Platform, TouchableWithoutFeedback, View, Text, Image, TextInput, Button, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Content from '../Content';
import Register from '../Register';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setshowPass] = useState(true);
  const navigation = useNavigation();
  //nêw
  const pass_show = () => {
    setshowPass(!showPass);
  };
  const doLogin = () => {
    //Kiem tra
    if (email.length == 0) {
      alert('Chưa nhập Email'); return;
    }
    if (password.length == 0) {
      alert('Chưa nhập Password'); return;
    }
    if (email.length < 5) {
      alert('Email phải có độ dài lớn hơn hoặc bằng 5 ký tự');
      return;
    }
    if (password.length < 0) {
      alert('Password'); return;
    }
    
    
    let url_check_login = "http://10.24.31.113:3000/users?email=" + email;
    fetch(url_check_login)
      .then((res) => {
        return res.json();
      })
      .then(async (res) => {
        if (res.length !== 1) {
          alert("Sai username hoặc trùng dữ liệu");
          return;
        } 
        else {
          let objU = res[0]
          if (objU.password !== password) {
            alert("Sai password"); 
            return;
          } else {
            try {
              await AsyncStorage.setItem('loginInfo', JSON.stringify(objU));
              navigation.navigate('Content')
            } catch (e) {
              // saving error
              console.log(e);
            }
          }
        }
      });
     setEmail('');
      setPassword('');
  }
  const onPressRegister = () => {
    navigation.navigate('Register');
  }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/llogo.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.text_01}>Welcome to Lungo !!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text_02}>Login to Continue</Text>
      </View>
      <KeyboardAvoidingView

        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'
        }>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Emall Address"
              placeholderTextColor="#aeaeae"
            />
               <View style={{  marginTop:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              secureTextEntry={showPass}
                  placeholderTextColor="#aeaeae"
            />
              <TouchableWithoutFeedback  onPress={pass_show}>
          <Image
           style={{position: 'absolute',right:'6%',width:30,height:30,tintColor:'#AEAEAE'}}
            source={
              showPass
                ? require('../img/view.png')
                : require('../img/hide.png')
            }
          />
        </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.checkbox}>
          <CheckBox
            title="Lưu mật khẩu"
            checked={checked}
            onPress={handleCheck}
            containerStyle={{ backgroundColor: '0C0F14', borderWidth: 0, }}
            checkedColor="#70cbff"
          />
        </View>
        <View style={styles.buttonContainer}>

          <View style={styles.button_01}>
            <Button title="Sign In" onPress={doLogin} />
          </View>
        </View>
        <View style={styles.buttonContainer}>

          <View style={styles.button_02}>
            <Button title="Sign in with Google" onPress={onPressRegister} />
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.textContainer}>
        <Text style={styles.text_03}> Don’t have account? Click</Text>
        <TouchableWithoutFeedback onPress={onPressRegister}>
          <Text style={styles.text_04}> Register</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text_03}> Forget Password? Click</Text>
        <TouchableWithoutFeedback onPress={onPressRegister}>
          <Text style={styles.text_04}> Reset</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
export default Index