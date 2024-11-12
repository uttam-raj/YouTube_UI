 import { createContext, useContext, useState } from "react";

 export  const UtilContext = createContext();

 export const UtilsContextProvider = ({children}) =>{

    const [showSidebar, setShowSidebar] = useState("false"); // State to track which sidebar is shown
    const [mobileShow, setMobileShow] = useState("flase");

   return   <UtilContext.Provider value={{showSidebar,mobileShow,setShowSidebar,setMobileShow}}>
        {children}
    </UtilContext.Provider>
 }


 export const useUtils = () =>{
    const utilsContext = useContext(UtilContext);

    if(!utilsContext) return null;

    return utilsContext;
 }