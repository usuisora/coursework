import React from 'react'
import CategoryReserve from './CategoryReserve'
import ProducerSupply from './producer/ProducerSupply'
const category = ['fridge','stove','washer']

const Reserve = () =>{
  return category.map(cat =><CategoryReserve key = {cat} category = {cat}/> )

}
function Supply() {
  return (
    <div className = 'supply'>
      <h5>Warehouse</h5>
      <p>Here is all available products for supply.Manager is the one who able to create order for his shop. </p>
      <Reserve/>
      <ProducerSupply/>
    </div>
  )
}

export default Supply
