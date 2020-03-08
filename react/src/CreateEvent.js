import React from 'react';
import FriendTableEvent from './FriendTableEvent'

class CreateEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    submitHandler = (event) => {
        event.preventDefault()
        console.log(`Submitting event creation form`);
    }

    render() {
        return (

            <>
                <h2>CreateEvent</h2>
                <form>
                    <button>Invite Somebody</button>
                    <p>This should open a modal that displays friends in a table that can be sorted.</p>
                    <FriendTableEvent />
                    <button onClick={this.submitHandler}>Map it out.</button>

                </form>

            </>

        )
    }
}

export default CreateEvent;