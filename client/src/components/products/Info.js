import React from 'react'
import {MyContext} from '../../Provider'
import Actions from './Actions'
import InfoList from './ProdInfoList'



function Info() {
  return (
    <MyContext.Consumer>
      {({productInfo,updateMsg,msg,updateCheck,check})=>
      {  let blockObj = check.find(el => {return(el.id == productInfo.prodId)});
         let blockCount = (blockObj)? blockObj.count : 0
      
        return <div className = 'info'>
          <h4>Info</h4>
          <InfoList productInfo={productInfo}  check={check}/>
          
         { productInfo.prodId === undefined ? 
                      (<p className='margin'>Here will be info about item...</p>) :
                       (<React.Fragment>
                           <h5>  {productInfo.avalCount} pcs are  available.</h5>
                           <p className = 'amber-text text-darken-2'>{blockCount}  pcs blocked</p>
                            <Actions updateMsg={updateMsg} msg={msg} prod={productInfo} updateCheck={updateCheck}/>
                        </React.Fragment>)}
         
        </div>}
          }
    </MyContext.Consumer>
  )
}

export default (Info)