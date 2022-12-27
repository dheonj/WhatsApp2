import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/ChatListItem';

const ContactsScreen = () => {
return (
    <FlatList 
      data={chats}
      renderItem={({item}) => <ContactListItem chat = {item} /> }
    style={styles.flatlist}/>
  )
}

export default ContactsScreen

const styles = StyleSheet.create({
  flatlist:{
    backgroundColor:'white',
  },

})