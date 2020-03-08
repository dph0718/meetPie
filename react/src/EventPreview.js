import React from "react"
import FriendTableEvent from "./FriendTableEvent"
import EventResultsModal from "./EventResultsModal"


function EventMap(props) {
    return (
        <div>
            <img src="/images/map_tamriel.png" />
        </div>
    )
}

class EventPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <EventMap/>
                <EventResultsModal />
                <FriendTableEvent />

                <button>Create</button>
                <button>Invite</button>







            </div>
        )
    }



}

export default EventPreview;