import { Modal, View, Text, Button } from "react-native"
import { styles } from "../../styles/styles"

const ModalSuccesfulDelete = ({visibleSuccessfulDelete, onChangeVisibleSuccessfulDelete}) => {

    return <Modal visible={visibleSuccessfulDelete}>
    <View style={styles.ModalPrincipalContainer}>
      <View style= {styles.modalContainer}>
      <Text style= {styles.ModalText}>Se ha borrado exitosamente</Text>
      <Button title= "Inicio" onPress={() => onChangeVisibleSuccessfulDelete(false)}/>
      </View>
    </View>
  </Modal>
}

export default ModalSuccesfulDelete