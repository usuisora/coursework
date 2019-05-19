import React from 'react'
import {MyContext} from '../../Provider'
import Actions from './Actions'
import InfoList from './ProdInfoList'



function Info() {
  return (
    <MyContext.Consumer>
      {({productInfo,updateMsg,msg,updateCheck})=>
        <div className = 'info'>
          <h4>Info</h4>
          <InfoList productInfo={productInfo} />
          
         { productInfo.prodId === undefined ? 
                      (<p className='margin'>Here will be info about item...</p>) :
                       (<React.Fragment>
                           <p>There is {productInfo.avalCount} in shop point # {productInfo.shopId}</p>
                            <Actions updateMsg={updateMsg} msg={msg} prod={productInfo} updateCheck={updateCheck}/>
                        </React.Fragment>)}
         
        </div>
          }
    </MyContext.Consumer>
  )
}

export default (Info)