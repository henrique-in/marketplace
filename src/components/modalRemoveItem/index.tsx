import React from 'react'
import { Modal, View ,Text, TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from '~/hooks/theme'
import { colors } from '~/theme'
import { styles } from './styles'

// import { Container } from './styles';

interface Props{
    isVisible: boolean
    onClose: ()=> void
    confirm: (item: any)=> void
    item: any

}

export const ModalRemoveItem: React.FC<Props> = ({isVisible, onClose, confirm, item}) => {
  const {theme} = useTheme()

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade' >
      <View 
        style={styles.container}>

        <View style={{...styles.content,backgroundColor:theme.background}}>
          <View style={styles.contentText}>
            <Text style={{...styles.title,color:theme.titleModal}}>Remover Item</Text>
            <Text style={{...styles.subtitle, color:theme.textModal}}>Se deseja remover o item do carrinho clique em prosseguir.</Text>
          </View>
          <View>
            <TouchableOpacity 
              activeOpacity={0.5}
              style={styles.button}
              onPress={()=> confirm(item)}
            >
              <Text style={{...styles.textButton,color:colors.light.blue}}>PROSSEGUIR</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.5}
              style={styles.button}
              onPress={onClose}
            >
              <Text style={{...styles.textButton,color:colors.light.red}}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
         
        </View>



      </View>
    </Modal>
  )
}

