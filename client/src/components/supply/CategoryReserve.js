
import React from 'react'
import {graphql, Query} from 'react-apollo'
import {getWirehouseByCategory} from '../../queries'


const CategoryReserve = ({category}) => 
<Query  query={getWirehouseByCategory}  variables = {{category}} >
    {
        (loading,error,data)=>{
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
               <React.Fragment>
                   <h4>{category}</h4>
               </React.Fragment>
            )
        }
    }

</Query>


export default graphql(getWirehouseByCategory)(CategoryReserve)
