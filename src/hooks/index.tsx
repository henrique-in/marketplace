import React from 'react'

import {CartProvider} from './cart'
import { ThemeProvider } from './theme'

type Props = {
  children: React.ReactNode;
}
const AppProvider: React.FC<Props> = ({children}) => (
  <ThemeProvider>
    <CartProvider>

      {children}
    </CartProvider>
  </ThemeProvider>
 
)

export default AppProvider
