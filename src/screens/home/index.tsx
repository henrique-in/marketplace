import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  ScrollView,
  useColorScheme,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { CardList, CardNews, ButtonSelect, CartIcon, Footer } from '~/components'
import { useCart } from '~/hooks/cart'
import { useTheme } from '~/hooks/theme'
import { UserRequest } from '~/models/requests'
import { colors } from '~/theme'

import { styles } from './styles'


export const Home: React.FC = () => {
  const {cart, AddProduct} = useCart()
  const {theme} = useTheme()
 
  const [categories, setCategories] = useState([])
  const [categorySelected, setCategorySelected] = useState('')

  const [newProducts, setNewProducts] = useState([])
  const [products, setProducts] = useState([])

  const loadCategories = async () => {
    try {
      const result = await UserRequest.getAllCategories()
      setCategories(result.data)
    } catch (error) {
      console.log(error)
    }
  }



  const loadProducts = async () => {
    try {
      const result = await UserRequest.getAllProducts(categorySelected)
      setProducts(result.data)
      setNewProducts(result.data.slice(1, 5))
    } catch (error) {
      console.log(error)
    }
  }

  const searchCategory = (item: string) => {
    if (item === categorySelected) {
      return setCategorySelected('')
    }
    setCategorySelected(item)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  useEffect(() => {
    loadProducts()
  }, [categorySelected])

  const renderCategories = ({ item, index }: ListRenderItemInfo<any>) => {
    return (
      <ButtonSelect
        categorieName={item}
        selected={categorySelected}
        onPress={() => searchCategory(item)}
      />
    )
  }

  const renderNewProduct = ({ item, index }: ListRenderItemInfo<any>) => {
    return <CardNews onPress={() => AddProduct(item)} data={item} />
  }

  return (
    <View style={{...styles.container,backgroundColor:theme.background}}>
      <View style={styles.header}>
        <Text style={{ ...styles.title, color:theme.primaryText }}>
            Produtos
        </Text>
        <CartIcon/>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        
      >
     

        <View style={{ paddingLeft: RFValue(19) }}>
          <Text style={{ ...styles.subtitle, color:theme.secondaryText }}>
            FILTRAR CATEGORIA
          </Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() =>
              categories.length === 0 ? (
                <ActivityIndicator color={theme.main} />
              ) : null
            }
            data={categories}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={renderCategories}
          />
        </View>

        <View style={{ paddingLeft: RFValue(19) }}>
          <Text
            style={{
              ...styles.title,
              color:theme.primaryText,
              marginVertical: RFValue(15)
            }}
          >
            Novidades
          </Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() =>
              newProducts.length === 0 ? (
                <ActivityIndicator color={theme.main} />
              ) : null
            }
            data={newProducts}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={renderNewProduct}
          />
        </View>

        <View
          style={{...styles.divider,backgroundColor:theme.gray}}
        />

        <View style={{ paddingHorizontal: RFValue(19), width: '100%' }}>
          <Text
            style={{...styles.title,marginBottom: RFValue(10),color:theme.primaryText}}
          >
            Listagem
          </Text>

          <View
            style={styles.contentList}
          >
            {newProducts.length === 0 ? (
              <ActivityIndicator color={colors.light.main} />
            ) : (
              products.map((item, index) => {
                return <CardList key={index} onPress={() => AddProduct(item)} data={item} />
              })
            )}
          </View>
        </View>
      </ScrollView>
      {
        cart.length > 0 &&
          <Footer/>
      }
     
    </View>
  )
}
