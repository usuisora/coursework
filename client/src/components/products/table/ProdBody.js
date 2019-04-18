import React,{useState} from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {graphql} from 'react-apollo'
import {displayProductsQuery} from '../../../queries'
import {Typography, Button }from '@material-ui/core';
import {theme } from '../../../theme'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
export const Info =({hidden})=>{
  return (<TableRow style = {hidden}  >
    <TableCell  align="center" colSpan={4} >sadasdasdasdasdasdasdasdasdasdasd</TableCell>
</TableRow>)
}

export const Row = ({id,node})=>{
  
      const [style, setStyle] = useState([
        {
          display : 'none'
        },
        {
        }
      ]);
      const [hidden, setHidden] = useState(style[0]);
 
      const showInfo = () => {
        (hidden == style[0]) ? setHidden(style[1]):setHidden(style[0])
      }
      const handleAddToCheck = () =>{
        console.log('add to check')
      }
      
  return(
              <React.Fragment  >

              <TableRow >
                   <TableCell align="right" name = 'category'>{node.category}</TableCell>
                    <TableCell align="right"name = 'model'>{node.model}</TableCell>
                    <TableCell align="right" name = 'color'>{node.color}</TableCell>
                    <TableCell align="right" name = 'price'>{node.billitemsByProductid.edges.price}</TableCell>
                    <TableCell align="right" name = 'quantity'>{node.billitemsByProductid.edges.quantity}</TableCell>
                    <TableCell align="right" name = 'info' onClick = {()=>{handleAddToCheck()}}>
                        <Button  variant="outlined"  color="primary" >Sale</Button>
                    </TableCell>
                    <TableCell align="right" name = 'info'  onClick = {()=>{showInfo()}}>
                      <IconButton><MoreVertIcon/></IconButton>
                    </TableCell>
                  </TableRow>
                  <Info hidden= {hidden}/>
              </React.Fragment>
  )
}
function ProdBody(props) {
    
    var showProducts =()=>{
      var prod = props.displayProductsQuery
        console.log(props)
        if(prod.loading){
                 return (
                    <Typography variant= 'subtitle' style={{ padding:20, color: '#666'}}>Loading...</Typography>
                 )
        }
        else{
          return prod.allProducts.edges.map(({node})=>(
               <TableBody>
                 <React.Fragment  key={node.id} >
                    <Row id = {node.id} node ={node}/>
                 </React.Fragment>
              </TableBody>

                
          ))
        }
    }

    showProducts()
    var rows = showProducts()
  return (
        <React.Fragment>
          {rows}
        </React.Fragment>
  )
}

export default graphql(displayProductsQuery,{name:'displayProductsQuery'})(ProdBody)
