import {gql} from 'apollo-boost'

export const ADD_SUPPLY = gql`
  mutation AddSupply($shopId: Int!, $products:[Int!], $prcount:[Int!]){
  supply(input:{shopid:$shopId,products:$products,prcount:$prcount}) {
    clientMutationId
  }
}
`;

export const ADD_SALE = gql`
  
mutation  AddSale($seller: Int!, $products:[Int!], $prcount:[Int!]){
  sale(input:{sellerid:$seller,products:$products,prcount:$prcount}) {
results {
  checkId
  productId
  model
  category
  color
  count
  seller
  price
  date
}  }
}
`;
export const DEL_CHECK = gql`
  
mutation DelCheck($checkId: Int!){
  deleteBuycheckById(input:{id:$checkId}) {
    clientMutationId
    deletedBuycheckId
  }
}`


export const ADD_TOP_SOLD = gql`
  mutation{
   posttopbill(input:{}){
    integer
  }}
`

export const LOGIN  = gql`

mutation($login: String!,$password: String!){
  login(input:{login:$login, pass: $password}) {
    auth{
      roleName
      roleId
      shopId
    }
  }
}`