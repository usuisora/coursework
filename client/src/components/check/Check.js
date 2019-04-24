import React from 'react'


const CheckItemList = () => <ul>
                <li> 
                    <span>m123</span>
                    <span className = 'subsum'>2 x 4324 uah</span>
                </li>
               
        </ul>   
const CheckBody = () =>
    <div className="checkContent">
          <h5>Models</h5>
          <CheckItemList/> 
    </div> 
function Check() {
  return (
    <div  className='check' >
      <h4>Check</h4>
      <CheckBody/>
    </div>
  )
}

export default Check
