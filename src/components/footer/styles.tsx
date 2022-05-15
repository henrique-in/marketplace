import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  footer:{
    height:RFValue(120),
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
      },
    }) 
  },
  button:{
    backgroundColor:colors.light.secondary,
    height:RFValue(50),
    width:'70%',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  }

})