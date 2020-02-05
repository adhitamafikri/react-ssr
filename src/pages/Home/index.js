import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <React.Fragment>
      <h1>Homepage</h1>
      <Link to="/products">
        <button>Go to product list</button>
      </Link>
    </React.Fragment >
  )
}
