import React, { useState } from 'react';
import { View, Text,Modal ,Image ,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Content from '../Content'
import PersonalDetailsScreen from '../PersonalDetailsScreen'
const Index = () => {
  const [log_out, setlog_out] = useState(false);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const navigation = useNavigation();
  const onPressHome = () => {
    navigation.navigate('Content')
  } 
  const onPressHelp = () => {
    navigation.navigate('Help')
  } 
   const onPressPerso = () => {
    navigation.navigate('PersonalDetailsScreen')
  }
  const onPressLogout = () => {
    setlog_out(true);
  };
  const handleLogout = () => {
     setlog_out(false);
  
   navigation.navigate('Login')
  };

  const close_Modal = () => {
    setlog_out(false);
    setNo(false);
    setYes(false);
  };
  
  return (
    <View style={styles.container}>
      {/* Phan dau */}
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
      {/* Box2 */}
<View style={styles.box2_01}>

<View style={styles.box2_01_his}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View>
    <Image style={{marginTop:5,width:20,height:20}} source={require('../img/his.png')}/>
</View> 
<View >
 <Text style={{ 
  marginLeft:50,
  color: 'white',
  fontSize: 20,
  justifyContent: 'center',}} >History</Text>
  </View> 
  </View>
  
  <View>
    <Image style={{marginTop:7}} source={require('../img/right.png')}/>
  </View>
</View>
 <TouchableWithoutFeedback onPress={onPressPerso}>
    <View style={styles.box2_01_his}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Image style={{ marginTop: 5, width: 20, height: 20 }} source={require('../img/per.png')} />
            </View>
            <View>
              <Text style={{
                marginLeft: 50,
                color: 'white',
                fontSize: 20,
                justifyContent: 'center',
              }} >Personal Details</Text>
            </View>
          </View>

          <View>
            <Image style={{ marginTop: 7 }} source={require('../img/right.png')} />
          </View>
        </View>
        </TouchableWithoutFeedback>
<View style={styles.box2_01_his}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View>
    <Image style={{marginTop:5,width:20,height:20}} source={require('../img/add.png')}/>
</View> 
<View >
 <Text style={{ 
  marginLeft:50,
  color: 'white',
  fontSize: 20,
  justifyContent: 'center',}} >Address</Text>
  </View> 
  </View>
  
  <View>
    <Image style={{marginTop:7}} source={require('../img/right.png')}/>
  </View>
</View>
<View style={styles.box2_01_his}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View>
    <Image style={{marginTop:5,width:20,height:20}} source={require('../img/pay.png')}/>
</View> 
<View >
 <Text style={{ 
  marginLeft:50,
  color: 'white',
  fontSize: 20,
  justifyContent: 'center',}} >Payment Method</Text>
  </View> 
  </View>
  
  <View>
    <Image style={{marginTop:7}} source={require('../img/right.png')}/>
  </View>
</View>
<View style={styles.box2_01_his}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View>
    <Image style={{marginTop:5,width:20,height:20}} source={require('../img/about.png')}/>
</View> 
<View >
 <Text style={{ 
  marginLeft:50,
  color: 'white',
  fontSize: 20,
  justifyContent: 'center',}} >About</Text>
  </View> 
  </View>
  
  <View>
    <Image style={{marginTop:7}} source={require('../img/right.png')}/>
  </View>
</View>
<TouchableWithoutFeedback onPress={onPressHelp}>
<View style={styles.box2_01_his}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View>
    <Image style={{marginTop:5,width:20,height:20}} source={require('../img/help.png')}/>
</View> 
<View >
 <Text style={{ 
  marginLeft:50,
  color: 'white',
  fontSize: 20,
  justifyContent: 'center',}} >Help</Text>
  </View> 
  </View>
  
  <View>
    <Image style={{marginTop:7}} source={require('../img/right.png')}/>
  </View>
</View>
</TouchableWithoutFeedback>
 <TouchableOpacity onPress={onPressLogout}>
        <View style={styles.box2_01_his}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Image style={{ marginTop: 5, width: 20, height: 20 }} source={require('../img/Log_out.png')} />
            </View>
            <View>
              <Text style={{
                marginLeft: 50,
                color: 'white',
                fontSize: 20,
                justifyContent: 'center',
              }} >Log out</Text>
            </View>
          </View>
          <View>
            <Image style={{ marginTop: 7 }} source={require('../img/right.png')} />
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={log_out}
        onRequestClose={close_Modal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(174, 174, 174, 0.5)',  // Màu nền mờ
          }}
        >
          <View
            style={{
              backgroundColor: '#0C0F14',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
              width: '80%',
            }}
          >
            <Text style={{ color: '#FFFFFF', marginBottom: 10 }}>
              Are you sure you want to log out?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
                <TouchableOpacity
                onPress={() => {
                  setNo(true);
                  setYes(false);
                  close_Modal();
                }}
                style={{
                  backgroundColor: no ? '#D17842' : '#0C0F14',
                  padding: 10,
                  width: 120,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: '#FFFFFF' }}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setYes(true);
                  setNo(false);
                  handleLogout();
                }}
                style={{
                  backgroundColor: yes ? '#D17842' : '#D17842',
                  padding: 10,
                  width: 120,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }}>
                  Yes
                </Text>
              </TouchableOpacity>
          
            </View>
          </View>
        </View>
      </Modal>


</View>

    </View>
  );
};

export default Index;