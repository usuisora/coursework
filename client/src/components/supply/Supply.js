import React from 'react'
import CategoryReserve from './CategoryReserve'

const category = ['fridge','stove','washer']

const Reserve = () =>{
  return category.map(cat =><CategoryReserve key = {cat} category = {cat}/> )

}
function Supply() {
  return (
    <div className = 'supply'>
      <h4>Wirehouse</h4>
      <p>Here is all available products for supply.Manager is the one who able to create order for his shop. </p>
      <Reserve/>
    </div>
  )
}

export default Supply
