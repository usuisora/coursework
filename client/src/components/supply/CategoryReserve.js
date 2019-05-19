
import React from 'react'
import {graphql, Query} from 'react-apollo'
import {getWirehouseByCategory} from '../../queries'
import ProductList from './ProductList'



const CategoryReserve = ({category}) => 
<Query  query={getWirehouseByCategory}  variables = {{category}}  pollInterval={500} >
    {
        ({loading,error,data,startPolling, stopPolling} )=>{
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
               <React.Fragment>
                   <h4>{category}</h4>
                   <ProductList edges = {data.getWirehouseByCategory.edges} />
               </React.Fragment>
            )
        }
    }

</Query>


export default (CategoryReserve)
