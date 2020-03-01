import React from 'react';
import './App.css';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateEvent from './CreateEvent'
import MyEvents from './MyEvents'
import UserProfile from './UserProfile'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div className="App">
        {/* <header className="App-header">Header</header> */}
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/profile-edit">Profile</Link>
              <Link to="/my-events">My Events</Link>
              <Link to="/create-event">Create Event</Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/profile-edit">
                <UserProfile />
              </Route>
              <Route path="/create-event">
                <CreateEvent />
              </Route>
              <Route path="/my-events">
                <MyEvents />
              </Route>
              <Route path="/">
                <h2>Home home.</h2>
              </Route>
            </Switch>
          </div>
        </Router>


      </div>
    )
  }
}



export default App;
