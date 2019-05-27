import React,{useState} from 'react'
import ProducersSupplyList from './ProducersSupplyList'
import TopSoldSupButton from './TopSoldSupButton'
const ProducerSupply=()=> {
    const [list, setList] = useState([{prodId: 1, producerId: 2,count:3,price:-1}]);
    
  return (
    <div  class='producers'>
      <br/>
      <h3>Manufactors's supply</h3>
       <p className = 'center grey-text'>''Prices will be taken from manufactors.''</p>
       <div className="actions">
         <TopSoldSupButton/>
         <button  className = 'btn grey' onClick={()=>{console.log('disabled')}} > Supply Absent </button>
       </div>
       <ProducersSupplyList/>
    </div>
  )
}

export default ProducerSupply
