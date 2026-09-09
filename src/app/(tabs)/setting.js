import React from 'react';
import {StyleSheet,View,Text,SafeAreaView } from 'react-native';
import {useColors} from '../../contexts/ColorContets';
const Setting =()=>{
  const {colors,toggleTheme}=useColors();
    return ( 
   <SafeAreaView style ={[{ backgroundColor:colors.background     }]}> 
  <View style ={{flex:1,justifyContent:'center',alignItems:'center'}} >
       <Text>setting screen</Text>
        </View>
  </SafeAreaView>
    );
}
const style = StyleSheet.create({})
export default Setting;