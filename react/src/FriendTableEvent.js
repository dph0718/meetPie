import React from "react"
import modal from "./HOCModal"

function Row(props) {
    return (
        <tr>
            <td>{props.friend.name}</td>
            <td>{props.friend.distanceToCenter} miles</td>
            <td>{props.friend.estTimeToTravel} minutes</td>
            <td>{props.friend.totalDistanceThisParty} miles</td>
            <td>{props.friend.totalTimeThisParty} minutes</td>
            <td><button>Location On</button></td>
            <td><button>Uninvite</button></td>
        </tr>
    )
}

class FriendTableEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        this.setState({
            friends: [
                {
                    name: "Jeff (Jefe)", location: ["80.3", "38.2"], thumbnail: "", distanceToMe: "9393", distanceToLocation: "9", totalMeetpiesShared: 12,
                    distanceToCenter: 17,
                    estTimeToTravel: 24,
                    distanceToCenter: 18,
                    totalDistanceThisParty: 344,
                    totalTimeThisParty: 50
                },
                {
                    name: "Greta", location: ["80.2", "38.200001"], thumbnail: "", distanceToMe: "9399", distanceToLocation: "9", totalMeetpiesShared: 12,
                    distanceToCenter: 17,
                    estTimeToTravel: 24,
                    distanceToCenter: 18,
                    totalDistanceThisParty: 344,
                    totalTimeThisParty: 50
                },
                {
                    name: "Cheese", location: ["80.2", "38.200101"], thumbnail: "", distanceToMe: "9399", distanceToLocation: "12", totalMeetpiesShared: 2,
                    distanceToCenter: 17,
                    estTimeToTravel: 24,
                    distanceToCenter: 18,
                    totalDistanceThisParty: 344,
                    totalTimeThisParty: 50
                },
            ]
        })
    };

    render() {

        let FriendRows = this.state.friends.map((friend) => {
            return (
                <Row friend={friend} />
            )
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                            </th>
                        <th>
                            Distance to Center
                            </th>
                        <th>
                            Estimated Time
                            </th>
                        <th>
                            Party Distance
                            </th>
                        <th>Party Drive Time
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {FriendRows}
                </tbody>

            </table>
        )
    }
};

export default modal(FriendTableEvent);