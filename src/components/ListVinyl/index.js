import { View, FlatList, Text, Button } from "react-native"
import { styles } from "../../styles/styles"
import CardVinyl from "./cardVinyl"

const ListVinyl = ({vinyls, onModal}) => {
    return <View style= {styles.itemsContainer}>
    <FlatList
    data= {vinyls}
    keyExtractor={item => item.id}
    renderItem={({item}) => <CardVinyl 
                            item={item}
                            onModal={onModal}
                            />
    }
    />
    </View>
}

export default ListVinyl