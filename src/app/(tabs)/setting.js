import React from 'react';
import {StyleSheet,View,Text,Pressable } from 'react-native';
import {useColors} from '../../contexts/ColorContets';
import {SafeAreaView  } from'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import { Ionicons} from '@expo/vector-icons';
const Setting =()=>{
  const {colors,toggleTheme,StatusBarStyle,isDark}=useColors();
    return ( 
   cvdsdv
  <SafeAreaView style ={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:colors.background}} >
    <StatusBar style={StatusBarStyle}/>
       <Text style={{ fontSize:20,color:colors. textPrimary  }}> setting screen</Text>
    <View>
    <Pressable onPress={toggleTheme} style={{marginTop:20,padding:10,backgroundColor:colors. primary, borderRadius:5 }}>
      <Text style={{ color:colors.onPrimary,fontSize:16 }}>ToggleTheme</Text>
      <Ionicons name={isDark? 'sunny':'moon' } size={20} color={colors.onPrimary} style={{marginLeft:10}}/>
    </Pressable>
    </View>
        </SafeAreaView>
  
    );
}
const style = StyleSheet.create({})
export default Setting;