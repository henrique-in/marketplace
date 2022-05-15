import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '~/theme'
import { Entypo } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { styles } from './styles'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { useCart } from '~/hooks/cart'

// import { Container } from './styles';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const success = require('~/icons/success.png')


export const Success: React.FC = () => {
  const {ResetCart} = useCart()
  const navigation = useNavigation()


  const handleFinish = async() => {
    await ResetCart()
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'home' }
        ]
      })
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.circle}>
          <Image style={{width:RFValue(50),height:RFValue(35)}} source={success}/>
        </View>
        <Text style={styles.title}>SUCESSO!</Text>
        <Text style={styles.subtitle}>Compra realizada com sucesso, aproveite!</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={()=> handleFinish()}
        >
          <Text style={{fontWeight:'bold',color:colors.light.white}}>IR PARA O CARRINHO</Text>
        </TouchableOpacity>
      </View>
   
    </View>
  )
}

