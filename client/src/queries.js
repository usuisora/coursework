import {gql} from 'apollo-boost'

export const  displayProductsQuery =  gql`{
  allTotalexistproducts {
  edges {
    node {
      category
      mark
      model
      id
      model
      color
      avalCount
      price
      
        }
      }
  }
}

`
export const  displayProductsByCategory =  gql`
{

    allTotalexistproducts(condition:{category: WASHER }) {
      edges {
        node {
          category
          mark
          model
          id
          model
          color
          avalCount
          price
          
            }
          }
      }
    }

`
