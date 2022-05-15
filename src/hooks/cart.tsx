
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {api} from '../services/api'
import {Alert} from 'react-native'
import { itemProps } from '~/interface'
import { ModalRemoveItem } from '~/components/modalRemoveItem'
  

 type Props = {
     children: React.ReactNode;
 }
  
  interface CartContextData {
    cart: [];
    loading: boolean;
    AddProduct(item?: itemProps): Promise<void>
    RemoveProduct(item?: itemProps): Promise<void>
    ResetCart(): Promise<void>


  }
  
  
const CartContext = createContext<CartContextData>({} as CartContextData)
  
export const CartProvider: React.FC<Props> = ({children}) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [modalRemove, setModalRemove] = useState(null)
  
  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const cartData = await AsyncStorage.getItem('@MarketPlace:cart')
  
      if (cartData) {
        setData(JSON.parse(cartData))
      }
  
      setLoading(false)
    }
  
    void loadStorageData()
  }, [])


 
  const  order= (a: { id: number },b: { id: number }) =>{
    return a.id - b.id
  }
  const AddProduct = async(item: any) => {
    const aux = {...item, quantity: 1, total: item.price}

    if(data.some((e: { id: any }) => e.id === aux.id)){
      const filter = data.filter((d: { id: any }) => d.id === aux.id)
      const otherItems = data.filter((d: { id: any })=> d.id !== aux.id)
      const arrayFilter = [...filter, aux]
      const someQuantity = arrayFilter.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)
      const resultSome = {...aux, quantity:someQuantity, total: aux.price*someQuantity}
      
      const result = [...otherItems,resultSome]
      await AsyncStorage.setItem('@MarketPlace:cart',JSON.stringify(result.sort(order)))
      return setData(result.sort(order))
      
    }
    const array = [...data, aux]
    await AsyncStorage.setItem('@MarketPlace:cart',JSON.stringify(array.sort(order)))
    return setData(array.sort(order))
  }
  
  const toogleModalRemove = (item: any) => {
    setModalRemove(item)
  }

  const RemoveProduct = async (item:any) => {
      
    if(item.quantity > 1){
      const otherItems = data.filter((d: { id: any })=> d.id !== item.id)
      const aux = {...item, quantity: item.quantity - 1, total: (item.quantity - 1)*item.price}

      const result = [...otherItems, aux]

      await AsyncStorage.setItem('@MarketPlace:cart',JSON.stringify(result.sort(order)))

      return setData(result.sort(order))
    }
    if(item.quantity === 1 && modalRemove !== null){
      
      const otherItems = data.filter((d: { id: any })=> d.id !== item.id)
      await AsyncStorage.setItem('@MarketPlace:cart',JSON.stringify(otherItems.sort(order)))
      setData(otherItems)
      return toogleModalRemove(null)
       
       
    }
    if(item.quantity === 1 && modalRemove === null) {
      return toogleModalRemove(item)
    }
  }


  const ResetCart = async() =>{
    await AsyncStorage.removeItem('@MarketPlace:cart')
    setData([])
  }
  

  
  return (
    <CartContext.Provider value={{cart: data, loading, AddProduct, RemoveProduct,ResetCart}}>
      {children}
      <ModalRemoveItem
        item={modalRemove}
        isVisible={modalRemove !== null}
        onClose={()=> toogleModalRemove(null)}
        confirm={(item: any)=> RemoveProduct(item)}
      />
    </CartContext.Provider>
  )
}
  
export function useCart(): CartContextData {
  const context = useContext(CartContext)
  
  if (!context) {
    throw new Error('useCart must be used within an CartProvider')
  }
  return context
}
  