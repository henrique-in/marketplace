import React from 'react'
import {  FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons'
import { colors } from '~/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useCart } from '~/hooks/cart'
import { InfoNotFound } from './components/infoNotFound'
import { ListItemCart } from '~/components'


export const Cart: React.FC = () => {
  const navigation = useNavigation()

  const {cart, AddProduct, RemoveProduct} = useCart()
  const data = [{
  
    'id': 5,
    'title': "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    'price': 695,
    'description': "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    'category': 'jewelery',
    'image': 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    'rating': {
      'rate': 4.6,
      'count': 400
    },
    'quantity':10
  } ]


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
         <Text style={styles.valueText}>$404</Text>
       </View>
       <View style={styles.contentFooter}>
         <TouchableOpacity 
           style={styles.button}
           // onPress={()=> navigation.navigate('cart' as never)}
         >
           <Text style={styles.textButton}>FINALIZAR COMPRA</Text>
         </TouchableOpacity>

       </View>
     </>
      }
    </View>
    
  )
}

