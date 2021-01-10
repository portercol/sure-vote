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

  const isAuthenticated = false;

  const PrivateRoute = ({ children, ...rest }) => {
    // const userId = useGlobalContextAuthUser();
    // console.log("private route userId: ", userId);
    return (
      <Route {...rest}> render={() => {
        return isAuthenticated === true
          ? children : <Redirect to="/signin" />
      }}
      </Route>
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
            <PrivateRoute exact path='/election' component={Election} />
            <PrivateRoute exact path='/ballot' component={Ballot} />
            <PrivateRoute exact path='/vote' component={Vote} />
            <PrivateRoute exact path='/contact' component={Contact} />
            <PrivateRoute exact path='/face' component={App2} />
            <PrivateRoute exact path='/cam2' component={AddPerson} />
            <PrivateRoute exact path='/cam3' component={SignIn2} />
          </Switch>
        </GlobalProviderAuthUser>
      </div>
    </Router>
  );
}

// <Route exact path='/ballot' component={Ballot} />
export default App;
