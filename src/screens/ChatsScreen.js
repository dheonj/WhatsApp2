    import { View, Text, FlatList, StyleSheet } from 'react-native'
    import React from 'react'
    import chats from '../../assets/data/chats.json';
    import ChatListItem from '../components/ChatListItem';
    
    const ChatsScreen = () => {
    return (
        <FlatList 
          data={chats}
          renderItem={({item}) => <ChatListItem chat = {item} /> }
        style={styles.flatlist}/>
      )
    }
    
    export default ChatsScreen

    const styles = StyleSheet.create({
      flatlist:{
        backgroundColor:'white',
      },

    })