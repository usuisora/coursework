
import React from 'react'

export const getTotal  = (check) => check.reduce((sum,nex)=>sum + nex);
  

  export const getTotalBy2  = (check,price,count) => 
 check.reduce((sum,nex)=>sum + (nex[price]*nex[count]),0);
  

   export const getTotalBy2Jsx = (check,price,count) =>
   <p>Total:{getTotalBy2(check,price,count)} </p>
 