import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView} from 'react-native-safe-area-context'
import {useState,useEffect} from 'react'

export default function FocusTime({focusTask,onBack}){
    const times = [600,900, 1200];
    const [isRunning,setIsRunning ] = useState(false);
    const[selectedTime,setSelectedTime] = useState(null)
    const timeFormat = (time) =>{
      const minutes = Math.floor(time/60);
      const second =Math.floor(time%60);

      return `${minutes}:${second<10 ? '0':''}${second}`;
    }

    return(
        <SafeAreaView style={styles.continer}>
            <Text style={styles.timerText}> {timeFormat(times[0])} </Text>
            
           < Text style={styles.subTite}>focusing on : </Text>
           <Text style={styles.focusTask}> {focusTask}</Text>

          <View style={styles.selectedText}/>

          <View style={styles.timeOptions}>
            {times.map((time,index) =>( 
              <TouchableOpacity key={index} style={styles.timeOptionsButton} onPress={()=> {}}>
                <Text style={styles.timeOptionText}> {timeFormat(time)}</Text>
              </TouchableOpacity>
            ))}
            <Text> Task  </Text>
          </View>

         <TouchableOpacity>
            <Text>Start</Text>
         </TouchableOpacity>

          <TouchableOpacity>
            <Text>Back</Text>
         </TouchableOpacity>

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
  marginTop:10,
},
padding:{
  padding:20,
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
selectedText:{ 
  height:10,
  width:'100%',
  backgroundColor:'#6ccdd7',
  marginTop:30,
  marginBottom:20

},
timeOptions:{
  flexDirection:'row',
},
timeOptionsButton:{
height:60,
width:60,
borderRadius:30,
justifyContent:'center',
alignItems:'center',
backgroundColor:'transparent',
}
})

