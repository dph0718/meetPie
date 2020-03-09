import React from 'react';
import axios from "axios";
import FriendTableEvent from './FriendTableEvent'

class RequestsPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    submitHandler = (event) => {
        event.preventDefault()
        const requestUrl = event.target.getAttribute("data-url")
        console.log(`Submitting event creation form`);
        const data = "Request Data"

        axios
            .post(`/${requestUrl}`, data)
            .then(response => {
                console.log(`RESPONSE RECEIVED:`);
                console.log(response);
                console.log(`======================`);
                
            })

    }

    render() {
        return (

            <>
                <h2>RequestsPanel</h2>
                <button onClick={this.submitHandler} data-url="users/createUser">createUser</button>
                <button onClick={this.submitHandler} data-url="users/readUser">readUser</button>
                <button onClick={this.submitHandler} data-url="users/updateUser">updateUser</button>
                <button onClick={this.submitHandler} data-url="users/deleteUser">deleteUser</button>
                <button onClick={this.submitHandler} data-url="events/createEvent">createEvent</button>
                <button onClick={this.submitHandler} data-url="events/readEvent">readEvent</button>
                <button onClick={this.submitHandler} data-url="events/updateEvent">updateEvent</button>
                <button onClick={this.submitHandler} data-url="events/deleteEvent">deleteEvent</button>
                <button onClick={this.submitHandler} data-url="parties/createParty">createParty</button>
                <button onClick={this.submitHandler} data-url="parties/readParty">readParty</button>
                <button onClick={this.submitHandler} data-url="parties/updateParty">updateParty</button>
                <button onClick={this.submitHandler} data-url="parties/deleteParty">deleteParty</button>

            </>

        )
    }
}

export default RequestsPanel;