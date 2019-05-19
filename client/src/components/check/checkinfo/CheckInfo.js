import React from 'react'
import { MyContext } from '../../../Provider'
import LastCheck from './LastCheck'
import PrintButton from './PrintButton'
function CheckInfo() {
  return (
    <div className='info'>
    <MyContext.Consumer>
     { ({lastCheck}) => 
      (lastCheck == [])? <p>Session started. Here will be last check on this session.</p>:
      <React.Fragment>
         <h5>Last check</h5>
          <LastCheck lastCheck={lastCheck}/>
          <PrintButton/>
      </React.Fragment>
      }
    </MyContext.Consumer>
     
    
    </div>
  )
}

export default CheckInfo
