import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { MyContext } from '../../../Provider'
import PrintCheck from './PrintCheck'
import PrintButton from './PrintButton'

const CheckInfo = () => {
  const componentRef = useRef();
  return (
   <div className='info'>
    <MyContext.Consumer>
        { ({lastCheck,userId}) => 

          (lastCheck.length<1) ? <h6 className ='grey-text '>Session started. Here will be the last check on this session.</h6>:
          <React.Fragment>
              <h5>Last check</h5>
                <p className ='grey-text'>Client should get his check.</p>
              <PrintCheck ref={componentRef} check={lastCheck} userId = {userId}/>
              <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
              />
          </React.Fragment>
          }
    </MyContext.Consumer>
    </div>
  );
};


// function CheckInfo() {
//   return (
//     <div className='info'>
//     <MyContext.Consumer>
//      { ({lastCheck,userId}) => 

//       (lastCheck.length<1) ? <h6 className ='grey-text '>Session started. Here will be the last check on this session.</h6>:
//       <React.Fragment>
//         <h5>Last check</h5>
//         <p className ='grey-text'>Client should get his check.</p>
//         <PrintCheck check={lastCheck} userId = {userId} />
//         <PrintButton check={lastCheck} userId = {userId}  />
//  </React.Fragment>
//       }
//     </MyContext.Consumer>
     
    
//     </div>
//   )
// }

export default CheckInfo
