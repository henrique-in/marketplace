import React from 'react'
import { Modal, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'

// import { Container } from './styles';

interface Props{
    isVisible: boolean
    onClose: any

}

export const ModalRemoveItem: React.FC<Props> = ({isVisible, onClose}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType='fade' >
      <View 
        style={{
          flex:1,
          backgroundColor:colors.light.backgroundModal,
          alignItems:'center',
          justifyContent:'center'
        }}>

        <View style={{width:'80%',height:RFValue(160),backgroundColor:colors.light.background}}>
                
        </View>

      </View>
    </Modal>
  )
}

