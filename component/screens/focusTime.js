
import {View,Text} from 'react-native'
import { safeAreaView} from 'react-native-safearea-context'
import {useState,useEffect} from 'react'

export default function focusTime(){
    const time = [600,900, 1200];
    const [isRunning,setIsRunning ] = useState(false);
useEffect(() =>{

},)

    return(
        <safeAreaView>
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

        </safeAreaView>
    )
}
const styles= StyleSheet.creat({})

