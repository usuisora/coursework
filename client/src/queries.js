import {gql} from 'apollo-boost'

export const  getProductById =  gql`  
query getProductById ($shop: Int!, $prodId:Int!)
{
  allProductsviews(filter:{shopId:{equalTo:$shop},prodId:{equalTo:$prodId}}) {
  edges {
    node {
      category
          mark
          model
          prodId
          model
          color
      		shopId
        }
      }
  }
}`

export const  displayProductsQuery =  gql`{
  allProductsviews {
  edges {
    node {
      category
          mark
          model
          prodId
          model
          color
          avalCount
          price
          shopId
      
        }
      }
  }
}

`
export const  displayWashers =  gql`
query displayWashers($shop: Int!){
  allProductsviews (filter:{shopId:{equalTo:$shop},category:{equalTo:WASHER}}){
      edges {
        node {
          category
          mark
          prodId
          model
          color
          avalCount
          price
          shopId
        }
      }
    }
  }

`

export const  displayFridges =  gql`query displayFridges($shop: Int!){
  allProductsviews (filter:{shopId:{equalTo:$shop},category:{equalTo:FRIDGE}}){
      edges {
        node {
          category
          mark
          prodId
          model
          color
          avalCount
          price
          shopId
        }
      }
    }
  }
`

export const  displayStoves =  gql`query displayStoves($shop: Int!){
  allProductsviews (filter:{shopId:{equalTo:$shop},category:{equalTo:STOVE}}){
      edges {
        node {
          category
          mark
          prodId
          model
          color
          avalCount
          price
          shopId
        }
      }
    }
  }
`
export const  getShopQuery =  gql`
 {
 allShops {
   edges {
     node {
       id
      street
      streetNumber
      mngrName
      mngrLastname
     }
   }
 } }
`

export const getDescription= gql`
query Description($id:Int!){
  productById(id:$id) {
    id
    description
  }

}`

export const SellerByIdQuery =  gql`
query SellerByIdQuery($userId:Int!){
sellerById(id:$userId) {
  id
  name
  lastName
  shopId

}
}

`
export const  getWirehouseByCategory =  gql`
query  getWirehouseByCategory($category:String!)
{
  getWirehouseByCategory(cat: $category) {
    edges {
      node {
        prodId
        model
        price
        avalCount
      }
    }
  }
}`