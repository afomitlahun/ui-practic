
 import { StyleSheet, Text, View ,Button, TouchableOpacity } from 'react-native';
 import { TextInput } from 'react-native-paper';
import {SafeAreaView  } from'react-native-safe-area-context';
import{ useState } from 'react';
//import focusTime from './components/focusTime';

export default function App() { 
 const [task,setTask] = useState('');
 const[tasks,setTasks] = useState([]);//useState


 const addTask = () =>{  //add task function
 console.log("Button pressed");

  setTasks([...tasks,task]);
  setTask('');
 };
    
  return (
    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
      <View  style= { styles.inputcontainer}>
     < TextInput 
     style={styles.textinput}
     placeholder="what would you like to focus on..." 
     mode = "outlined"  
     value={task}
     onChangeText={setTask}     />
    < TouchableOpacity
      style={styles.fabbutton} 
       onPress={ addTask }
         >
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
    backgroundColor: '#0d91a0',
  
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
    width:50,
    height:50,
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
    fontWeight:'bold',
    fontSize:26,
    marginLeft:10,
    color:'white'
  }

});
