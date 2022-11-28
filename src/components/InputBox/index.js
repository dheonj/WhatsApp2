import { View, Text, StyleSheet, TextInput } from 'react-native'
import {useState} from 'react'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'

const InputBox = () => {
    const [newMessage,setNewMessage] = useState('');

    const onSend = () => {
        console.warn('send a message', newMessage)
        setNewMessage('')
    }
  return (
    <View style = {styles.container}>
        <AntDesign name='plus' size={20} color='rolayblue'/>
        <TextInput value={newMessage} onChangeText={setNewMessage} style= {styles.input} placeholder='type your message' />
        <MaterialIcons onPress={onSend} style= {styles.send} name='send' size={16} color='white'/>

    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'whitesmoke',
        padding:5,
        alignItems:'center'
    },
    input:{
        backgroundColor:'white',
        flex:1,
        padding:5,
        paddingHorizontal:10,
        borderRadius:50,
        borderColor:'lightgrey',
        borderWidth:StyleSheet.hairlineWidth,
        marginHorizontal:10,
    },
    send:{
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:15,
        overflow:'hidden'
    },

})