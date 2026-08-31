import {Tabs} from "expo-router";
import {Ionicons} from '@expo/vector-icons';
import TaskProvider from "../../contexts/taskContets"
export default function Layout() {
    return(
      <TaskProvider>
        <Tabs
         screenOptions={{
            tabBarStyle:{
          backgroundColor:'#0d91a0',
          setOffset:0,
          borderTopWidth:0,
            },
            tabBarActiveTintColor:'#fff',
            tabBarInactiveTintColor:'#2052e6',
        }}>
     <Tabs.Screen name='index' options={{headerShown:false,
               tabBarIcon:()=>( <Ionicons name='home-outline' size={24} color='black'/>),

     }}/>
     <Tabs.Screen name='focusTime'options={{headerShown:false,
        tabBarIcon:() => (<Ionicons name='timer-outline' size={24} color='black'/>),
      }}/>
      <Tabs.Screen name='setting' options={{headerShown:false,
        tabBarIcon:()=><Ionicons name='settings-outline' size ={24} color ='black'/>
      }}/>
        </Tabs>
        </TaskProvider>
    );
}