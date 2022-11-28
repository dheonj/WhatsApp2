import { View, Text, ImageBackground, FlatList, StyleSheet } from 'react-native'
import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import Message from '../components/Message';

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
        <FlatList 
            data={messages}
            renderItem={({item}) => <Message message = {item} />}
            style={styles.list} 
            inverted
        />
    </ImageBackground>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg:{
        flex:1
    },
    list:{
        padding:10
    },


})