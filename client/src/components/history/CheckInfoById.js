import React,{useState} from 'react'
import {Query} from 'react-apollo'
import {getCheckView} from '../../queries'

let col = [
"productid",
"model",
"category",
"color",
"count"
]
const Info = ({edges}) =>
<div className='historySearch'>
   <h4 className ='blue-text'>Seller {edges[0].node.sellerId}  :{edges[0].node.sellerName}  {edges[0].node.sellerLastname}</h4>
   <h5  className ='left small'>Date: {edges[0].node.checkdate}  </h5>

   <table>
     <thead>
       <tr>
     { col.map(pr => <td key ={pr}>{pr}</td>)}
       <td>price</td>
     </tr>
     </thead>
     <tbody>
   {edges.map(({node})=>
    <tr key = {node.productid}>
      { col.map(pr => <td key ={node[pr]}>{node[pr]}</td>)}
      <td>{node["pricetax"]}uah</td>
    </tr>
   )}
   </tbody>
   </table>
</div>


const CheckInfoById  = ({id}) =>
<Query query = {getCheckView} variables={{checkid:id}}>  
    {
        ({loading,error,data} )=>{
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
               <React.Fragment>
                   <Info edges = {data.allCheckviews.edges} />
               </React.Fragment>
            )
        }
    }
</Query>




export default CheckInfoById 