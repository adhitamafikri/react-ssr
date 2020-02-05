import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routeStack from './routes'

function RouteStack({ routes }) {
  return routes.map((route, idx) => {
    return (
      <Route key={idx} path={route.path} exact={route.exact}>
        {route.component}
      </Route>
    )
  })
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>...loading</div>}>
          <RouteStack routes={routeStack} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('app-root'))
