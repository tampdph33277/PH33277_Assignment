import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
container:{
    flex:1,
    
   
 backgroundColor: '#0C0F14',
},
viewHeader: {
  flexDirection: 'column', 
 
flex:1,
backgroundColor: '#0C0F14',

},
viewHeader_img: {
  flexDirection: 'row', 
  justifyContent: 'space-between',
  marginTop: 40,
  paddingLeft:"7%",
  paddingRight:"7%"
},



size: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 20,

},
sizeButton: {
  width:"30%",
  alignItems:'center',
 justifyContent:'center',
  height:40,
  
  borderRadius: 8,
  borderColor: 'gray',
  backgroundColor:'#252A32'
},
sizeText: {
  fontSize: 16,
  color:'#aeaeae',fontSize:17
},
selectedSize: {
  borderColor:'#D17842',
  borderWidth:2,
},
selectedSizeText: {
  color: '#D17842', // Màu chữ khi được chọn
},
});
export default styles;