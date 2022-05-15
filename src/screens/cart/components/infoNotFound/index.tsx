import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View,Text, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'
import { styles } from '../../styles'


// eslint-disable-next-line @typescript-eslint/no-var-requires
const bagGray = require('~/icons/bagGray.png')

export const InfoNotFound: React.FC = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={bagGray} style={{width:RFValue(100),height:RFValue(120)}} />
      <Text
        style={{
          fontSize:RFValue(14),
          fontWeight:'bold',
          color:colors.light.secondaryText,
          textAlign:'center',
          marginVertical:15,
          width:'60%'}}>
      
      NENHUM ITEM ENCONTRADO NO CARRINHO.
      </Text>
      <TouchableOpacity 
        style={styles.buttonAddItems}
        onPress={()=> navigation.goBack()}
      >
        <Text style={{fontWeight:'bold',color:colors.light.white}}>ADICIONAR ITENS</Text>
      </TouchableOpacity>
    </View>
  )
}

