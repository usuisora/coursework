

import React from 'react'
import ProductItem from '../products/ProductItem'
const ProductList = ({edges}) =>
<ul>
    {edges.map(({node}) =>
              <ProductItem key ={ node.prodId} node = {node}/>
    )}

    
</ul>

export default ProductList