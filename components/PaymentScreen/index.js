import React, { useState } from 'react';
import { View, Text,Modal ,Image ,TouchableNativeFeedback,TouchableWithoutFeedback, ImageBackground} from 'react-native';
import styles from './style';
import { useNavigation,useRoute } from '@react-navigation/native';
import Content from '../Content'
import PersonalDetailsScreen from '../PersonalDetailsScreen'



const Index = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalPrice, ds_cart } = route.params;

  const [oder, setOder] = useState([]);
  const [log_out, setlog_out] = useState(false);

  const onPressHome = () => {
    navigation.navigate('Content');
  };

  const onPressPerso = () => {
    navigation.navigate('PersonalDetailsScreen');
  };

  const onPressLogout = () => {
    setlog_out(true);
  };

  const handleLogout = () => {
    // Thực hiện các bước đăng xuất ở đây
    // Sau khi đăng xuất, đóng modal và thực hiện các công việc khác
    setlog_out(false);
  };

  const formatCreditCardNumber = (creditCardNumber) => {
    const cleanedNumber = creditCardNumber.replace(/\s+/g, '');
    const formattedNumber = cleanedNumber.replace(/(\d{4})/g, '$1 ').trim();
    return formattedNumber;
  };

  const creditCardNumber = '3456075638442';

  const Add_order = async () => {
    try {
      // Lặp qua từng sản phẩm trong giỏ hàng và thêm vào giỏ hàng
      for (let i = 0; i < ds_cart.length; i++) {
        const product = ds_cart[i];
  
        // Tạo một bản sao của sản phẩm với số lượng là 1
        const newItem = {
          image: product.image,
          name: product.name,
          quantity: product.quantity,  // Số lượng mỗi sản phẩm là 1, bạn có thể điều chỉnh nếu cần
          size: product.size,
          price: product.price,
        };
  
        // Thực hiện gửi request để thêm sản phẩm vào giỏ hàng
        const response = await fetch('http://10.24.31.113:3000/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        });
  
        const data = await response.json();
  
        // Nếu API thành công, cập nhật state local của ứng dụng
        setOder((prevOrders) => [...prevOrders, data]);
        alert('Đã mua');
        console.log('API Response:', data);
      }
      // Sau khi thêm hết sản phẩm vào giỏ hàng, chuyển hướng đến trang Order History
      navigation.navigate('Order_HistoryScreen');
    } catch (error) {
      console.error(error);
    }
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
 
  <View  style={{borderColor:"#d17842",borderWidth:2,borderRadius:25}}>

    <ImageBackground 
    style={{borderRadius:25,width:320,height:50,padding:'5%',overflow: 'hidden',flexDirection:'row',justifyContent:''}} 
    source={require('../img/cart24.png')}>
<Image    style={{width:31,height:24}}   source={require('../img/ye.png')} />
 
  <Text  style={{color:"#aeaeae"}}>Credit Card</Text>
     </ImageBackground>
</View>   
</View>

</View>
     <View style={{
        justifyContent:'flex-end',
        alignItems:'center',
     marginTop:10,
        width: '100%',
        flex: 1,
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
              }}> 
              ${totalPrice.toFixed(2)}
              </Text>
            </View>
          </View>
          <TouchableNativeFeedback onPress={Add_order}>
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
  );
};

export default Index;
{/* <View style={styles.box2_01}>

<View style={styles.box2_01_his}>
 
  <View  style={{borderColor:"#d17842",borderWidth:2,padding:'4%',borderRadius:25}}>
  <Text  style={{color:"#aeaeae"}}>Credit Card</Text>
    <ImageBackground 
    style={{marginTop:5,width:320,height:186,padding:'5%',flexDirection:'column',justifyContent:'space-between'}} 
    source={require('../img/cart24.png')}>
<View  style={{flexDirection:'row',justifyContent:'space-between'}}  >
  <Image    style={{marginTop:5,width:31,height:24}}   source={require('../img/ye.png')} />
  <Image    style={{marginTop:5,width:51,height:16}}   source={require('../img/Veisaapng.png')} />
</View>
<View>
  <Text  style={{color:"#aeaeae"}}>{formatCreditCardNumber(creditCardNumber)}</Text>
</View>
<View  style={{flexDirection:'row',justifyContent:'space-between'}}  >
  <View>
    <Text  style={{color:"#aeaeae"}}>Card Holder Name</Text>
    <Text  style={{color:"#aeaeae"}}>điền tên name</Text>
  </View>
  <View>
    <Text  style={{color:"#aeaeae"}}>Expiry Date</Text>
    <Text  style={{color:"#aeaeae",textAlign:'right'}}>02/30</Text>
  </View>
</View>
    </ImageBackground>
</View> 
<View >
 <Text style={{ 

  color: 'white',
  fontSize: 20,
  justifyContent: 'center',}} >History</Text>
  </View> 
  
  
  <View>
    <Image style={{marginTop:7}} source={require('../img/right.png')}/>
  </View>
</View>

</View> */}