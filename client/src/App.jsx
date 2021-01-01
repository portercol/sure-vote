import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Election from './pages/Election'
import Vote from './pages/Vote'
// import Ballot from './pages/Ballot'
import Contact from './pages/Contact'
import Camera from './pages/cam.test'
import face from './pages/cam.faceRe'

// <Route exact path='/ballot' component={Ballot} />
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/election' component={Election} />
          <Route exact path='/vote' component={Vote} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/cam' component={Camera} />
          <Route exact path='/face' component={face} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
