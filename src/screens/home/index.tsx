import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { CardList, CardNews, ButtonSelect, CartIcon, Footer } from '~/components'
import { useCart } from '~/hooks/cart'
import { UserRequest } from '~/models/requests'
import { colors } from '~/theme'

import { styles } from './styles'


export const Home: React.FC = () => {
  const {cart, AddProduct} = useCart()

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: RFValue(25), fontWeight: 'bold' }}>
            Produtos
        </Text>
        <CartIcon/>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: colors.light.background }}
      >
     

        <View style={{ paddingLeft: RFValue(19) }}>
          <Text style={{ fontSize: RFValue(10), fontWeight: 'bold', color:colors.light.secondaryText }}>
            FILTRAR CATEGORIA
          </Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() =>
              categories.length === 0 ? (
                <ActivityIndicator color={colors.light.main} />
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
              fontSize: RFValue(25),
              fontWeight: 'bold',
              marginVertical: RFValue(15),
            }}
          >
            Novidades
          </Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() =>
              newProducts.length === 0 ? (
                <ActivityIndicator color={colors.light.main} />
              ) : null
            }
            data={newProducts}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={renderNewProduct}
          />
        </View>

        <View
          style={{
            backgroundColor: 'rgba(235, 235, 237, 1)',
            height: 1,
            width: '100%',
            marginVertical: RFValue(5),
          }}
        />

        <View style={{ paddingHorizontal: RFValue(19), width: '100%' }}>
          <Text
            style={{
              fontSize: RFValue(25),
              fontWeight: 'bold',
              marginVertical: RFValue(10),
            }}
          >
            Listagem
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '105%',
              justifyContent: 'space-between',
            }}
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
