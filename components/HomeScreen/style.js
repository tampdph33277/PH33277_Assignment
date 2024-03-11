import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0C0F14',
    paddingStart: 20,
    paddingEnd: 20,
    
    // paddingBottom: 20
  },
  viewHeader: {
    flexDirection: 'row', //Chuyển thành hàng ngang
    justifyContent: 'space-between',
    marginTop: 60
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
    borderWidth: 0.5,
    padding: 10,
    justifyContent: 'center',
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
export default styles;