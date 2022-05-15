import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { colors } from '~/theme'
import { styles } from './styles'



interface Props extends TouchableOpacityProps{
    categorieName: string
    selected: string
}

export const ButtonSelect: React.FC<Props> = ({categorieName,selected,...rest}) => {
  // selected === categorieName ? styles.selected : styles.unSelected
  return (
    <TouchableOpacity 
      {...rest}
      activeOpacity={0.7}
      style={selected === categorieName ? styles.selected : styles.unSelected}>

      <Text style={selected === categorieName ? styles.textSelected : styles.textUnSelected}>{categorieName}</Text>
    </TouchableOpacity>)
}

