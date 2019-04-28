import React,{createContext,useState} from 'react'
import {getCookie,deleteCookie} from './cookies'
export const MyContext =createContext();

 export function MyProvider (props){
     const [shop, setShop] = useState((getCookie('shop')===undefined) ? 1 : parseInt(getCookie('shop')) );
     const updateShop = (value)=>{
         document.cookie = 'shop='+value;
         setShop(parseInt(value))
     }
    //  deleteCookie('shop')

     const [productInfo, setProductInfo] = useState({});
      const [msg, setMsg] = useState('Here will be last event');
     const [check, setCheck] = useState({
         list:[{id:8,count:2, price: 3242, model:'sdf', mark:'Sansa'},
                {id:9,count:1,price: 3242, model:'sdf',mark:'Sansa'}],
            seller:{name:'John',id:2}
        });
     

    return(
        <MyContext.Provider value = {{shop,updateShop,
                                      setProductInfo,productInfo,
                                      setMsg, msg,
                                      check,setCheck}}>
            {props.children}
        </MyContext.Provider>
    )
}

