
import React from 'react'
import { Query} from 'react-apollo' // import Query component 
import {getWirehouseByCategory} from '../../queries'
import ProductList from './ProductList'



const CategoryReserve = ({category}) => 
<Query  query={getWirehouseByCategory}  variables = {{category}}   >
    {
        ({loading,error,data} )=>{
            if (loading) return "Loading...";
            if (error) return <p>
                No access
                </p>;
            else return (
               <React.Fragment>
                   <h4>{category}</h4>
                   <ProductList edges = {data.getWirehouseByCategory.edges} />
               </React.Fragment>
            )
        }
    }

</Query>


export default (CategoryReserve)
