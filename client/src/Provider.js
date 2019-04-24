import React,{createContext,useState} from 'react'
export const MyContext =createContext();
 export function MyProvider (props){
     const [shop, setShop] = useState(1);
     const [productInfo, setProductInfo] = useState({});
     

    return(
        <MyContext.Provider value = {{shop,setShop,
                                      setProductInfo,productInfo}}>
            {props.children}
        </MyContext.Provider>
    )
}

