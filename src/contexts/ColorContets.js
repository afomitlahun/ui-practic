import{ createContext,useContext,useState } from 'react'
import {darkStatusBar,lightStatusBar,darkTheme,lightTheme} from '../Utils/Color'

const ColorContets=createContext();
export default function colorProvider({children}){
  const [isDark,setIsDark] =useState(true);
  const toggleTheme =() =>setIsDark(prev=>!prev) ;
  const colors= isDark?darkTheme:lightTheme;
  const StatusBarStyle = isDark?lightStatusBar:darkStatusBar;
  const value={colors,StatusBarStyle,toggleTheme,isDark};
  

return(
  <ColorContets.Provider value={value}>
    {children}
</ColorContets.Provider>
  
)
}
export const useColors = () => {
  const context=useContext(ColorContets);

if(!context) {
  throw new Error ('usecolors must be used within a colorProvider');}
  return context;

  }