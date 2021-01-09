import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import GlobalContextAuthUser from "./utils/GlobalContextAuthUser"

function App() {
  return (
    <Router>
      <GlobalContextAuthUser>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/election' component={Election} />
            <Route exact path='/ballot' component={Ballot} />
            <Route exact path='/vote' component={Vote} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/face' component={App2} />
            <Route exact path='/cam2' component={AddPerson} />
            <Route exact path='/cam3' component={SignIn2} />
          </Switch>
        </div>
      </GlobalContextAuthUser>
    </Router>
  );
}

export default App;
