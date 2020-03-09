import React from "react"
import modal from "./HOCModal"

function Row(props) {
    return (
        <tr>
            <td>{props.friend.name}</td>
            <td>{props.friend.distanceToLocation}</td>
            <td>{props.friend.distanceToMe}</td>
            <td>{props.friend.totalMeetpiesShared}</td>
            <td> <button>Invite button</button></td>
        </tr>
    )
}

class FriendTableInvite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        this.setState({
            friends: [
                { name: "Jeff (Jefe)", location: ["80.3", "38.2"], thumbnail: "", distanceToMe: "9393", distanceToLocation: "9", totalMeetpiesShared: 12 },
                { name: "Greta", location: ["80.2", "38.200001"], thumbnail: "", distanceToMe: "9399", distanceToLocation: "9", totalMeetpiesShared: 12 }
            ]
        })
    }

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
                            Image
                            </th>
                        <th>
                            Name
                            </th>
                        <th>
                            Distance to You
                            </th>
                        <th>
                            Distance to Location
                            </th>
                        <th>
                            Meetpies Shared
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {FriendRows}
                </tbody>

            </table>
        )
    }
}

export default modal(FriendTableInvite);