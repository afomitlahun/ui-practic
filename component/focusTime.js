import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView} from 'react-native-safe-area-context'
import {useState,useEffect} from 'react'

export default function focusTime(){
    const time = [600,900, 1200];
    const [isRunning,setIsRunning ] = useState(false);
useEffect(() =>{

  },)

    return(
        <SafeAreaView>
            <Text> </Text>
            <Text></Text>
           < Text> </Text>

           <View/> 

          <View>
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
const styles= StyleSheet.create({})

