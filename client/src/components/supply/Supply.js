import React from 'react'
import CategoryReserve from './CategoryReserve'

const category = ['fridge','washer','stove']

const Reserve = () =>{
  category.map(cat =><CategoryReserve key = {cat} category = {cat}/> )

}
function Supply() {
  return (
    <div className = 'supply'>
      <h4>Wirehouse</h4>
      <h6>Here is all available products for supply.Manager is the one who able to create order for his shop. </h6>
      <Reserve/>
      items....
    </div>
  )
}

export default Supply
