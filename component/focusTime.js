import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import { SafeAreaView} from 'react-native-safe-area-context'
import {useState,useEffect} from 'react'//useEffect=and nger sikeyer weym compont sikefet code masked
import Toast from "react-native-toast-message";

export default function FocusTime({focusTask,onBack}){
    const times = [10,900, 1200];
    const [isRunning,setIsRunning ] = useState(false);//ahun timeru eyesera new wey yemilewn yyzal(false)yehonebet mejemeriya timeru ayseram
    const[selectedTime,setSelectedTime] = useState()//yetgnawn time mertku
    const timeFormat = (time) =>{
      const minutes = Math.floor(time/60);
      const second =Math.floor(time%60);

      return `${minutes}:${second<10 ? '0':''}${second}`;//5minut:3second =5:03
    }

    const showToast= () => {
      Toast.show({ 
        type:'info',
        text1:`you have successfully focused on${focusTask}`
      })
    }
    useEffect(() =>{  //is running or selectedTime sikeyer yh code endisera new
      //if(isRunning){
      let intervalId;//like id creat in setInterval
      intervalId = setInterval(()=>{//and and second endikens yemiyaderg new
      setSelectedTime(prev => prev -1)//setSelectedTime lay and and ykensal
    }, 1000)// bye and secod degagmeh sra malet new 1000millisseconds = 1second malet new
  //}

          if(!isRunning || selectedTime < 0 ){

      clearInterval(intervalId);//zero  ena kezero betachi yemihon kehon yemikensewn part ykr
    }
    else if(selectedTime ===0){
      showToast();
      setIsRunning(false);
     //Alert.alert(`you have succefully focused on ${focusTask}`)
    }
    
    return () => clearInterval(intervalId);//useEffect endegena sisera yekedmow setInterval endayketl yredal
  },[isRunning, selectedTime])//kehulet andu sikeyeru useEffect endegena yseral

    return(
        <SafeAreaView style={styles.continer}>
            <Text style={styles.timerText}>
               {selectedTime ? timeFormat (selectedTime): '10:00'}
                </Text>
            
           < Text style={styles.subTite}>focusing on : </Text>
           <Text style={styles.focusTask}> {focusTask}</Text>

          <View style={styles.underselectedText}/>
          <Text style={styles.styleTask}> Task  </Text>
          <View style={styles.timeOptions}>
            {times.map((time,index) =>( 
              <TouchableOpacity 
              key={index} 
                
              
              style={styles.timeOptionsButton} 
              onPress={()=> setSelectedTime(time)} >


                <Text style={styles.timeOptionText}> {timeFormat(time)}</Text>
              </TouchableOpacity>
            ))}
          </View>

         <TouchableOpacity style={styles.startFab} onPress={()=>{setIsRunning(!isRunning) }}>
            <Text style={{color:'white'}}>{isRunning?'stop':'start'}</Text>
         </TouchableOpacity>

          <TouchableOpacity style={styles.backFab} onPress={onBack}>
            <Text style={{color:'#fff'}}>Back</Text>
         </TouchableOpacity>
           <Toast/>    

        </SafeAreaView>

    )
}
const styles= StyleSheet.create({
continer:{
  flex:1,
  backgroundColor:'#0d91a0',

  alignItems:'center',

},
timerText:{
  fontWeight:'bold',
  fontSize:50,
  color:'#fff',
  marginTop:50,

},
subTite:{
  fontSize:18,
  color:'#fff',
  marginTop:50,
},
focusTask:{
  fonitSize:30,
  color:'#fff',
  marginTope:50,
 fontWeight:'bold',

},
underselectedText:{ //fezazawa line
  height:10,
  width:'100%',
  backgroundColor:'#6ccdd7',
  marginTop:30,
  marginBottom:20,

},
timeOptions:{
  flexDirection:'row',
  marginTop:30,
  alignItime:'center',
  //width:'100%',
  //justifyContent:'space-around',
},
timeOptionsButton:{
height:70,
width:70,
borderRadius:35,
justifyContent:'center',
alignItems:'center',
backgroundColor:'transparent',
borderWidth:2,
borderColor:'#fff',
margin:25,
},
timeOptionText:{
  fontSize:18,
  color:'#fff',
},
startStyle:{
  margintop:50,
},
startFab:{
  height:80,
  width:80,
  borderRadius:40,
  backgroundColor:'transparent',
  borderColor:'#fff',
  justifyContent:'center',
  alignItems:'center',
  marginTop:50,
  borderWidth:2,
},
backFab:{
  height:30,
  width:80,
  borderColor:'#fff',
  borderRadius:20,
  borderWidth:2,
  marginTop:50,
  alignItems:'center',
},
styleTask:{
  alignItems:'center',
  color:'#fff',
  fontSize:15,
  textAlign:'center',
 // alignSelf:'center',
  marginBottom:20,
  padding:20,
}
})

