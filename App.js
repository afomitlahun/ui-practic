
import { StyleSheet, Text, View,StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>amsal</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    margin:30,
  },
});
