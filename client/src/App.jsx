import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Election from './pages/Election'
import Vote from './pages/Vote'
import Contact from './pages/Contact'
import App2 from './pages/faceapi/App'
import AddPerson from './pages/Signupcamface'
import SignIn2 from './pages/SignInFace'
import Ballot from './pages/Ballot'
// import face from './pages/cam.faceRe'
import GlobalProviderAuthUser, { useGlobalContextAuthUser } from './utils/GlobalContextAuthUser';
// import { PrivateRoute } from './utils/privateRoute';



function App() {


  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }

  function Login() {
    const [
      redirectToReferrer,
      setRedirectToReferrer
    ] = React.useState(false)

    const login = () => fakeAuth.authenticate(() => {
      setRedirectToReferrer(true)
    })

    if (redirectToReferrer === true) {
      return <Redirect to='/profile' />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={login}>Log in</button>
      </div>
    )
  }

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return fakeAuth.isAuthenticated === true
          ? children
          : <Redirect to='/signin' />
      }} />
    )
  }




  return (
    <Router>
      <div className="App">
        <GlobalProviderAuthUser>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <Route exact path='/election' component={Election} />
            <Route exact path='/ballot' component={Ballot} />
            <Route exact path='/vote' component={Vote} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/face' component={App2} />
            <Route exact path='/cam2' component={AddPerson} />
            <Route exact path='/cam3' component={SignIn2} />
          </Switch>
        </GlobalProviderAuthUser>
      </div>
    </Router>
  );
}

// <Route exact path='/ballot' component={Ballot} />
export default App;
