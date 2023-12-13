import { View, Text, Button } from "react-native"
import { styles } from "../../styles/styles"

const CardVinyl = ({onModal, item}) => {
    return <View style= {styles.cardProduct}>
    <Text style= {styles.cardTitle}>{item.title}</Text>
    <Text>{item.price}</Text>
    <Button title= 'DEL' onPress={() => onModal(item)} />
      </View>
}

export default CardVinyl