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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:RFValue(10),
    paddingHorizontal:RFValue(19),
  },
  footer:{
    height:RFValue(120),
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.light.background,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
      },
    }) 
  }

})