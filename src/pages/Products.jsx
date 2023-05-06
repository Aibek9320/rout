import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h2>Products page</h2>
        <ul>
            {[1,2,3,4,5].map(el => (
                <li><Link to={`/products/${el}`}>Product{el}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Products