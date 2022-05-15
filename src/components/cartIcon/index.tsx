/* eslint-disable @typescript-eslint/no-var-requires */
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, Image, View, Text, useColorScheme } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useCart } from '~/hooks/cart'
import { useTheme } from '~/hooks/theme'

import { colors } from '~/theme'
import { styles } from './styles'



const bagPurple = require('~/icons/bagPurple.png')
const bagWhite = require('~/icons/bagWhite.png')

export const CartIcon: React.FC = () => {

  const {cart} = useCart()
  const {theme} = useTheme()
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  const someItemsCart = cart.map((item:any) => item?.quantity).reduce((prev, curr) => prev + curr, 0)

  return (
    <TouchableOpacity   onPress={()=> navigation.navigate('cart' as never)}>
      {
        cart.length > 0 ?
          <View style={{...styles.count,backgroundColor:theme.bagIcon}}>
            <Text style={{color:theme.bagText,fontWeight:'bold'}}>{someItemsCart}</Text>
          </View>
          : null

      }
      
      <Image
        resizeMode="stretch"
        style={{ width: RFValue(26.33), height: RFValue(29.5) }}
        source={colorScheme === 'light' ? bagPurple : bagWhite}
      />
    </TouchableOpacity>
  )
}

