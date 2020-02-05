import React, { lazy } from 'react'

const Home = lazy(() => import(/* webpackChunkName: 'HomePage' */ '../pages/Home'))
const ProductList = lazy(() => import(/* webpackChunkName: 'ProductListPage' */ '../pages/ProductList'))

export default [
  {
    path: '/',
    exact: true,
    component: <Home />
  },
  {
    path: '/products',
    exact: true,
    component: <ProductList />
  }
]
