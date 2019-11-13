import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SignIn, SignUp, MainLayout } from '../pages/Auth/index'

const Auth = ({ refetch }) => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route
            path="/signup"
            exact
            render={() => <SignUp refetch={refetch} />}
          />
           <Route
            render={() => <SignIn refetch={refetch} />}
          />
        </Switch>
      </MainLayout>
    </Router>
  )
}
export default Auth
