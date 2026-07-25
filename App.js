
 import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
 import { TextInput } from 'react-native-paper'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>amsal</Text>
     < TextInput        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c075c',
 
  
  },
});
