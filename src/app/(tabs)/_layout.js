import {Tabs} from 'expo-router';
import TaskProvider from "../../contexts/taskContets"
import ColorProvider from '../../contexts/ColorContets';
import{useColors}from'../../contexts/ColorContets'
import {SystemBars} from 'react-native-edge-to-edge';
import OnBoarding from '../../Components/Onboarding'
import {useState,useEffect} from 'react'
import {setItems, getItems} from "../../Utils/Storage";
import { Ionicons } from '@expo/vector-icons';
export default function Layout() {
  const[showOnboarding, setShowOnboarding]=useState(false);
  const checkOnboardingStatus = async () => {
      try {
        const onboardingCompleted=
        await getItems("onboardingCompleted");
        setShowOnboarding(onboardingCompleted!=="true");
      }catch (error) {
        console.error("Error checking onboarding status:",error);
      }
    };
  useEffect(()=> {
     checkOnboardingStatus();
  },[])
  
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
  
  if(showOnboarding) {
    
return<OnBoarding/>
}
  else if (!showOnboarding)  {
    
  
  
    return(
         
     <TaskProvider>
      <TabLayout/>
       </TaskProvider>
   );
}
  else {
    return null;
  }
}