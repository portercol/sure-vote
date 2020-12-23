import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar.jsx'
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Election from './pages/Election'
import Vote from './pages/Vote'
import Ballot from './pages/Ballot'
import Camera from './pages/cam.test'

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/election' component={Election} />
          <Route exact path='/vote' component={Vote} />
          <Route exact path='/ballot' component={Ballot} />
          <Route exact path='/cam' component={Camera} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
