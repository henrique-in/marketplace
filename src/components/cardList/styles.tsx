import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

export const styles = StyleSheet.create({
  container: {
    width:RFValue(135), 
    marginBottom:RFValue(25),
    marginRight:RFValue(15)
    
    
    
  },
  contentImage:{
    marginBottom:8,
    borderRadius:20,
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
    width:RFValue(135), 
    height:RFValue(120),
    borderRadius:RFValue(10),
  },

  button:{
    backgroundColor: colors.light.white, 
    borderWidth:2,
    borderRadius:20,
    borderColor:colors.light.main,
    width:RFValue(30),
    height:RFValue(30),
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom: 0,
    right: 18,
  },
  category:{
    fontWeight:'bold',
    fontSize:RFValue(10),

  },
  title:{
    
    fontWeight:'bold',
    fontSize:RFValue(14),
    width:'100%' 
  },
  
  price:{
    
    fontWeight:'bold',
    fontSize:RFValue(20),
    marginTop:10,
  }
})