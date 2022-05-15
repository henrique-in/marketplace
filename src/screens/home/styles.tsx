import {  Platform, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { colors } from '~/theme'




export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:RFValue(40) 

      
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:RFValue(10),
    paddingHorizontal:RFValue(19),
  },
  title:{
    fontSize: RFValue(25), 
    fontWeight: 'bold'
  },
  subtitle:{
    fontSize: RFValue(10), 
    fontWeight: 'bold',
  },
  divider:{
    height: 0.5,
    width: '100%',
    marginVertical: RFValue(20),
  },
  contentList:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '105%',
    justifyContent: 'space-between',
  }

})