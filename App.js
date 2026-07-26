
 import { StyleSheet, Text, View ,SafeAreaView,Button, TouchableOpacity } from 'react-native';
 import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>amsal</Text>
      <View  style= { styles.inputcontainer}>
     < TextInput 
     style={styles.textinput}
     placeholder="what would you like to focus on..."        />
    < TouchableOpacity
      style={styles.fabbutton}>
       <Text
       style={ styles.fabText}>+</Text>
      </ TouchableOpacity>
     </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c075c',
    paddingTop:50,
    paddingHorizontal:20,
  },
  inputcontainer:{

  flexDirection:'row',
  padding:20,
  gap:10,
  
  },
  textinput:{
    flex:1,
  },
  fabbutton:{
    backgroundColor:'#fff',
    width:50,
    borderradius:7,
    justifyContent:'center'

  },
  fabbutton:{
    width:50,
    heigh:50,
    justifyContent:'center',
    alignItems:'center',
   backgroundColor:'#fff',
   borderRadius:40,

  },
  fabText:{
    fontSize:30,
    color:'#060505',
  },

});
