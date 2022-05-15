import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:colors.light.main,
  },
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    backgroundColor:colors.light.secondary,
    height:RFValue(50),
    width:'70%',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  },
  circle:{
    width:RFValue(170),
    height:RFValue(170),
    borderWidth:9,
    borderColor:colors.light.white,
    borderRadius:RFValue(100),
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:RFValue(22),
    color:colors.light.white,
    marginTop:RFValue(20),
    marginBottom:RFValue(10)
  },
  subtitle:{
    fontSize:RFValue(14),
    color:colors.light.white
  },
  footer:{
    height:RFValue(120), 
    alignItems:'center',
    justifyContent:'center'
  }

})