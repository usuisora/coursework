import React from 'react'
import {Query , graphql } from 'react-apollo'
import {gql } from 'apollo-boost'
import { MyContext } from '../../Provider';

const getSellersQuery  = gql`
query getSellersQuery ($shop:Int!)
{
	allSellers (filter:{shopId:{equalTo:$shop}}){
	  edges {
	    node {
	      id
        name
        lastName
        shop:shopId
	    }
	  }
	}
}
`

const Select =({shop})=>
    <Query query={getSellersQuery} variables ={{shop}}>
      {  ({loading,error,data})=>{
            if(loading || error){
                return 'Loading';
            }
            return(
                <select name='seller'>
                    {data.allSellers.edges.map(({node})=>
                         <option value={node.id} key = {node.id}>{node.name}  {node.lastName}</option>
                    )}
                </select>
            )
        }}
    </Query>

const Consumer = () =>
        <MyContext.Consumer>
            {
                ({shop})=>
                    <Select shop = {shop}/>
            }
        </MyContext.Consumer>
function Sale() {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
   <form onSubmit={(e)=>handleSubmit(e)}>
       <label htmlFor="seller">Seller </label>
        <Consumer/>
       <button>Sale</button>
   </form>
  )
}

export default graphql(getSellersQuery,{name:'getSellersQuery'})(Sale)