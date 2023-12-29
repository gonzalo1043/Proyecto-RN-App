import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, IncrementByAmount } from '../features/counter/counterSlice'



const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()


  return (
    <View>
              <View>
            <Button title='Incrementar' onPress={() => dispatch(increment) }/>
            <Text>{count}</Text>
            <Button title='Decrementar' onPress={() => dispatch(decrement)}/>
        </View>
            <TextInput onChangeText={(t) => setAmount(parseInt(t)) } />
            <Button title='Agregar' onPress={()=> dispatch(IncrementByAmount(amount))}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})