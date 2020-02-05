import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductList() {
  return (
    <React.Fragment>
      <h1>Product List Page</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </React.Fragment>
  )
}
