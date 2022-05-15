import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  selected: {
    height:RFValue(34),
    backgroundColor:colors.light.main, 
    borderRadius:RFValue(10),
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:RFValue(10),
    paddingVertical:RFValue(8),
    marginVertical:RFValue(10),
    marginRight:RFValue(15)
  },
  unSelected:{
    height:RFValue(34),
    backgroundColor:colors.light.white, 
    borderWidth:2,
    borderColor:colors.light.borderUnselectCategory,
    borderRadius:RFValue(10),
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:RFValue(10),
    paddingVertical:RFValue(8),
    marginVertical:RFValue(10),
    marginRight:RFValue(15)
  },
  textSelected:{
    color:colors.light.terciaryText,
    fontWeight:'bold'
  },
  textUnSelected:{
    color:colors.light.TextUnSelectCategory,
    fontWeight:'bold'
  }
  
})