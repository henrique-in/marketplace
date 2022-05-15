import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useCart } from '~/hooks/cart'
import { colors } from '~/theme'
import { InternalRoutes } from './internal.routes'

// import { Container } from './styles';

export default function Routes ()  {
  const {loading} = useCart()
  if(loading){
    <View
      style={{
        flex: 1,
        backgroundColor: colors.light.main,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={colors.light.white} />
    </View>
  }
  return <InternalRoutes/>
}

