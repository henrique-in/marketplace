import React from 'react'
import { Platform, View, Image,TouchableOpacity,Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import { colors } from '~/theme'

import { styles } from './styles'
import { useTheme } from '~/hooks/theme'

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

export const CardNews: React.FC<Props> = ({data, onPress}) => {
  const {theme} = useTheme()
  return (
    <View  style={styles.container} >
      <View style={styles.contentImage}>
        <Image
          style={styles.image} 

          source={{uri:data?.image}}/>
      </View>
      <Text style={{...styles.category,color:theme.main}}>{data?.category}</Text>
      <Text style={{...styles.title, color:theme.primaryText}}>{data?.title?.length > 20 ? `${data?.title.substr(0, 20)}...` : data?.title}</Text>
      <Text style={{...styles.description,color:theme.secondaryText}}>
        {data?.description?.length > 53 ? `${data?.description.substr(0, 53)}...` : data?.description}
      </Text>
      <View style={styles.contentButton}>
        <Text style={{...styles.price,color:theme.main}}>${data?.price.toFixed(2)}</Text>
        <TouchableOpacity 
          activeOpacity={0.4}
          style={styles.button } 
          onPress={onPress}
        >
          <Image  style={{width:12,height:12}} source={add}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

