import { useState } from "react"
import Router from './src/Router';
import { ThemeContextProvider } from './src/context/ThemeContext';
import { LangContextProvider } from "./src/context/LangContext";
import { UsersContextProvider } from "./src/context/UsersContext";


export default function App() {


  return (
    // <UsersContextProvider>
    //   <LangContextProvider>
    //     <ThemeContextProvider>
    <Router />
    //     </ThemeContextProvider>
    //   </LangContextProvider>
    // </UsersContextProvider>
  );
}
