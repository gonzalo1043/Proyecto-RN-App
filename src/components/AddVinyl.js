import { View, TextInput, Button } from "react-native"
import { styles } from "../styles/styles"

const AddVinyl = ({title, onChangeTitle, price, onChangePrice, onAddVinyl}) => {

    return <View style={styles.inputAndButtonContainer}>
    <TextInput
    style={styles.input}
    placeholder='Nombre'
    value={title}
    onChangeText={(t) => onChangeTitle(t)}
    />

    <TextInput
    style={styles.input}
    placeholder='Precio'
    value={price}
    onChangeText={(t) => onChangePrice(t)}
    />
    <Button title='ADD' onPress={onAddVinyl}/>
  </View>
}

export default AddVinyl