import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import TaskProvider from "../contexts/taskContets"
import ColorProvider from '../contexts/ColorContets';
import {useState,useEffect} from 'react'
import{useColors}from'../contexts/ColorContets'
import {getItems,setItems} from"../Utils/Storage";

export default function RootLayout({children}){
  

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
  const DrawerContent =()=> {
    const {colors,statusBarStyle } =useColors();
    return (
      <Drawer
        screenOptions={{
          drawerStyle: {backgroundColor:colors.background},
          headerStyle: { backgroundColor: colors.background },
          headerTintColor:colors.textPrimary,
        }}
        >
        <Drawer.Screen
      name="(tabs)"
    options={{
      title:"Focus Timer",
    }}
        />
         </Drawer>
    );
  }

return(
  <ColorProvider>
    <TaskProvider>
      {showOnboarding ? <OnBoarding/> : children}
      <DrawerContent/>
    </TaskProvider>
  </ColorProvider>
)}