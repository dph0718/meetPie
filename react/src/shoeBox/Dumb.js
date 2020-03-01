import React from 'react';
// import './App.css';


const toggleStyle = {
    border: "3px black inset",
    backgroundColor: "rebeccapurple"
}

const noToggleStyle = {
    border: "10px green outset",
    backgroundColor: "gray"
}


class Dumb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wordToggle: true,
            word: "Flatulence"
        }
    }

    changeWord = () => {
        this.setState({
            word: this.state.wordToggle ? "Gourd" : "Flatulence",
            wordToggle: !this.state.wordToggle
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.word}</h1>
                <button
                    style={this.state.wordToggle ? toggleStyle : noToggleStyle}
                    onClick={this.changeWord}>
                    Change the word to {this.state.wordToggle ? "Gourd" : "Flatulence"}.
                    </button>
            </div>
        )
    }
}

export default Dumb