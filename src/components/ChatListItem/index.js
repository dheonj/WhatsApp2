import { Text, Image, View, StyleSheet } from "react-native";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ChatListItem = ({chat}) => {
    console.log({chat})
    return(
        <View style = {styles.container}>
            <View style = {styles.imageBackground}>
                {/* <Image source={require('../../../assets/icon.png')} */}
                <Image source={{uri:chat.user.image}}
                style = {styles.image}
                />
            </View>
            <View style = {styles.content}>
                <View style = {styles.row}>
                    <Text numberOfLines={1} style = {styles.name}>{chat.user.name}</Text>
                    <Text style = {styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <View>
                    <Text numberOfLines={2} style = {styles.subTitle}>
                        {chat.lastMessage.text}    
                    </Text> 
                    {/* </Text> */}
                </View>
            </View>
        </View>

    )
}

export default ChatListItem

const styles  = StyleSheet.create({
    container:{
        // flex:1, 
        // backgroundColor:'pink',
        flexDirection:'row',
        marginHorizontal:5,
        paddingHorizontal:5,
        marginVertical:5,
        // paddingVertical:5,
        height: 70,
    },
    imageBackground:{ 
        // backgroundColor:'yellow',
    },
    image:{ 
        width:60, 
        height:60,
        borderRadius:30,
        // paddingHorizontal:10,
        marginRight:5
    },
    content:{
        flex:1,
        // marginLeft:5,
        // backgroundColor:'lightblue',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor: 'lightgrey'
    },
    row:{
        flexDirection:'row',
        marginBottom:5,
    },
    name:{
        flex:1,
        fontWeight:'bold'
    },
    subTitle:{
        color:'grey',
    },
    
})