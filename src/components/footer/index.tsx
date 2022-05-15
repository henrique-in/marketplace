import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

import { styles } from './styles'

export const Footer: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.button}
        onPress={()=> navigation.navigate('cart' as never)}
      >
        <Text style={{fontWeight:'bold',color:colors.light.white}}>IR PARA O CARRINHO</Text>
      </TouchableOpacity>
    </View>  )
}

