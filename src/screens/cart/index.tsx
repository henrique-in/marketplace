import React from 'react'
import {  FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons'
import { colors } from '~/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { useCart } from '~/hooks/cart'
import { InfoNotFound } from './components/infoNotFound'
import { ListItemCart } from '~/components'


export const Cart: React.FC = () => {
  const navigation = useNavigation()

  const {cart, AddProduct, RemoveProduct} = useCart()

  const totalCart =  cart.map((item:any) => item?.total).reduce((prev, curr) => prev + curr, 0)

  const handleBuy = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'success' }
        ]
      })
    )
  }

  const renderItem = ({ item, index }: ListRenderItemInfo<any>) => {
    return  <ListItemCart removeItem={()=> RemoveProduct(item)} data={item} addItem={()=> AddProduct(item)}/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.buttonBack}
          onPress={()=> navigation.goBack()}
        >
          <Entypo  name="chevron-small-left" size={RFValue(30)} color={colors.light.secondaryText} />
        </TouchableOpacity>
        
        <Text style={styles.title}>CARRINHO</Text>
      </View>
      <Text 
        style={styles.myCartText}>Meu Carrinho</Text>
      
      {
        cart.length < 1 && <InfoNotFound/>
      }
      
      {cart.length > 0 &&
     <>
       <FlatList
         style={{paddingHorizontal:RFValue(19)}}
         data={cart}
         renderItem={renderItem}
      
       />

     
       <View style={styles.contentValueCart}>
         <Text style={styles.valueText}>Total:</Text>
         <Text style={styles.valueText}>${totalCart.toFixed(2)}</Text>
       </View>
       <View style={styles.contentFooter}>
         <TouchableOpacity 
           style={styles.button}
           onPress={()=> handleBuy()}
         >
           <Text style={styles.textButton}>FINALIZAR COMPRA</Text>
         </TouchableOpacity>

       </View>
     </>
      }
    </View>
    
  )
}

