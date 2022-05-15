import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    paddingTop:RFValue(40)  
  },
  header:{
    width:'100%',
    paddingVertical:RFValue(10),
    paddingHorizontal:RFValue(19),
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginBottom:RFValue(15 )
  },
  buttonAddItems:{
    backgroundColor:colors.light.main,
    height:RFValue(40),
    width:'80%',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    backgroundColor:colors.light.secondary,
    height:RFValue(50),
    width:'70%',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    
  },
  contentValueCart:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:RFValue(19),
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:colors.light.gray,
    paddingVertical:RFValue(10)
  },
  valueText:{
    fontSize:RFValue(14),
    fontWeight:'bold'
  },
  contentFooter:{
    height:RFValue(130), 
    alignItems:'center',
    justifyContent:'center'
  },
  textButton:{
    fontWeight:'bold',
    color:colors.light.white
  },
  title:{
    fontSize:RFValue(14),
    fontWeight:'bold',
    color:colors.light.secondaryText
  },
  myCartText:{
    fontSize: RFValue(24), 
    fontWeight: 'bold',
    paddingLeft:RFValue(19) 
  },
  buttonBack:{
    position:'absolute',
    left:RFValue(10)
  }

})