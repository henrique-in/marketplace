import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.light.backgroundModal,
    alignItems:'center',
    justifyContent:'center'
  },
  content:{
    width:'80%',
    height:RFValue(170),
   
    borderRadius:15,
  
  },
  contentText:{
    flex:1, 
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingHorizontal:10
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
    fontSize:RFValue(15),
    fontWeight:'bold',
    color:colors.light.titleModal
  },
  subtitle:{
    fontSize:RFValue(12),
    fontWeight:'bold',
    color:colors.light.textModal,
    textAlign:'center'
  },
  button:{
    width:'100%',
    borderTopWidth:1,
    borderTopColor:colors.light.gray,
    alignItems:'center',
    paddingVertical:RFValue(12),
  },
  textButton:{
    fontWeight:'bold',
    fontSize:RFValue(12)
  }

})