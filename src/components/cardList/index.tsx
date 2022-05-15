import React from 'react'
import { Platform, View, Image,TouchableOpacity,Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import { colors } from '~/theme'

import { styles } from './styles'

interface itemProps{
    id: number
    title:string
    description:string
    category: string
    image:string
    price: string
}

interface Props{
    data?: itemProps
    onPress?: ()=> void
}
// eslint-disable-next-line @typescript-eslint/no-var-requires
const add = require('~/icons/addPurple.png')


export const CardList: React.FC<Props> = ({data, onPress}) => {
  return (
    <View  style={styles.container} >
      <View style={styles.contentImage}>
        <Image
        
          style={styles.image} 
          resizeMode='stretch'
          source={{uri:data?.image}}/>
        <TouchableOpacity 
          activeOpacity={0.4}
          style={styles.button } 
          onPress={onPress}
        >
    
          <Image  style={{width:12,height:12}} source={add}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.category}>{data?.category}</Text>
      <Text style={styles.title}>{data?.title}</Text>
    
      <Text style={styles.price}>${data?.price}</Text>
     

    </View>
  )
}

