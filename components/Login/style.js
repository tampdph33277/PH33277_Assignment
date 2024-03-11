import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
 backgroundColor: '#0C0F14',
    padding:20,
    
},
logo: {
  height:'10%',
  width:'40%',
  marginBottom:'10%',
},
///
text_01:{
  fontSize:15,
  fontStyle:'normal',
  color:'white',
  },

  text_02:{
    marginTop:'2%',
    fontSize:15,
    fontStyle:'normal',
    color:'#828282',

    },
input: {
    borderRadius:10,
    backgroundColor: '#0C0F14',
  color:'#aeaeae',
    height: 50,
    width:300,
    padding: 15,
    borderColor:'#252A32',
    borderWidth:1,
  },
  inner: {
    paddingHorizontal: 20,
  },
  checkbox:{
alignItems:'flex-start',
backgroundColor:'#0C0F14',
margin:'3%'
  },
  buttonContainer: {
    borderColor:2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:10,
  },
  button_01:{
    color:'#ffffff',
    backgroundColor:'#D17842',
borderRadius:10,
  flex: 1,
  marginHorizontal: 20,
  
},
button_02: {
  color: '#000000', 
  backgroundColor: '#ffffff',
  borderRadius: 10,
  flex: 1,
  marginHorizontal: 20,
},
text_03:{
  marginTop:'4%',
    color:'#828282',
fontSize:13,
fontStyle:'normal',
},
text_04:{
  marginTop:'4%',
  color:'#D17842',
fontSize:14,
fontWeight:'bold',
justifyContent:'center'
},
textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
  },
});
export default styles;