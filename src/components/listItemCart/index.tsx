/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { itemProps } from '~/interface'
import { colors } from '~/theme'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { useTheme } from '~/hooks/theme'

interface Props{
    data: itemProps
    removeItem: ()=> void
    addItem:()=> void
}
const remove = require('~/icons/remove.png')
const add = require('~/icons/add.png')

export const ListItemCart: React.FC<Props> = ({data, addItem, removeItem}) => {
  const {theme} = useTheme()

  return (
    <View 
      style={{...styles.container,backgroundColor:theme.backgroundListCart}}
    >
      <View style={styles.contentImage}>
        <Image resizeMode='stretch' style={styles.image} source={{uri:data.image}}/>
      </View>
      <View style={{width:'47%'}}>
        <Text style={{...styles.title,color:theme.primaryText}}>{`${data?.title.substr(0, 25)}...`}</Text>
        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <Text style={{color:theme.textListCart,fontWeight:'bold'}}> {data.quantity}x </Text>
          <Text style={{color:theme.textListCart,fontWeight:'bold',fontSize:RFValue(14)}}> {data.price.toFixed(2)} </Text>
        </View>
        
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity 
          activeOpacity={0.5}
          style={{...styles.removeButton}}
          onPress={removeItem}
        >
          <Image  style={{width:15,height:5}} source={remove}/>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.5}
          style={{...styles.addButton}}
          onPress={addItem}
        >
          <Image  style={{width:12,height:12}} source={add}/>
        </TouchableOpacity>
      </View>


    </View>
  
  )
}

