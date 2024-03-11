import { View, Text, Image, ImageBackground, FlatList, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, ScrollView } from 'react-native';
import React, { useState, useEffect, } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style'
// import Content from '../Content';
import { CheckBox } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import Content from '../Content'
import CartScreen from '../CartScreen'

const Index = () => {
  const navigation = useNavigation();
  const onPressPerso = () => {
    navigation.navigate('PersonalDetailsScreen')
  }
  const [Favoriets, setFavoriets] = useState([]);
  const onPressSetting = () => {
    navigation.navigate('Setting')
  }
  const getListPro = async () => {
    let link_api_favo = 'http://10.24.31.113:3000/favoriets';
    try {
      const response = await fetch(link_api_favo);
      const json = await response.json();
      setFavoriets(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListPro();
  }, []); 
   const favo_del = (itemId) => {
      let link_favo_del = `http://10.24.31.113:3000/favoriets/${itemId}`;
      fetch(link_favo_del, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then((res) => {
          console.log('Response Status:', res.status);
           console.log('Response Data:', res.json());
          if (res.status == 200) {
            alert("Đã xóa");
            getListPro();
          } else {
            alert("fbxx" );
          }
        })
        .catch((ex) => {
          console.log(ex);
        });
    };
  const renderItem = ({ item }) => {
  

  return (
    <View key={item.id} style={{  overflow: 'hidden', borderRadius: 20, flexDirection: 'column',padding:0, marginTop: 40, backgroundColor: '#252a32', width: '100%', height: 500 }}>
      <View style={{ height: 350 , overflow: 'hidden'}}>
        <ImageBackground
          style={{ height: '100%',width:'100%',borderRadius:46 }}
          source={{ uri: item.image }} >
          <View style={styles.viewHeader_img}>
            <TouchableWithoutFeedback onPress={()=>favo_del(item.id)}>
              <View style={{ backgroundColor: '#141921', width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Image style={{ width: 15, height: 13,tintColor:'#FF0000'}} source={require('../img/favo.png')} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute', paddingLeft: 20, paddingRight: 20,
            bottom: 0, height: '35%', width: "100%", borderTopLeftRadius: 20, justifyContent: 'center',
            borderTopRightRadius: 20,
          }}>

            <View style={{ width: '100%', height: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
              {/* view 1 */}
              <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                <View>
                  <Text style={{
                    fontSize: 20, fontWeight: 'bold', color: 'white'
                  }}>{item.name}</Text>
                  <Text style={{
                    fontSize: 10, color: 'white'
                  }}>With Steamed Milk</Text>
                </View>
                <View style={{
                  flexDirection: 'row', height: 30, alignItems: 'center'
                }}>
                  <Icon name="star" size={20} color="#ffd700" />
                  <Text style={{
                    fontSize: 20, fontWeight: 'bold', color: 'white'
                  }}> 5</Text>
                  <Text style={{ color: '#aeaeae', fontSize: 15 }}>(99)</Text>
                </View>
              </View>
              {/* view 2 */}
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '35%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                  <View style={{ backgroundColor: '#141921', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Image style={{ width: 35, height: 30, tintColor: '#d17842' }} source={require('../img/cafe.png')} />
                    <Text style={{ color: '#aeaeae', fontSize: 10 }}>Coffee</Text>
                  </View>
                  <View style={{ backgroundColor: '#141921', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Image style={{ width: 25, height: 30, tintColor: '#D17842' }} source={require('../img/milk.png')} />
                    <Text style={{ color: '#aeaeae', fontSize: 10 }}>Milk</Text>
                  </View>
                </View>
                <View style={{ backgroundColor: '#141921', width: '100%', height: '50%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                  <Text style={{ color: '#aeaeae', fontSize: 12 }}>Medium Roasted</Text>
                </View>
                <View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20, }}>
        <Text style={{ color: '#aeaeae', fontSize: 17, margin: '2%', }}>Description</Text>
        <Text style={{ color: '#aeaeae', fontSize: 15 }}>{item.description}</Text>
      </View>
    </View>
  );
}

  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', 
  justifyContent: 'space-between',
  marginTop: 40,marginBottom:10}}>
        <TouchableNativeFeedback onPress={onPressSetting} >
          <Image source={require('../img/Group3.png')} />
        </TouchableNativeFeedback>
        <Text style={{ color:'#ffffff',
fontSize:25,}}> Favoriets </Text>
       <TouchableNativeFeedback onPress={onPressPerso} >
          <Image
            source={require('../img/Intersect.png')}
          />
          </TouchableNativeFeedback>
      </View>
    <ScrollView>
       <FlatList
            data={Favoriets}
            keyExtractor={(item_sp )=>item_sp.id}
            renderItem={renderItem}
          /> 
    </ScrollView>
    
    </View>
  );
}
export default Index