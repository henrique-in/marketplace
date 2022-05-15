import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useCart } from '~/hooks/cart'

import { colors } from '~/theme'
import { styles } from './styles'


// eslint-disable-next-line @typescript-eslint/no-var-requires
const cartPurple = require('~/icons/bagPurple.png')

export const CartIcon: React.FC = () => {

  const {cart} = useCart()
  const navigation = useNavigation()

  const someItemsCart = cart.map((item:any) => item?.quantity).reduce((prev, curr) => prev + curr, 0)

  return (
    <TouchableOpacity   onPress={()=> navigation.navigate('cart' as never)}>
      {
        cart.length > 0 ?
          <View style={styles.count}>
            <Text style={{color:colors.light.main,fontWeight:'bold'}}>{someItemsCart}</Text>
          </View>
          : null

      }
      
      <Image
        resizeMode="stretch"
        style={{ width: RFValue(26.33), height: RFValue(29.5) }}
        source={cartPurple}
      />
    </TouchableOpacity>
  )
}

