import {Tabs} from "expo-router";
import {Ionicons} from '@expo/vector-icons';
import TaskProvider from "../../contexts/taskContets"
import ColorProvider from '../../contexts/ColorContets';
import{useColors}from'../../contexts/ColorContets'
import {SystemBars} from 'react-native-edge-to-edge';
export default function Layout() {
  const TabLayout = () => {
      const{StatusBarStyle,colors}= useColors();
    return(
      <>
    <SystemBars style={StatusBarStyle}/>
      <Tabs
         screenOptions={{
            tabBarStyle:{
          backgroundColor:colors.background,
          setOffset:0,
          borderTopWidth:0,
            },
            tabBarActiveTintColor:colors.Primary,
            tabBarInactiveTintColor:colors.textPrimary,
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
      </>
        )
    
  } 
        
  
    return(
      <ColorProvider>
         
      <TaskProvider>
      <TabLayout/>
        </TaskProvider>
      </ColorProvider>
    );
}