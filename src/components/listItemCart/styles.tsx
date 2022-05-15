import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  container:{
    width:'100%', 
    backgroundColor:colors.light.backgroundListCart,
    borderRadius:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:RFValue(14),
    paddingHorizontal:RFValue(14),
    marginBottom:RFValue(10)
  },
  contentImage:{

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
    width:RFValue(45),
    height:RFValue(60),
    borderRadius:10,
    marginRight:RFValue(5)
  },
  title:{

    fontWeight:'bold',
    fontSize:RFValue(13)
  
  },
  removeButton:{
    backgroundColor:colors.light.background,
    width: RFValue(40),
    height:RFValue(25) ,
    borderWidth:1,
    borderColor:colors.light.gray,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  addButton:{
    backgroundColor:colors.light.background,
    width: RFValue(40),
    height:RFValue(25) ,
    borderWidth:1,
    borderColor:colors.light.gray,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    alignItems:'center',
    justifyContent:'center'
  }

})