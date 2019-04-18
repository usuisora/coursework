import {gql} from 'apollo-boost'


export const  displayProductsQuery =  gql`
{
  allProducts {
  edges {
    node {
      id
      model
      color
      category
      billitemsByProductid{
        edges {
  			  node {
           price
           quantity
          }
        }
      }
      volume
      description
    }
  }
  }

  
}
`