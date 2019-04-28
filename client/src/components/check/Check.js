import React from 'react'
import { MyContext } from '../../Provider'

const CheckItemList = ({check}) =>{


  var list = check.list == null ? ('check is empty'): 
     check.list.map((row)=>{
      return (<li><span> {row.mark } {row.model}</span>
                  <span className='subsum'>  {row.count} x {row.price}</span>
              </li>)
    })

    return <ul>{list}</ul>
}


const CheckBody = ({check}) =>
    <div className="checkContent">
          <h5>Models</h5>
          <CheckItemList check={check}/> 
    </div> 

const Check = () => 
<MyContext.Consumer>
  {
    ({check,setCheck})=>
    <div  className='check' >
      <h4>Check</h4>
      <CheckBody check={check}/>
    </div>
  }
</MyContext.Consumer>


export default (Check)
