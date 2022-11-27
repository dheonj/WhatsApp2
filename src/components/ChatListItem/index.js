import { Text, Image, View, StyleSheet } from "react-native";

const ChatListItem = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.imageBackground}>
                <Image source={require('../../../assets/icon.png')}
                style = {styles.image}
                />
            </View>
            <View style = {styles.content}>
                <View style = {styles.row}>
                    <Text numberOfLines={1} style = {styles.name}> Name </Text>
                    <Text style = {styles.subTitle}> 8:30 </Text>
                </View>
                <View>
                    <Text numberOfLines={2} style = {styles.subTitle}> 
                        Message Message Message Message Message Message 
                    </Text>
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
        // backgroundColor:'lightblue'
        borderBottomWidth:StyleSheet.hairlineWidth,
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