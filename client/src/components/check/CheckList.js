import {getTotalBy2Jsx} from "../../library"
import React from 'react'

const DelItemButton = ({DeleteFromCheck,rowid})=>
    <button onClick={()=>{DeleteFromCheck(rowid)}}>x</button>
const scols = ['category','mark','model','color'];

const listHead = 
<li className = 'head'>
                    { scols.map(col=>  <span key={col}>{col}</span>)}
                      <span className='subsum'>price (uah)</span>
                      <button style = {{ opacity: 0}}></button>
                    </li>
    

const getListBody = (check,DeleteFromCheck) =>check == null ? ('check is empty'): 
    check.map((row)=>{
    return (<li key = {row.id}>
                  { scols.map(col=>  <span>{row[col]}</span>)}
                  <span className='subsum'>  {row.count} x {row.price}  = {row.count*row.price}</span>
                  <DelItemButton DeleteFromCheck={DeleteFromCheck} rowid={row.id}/>
            </li>)
})

const CheckList = ({check,DeleteFromCheck}) =>{
    return <ul>
              {listHead}
              {getListBody(check,DeleteFromCheck)}
              {getTotalBy2Jsx(check,'count','price')}
            </ul>
}

export default CheckList 