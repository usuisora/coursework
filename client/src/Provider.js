import React,{createContext,useState} from 'react'
import {getCookie,deleteCookie} from './cookies'
export const MyContext =createContext();

 export function MyProvider (props){
     const [shop, setShop] = useState((getCookie('shop')==undefined) ? 1 : parseInt(getCookie('shop')) );
     const updateShop = (value)=>{
         document.cookie = 'shop='+value;
         setShop(parseInt(value))
     }
    //  deleteCookie('shop')

     const [productInfo, setProductInfo] = useState({});
     

    return(
        <MyContext.Provider value = {{shop,updateShop,
                                      setProductInfo,productInfo}}>
            {props.children}
        </MyContext.Provider>
    )
}

