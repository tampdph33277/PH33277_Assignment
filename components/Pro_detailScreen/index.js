import { View, Text, Image, ImageBackground, FlatList, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, ScrollView } from 'react-native';
import React, { useState, useEffect, } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style'
// import Content from '../Content';
import { CheckBox } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import Content from '../Content'
import CartScreen from '../CartScreen'
import Favoriets from '../FavoritesScreen'
const Index = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const onPressHome = () => {
    navigation.navigate('Content');
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [favo, setfavo] = useState([]);
  const [favo_, setfavo_] = useState(false)
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const Add_cart = () => {
    // Chuẩn bị dữ liệu sản phẩm mới để thêm vào giỏ hàng
    if (selectedSize) { 
      const newItem = {
      image: item.image,
      name: item.name,
      quantity: 1, // Mặc định là 1
      size: selectedSize,
      price: item.price, // Bạn có thể điều chỉnh nếu cần
    };
        // Gọi API để thêm sản phẩm vào giỏ hàng trên server
        fetch('http://10.24.31.113:3000/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        })
        .then(response => response.json())
        .then(data => {
          // Nếu API thành công, cập nhật state local của ứng dụng
          setCart([...cart, data]);
          alert('Đã thêm vào giỏ hàng!');
          navigation.navigate('CartScreen');
        })
        .catch();
    }else{
      alert('Vui lòng chọn size.');
    }
   
  

  };
  const Add_favo = () => {
    // Chuẩn bị dữ liệu sản phẩm mới để thêm vào giỏ hàng

   
      const newItem_favo = {
      image: item.image,
      name: item.name,
      description:item.description,
    };
    const isItemInFavo = favo.some(existingItem => existingItem.name === newItem_favo.name);

    if (!isItemInFavo) {
      // Nếu mục chưa tồn tại, thêm vào yêu thích và cập nhật trạng thái
      fetch('http://10.24.31.113:3000/favoriets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem_favo),
      })
        .then(response => response.json())
        .then(data => {
          setfavo([...favo, data]);
          setfavo_(true);
          alert('Đã thêm vào yêu thích!');
        })
        .catch(error => console.error('Lỗi:', error));
    } else {
      // Nếu mục đã tồn tại, xóa khỏi yêu thích và cập nhật trạng thái
    
    return  alert('Đã xóa khỏi yêu thích!');
    }
     
  };
  return (

    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={{ flex: 4 }}>
          <ImageBackground
            style={{ flex: 1 }}
            source={{ uri: item.image }}
          >
            <View style={styles.viewHeader_img}>
              <TouchableWithoutFeedback onPress={onPressHome}>
                <View style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#52555a',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                  <Image style={{ width: 10, height: 10 }} source={require('../img/UOT.png')} />
                </View>
              </TouchableWithoutFeedback>
              
              <TouchableWithoutFeedback onPress={Add_favo}>
      <View style={{ backgroundColor: '#141921', width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
        <Image style={{ width: 15, height: 13, marginRight: 1, tintColor: favo_ ? '#ff3333' : '#fff' }} source={require('../img/favo.png')} />
      </View>
    </TouchableWithoutFeedback>

            </View>

            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'absolute', paddingLeft:20,paddingRight:20,
              bottom: 0, height: '30%', width: "100%", borderTopLeftRadius: 20, justifyContent: 'center',
              borderTopRightRadius: 20,
            }}>

              <View style={{ width:'100%',height:'70%', flexDirection: 'row', justifyContent: 'space-between' }}>
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
                     flexDirection:'row',height:30,alignItems:'center'
                    }}>
                  <Icon name="star" size={20} color="#ffd700" />
                  <Text style={{
                      fontSize: 20, fontWeight: 'bold', color: 'white'
                    }}> 5</Text>
                    <Text  style={{color:'#aeaeae',fontSize:15}}>(99)</Text>
                  </View>
                </View>
                {/* view 2 */}

                <View style={{ flexDirection: 'column', justifyContent: 'space-between',width:'35%' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical:5}}>
                  <View style={{ backgroundColor:'#141921',width: 45, height: 45,alignItems:'center',justifyContent:'center',borderRadius:10 }}>
                  <Image  style={{width: 30, height: 25,tintColor: '#d17842' }}  source={require('../img/cafe.png')}/>    
                  <Text style={{color:'#aeaeae',fontSize:10}}>Coffee</Text>
                  </View>
                  <View style={{ backgroundColor:'#141921',width: 45, height: 45,alignItems:'center',justifyContent:'center' ,borderRadius:10}}>
                <Image  style={{width: 20, height: 24,tintColor: '#D17842' }}  source={require('../img/milk.png')}/>    
                <Text style={{color:'#aeaeae',fontSize:10}}>Milk</Text>
                  </View>
                  </View>
                  <View style={{ backgroundColor:'#141921',width: '100%', height: '45%',alignItems:'center',justifyContent:'center' ,borderRadius:10 }}>
                   <Text style={{color:'#aeaeae',fontSize:12}}>Medium Roasted</Text>

                  </View>
                  <View>

                  </View>
                </View>
              </View>

            </View>

          </ImageBackground>
        </View>
        <View style={{ flex: 1,paddingLeft:20,paddingRight:20, }}>
          <Text style={{ color: '#aeaeae', fontSize: 17 ,margin:'2%'}}>Description</Text>
          <Text style={{ color: '#aeaeae', fontSize: 15 }}>{item.description}</Text>

        </View>
        <View style={{paddingLeft:20,paddingRight:20,
          flex: 1, flexDirection: 'column',justifyContent:'center'
          
        }}>
          <View style={{}}>
            <Text style={{ color: '#aeaeae', fontSize: 17,margin:'2%' }}>Size</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>

            <TouchableOpacity
              style={[
                styles.sizeButton,
                selectedSize === 'S' && styles.selectedSize,
              ]}
              onPress={() => handleSizeClick('S')}>
              <Text style={[styles.sizeText, selectedSize === 'S' && styles.selectedSizeText]}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sizeButton,
                selectedSize === 'M' && styles.selectedSize,
              ]}
              onPress={() => handleSizeClick('M')}>
              <Text style={[styles.sizeText, selectedSize === 'M' && styles.selectedSizeText]}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sizeButton,
                selectedSize === 'L' && styles.selectedSize,
              ]}
              onPress={() => handleSizeClick('L')}>
              <Text style={[styles.sizeText, selectedSize === 'L' && styles.selectedSizeText]}>L</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
flex: 1,
justifyContent:'center',
alignItems:'center',
// bottom: 9,
// left: 20, 
// right: 0,
// position: 'absolute',
width: '100%',

}}>
<View style={{
 
  height: '70%', width: '90%', backgroundColor: '#0C0F14',
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
      }}>$ 10.4</Text>
    </View>
  </View> 
  <TouchableOpacity style={{
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#d17842', flex: 6,
    borderRadius: 20,
  }} onPress={Add_cart}>
      <Text style={{ color: 'white', fontSize: 20, }}>Add to Cart</Text>
  </TouchableOpacity>
</View>
</View>






      </View>
     
    </View>
  );
}
export default Index