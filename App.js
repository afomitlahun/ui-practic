
 import { StyleSheet, Text, View ,Button, TouchableOpacity } from 'react-native';
 import { TextInput } from 'react-native-paper';
import {SafeAreaView  } from'react-native-safe-area-context';
import{ useState } from 'react';

export default function App() { 
  const [task,setTask]= 
  useState('');
   const [task,setTask]=
    useState([]);
    const addTask = () => {
     setTask([...task,task]); 
     setTask('');
    };
  return (
    <SafeAreaView style={styles.container}>
      <Text>amsal</Text>
      <View  style= { styles.inputcontainer}>
     < TextInput 
     style={styles.textinput}
     placeholder="what would you like to focus on..." 
     mode = "outlined"  
     onPress={addTask}
     value={task}
     onChangeText={setTask}     />
    < TouchableOpacity
      style={styles.fabbutton}  onPress={ () =>{}}>
       <Text
       style={ styles.fabText}>+</Text>
      </ TouchableOpacity>
     </View>
     <View style={styles.focusedtaske}>
      <Text style={styles.focuseTitle}>Things we've focusd on:</Text>
      <View style= {{padding:20}}>
        <Text style ={{fontSize:18,color:'#fff', fontWeight:'semi-bold'}} > 1, Learn react native</Text>
        <Text style ={{fontSize:18,color:'#fff', fontWeight:'semi-bold'}}> 2, learn js bacic</Text>
      </View>
     </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c075c',
  
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
   backgroundColor:'transparent',
   borderRadius:40,
   borderWidth:2,
   borderColor:'white',
   marginLeft:10,

  },
  fabText:{
    fontSize:30,
    color:'#fff',
  },
  focusedtaske:{
    margin:20,
    padding:10,
  },
  focuseTitle:{
    fontweight:'bold',
    fontsize:26,
    marginLeft:10,
    color:'white'
  }

});
