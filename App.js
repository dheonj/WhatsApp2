import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './src/components/Test'
// any name when importing a component (with a capital letter) 
// because the source exports by default
import index from './src/components/Test'
// if you 


export default function App() {
  return (
    <View style={styles.container}>
      <Text>haha</Text>
        <Test/>         
        {/* import a component  */}
        {(index)()} 
        {/* import a function and use iife */}
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
