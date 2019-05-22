import {getTotalCheckBy2Jsx} from "../../library"
import React from 'react'

const DelItemButton = ({DeleteFromCheck,rowid})=>
    <button onClick={()=>{DeleteFromCheck(rowid)}}>x</button>
const scols = ['category','mark','model','color'];

const listHead = 
<li className = 'head'>
                    { scols.map(col=>  <span key={col}>{col}</span>)}
                      <span className='subsum'> Purchase price (111% uah)</span>
                      <button style = {{ opacity: 0}}></button>
                    </li>
    

const getListBody = (check,DeleteFromCheck) =>check == null ? ('check is empty'): 
    check.map((row)=>{
    return (<li key = {row.id}>
                  { scols.map(col=>  <span>{row[col]}</span>)}
                  <span className='subsum'>  {row.count} x {Math.round(row.price * 1.11,4)}  = {row.count*Math.round(row.price * 1.11,4)}</span>
                  <DelItemButton DeleteFromCheck={DeleteFromCheck} rowid={row.id}/>
            </li>)
})

const CheckList = ({check,DeleteFromCheck}) =>{
    return <ul>
              {listHead}
              {getListBody(check,DeleteFromCheck)}
              {getTotalCheckBy2Jsx(check,'count','price')}
            </ul>
}

export default CheckList 