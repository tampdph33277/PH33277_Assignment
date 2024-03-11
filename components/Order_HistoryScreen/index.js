import { View, Text, Image,FlatList, ScrollView,TouchableNativeFeedback } from 'react-native';
import React, {useEffect, useState } from 'react'
import styles from './style'
// import Content from '../Content';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Index = () => {
  const onPressSetting = () => {
    navigation.navigate('Setting')
  }
  const onPressPerso = () => {
    navigation.navigate('PersonalDetailsScreen')
  }
  const navigation = useNavigation();
  const [ds_order, setds_order] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const getListPro = async () => {
    let link_api_oder = 'http://10.24.31.113:3000/orders';
    try {
      const response = await fetch(link_api_oder);
      const json = await response.json();
      setds_order(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListPro();
  }, []);


  const renderItem = ({item})=>{
    const itemTotalPrice = item.price * item.quantity;
    return (
<View style={{borderRadius:20, flexDirection: 'column', padding:15, marginTop: 40,backgroundColor:'#262B33',width:'100%',height:160}}>

<View style={{ flexDirection: 'row',
justifyContent: 'space-between',
alignItems:'flex-start',}}>

<View> 
<Image style={{width:80,height:80}} source={{uri: item.image}} />
</View>

<View> 
<View style={{height:80,fontSize:19,justifyContent:'center'}}>
<Text style={{fontSize:15,color:'white'}}>
Cappuccino
</Text>
<Text style={{fontSize:13,color:'white'}}>
With Steamed Milk
</Text>
</View>
</View>
<View style={{height:80,fontSize:19,justifyContent:'center'}}>
<Text style={{fontSize:24,color:'white'}}>
${itemTotalPrice.toFixed(2)}
</Text>
</View>
<View >
</View>
<View>
</View>
</View>
<View style={{ marginTop:10,flexDirection: 'row', 
justifyContent: 'space-between', }}>
<View style={{ flexDirection: 'row', 
justifyContent: 'space-between'}}>
<View style={{ borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#141921', height:40,width:60}}>
<Text style={{color:'white',fontSize:17}}>
{item.size}
</Text>
</View>
<View style={{marginLeft:2,borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#141921', height:40,width:80}}>
<Text style={{color:'white',fontSize:20}}>
$ {item.price}  
</Text>
</View>
</View>

<View style={{ height:40,width:60,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20, color:'#d17842',fontWeight:'bold'}}>X {item.quantity}</Text>
</View>
<View  style={{borderRadius:12, height:40,width:80,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20, color:'#d17842',fontWeight:'bold'}}>  ${itemTotalPrice.toFixed(2)}</Text>
</View>
</View>
</View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
      <TouchableNativeFeedback onPress={onPressSetting} >
            <Image source={require('../img/Group3.png')} />
          </TouchableNativeFeedback>
        <Text style={styles.viewHeader_text}> Order History </Text>
        <TouchableNativeFeedback onPress={onPressPerso} >
          <Image
            source={require('../img/Intersect.png')}
          />
          </TouchableNativeFeedback>
      </View>
      <ScrollView>
      <FlatList
          data={ds_order}
          keyExtractor={(item_sp_oder) => item_sp_oder.id}
          renderItem={renderItem}
        />
</ScrollView>
     <View  style={{
   
    marginTop:10,
     width:'100%',
     height:'9%',
     }}>
     <View  style={{height:'100%',width:'100%',backgroundColor:'#0C0F14',
    }}>
<View style={{  
     justifyContent:'center',alignItems:'center',
     backgroundColor:'#d17842', flex:6,
     borderRadius:20,
  }}>
<View>
<Text style={{ fontWeight:'bold',color:'white',fontSize:20,}}>Downloand</Text>
</View>
</View>
</View>
     </View>
      </View>
  );} 
export default Index