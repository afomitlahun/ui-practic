import{ createContext,useContext,usestate } from 'react'

const colorContets=createContext();
export default function colorProvider({children}){
  const [isDark,setIsDark] =useState(true);
  const themeT
}