import React,{createContext,useState} from 'react'
export const MyContext =createContext();
 export function MyProvider (props){
     const [open, setOpen] = useState(false);
     const [shop, setShop] = useState(1);
     
     
    return(
        <MyContext.Provider value = {{open, setOpen}}>
            {props.children}
        </MyContext.Provider>
    )
}


