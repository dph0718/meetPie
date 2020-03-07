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
import FriendTableInvite from './FriendTableInvite'
import FriendTableEvent from './FriendTableEvent'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">HomeHome</Link>
              <br/>
              <Link to="/profile-edit">Profile</Link>
              <br/>
              <Link to="/my-events">My Events</Link>
              <br/>
              <Link to="/create-event">Create Event</Link>
              <br/>
              <Link to ="/preview-friend-table-invite">Preview Friend Table (Invite)</Link>
              <br/>
              <Link to ="/preview-friend-table-event">Preview Friend Table (Event Preview)</Link>
            </nav>

            <Switch>
              <Route path="/preview-friend-table-event">
                Table event
                <FriendTableEvent />
              </Route>
              <Route path="/preview-friend-table-invite">
                Table invite
                <FriendTableInvite />
              </Route>
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
