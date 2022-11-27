import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Test from './src/components/Test'
import ChatListItem from './src/components/ChatListItem';

// any name when importing a component (with a capital letter) 
// because the source exports by default
import test from './src/components/Test'

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Test/>          */}
        {/* import a component  */}
        {/* {(test)()}  */}
        {/* import a function and use iife */}
        <ChatListItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
