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
import EventResultsModal from './EventResultsModal'
import EventPreview from './EventPreview.js'
import RequestPanel from "./RequestsPanel"

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
          <RequestPanel/>
          <div>
            <nav>
              <Link to="/">HomeHome</Link>
              <br />
              <Link to="/profile-edit">Profile</Link>
              <br />
              <Link to="/my-events">My Events</Link>
              <br />
              <Link to="/create-event">Create Event</Link>
              <br />
              <Link to="/event-preview">Preview Event Preview</Link>
              <br />
              <Link to="/preview-friend-table-invite">Preview Friend Table (Invite)</Link>
              <br />
              <Link to="/preview-friend-table-event">Preview Friend Table (Event Preview)</Link>
              <br />
              <Link to="/preview-event-results">Preview Event Results Modal)</Link>
            </nav>

            <Switch>
              <Route path="/event-preview">
                <h2>
                  Event Preview
                  </h2>
                <EventPreview />
              </Route>
              <Route path="/preview-event-results">
                <h2>
                  Event Results
                  </h2>
                <EventResultsModal />
              </Route>
              <Route path="/preview-friend-table-event">
                <h2>
                  Table event
                  </h2>
                <FriendTableEvent />
              </Route>
              <Route path="/preview-friend-table-invite">
                <h2>
                  Table invite
                  </h2>
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
