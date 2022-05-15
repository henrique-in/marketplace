import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Cart, Home} from '~/screens'

const Routes = createNativeStackNavigator()

export const InternalRoutes = () => (

  <Routes.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="home"
  >
    <Routes.Screen name="home" component={Home}/>
    <Routes.Screen name="cart" component={Cart}/>
  </Routes.Navigator>
)
