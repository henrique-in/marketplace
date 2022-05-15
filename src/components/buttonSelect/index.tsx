import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { useTheme } from '~/hooks/theme'


import { styles } from './styles'



interface Props extends TouchableOpacityProps{
    categorieName: string
    selected: string
}

export const ButtonSelect: React.FC<Props> = ({categorieName,selected,...rest}) => {
  const {theme} = useTheme()
  return (
    <TouchableOpacity 
      {...rest}
      activeOpacity={0.7}
      style={selected === categorieName ? {...styles.selected,backgroundColor:theme.main }: styles.unSelected}>

      <Text style={selected === categorieName ? styles.textSelected : styles.textUnSelected}>{categorieName}</Text>
    </TouchableOpacity>)
}

