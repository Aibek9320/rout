import React from 'react'
import { useParams } from 'react-router'

const Product = () => {
    const params = useParams() 
  return (
    <div>Product {params.id} description page</div>
  )
}

export default Product