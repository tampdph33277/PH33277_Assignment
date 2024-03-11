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
  const [checked, setChecked] = useState(false);
  const [loginInfo, setLoginInfo] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [showPass2, setShowPass2] = useState(true);
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setaddress] = useState('');
  const [Re_password, setRe_password] = useState('')
  useEffect(() => {
    setUsername(loginInfo.username);
    setEmail(loginInfo.email);
    setPassword(loginInfo.password);
    setPhone(loginInfo.phone);
    setaddress(loginInfo.address);
    setRe_password('')
  }, [loginInfo]);
  const handleCheck = () => {
    setChecked(!checked);
  };

  const pass_show = () => {
    setShowPass(!showPass);
  };
  const pass_show2 = () => {
    setShowPass2(!showPass2);
  };
  const onPressHome = () => {
    navigation.navigate('Setting')
  } 
  
  const Saveuser = () => {
    if (username.length === 0) {
      alert('Chưa nhập Username');
      return;
    } else if (username.length < 5) {
      alert('Username phải có ít nhất 5 ký tự');
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
    if (password.length == 0) {
      alert('Chưa nhập Password');
      return;
    } else if (password.length < 7) {
      alert('Password phải có ít nhất 8 ký tự');
      return;
    }else if (password.includes(' ')) {
      alert('Password không được cách');
      return;
    }
    if (Re_password.length == 0) {
      alert('Chưa nhập xác nhận Password'); return;
    }
    if (Re_password !== password) {
      alert('Password nhập lại chưa đúng'); return;
    }
    let _id = loginInfo.id;
    let objusser = { username, email,phone,address, password, };
    let link_user = 'http://10.24.31.113:3000/users/' + _id;

    fetch(link_user, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objusser),
    })
      .then((res) => {
        if (res.status == 200){
            alert('Sửa thành công');
          
        } 
      })
      .catch((ex) => {
        console.log(ex);
      });
  };
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('loginInfo');
      if (value !== null) {
        // value previously stored
        setLoginInfo(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <TouchableWithoutFeedback onPress={onPressHome}>
      <View  style={styles.box_img}>
           <Image style={{width:10,height:10}} source={require('../img/UOT.png')}/>
      </View>
      </TouchableWithoutFeedback>
     <View style={styles.box_text_container}>
     <Text style={styles.box_text}>Setting</Text>
     
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
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Email Address"
              placeholderTextColor="#aeaeae"
            />

          </View>
          <View style={{  marginTop:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
           
             <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email Address"
              placeholderTextColor="#aeaeae"
           
            />
           </View>
           <View style={{  marginTop:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
           
           <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="Phone"
            placeholderTextColor="#aeaeae"
         
          />
         </View>
         <View style={{  marginTop:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
           
           <TextInput
            style={styles.input}
            value={address}
            onChangeText={(text) => setaddress(text)}
            placeholder=" Address"
            placeholderTextColor="#aeaeae"
         
          />
         </View>
               <View style={{  marginTop:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aeaeae"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={showPass} 
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
           
            <View style={{  marginTop:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aeaeae"
              onChangeText={(text) => setRe_password(text)}
              value={Re_password}
              secureTextEntry={showPass2} // Invert secureTextEntry
            />
              <TouchableWithoutFeedback  onPress={pass_show2}>
          <Image
           style={{position: 'absolute',right:'6%',width:30,height:30,tintColor:'#AEAEAE'}}
            source={
              showPass2
                ? require('../img/view.png')
                : require('../img/hide.png')
            }
          />
        </TouchableWithoutFeedback>
            </View>
           
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <View style={styles.button_01}>
            <Button title="Save" onPress={Saveuser} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Index;
