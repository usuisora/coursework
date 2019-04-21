import React,{createContext,useState} from 'react'
export const MyContext =createContext();
 export function MyProvider (props){
     const [shop, setShop] = useState(1);


    return(
        <MyContext.Provider value = {{shop,setShop}}>
            {props.children}
        </MyContext.Provider>
    )
}


