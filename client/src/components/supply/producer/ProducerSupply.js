import React,{useState} from 'react'
import ProducersSupplyList from './ProducersSupplyList'
const ProducerSupply=()=> {
    const [list, setList] = useState([{prodId: 1, producerId: 2,count:3,price:-1}]);
    
  return (
    <div >
      <br/>
      <h3>Manufactors's supply</h3>
       <p className = 'center grey-text'>''Prices will be taken from manufactors.''</p>
       <ProducersSupplyList/>
    </div>
  )
}

export default ProducerSupply
