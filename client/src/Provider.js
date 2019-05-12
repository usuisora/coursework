import React,{createContext,useState} from 'react'
import {getCookie,deleteCookie} from './cookies'
export const MyContext =createContext();

 export function MyProvider (props){
     const [shop, setShop] = useState((getCookie('shop')===undefined) ? 1 : parseInt(getCookie('shop')) );
     const updateShop = (value)=>{
         if(check.length<1){
         document.cookie = 'shop='+value;
         setShop(parseInt(value))
         }else
         {
             setMsg('Can\'t switch shop while check isn\'t empty  ')
         }
     }
    //  deleteCookie('shop')

     const [productInfo, setProductInfo] = useState({});
      const [msg, setMsg] = useState('Here will be last event');
      
     const [check, setCheck] = useState([]);

     //auth
     const [isAuth, setIsAuth] = useState((getCookie('isAuth')===undefined) ? false : parseInt(getCookie('isAuth')));
     const [userId, setUserId] = useState((getCookie('userId')===undefined) ? -1 : parseInt(getCookie('userId')) );
     const [role, setRole] = useState((getCookie('role')===undefined) ? '' : parseInt(getCookie('role')));
     
     const Login = (id,who) =>{
        document.cookie = 'role='+who;
        document.cookie = 'userId='+id;
        document.cookie = 'isAuth='+true;
          setRole(who)
          setUserId(id)
          setIsAuth(true);
     }
     
    //  const createPrice  = (p) => {return (p + (p*0.1)).toPrecision(2)}


     const updateCheck = (count, prod) =>{
        const  rep =  check.filter(el => {return(el.id == prod.prodId)});
       if(rep.length<1){
            const newPos= {
                id:prod.prodId,
                count:count,
                price:prod.price,
                model:prod.model,
                mark:prod.mark,
                category: prod.category,
                color: prod.color
            }
            const newCheck = [...check, newPos]
            setCheck(newCheck)
       }else{
            const newCheck = [...check];
            newCheck.find(el=>el.id == prod.prodId).count+=count;
            setCheck(newCheck)
       }
         
     }

     const DeleteFromCheck = (id) =>{
         const newCheck = check.filter(el=>el.id != id)
         const model = check.find(el=>el.id == id).model
         setMsg(`${model} was removed from check`)
         setCheck(newCheck)
     }

    return(
        <MyContext.Provider value = {{shop,updateShop,
                                      setProductInfo,productInfo,
                                      setMsg, msg,
                                      check,setCheck,
                                      updateCheck,
                                      DeleteFromCheck,
                                      isAuth,setIsAuth,
                                      Login}}>
            {props.children}
        </MyContext.Provider>
    )
}

