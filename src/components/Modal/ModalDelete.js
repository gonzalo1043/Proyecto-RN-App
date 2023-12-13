import { Modal, View, Text, Button } from "react-native"
import { styles } from "../../styles/styles"



const ModalDelete = ({visible, vinyl, onDelete, onChangeVisible}) => {

    return <Modal visible={visible}>
    <View style={styles.ModalPrincipalContainer}>
      <View style= {styles.modalContainer}>
      <Text style= {styles.ModalText}>¿Esta seguro que quiere borrar?</Text>
      <Text style= {styles.ModalText}>{vinyl.title}</Text>
      <Button title="Confirmar" onPress={() => onDelete()}/>
      <Button title="Cerrar" onPress={() => onChangeVisible(false)}/>
      </View>
    </View>
  </Modal>
}

export default ModalDelete