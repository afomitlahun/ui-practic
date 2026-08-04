import { StyleSheet, Text, View ,Button, TouchableOpacity } from 'react-native';
 import { TextInput } from 'react-native-paper';
import {SafeAreaView  } from'react-native-safe-area-context';
import{ useState } from 'react';
import FocusTime from './component/focusTime';

export default function App() { 
  const [switchScreen,setSwitchScreen] = useState(false);
 const [addTask , setAddTask] = useState(false);
const [task,setTask] = useState('');
 //const[tasks,setTasks] = useState("");//useState
const [tasks,setTasks] =useState([]);
const [selectedTask, setSelectedTask]=useState("");

const changeScreenn = () => { 
  setSwitchScreen(!switchScreen);
}
const changeScreen = () => {
  const trimmed = task.trim();
  if (trimmed.length>0)  {
    setTasks(prev=>[...prev,trimmed]);
    setTask("")
    setSelectedTask(trimmed);
    setSwitchScreen(true);
  }
};

 const handleBack = () =>{
  setAddTask (prev =>!prev);
 }

 const handleTextechange = () =>{
 // #setTask(task);
  setTask("");
 }

if(switchScreen) {
  return <FocusTime focusTask ={selectedTask} onBack = { changeScreen} />
}

if(addTask) {
  return(
    <FocusTime/>
  )

}


 const handleaddTask = () =>{  //add task function
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
     onChangeText={ (text) => setTask(text )}
     />
    < TouchableOpacity
      style={styles.fabbutton} 
       onPress={() =>{
        handleaddTask();

       changeScreen();
       }}
         >
        <Text
       style={ styles.fabText}>+</Text>
      </ TouchableOpacity>
     </View>
     <View style={styles.focusedtaske}>
      <Text style={styles.focuseTitle}>Things we've focusd on:</Text>
      {tasks.map(( task,index) =>(
        <Text key={index} style ={styles.taskText} >{task} </Text>
      )
      )}
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
  },
  taskText:{
    fontWeight:'semi-bold',
    fontSize:18,
    color:'#fff',
    padding:10
  }

});
