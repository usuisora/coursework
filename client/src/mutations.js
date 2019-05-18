import {gql} from 'apollo-boost'

export const ADD_SUPPLY = gql`
  mutation AddSupply($shopId: Int!, $products:[Int!], $prcount:[Int!]){
  supply(input:{shopid:$shopId,products:$products,prcount:$prcount}) {
    clientMutationId
  }
}
`;