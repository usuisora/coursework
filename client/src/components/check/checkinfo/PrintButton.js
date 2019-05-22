import React from 'react'
import {getTotalCheckBy2Jsx} from '../../../library'



const PrintButton = ({check,userId})=> 
{

    const handleClick = () =>{
    console.log('print')
    }
    return <button className = 'btn  btn-flat grey-text  text-darken-3 right '
            onClick = {()=>{handleClick()}}>
        <i className="material-icons">print</i>
        </button>
}


export default PrintButton