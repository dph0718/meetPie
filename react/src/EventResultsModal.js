import React from "react";
import modal from "./HOCModal"


function ResultButton(props) {
    let icon = "🤐"
    switch (props.type) {
        case "restaurant":
            icon = "🍴"
            break;
        case "casino":
            icon = "🎲"
            break;
        case "bar":
            icon = "🍸"
            break;
        case "recreation":
            icon = "⛹️‍♂️"
            break;
        case "park":
            icon = "🌳"
            break;
        default:
            icon = "🔮"
            break;
    }

    return (
        <div>
            {icon}
        </div>
    )
}

class EventResultsModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }


    componentDidMount() {

        this.setState({
            results: [
                "restaurant",
                "casino",
                "bar",
                "recreation",
                "park"
            ]
        })
    };


    render() {
        return (

            <div>
                {this.state.results.map(result=><ResultButton type={result} />)}
            </div>





        )
    };
};

export default modal(EventResultsModal);