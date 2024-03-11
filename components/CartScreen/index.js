import { View, Text, Image, FlatList, TouchableNativeFeedback, ScrollView, Animated } from 'react-native';
import React, { useState, useEffect } from 'react'
import styles from './style'
// import Content from '../Content';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import PaymentScreen from '../PaymentScreen';
const Index = () => {
  const navigation = useNavigation();
  const [ds_cart, setds_cart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const onPressPerso = () => {
    navigation.navigate('PersonalDetailsScreen')
  }
  const Add_quantity = (itemId) => {
    // Tìm sản phẩm cần thêm trong danh sách ds_cart
    const updatedCart = ds_cart.map(item => {
      if (item.id === itemId) {
        // Tăng số lượng sản phẩm lên 1
        item.quantity += 1;
  
        // Gọi API để cập nhật số lượng mới
        updateQuantityAPI(itemId, item.quantity);
      }
      return item;
    });
  
    // Cập nhật danh sách ds_cart với số lượng mới
    setds_cart(updatedCart);
  };
  const dele_quantity = (itemId) => {
    // Tìm sản phẩm cần thêm trong danh sách ds_cart
    const updatedCart = ds_cart.map(item => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        // Gọi API hoặc cập nhật dữ liệu theo cách bạn muốn ở đây
        updateQuantityAPI(item);
      }
      return item;
    });
  
    // Cập nhật danh sách ds_cart với số lượng mới
    setds_cart(updatedCart);
  };
  
  const updateQuantityAPI = (itemId, newQuantity) => {
    // Gọi API để cập nhật số lượng sản phẩm
    let link_pro_update = `http://192.168.2.103:3000/carts/${itemId}`;
    fetch(link_pro_update, {
      method: 'PATCH', // Sử dụng PATCH để cập nhật một phần của dữ liệu
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }), // Gửi dữ liệu mới (số lượng mới)
    })
      .then((res) => {
        console.log('Response Status:', res.status);
        if (res.status === 200) {
          console.log('Quantity updated successfully.');
        } else {
          console.log('Failed to update quantity.');
        }
      })
      .catch((ex) => {
        console.log(ex);
      });
  };
  
  const onPressSetting = () => {
    navigation.navigate('Setting')

  }
  const onPressPayment = (item) => {
    console.log('Total Price:', totalPrice);
    console.log('Total Price:', ds_cart);
    navigation.navigate('PaymentScreen', { totalPrice, ds_cart });
  };
  const getListPro = async () => {
    let link_api_cart = 'http://10.24.31.113:3000/carts';
    try {
      const response = await fetch(link_api_cart);
      const json = await response.json();
      setds_cart(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListPro();
  }, []);
  useEffect(() => {
    const tonggia = () => {
      const total = ds_cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
    };
    tonggia();
  }, [ds_cart]);
const SwipeableItem = ({ item, onDelete }) => {

      const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [-100, 0],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        });

        return (
          <RectButton style={{
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: 'red',
            padding: 20,
          }} onPress={onDelete}>
            <Animated.Text style={{ transform: [{ scale }] }}>Delete</Animated.Text>
          </RectButton>
        );
      };

      return (
        <Swipeable renderRightActions={renderRightActions}>
          <View key={item.id} style={{ borderRadius: 20, flexDirection: 'column', padding: 15, marginTop: 40, backgroundColor: '#252a32', width: '100%', height: 185 }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <View>
                <Image style={{ width: 100, height: 100,borderRadius:20 }} source={{ uri: item.image }} />
              </View>

              <View>
                <View>
                  <Text style={{ fontSize: 19, color: 'white' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 15, color: 'white' }}>
                    With Steamed Milk
                  </Text>
                  <View style={{ marginTop: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#141921', height: 50, width: 130 }}>
                    <Text style={{ color: 'white', }}>
                      Medium Roasted
                    </Text>
                  </View>
                </View>
              </View>
              <View >
              </View>
              <View>
              </View>
            </View>
            <View style={{
              marginTop: 10, flexDirection: 'row',
              justifyContent: 'space-between',
            }}>

              <View style={{ borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#141921', height: 40, width: 60 }}>
                <Text style={{ color: 'white', }} >
                  {item.size}
                </Text>
              </View>
              <View style={{ height: 40, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20 }}> $  {item.price} </Text>
              </View>
              <TouchableNativeFeedback onPress={()=>dele_quantity(item.id)}>

            
              <View style={{ borderRadius: 12, backgroundColor: '#d17842', height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../img/tru.png')} />
              </View>
                </TouchableNativeFeedback>
              <View style={{ borderColor: '#d17842', borderWidth: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#141921', margin: 4, height: 30, width: 50 }}>
                <Text style={{ color: 'white', }}>
                  {item.quantity}
                </Text>
              </View>
              <TouchableNativeFeedback onPress={()=>Add_quantity(item.id)}>
              <View style={{ borderRadius: 12, backgroundColor: '#d17842', height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../img/cong.png')} />

              </View>
              </TouchableNativeFeedback>
            </View>


          </View>
        </Swipeable>
      );
    }; 
    const handleDelete = (itemId) => {
      let link_pro_del = `http://10.24.31.113:3000/carts/${itemId}`;
      fetch(link_pro_del, {
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
    
    return <SwipeableItem item={item} onDelete={() => handleDelete(item.id)} />;
  }




  return (

    <View style={styles.container}>

      <View style={styles.viewHeader}>
        <TouchableNativeFeedback onPress={onPressSetting} >
          <Image source={require('../img/Group3.png')} />
        </TouchableNativeFeedback>
        <Text style={styles.viewHeader_text}> Cart </Text>
       <TouchableNativeFeedback onPress={onPressPerso} >
          <Image
            source={require('../img/Intersect.png')}
          />
          </TouchableNativeFeedback>
      </View>
      <View style={{flexDirection:'column',marginTop:10,flex:1}}>
      <View style={{flex:0.9}}>

   
         <ScrollView>

        <FlatList
          data={ds_cart}
          keyExtractor={(item_sp_cart) => item_sp_cart.id}
          renderItem={renderItem}
        />
      </ScrollView>
         </View>
       <View style={{
        justifyContent:'center',
        alignItems:'center',
     marginTop:10,
        width: '100%',
        flex: 0.1,
      }}>
        <View style={{
          height: '100%', width: '100%', backgroundColor: '#0C0F14',
          justifyContent: 'space-between', flexDirection: 'row'
        }}>


          <View style={{
            justifyContent: 'center',
            flex: 4,
          }}>
            <View>
              <Text style={{
                fontSize: 15, color: 'white'
              }}>Tottal Price</Text>
            </View>
            <View>
              <Text style={{
                fontSize: 27, color: 'white'
              }}> ${totalPrice.toFixed(2)}</Text>
            </View>
          </View>
          <TouchableNativeFeedback onPress={onPressPayment}>
          <View style={{
            justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#d17842', flex: 6,
            borderRadius: 20,
          }}>
          
            <View>
              <Text style={{ color: 'white', fontSize: 20, }}>Pay</Text>
            </View>
          
          </View>
            </TouchableNativeFeedback>
        </View>
      </View>
      </View>
     
     
    </View>
  );
}
export default Index