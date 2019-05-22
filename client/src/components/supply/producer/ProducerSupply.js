import React,{useState} from 'react'

const ProducerSupply=()=> {
    const [list, setList] = useState([{prodId: 1, producerId: 2,count:3,price:-1}]);
    
  return (
    <div >
      <h5>Manufactors's supply</h5>
      <p>
          List of all resently sold and absenced.
          Check producers db to get last prices.
      </p>
    </div>
  )
}

export default ProducerSupply
