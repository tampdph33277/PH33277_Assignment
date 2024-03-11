import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
container:{
    flex:1,
  
 backgroundColor: '#0C0F14',
    padding:20,
    
},
box: {
  marginTop:'7%',
  justifyContent:'space-between',
  flexDirection:'row'
},
box_img:{
  marginTop:5,
width:30,
height:30,
backgroundColor:'#52555a',
alignItems:'center',
justifyContent:'center',
borderRadius:10,
},
box_text_container:{
marginEnd:'38%'
},
box_text:{
  color: 'white',
  fontSize: 25,
},
logo: {
  height:100,
  width:100,
  
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
    height: 45,
    width:300,
    padding: 5,
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
});
export default styles;