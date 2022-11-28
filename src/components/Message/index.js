import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Message = ({message}) => {
    const isMyMessage = () => {
        return message.user.id ==='u1'
    }
  return (
    <View style = {[styles.container,{
        backgroundColor:(isMyMessage()?'#DCF8C5':'white'),
        alignSelf: (isMyMessage()?'flex-end':'flex-start'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

elevation: 1,
    }]}>
      <Text > {message.text}</Text>
      <Text style={styles.time}> {dayjs(message.createdAt).from('202210111000')}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container:{
        margin:5,
        padding:10,
        borderRadius:10,
        maxWidth:'80%',

    },
    time:{
        color:'grey',
        alignSelf:'flex-end'
    },

})