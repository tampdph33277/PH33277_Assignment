import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState,useEffect  } from 'react';
import Setting from '../Setting'
import Pro_detailScreen from '../Pro_detailScreen'
import Pro_detailScreen_coffee from '../Pro_detailScreen_coffee'
import { useNavigation } from '@react-navigation/native';
// Khai bao list Tab
const listTab = [
  {
    status: 'All',
  },
  {
    status: 'Capuccino',
  },
  {
    status: 'Espresso',
  },
  {
    status: 'Americano'
  }
];
const Home = () => {
  const navigation = useNavigation();
  const onPressSetting = () => {
    navigation.navigate('Setting')
  }
  const onPressPerso = () => {
    navigation.navigate('PersonalDetailsScreen')
  }
  const [status, setStatus] = useState('All')
  const [ds_product_cf, setds_product_cf] = useState([]);
  const [ds_product, setds_product] = useState([]);
  // const [dataCakeList, setDataCakeList] = useState(dataCake)
  // thanh Tabbar
  const setStatusFilter = status => {
    let link_api_product = 'http://10.24.31.113:3000/products';
    let link_api_product_cf = 'http://10.24.31.113:3000/productCafe';
   
    if (status !== 'All') {
      fetch(link_api_product)
        .then(response => response.json())
        .then(data => {
          const filteredData = data.filter(item => item.status === status);
          setds_product(filteredData);
        })
        .catch(error => {
          // Xử lý lỗi khi gọi API
        });
        fetch(link_api_product_cf)
        .then(response => response.json())
        .then(data => {
          const filteredData = data.filter(item => item.status === status);
          setds_product_cf(filteredData);
        })
        .catch(error => {
          // Xử lý lỗi khi gọi API
        });
    } else {
      // Gọi API để lấy lại toàn bộ dữ liệu ban đầu
      fetch(link_api_product)
        .then(response => response.json())
        .then(data => {
          setds_product(data);
        })
        .catch(error => {
          // Xử lý lỗi khi gọi API
        });
        fetch(link_api_product_cf)
        .then(response => response.json())
        .then(data => {
          setds_product_cf(data);
        })
        .catch(error => {
          // Xử lý lỗi khi gọi API
        });
    }
    setStatus(status);
  }
  const getListPro = async () => {
    let link_api_product = 'http://10.24.31.113:3000/products';
    try {
      const response = await fetch(link_api_product);
      const json = await response.json();
      setds_product(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListPro();
  }, []);

  const getListPro_cf = async () => {
    let link_api_product_cf = 'http://10.24.31.113:3000/productCafe';
    try {
      const response = await fetch(link_api_product_cf);
      const json = await response.json();
      setds_product_cf(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListPro_cf();
  }, []);
  // Hiển thị item sản phẩm coffee
  const renderItem = ({ item }) => {
    return (
      <View key={item.id} style={st.itemContainer}>
           <Pressable
         onPress={() => {
    navigation.navigate('Pro_detailScreen', { item: item });
  }}>  
        <View style={st.itemLogin}>
          <Image
            style={st.itemImage}
            source={{ uri: item.image }}
          />
        </View>
        <View style={st.itemStatus}>
          <Text style={{
            color: '#AEAEAE', marginStart: 10,
            fontWeight: '500', fontSize: 14
          }}>{item.status}</Text>
        </View>
      
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
        }}>
          
          <View style={{
            flexDirection: 'row',
            marginStart: 10,
            marginTop: 10
          }}>
            <Text style={{
              color: '#D17842', fontWeight: 'bold',
              fontSize: 16
            }}>$</Text>
            <Text style={{
              color: '#AEAEAE', fontWeight: 'bold', fontSize: 16, marginStart: 3
            }} >{item.price}</Text>
          </View>
          {/* Nut Add */}
          <View style={{
            width: 30, height: 30,
            backgroundColor: '#D17842',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10,
            marginTop: 5
          }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: 'white'
              }}
            >+</Text>
          </View>
        </View>
</Pressable>

      </View>
    )
  }
  const renderItemCF = ({ item }) => {
    return (
      <View key={item.id} style={st.itemContainer}>
           <Pressable
         onPress={() => {
    navigation.navigate('Pro_detailScreen_coffee', { item: item });
  }}>  
        <View style={st.itemLogin}>
          <Image
            style={st.itemImage}
            source={{ uri: item.image }}
          />
        </View>
        <View style={st.itemStatus}>
          <Text style={{
            color: '#AEAEAE', marginStart: 10,
            fontWeight: '500', fontSize: 14
          }}>{item.status}</Text>
        </View>
      
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
        }}>
          
          <View style={{
            flexDirection: 'row',
            marginStart: 10,
            marginTop: 10
          }}>
            <Text style={{
              color: '#D17842', fontWeight: 'bold',
              fontSize: 16
            }}>$</Text>
            <Text style={{
              color: '#AEAEAE', fontWeight: 'bold', fontSize: 16, marginStart: 3
            }} >{item.price}</Text>
          </View>
          {/* Nut Add */}
          <View style={{
            width: 30, height: 30,
            backgroundColor: '#D17842',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: 10,
            marginTop: 5
          }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: 'white'
              }}
            >+</Text>
          </View>
        </View>
</Pressable>

      </View>
    )
  }

 
  return (
    <View style={st.container}>
      <ScrollView >
        <View style={st.viewHeader}>
          <TouchableNativeFeedback onPress={onPressSetting} >
            <Image source={require('../img/Group3.png')} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={onPressPerso} >
          <Image
            source={require('../img/Intersect.png')}
          />
          </TouchableNativeFeedback>
         
        </View>
        {/* Phần chữ */}
        <Text style={st.textHeader}>Find the best {'\n'}coffee for you</Text>
        {/* Thanh tìm kiếm */}
        <TextInput
          style={st.textInputSearch}
          placeholder="Search Coffee ...."
          placeholderTextColor={'#AEAEAE'}
        />

        {/* Phần code hiển thị coffee  */}
        <SafeAreaView style={st.SafeArea}>
          <View style={st.listTab}>
            {listTab.map((e, index) => (
              <TouchableOpacity
                key={index}
                // Xét trạng thái tab khi chuyển
                style={[st.btnTab, status === e.status && st.btnTabActive]}
                onPress={() => setStatusFilter(e.status)}
              >
                <Text style={[st.textTab, status === e.status && st.textTabActive]}>
                  {e.status}
                </Text>
              </TouchableOpacity>
            ))
            }
          </View>
          {/* hiển thị danh sách sản phẩm */}
     
          <FlatList
            horizontal showsVerticalScrollIndicator={false} //hiển thị ngang và không có gạch bên dưới 
            data={ds_product}
            keyExtractor={(item_sp )=>item_sp.id}
            renderItem={renderItem}
          /> 
        
        </SafeAreaView>
        {/* Hiển thị chữ cake */}
        <Text style={{
          color: '#cecccc',
          marginTop: 10,
          fontSize: 17,
          fontWeight: '600'
        }}>Coffee</Text>
        {/* Hiển thị sản phẩm bánh */}
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          data={ds_product_cf}
          keyExtractor={(item_sp_cf )=>item_sp_cf.id}
          renderItem={renderItemCF}
        /> 
       
      </ScrollView>
    </View>


  );
};

export default Home;

const st = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0C0F14',
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 60,
    // paddingBottom: 20
  },
  viewHeader: {
    flexDirection: 'row', //Chuyển thành hàng ngang
    justifyContent: 'space-between',

  },
  textHeader: {
    color: 'white',
    fontWeight: '600',
    fontSize: 28,
    marginTop: 20,
  },
  textInputSearch: {
    height: 45,
    borderRadius: 7,
    borderColor: 'white',
    borderWidth: 0.3,
    marginTop: 25,
    color: 'white',
    paddingStart: 15,
  }, //code giao diện cho hiển thị sản phẩm
  SafeArea: {
    justifyContent: 'center',
   
  },
  listTab: {
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 15,
    
  },
  btnTab: {
    width: Dimensions.get('window').width / 4.5,
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop:5,
    justifyContent: 'center',
    borderColor:'red'
  },
  textTab: {
    fontSize: 13,
    color: '#AEAEAE'
  },
  textTabActive: {
    color: '#D17842'
  },
  itemContainer: {
    paddingVertical: 10,
    backgroundColor: '#252A32',
    width: 143,
    marginBottom: 10,
    marginEnd: 10,
    borderRadius: 10
  },
  itemLogin: {
    padding: 10,

  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 10
  },
  itemContainerCake: {
    paddingVertical: 10,
    backgroundColor: '#252A32',
    width: 143,
    marginBottom: 30,
    marginEnd: 10,
    borderRadius: 10,
    marginTop: 10
  }



});