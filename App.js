import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Test from './src/components/Test'
import ChatListItem from './src/components/ChatListItem';
import ChatsScreen from './src/screens/ChatsScreen';

// any name when importing a component (with a capital letter) 
// because the source exports by default
import test from './src/components/Test'

const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "07:30",
  },
};


export default function App() {
  return (
    <View style={styles.container}>
        <ChatsScreen />
        {/* <Test/>          */}
        {/* import a component  */}
        {/* {(test)()}  */}
        {/* import a function and use iife */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
