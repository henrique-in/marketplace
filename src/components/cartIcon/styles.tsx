import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  count: {
    width:30,
    height:30,
    backgroundColor:colors.light.white,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderRadius:20,
    borderColor:colors.light.borderUnselectCategory,
    position: 'absolute',
    zIndex:1,
    top: -9,
    right: -12,
  },

})