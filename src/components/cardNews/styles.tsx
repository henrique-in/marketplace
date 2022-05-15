import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  container: {
    width:RFValue(183),
    marginRight:RFValue(47)
  },
  contentImage:{
    marginBottom:8,
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
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
      },
    })  
  },
  image:{
    width:RFValue(183), 
    height:RFValue(189),
    borderRadius:RFValue(10),
  },
  contentButton:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:RFValue(19)
  },
  button:{
    backgroundColor: colors.light.white, 
    borderWidth:2,
    borderRadius:20,
    borderColor:colors.light.main,
    width:RFValue(30),
    height:RFValue(30),
    alignItems:'center',
    justifyContent:'center'
  },
  category:{
    color:colors.light.main,
    fontWeight:'bold',
    fontSize:RFValue(9),

  },
  title:{
    color:colors.light.primaryText,
    fontWeight:'bold',
    fontSize:RFValue(14),
  },
  description:{
    color:colors.light.secondaryText,
    fontSize:RFValue(10),
  },
  price:{
    color:colors.light.main,
    fontWeight:'bold',
    fontSize:RFValue(20),
  }
})