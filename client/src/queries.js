import {gql} from 'apollo-boost'

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
query($shop: Int!){
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

export const  displayFridges =  gql`query($shop: Int!){
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

export const  displayStoves =  gql`query($shop: Int!){
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
export const  getShopIDsQuery =  gql`{
  allShops {
    edges {
      node {
        id
      }
    }
  } 
 }`