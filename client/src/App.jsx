// import necessary packages/modules, pages and components
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
// import Election from './pages/Election'
import Vote from './pages/Vote'
import Contact from './pages/Contact'
import App2 from './pages/faceapi/App'
import AddPerson from './pages/Signupcamface'
import SignIn2 from './pages/SignInFace'
import Ballot from './pages/Ballot'
// import face from './pages/cam.faceRe'
import GlobalProviderAuthUser, { useGlobalContextAuthUser } from './utils/GlobalContextAuthUser';
import { PrivateRoute } from './utils/privateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <GlobalProviderAuthUser>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signup' component={SignUp} />
            <PrivateRoute exact path='/cam2' component={AddPerson} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <Route exact path='/signin' component={SignIn} />
            {/* <PrivateRoute exact path='/election' component={Election} /> */}
            <PrivateRoute exact path='/cam3' component={SignIn2} />
            <Route exact path='/ballot' component={Ballot} />
            <PrivateRoute exact path='/vote' component={Vote} />
            <PrivateRoute exact path='/contact' component={Contact} />
            <PrivateRoute exact path='/face' component={App2} />
          </Switch>
        </GlobalProviderAuthUser>
      </div>
    </Router >
  );
}

// export App out of App.jsx
export default App;
