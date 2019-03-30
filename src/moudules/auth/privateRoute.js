import React from 'react'
import Authentication from './index'
import { Route, Redirect } from 'react-router-dom'

export default ({ component: Component, ...rest }) => {
  console.log(Authentication.isAuthenticated)
  return (
    <Route
      {...rest}
      render={ props => 
        Authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    >
    </Route>
  )
}
