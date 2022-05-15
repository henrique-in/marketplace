import React from 'react'

import {CartProvider} from './cart'

type Props = {
  children: React.ReactNode;
}
const AppProvider: React.FC<Props> = ({children}) => (
  <CartProvider>
    {children}
  </CartProvider>
)

export default AppProvider
