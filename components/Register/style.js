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
  //
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
      input: {
        borderRadius:10,
        backgroundColor: '#0C0F14',
        marginTop:'3%',
        height: 50,
        color:'#aeaeae',
        width:300,
        padding: 15,
        borderColor:'#252A32',
        borderWidth:1,
      },
  inner: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    borderColor:2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
  },
  button_01:{
    color:'#ffffff',
    backgroundColor:'#D17842',
borderRadius:10,
  flex: 1,
  marginHorizontal: 20,
  
},

});
export default styles;