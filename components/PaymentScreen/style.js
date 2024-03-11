import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#0C0F14',
    padding:20,
},
box: {
    flex:1,
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
box2_01: {
    flex:8,
    marginTop:'10%',
margin:'1%',
alignItems:'center',
},
box2_01_his:{
    marginTop:'7%'
,    justifyContent:'space-between',
    flexDirection:'column'
    
}
});
export default styles;