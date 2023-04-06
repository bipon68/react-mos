import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductList = ({category}: {category: string}) => {

const [products, setProducts] = useState<string[]>([])

useEffect(() => {
    console.log('Feching Product in ', category );
    setProducts(['Product 1', 'Product 2'])
}, [category])

  return (
    <div>ProductList</div>
  )
}

export default ProductList