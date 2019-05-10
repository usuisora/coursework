import {gql} from 'apollo-boost'

export const  checkSellerQuery =  gql`  
query checkSellerQuery ($login: String!, $password:String!)
{
    checkauthseller(login:$login,password:$password)
}`



export const  checkManagerQuery =  gql`  
query checkManagerQuery ($login: String!, $password:String!)
{
    checkauthmanager(login:$login,password:$password)
}`
