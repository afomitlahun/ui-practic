import { StyleSheet, Text, View ,Button, TouchableOpacity,ImageBackground,ScrollView,Pressable } from 'react-native';
 import { TextInput } from 'react-native-paper';
import {SafeAreaView  } from'react-native-safe-area-context';
import{ useState } from 'react';
import FocusTime from './component/focusTime';
import {SystemBars} from 'react-native-edge-to-edge';


export default function App() { 
  const [switchScreen,setSwitchScreen] = useState(false);//focusTime screen atasay
// const [addTask , setAddTask] = useState(false);
const [task,setTask] = useState('');
const [tasks,setTasks] =useState([]);//ye mnsfewn list lemaskemet  new 
const [selectedTask, setSelectedTask]=useState("");// list wst yemeretnewn lemaskemet new

const changeScreen = () => { 
  setSwitchScreen(!switchScreen);// function new screen ykeyral ena boolean ygelebtal(!)
}
 const addTask = () => {   // function new button sichan yseral
  const trimmed = task.trim();  //space yatefal e.g  |    learn react |--> | learn react| 
  if (trimmed.length>0)  {  // snt fidel endesafe yfetshal
  setTasks(prev=>[...prev,trimmed]); // prev=kedmo yenebere task ..prev befit yeneberewn
  //  hulu yametal trimmed wtetun ykeyral
    setTask("") //button keteneka behuala learn react blen yesafnew ytefal(clane endiyaderg)
    setSelectedTask(trimmed); //ahun yemeretkut task screen lay askemtlgni
  //setSwitchScreen(!switchScreen);// function new screen ykeyral ena boolean ygelebtal(!)
   //setSwitchScreen(true);// screen ykeyral//yhe sitera switchScreen= true yhonal
  }
};


 //const handleBack = () =>{
  //setAddTask (prev =>!prev);//back button sichan false->true ,true->false
 //}

if(switchScreen) {  // = if(switchscreen === true) yhe malet screen ykeyrewal malet new
  return <FocusTime  // FocusTime asay
  focusTask ={selectedTask} // learn react native bihon yemeretnew esun wed focus yemiwesdln{ 
  // focusTask&onBck props is parent component ke aap wed focustime yemilkew mereja new  }
   onBack = { changeScreen} /> //  ezihm funcion eyelacn new on back snneka degmo screen adrglgni
//}




// const handleaddTask = () =>{  //add task function

 //setTasks([...tasks,task]);
  
 };
    
  return (
    <SafeAreaView style={styles.container}>
      <SystemBars style="light"/>
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
        addTask();
       changeScreen();
       }}
         >
        <Text
       style={ styles.fabText}>+</Text>
      </ TouchableOpacity>
     </View>
     <View style={styles.focusedtaske}>
      <Text style={styles.focuseTitle}>Things we've focusd on:</Text>
      <ImageBackground style={styles.taskBackground} source={require('./assets/images/focusss.jpg')}>
      <ScrollView style= {{padding:20}} contentContainerStyle={{ gap:20} } >
      {tasks.map(( task,index) =>(
        <Pressable key={index} onPress={()=>{changeScreen(); setSelectedTask(task);}}>
        <Text key={index} style ={styles.taskText} >-{task} </Text>
        </Pressable>
      )
      )}
       </ScrollView>
       </ImageBackground>
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
  padding:10,
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
    flex:1,
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
  },
  taskBackground:{
    flex:1,
    resizeMode:'cover',
    overflow:'hidden',
    borderRadius :20,
    marginTop:20,
  }
});
