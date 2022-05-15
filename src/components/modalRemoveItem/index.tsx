import React from 'react'
import { Modal, View ,Text} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '~/theme'
import { styles } from './styles'

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

        <View style={styles.content}>
          <View>
            <Text>Remover Item</Text>
            <Text>Se deseja remover o item do carrinho clique em prosseguir</Text>
          </View>
          <View>
              
          </View>
         
        </View>



      </View>
    </Modal>
  )
}

