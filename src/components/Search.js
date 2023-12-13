import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { useState } from 'react';

const Search = ({setKeyword}) => {

    const [input, setInput] = useState('')

    return (
        <View style= {styles.container}>
            <TextInput style={styles.input} placeHolder = 'Buscar vinilo' onChangeText={(t) => setInput(t)} value={input} placeholderTextColor={colors.orange}/>
        
            <Pressable onPress={() => setKeyword(input)}>
                <EvilIcons name="search" size={35} color= {colors.orange} />
            </Pressable>
        
            <Pressable onPress={() => setInput('')} >
                <AntDesign name="closecircleo" size={24} color={colors.orange} />
            </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        gap: 10
    },
    input: {
        backgroundColor: colors.color2,
        borderRadius: 15,
        borderWidth: 1,
        borderColor:colors.orange,
        padding: 10,
        width: '60%',
        color: 'white'
    }
})