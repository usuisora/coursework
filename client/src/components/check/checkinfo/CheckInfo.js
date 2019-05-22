import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { MyContext } from '../../../Provider'
import PrintCheck from './PrintCheck'
import DeleteCheck from './DeleteCheck'
const CheckInfo = () => {
  const componentRef = useRef();
  return (
   <div className='info'>
    <MyContext.Consumer>
        { ({lastCheck,setLastCheck,userId}) => 

          (lastCheck.length<1) ? <h6 className ='grey-text '>Session started. Here will be the last check on this session.</h6>:
          <React.Fragment>
              <h5>Last check</h5>
                <p className ='grey-text'>Client should get his check.</p>
              <PrintCheck ref={componentRef} check={lastCheck} userId = {userId}/>
              <ReactToPrint
                trigger={() => <button className = 'btn  btn-flat grey-text  text-darken-3 right '>
                                <i className="material-icons">print</i>
                               </button>}
                content={() => componentRef.current}
              />
              <DeleteCheck  setCheck={setLastCheck} check ={lastCheck}/>
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
